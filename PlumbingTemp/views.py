from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .models import Plumbing, PlumbingEnquiry
from .serializer import PlumbingSerializer, PlumbingEachSerializer, BookingsSerializer

class PlumbingListView(APIView):
    def get(self, request):
        providers = Plumbing.objects.all() # Fetch all entries from the model
        serializer = PlumbingSerializer(providers, many=True)
        return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)

class PlumbingEachView(APIView):
    def get(self, request):
        provider = Plumbing.objects.all()
        serializer = PlumbingEachSerializer(provider, many=True)
        return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)
    
class BookingView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = BookingsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()  
            return JsonResponse({"message": "Booking query submitted successfully!"}, status=status.HTTP_201_CREATED)
        
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        