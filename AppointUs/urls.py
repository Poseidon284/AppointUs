from django.contrib import admin
from oauth2_provider import urls as oauth2_urls
from django.urls import include,path
from Service.views import ServiceView
from User.views import LoginView, SignupView
from Businesses.views import BusinessUserView, BusinessView
from Searchbar.views import SearchServiceView
from Bookings.views import BookingEnquiryAPIView
from Reviews.views import ReviewsView

urlpatterns = [
    path('o/',include(oauth2_urls)),
    path('service/',ServiceView.as_view(), name='service'),
    path('api/login/',LoginView.as_view(), name='login'),
    path('api/signup/',SignupView.as_view(),name='signup'),
    path('api/business-user/',BusinessUserView.as_view(),name='business-user'),
    path('api/business/',BusinessView.as_view(),name='business'),
    path('api/bookings/',BookingEnquiryAPIView.as_view(),name='booking'),
    path('api-reviews/',ReviewsView.as_view(),name='reviews'),
    path('api-searchbar/',SearchServiceView.as_view(),name='searchbar'),
    path('admin/', admin.site.urls),
]
