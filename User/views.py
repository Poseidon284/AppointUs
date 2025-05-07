from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.models import User
from Businesses.models import Business_User
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token

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

                # Check if user is a business user
                try:
                    business_user = Business_User.objects.get(user_business=user)
                    is_business_user = True
                    is_first_login = business_user.is_first_login

                    # If it's their first login, mark it as done
                    if is_first_login:
                        business_user.is_first_login = False
                        business_user.save()
                except Business_User.DoesNotExist:
                    is_business_user = False
                    is_first_login = False

                return JsonResponse(
                    {
                        "message": "Login successful",
                        "token": token.key,
                        "user_id": user.id,
                        "username": user.username,
                        "email": user.email,
                        "isBusinessUser": is_business_user,
                        "isFirstLogin": is_first_login,
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
        # Extract common user data
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")
        is_business_user = request.data.get("isBusinessUser", False)

        # Handle business user-specific data
        business_name = request.data.get("businessname")
        phone = request.data.get("phone")
        profile_picture = request.FILES.get("profilePicture")  # Uploaded file

        try:
            print(request.data)
            # Check for existing email
            if User.objects.filter(email=email).exists():
                return JsonResponse({"message": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)

            # Create the User instance
            user = User.objects.create_user(username=username, email=email, password=password)
            user.first_name = username
            user.save()

            # If the user is a business user, create a Business_User instance
            if is_business_user:
                if not (business_name and phone):
                    return JsonResponse(
                        {"message": "Business name and phone are required for business users"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                Business_User.objects.create(
                    user_business=user,
                    name=business_name,
                    phone=phone,
                    profile_picture=profile_picture,
                )
                
            # Return success response
            return JsonResponse({"message": f"Welcome to AppointUS, {username}"}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return JsonResponse(
                {"message": "An error occurred during signup", "details": str(e)},
                status=status.HTTP_400_BAD_REQUEST,
            )
