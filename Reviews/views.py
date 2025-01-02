from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from User.models import CommonUser
from Businesses.models import Business
from .models import Reviews
from .serializer import ReviewSerializer, ReviewsSerializer

class ReviewView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            user = CommonUser.objects.get(username="Tarun")
            service = Business.objects.get(name="Fix Speed")
        except CommonUser.DoesNotExist:
            return JsonResponse({"error": "User 'Tarun' does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        except Business.DoesNotExist:
            return JsonResponse({"error": "Service 'Fix Speed' does not exist"}, status=status.HTTP_400_BAD_REQUEST)

        request.data['user'] = user.id
        request.data['service'] = service.id

        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return JsonResponse({"message": "Review created successfully!"}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        reviews = Reviews.objects.filter(booked_user__name='Tarun')
        serializer = ReviewSerializer(reviews, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)

class ReviewsView(APIView):
    # Handle GET requests to fetch all reviews
    def get(self, request, *args, **kwargs):
        reviews = Reviews.objects.all()
        serializer = ReviewsSerializer(reviews, many=True)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    # Handle POST requests to create a new review
    def post(self, request, *args, **kwargs):
        serializer = ReviewsSerializer(data=request.data)
        if serializer.is_valid():
            review = serializer.save()
            return JsonResponse(ReviewsSerializer(review).data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)