from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
import pandas as pd
import random
from .pricing import DynamicPriceCalculator
from .search import Search

class SearchServiceView(APIView):
    def post(self, request, *args, **kwargs):
        input_string = request.data.get("query") or None

        if input_string is None:
            return JsonResponse({"Error": "No input string provided"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        descriptions = pd.read_csv('K:\Final Year project 1\Project Code\env\AppointUs\Searchbar\description_with_location.csv')
        descriptions_df = pd.DataFrame(descriptions)
    
        provider_data = pd.read_csv('K:\Final Year project 1\Project Code\env\AppointUs\Searchbar\description_with_location.csv')
        provider_locations = provider_data.set_index('Service Name')[['Latitude', 'Longitude']].to_dict(orient='index')

        searcher = Search()

        user_lat = request.data.get("latitude", "12.9000")  
        user_lon = request.data.get("longitude", "77.5500")

        search_result = searcher.run(descriptions_df['Description'], provider_locations, input_string, user_lat, user_lon)

        search_results = []
        experience_levels = ["Junior","Mid","Senior"]
        ratings_list = [3.2,3.6,3.8,4.1,4.3,4.5]
        addresses = ["Great Towers, Near MGR Central, Chennai-600001","No. 19, Rajiv Gandhi Salai, Thiruvanmiyur, Chennai-600012", "15/12A, Madras Tower, Neelankarai, Chennai-600012"]

        

        for idx, row in search_result.iterrows():
            if row['Relevance'] >= 50.0:
                result_row = descriptions_df.iloc[int(row['Value'])]

                experience_level = experience_levels[random.randint(0,2)]  
                ratings = ratings_list[random.randint(0,5)]  
                positive_comments = random.randint(5,50)
                negative_comments = random.randint(5,50)  
                complexity = random.randint(1,10)
                proximity = random.randint(1,10)

                price_calculator = DynamicPriceCalculator(
                    service_type="Plumbing",  
                    experience_level=experience_level,
                    ratings=ratings,
                    positive_comments=positive_comments,
                    negative_comments=negative_comments,
                    complexity=complexity,
                    proximity=proximity
                )

                min_price, max_price = price_calculator.calculate_dynamic_price()

                search_results.append({
                    "ServiceName": result_row["Service Name"],
                    "Description": result_row["Description"],
                    "Rating": ratings,
                    "Address": addresses[random.randint(0,len(addresses)-1)],
                    "PriceRange": {"MinPrice": min_price, "MaxPrice": max_price},
                    "Mobile" : 8925451330,
                    "Latitude" : result_row["Latitude"],
                    "Longitude" : result_row["Longitude"]
                })

        print(search_results)
        return JsonResponse({"results": search_results}, status=status.HTTP_200_OK)