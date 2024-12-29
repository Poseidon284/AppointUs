from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status

from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.http import JsonResponse

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        # Get email and password from request data
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return JsonResponse(
                {"message": "Email and password are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Authenticate user
        user = authenticate(request, username=email, password=password)

        if user is not None:
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)

                return JsonResponse(
                    {
                        "message": "Login successful",
                        "token": token.key,
                        "user_id": user.id,
                        "username": user.username,
                        "email": user.email,
                    },
                    status=status.HTTP_200_OK,
                )
            else:
                return JsonResponse(
                    {"message": "This account is inactive."},
                    status=status.HTTP_403_FORBIDDEN,
                )
        else:
            return JsonResponse(
                {"message": "Invalid email or password."},
                status=status.HTTP_400_BAD_REQUEST,
            )


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
