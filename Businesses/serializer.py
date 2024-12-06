from rest_framework import serializers
from .models import Business

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ['id', 'image', 'name', 'whatsapp_link', 'phone', 'address', 'rating', 'link']

class BusienssEachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ['id', 'image', 'name', 'whatsapp_link', 'phone', 'address', 'rating', 'link', 'descriptions']