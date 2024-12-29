import numpy as np
import pandas as pd
import os
import spacy
import string
import gensim
import re
from gensim import corpora
from gensim.similarities import MatrixSimilarity
from .knowledge_graph import create_knowledge_graph
from operator import itemgetter
import math

def haversine(lat1, lon1, lat2, lon2):
    R = 6371  
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2) ** 2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

def sigmoid(x, k=10, x_mid=0.5):
    return 1 / (1 + np.exp(-k * (x - x_mid)))

class Search:
    def __init__(self):
        self.nlp = spacy.load('en_core_web_sm')
        self.stop_words = self.nlp.Defaults.stop_words
        self.punctuations = string.punctuation
        self.tokenized_list = list()
        self.corpus = None
        self.dictionary_path = None
        self.tfidf_model = None
        self.lsi_model = None
        self.index = None

        self.knowledge_graph = create_knowledge_graph()

    def tokenizer(self, sentence):
        if not isinstance(sentence, str):
            return []

        sentence = re.sub('\'', '', sentence)
        sentence = re.sub('\w*\d\w*', '', sentence)
        sentence = re.sub(' +', ' ', sentence)
        sentence = re.sub(r'\n: \'\'.*', '', sentence)
        sentence = re.sub(r'\n!.*', '', sentence)
        sentence = re.sub(r'^:\'\'.*', '', sentence)
        sentence = re.sub(r'\n', ' ', sentence)
        sentence = re.sub(r'[^\w\s]', ' ', sentence)

        tokens = self.nlp(sentence)
        tokens = [word.lemma_.lower().strip() if word.lemma_ != "-PRON-" else word.lower_ for word in tokens]
        tokens = [word for word in tokens if word not in self.stop_words and word not in self.punctuations and len(word) > 2]

        return tokens
    
    def expand_query(self, query):
        query_tokens = self.tokenizer(query)
        expanded_query = set(query_tokens)  

        for token in query_tokens:
            if token in self.knowledge_graph:
                neighbors = self.knowledge_graph.neighbors(token)
                expanded_query.update(neighbors)  

        return ' '.join(expanded_query) 

    def preprocessing(self, description_list):
        self.tokenized_list = description_list.map(lambda x: self.tokenizer(x))

    def corpus_definition(self):
        self.dictionary = corpora.Dictionary(self.tokenized_list)
        self.corpus = [self.dictionary.doc2bow(desc) for desc in self.tokenized_list]

    def similarity_search(self, search_term, user_lat, user_lon, relevance_threshold=20.0):
        expanded_query = self.expand_query(search_term)
        query_bow = self.dictionary.doc2bow(self.tokenizer(expanded_query))
        query_tfidf = self.tfidf_model[query_bow]
        query_lsi = self.lsi_model[query_tfidf]

        self.index.num_best = 5
        document_list = self.index[query_lsi]
        document_list.sort(key=itemgetter(1), reverse=True)

        max_score = max([item[1] for item in document_list]) if document_list else 0
        min_score = min([item[1] for item in document_list]) if document_list else 0

        result = []
        for j, item in enumerate(document_list):
            if max_score > min_score:  
                normalized_score = (item[1] - min_score) / (max_score - min_score)  
            else:
                normalized_score = 0

            sigmoid_score = sigmoid(normalized_score) * 100  

            if sigmoid_score >= relevance_threshold:
                result.append(
                    {
                        'Relevance': round(sigmoid_score, 2),
                        'Value': item[0],
                    }
                )
            if j == (self.index.num_best - 1):
                break

        # Commenting out the location-based filtering logic
        # radius = 1  
        # max_radius = 10  
        # while radius <= max_radius:
        #     result_with_distance = []
        #     for j, item in enumerate(result):
        #         provider_coords = self.provider_locations.get(item['Value'])
        #         if provider_coords:
        #             provider_lat = float(provider_coords['Latitude'])
        #             provider_lon = float(provider_coords['Longitude'])

        #             distance = haversine(float(user_lat), float(user_lon), provider_lat, provider_lon)
        #             if distance <= radius:
        #                 result_with_distance.append(
        #                     {
        #                         'Relevance': item['Relevance'],
        #                         'Value': item['Value'],
        #                         'Distance': round(distance, 2)
        #                     }
        #                 )
        #     if result_with_distance:
        #         return pd.DataFrame(result_with_distance, columns=['Relevance', 'Value', 'Distance'])

        #     radius += 1

        return pd.DataFrame(result, columns=['Relevance', 'Value'])

    def model_init(self):
        self.tfidf_model = gensim.models.TfidfModel(self.corpus, id2word=self.dictionary)
        self.lsi_model = gensim.models.LsiModel(self.tfidf_model[self.corpus], id2word=self.dictionary, num_topics=300)

        gensim.corpora.MmCorpus.serialize('tfidf_model_mm', self.tfidf_model[self.corpus])
        gensim.corpora.MmCorpus.serialize('lsi_model_mm', self.lsi_model[self.tfidf_model[self.corpus]])
    
    def load_model(self):
        self.tfidf_corpus = gensim.corpora.MmCorpus('tfidf_model_mm')
        self.lsi_corpus = gensim.corpora.MmCorpus('lsi_model_mm')    
        self.index = MatrixSimilarity(self.lsi_corpus, num_features=self.lsi_corpus.num_terms)
    
    def run(self, description_list, provider_locations, query, user_lat = "12.9000", user_lon = "77.5500"): #Added default arguments for user location. Need to change as dynamic
        self.provider_locations = provider_locations  
        self.preprocessing(description_list)
        self.corpus_definition()
        self.model_init()
        self.load_model()

        return self.similarity_search(query, user_lat, user_lon)
