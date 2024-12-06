from rest_framework import serializers
from .models import Reviews

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['rating', 'satisfaction', 'recommendation', 'communication', 'value_for_money', 'review', 'user', 'service']
