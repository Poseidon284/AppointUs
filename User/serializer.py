from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CommonUser

class CommonUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonUser
        fields = ['id', 'user_regular', 'location', 'addresses']

    def create(self, validated_data):
        user_data = validated_data.pop('user_regular')
        user = User.objects.get(id=user_data.id)  # Ensure the user exists
        common_user = CommonUser.objects.create(user_regular=user, **validated_data)
        return common_user

