from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")
        
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            return JsonResponse({"message": "Login successful", "user_id": user.id, "username":user.id}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({"message": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)

class SignupView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            if User.objects.filter(email=email).exists():
                return JsonResponse({"message":"Email already exists"}, status=status.HTTP_400_BAD_REQUEST )
            user = User.objects.create_user(username, email, password)
            user.first_name = username
        except:
            return JsonResponse({"message":"Username already exists"}, status=status.HTTP_400_BAD_REQUEST )

        return JsonResponse({"message":f"Welcome to AppointUS {username}"}, status=status.HTTP_201_CREATED)
