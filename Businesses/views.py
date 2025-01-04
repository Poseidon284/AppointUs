from django.shortcuts import render
from django.db.models import F
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .models import Business, Business_User
from .serializer import BusinessSerializer, BusienssEachSerializer, BusinessUserSerializer

class BusinessUserView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            business_users = Business_User.objects.filter(user_business=request.user)
            serializer = BusinessUserSerializer(business_users, many=True)
            return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, *args, **kwargs):
        serializer = BusinessUserSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        print(f"Serializer Errors: {serializer.errors}")
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BusinessView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            businesses = Business.objects.filter(type="Plumbing").order_by(F('rating').desc(nulls_last=True))
            serializer = BusinessSerializer(businesses, many=True)
            return JsonResponse({"message":serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, *args, **kwargs):
        serializer = BusinessSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({"message":serializer.data}, status=status.HTTP_201_CREATED)
        return JsonResponse({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
