from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import status
from .models import BookingEnquiry
from .serializer import BookingEnquirySerializer

class BookingEnquiryAPIView(APIView):
    @permission_classes([IsAuthenticated])
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = BookingEnquirySerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(booked_user=request.user)
            return JsonResponse(f"message: {serializer.data}", status=status.HTTP_201_CREATED, safe=False)
        print(f"Serializer Errors: {serializer.errors}")
        return JsonResponse(f"error:{serializer.errors}", status=status.HTTP_400_BAD_REQUEST, safe=False)

    def get(self, request, *args, **kwargs):
        current_user_id = request.user.id
        enquiries = BookingEnquiry.objects.exclude(booked_user=current_user_id)  
        serializer = BookingEnquirySerializer(enquiries, many=True)
        return JsonResponse({"orders":serializer.data}, status=status.HTTP_200_OK)
