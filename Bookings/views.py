from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from .serializer import BookingSerializer
from .models import BookingEnquiry

# Create your views here.
class BookingView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = BookingSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()  
            return JsonResponse({"message": "Booking query submitted successfully!"}, status=status.HTTP_201_CREATED)
        
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, *args, **kwargs):
        bookings = BookingEnquiry.objects.values('name', 'phone', 'location')  # Fetch only specific fields
        return JsonResponse({"orders": list(bookings)}, status=status.HTTP_200_OK)
    