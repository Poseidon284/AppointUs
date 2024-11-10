from rest_framework import serializers
from .models import Service

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['business_listed', 'service_name', 
                  'price', 'type', 'rating', 'description', 'category'
                  'created_at','updated_at']