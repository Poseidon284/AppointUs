from django.contrib.auth.models import User
from django.db import models

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    service_id = models.IntegerField()  # Reference to the service from the Business app
    vendor_id = models.IntegerField()   # Reference to the vendor from the Business app
    service_name = models.CharField(max_length=255)  # Name of the service
    booking_date = models.DateField()
    booking_time = models.TimeField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    notes = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=[
        ('Pending', 'Pending'),
        ('Confirmed', 'Confirmed'),
        ('Completed', 'Completed'),
        ('Canceled', 'Canceled')
    ], default='Pending')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Booking by {self.user.username} for {self.service_name}'

