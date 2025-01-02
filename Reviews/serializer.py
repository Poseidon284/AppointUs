from rest_framework import serializers
from .models import Reviews
from django.contrib.auth.models import User
from Businesses.models import Business

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['rating', 'satisfaction', 'recommendation', 'communication', 'value_for_money', 'review', 'user', 'service']

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = [
            'id', 'user', 'business', 'rating', 'satisfaction', 
            'recommendation', 'communication', 'value_for_money', 'review'
        ]

    def create(self, validated_data):
        user = validated_data.pop('user')
        business = validated_data.pop('business')

        # Ensure the user and business exist before creating the review
        user_instance = User.objects.get(id=user.id)
        business_instance = Business.objects.get(id=business.id)

        review = Reviews.objects.create(
            user=user_instance, 
            business=business_instance,
            **validated_data
        )
        return review