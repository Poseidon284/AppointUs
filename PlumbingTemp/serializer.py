from rest_framework import serializers
from .models import Plumbing, PlumbingEnquiry

class PlumbingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plumbing
        fields = ['id', 'image', 'name', 'whatsapp_link', 'phone', 'address', 'rating', 'link']

class PlumbingEachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plumbing
        fields = ['id', 'image', 'name', 'whatsapp_link', 'phone', 'address', 'rating', 'link', 'descriptions']

class BookingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlumbingEnquiry
        fields = ['name', 'location', 'phone', 'query', 'time', 'email']
