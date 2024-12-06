from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .search import Search
from Businesses.models import Business 
import pandas as pd
import os
# Create your views here.

class SearchServiceView(APIView):
    def post(self, request, *args, **kwargs):
        # print(request.data)  
        input_string = request.data.get("query") or None

        # descriptions = Business.objects.values('name','descriptions')
        descriptions = pd.read_csv('D:\AppointUs\Searchbar\description.csv')
        descriptions_df = pd.DataFrame(descriptions)

        if input_string is None:
            return JsonResponse({"Error": "No input string provided"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        #Call search method from 
        searcher = Search()
        search_result = searcher.run(descriptions_df['Description'], input_string)

        search_results = []

        for idx, row in search_result.iterrows():
            if row['Relevance'] >= 50.0:
                search_results.append(descriptions_df.iloc[int(row['Value'])])
        
        search_results = dict(search_results)
        search_results = [x for x in search_results.keys()]

        # Respond with all results in the List format now(Change to JSON later)
        return JsonResponse({"results": search_results}, status=status.HTTP_200_OK)
