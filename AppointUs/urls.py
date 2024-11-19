from django.contrib import admin
from django.urls import path
from Service.views import ServiceView
from User.views import LoginView, SignupView
from PlumbingTemp.views import PlumbingListView, PlumbingEachView, BookingView
from Searchbar.views import SearchServiceView

urlpatterns = [
    path('service/',ServiceView.as_view(), name='service'),
    path('api/login/',LoginView.as_view(), name='login'),
    path('api/signup/',SignupView.as_view(),name='signup'),
    path('api/plumbing/',PlumbingListView.as_view(),name='plumbing'),
    path('api/plumbingeach/',PlumbingEachView.as_view(),name='plumbing_each'),
    path('api/bookings/',BookingView.as_view(),name='booking'),
    path('api-searchbar/',SearchServiceView.as_view(),name='searchbar'),
    path('admin/', admin.site.urls),
]
