from rest_framework import serializers
from .models import BookingEnquiry

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingEnquiry
        fields = ['name', 'location', 'phone', 'query', 'time', 'email', 'image']