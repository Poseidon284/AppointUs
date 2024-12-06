from django.shortcuts import render
from django.db.models import F
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .models import Business
from .serializer import BusinessSerializer, BusienssEachSerializer

class BusinessListView(APIView):
    def get(self, request):
        providers = Business.objects.filter(type='Plumbing').order_by(F('rating').desc())
        serializer = BusinessSerializer(providers, many=True)
        return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)

class BusinessEachView(APIView):
    def get(self, request):
        provider = Business.objects.all()
        serializer = BusienssEachSerializer(provider, many=True)
        return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)