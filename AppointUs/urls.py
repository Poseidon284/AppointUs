from django.contrib import admin
from django.urls import path
from Service.views import ServiceView
from User.views import LoginView

urlpatterns = [
    path('service/',ServiceView.as_view(), name='service'),
    path('login/',LoginView.as_view(), name='login'),
    path('admin/', admin.site.urls),
]
