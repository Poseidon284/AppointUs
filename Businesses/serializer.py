from rest_framework import serializers
from .models import Business, Business_User

class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business_User
        fields = [
            "id",
            "user_business",
            "name",
            "profile_picture",
            "phone",
            "created_at",
            "updated_at",
            "slug",
        ]
        read_only_fields = ["user_business", "created_at", "updated_at"]

    def create(self, validated_data):
        validated_data["user_business"] = self.context["request"].user
        return super().create(validated_data)

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = [
            "id",
            "business_user",
            "image",
            "name",
            "whatsapp_link",
            "phone",
            "rating",
            "type",
            "address",
            "yearofstart",
            "link",
            "created_at",
            "updated_at",
            "descriptions",
            "location",
            "lat_long",
        ]
        read_only_fields = ["business_user", "created_at", "updated_at","link"]

    def create(self, validated_data):
        validated_data["business_user"] = self.context["request"].user.business_vendor.first()
        return super().create(validated_data)


class BusienssEachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ['id', 'image', 'name', 'whatsapp_link', 'phone', 'address', 'rating', 'link', 'descriptions']