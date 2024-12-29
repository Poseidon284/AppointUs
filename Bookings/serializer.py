from rest_framework import serializers
from .models import BookingEnquiry

class BookingEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingEnquiry
        fields = [
            "name",
            "location",
            "phone",
            "query",
            "time",
            "email",
            "image",
            "booked_user",
        ]
        read_only_fields = ["booked_user"]  

    def create(self, validated_data):
        validated_data["booked_user"] = self.context["request"].user
        return super().create(validated_data)
