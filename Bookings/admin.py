from django.contrib import admin
from .models import Booking, BookingEnquiry

# Register your models here.
admin.site.register(Booking)
admin.site.register(BookingEnquiry)
