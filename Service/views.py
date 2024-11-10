from django.shortcuts import render
from rest_framework.views import APIView
from .models import Service
from .serializer import *
from rest_framework.response import Response


class ServiceView(APIView):
    def get(self, request):
        output_list = [{"employee": item.employee,
                   "department": item.department}
                   for item in Service.objects.all()]
        
        return Response(output_list)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)