from django.contrib.auth.models import User
from django.db import models
from Businesses.models import Business, Service  # Importing Business and Service models from the businesses app

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_bookings')  # Changed related_name to 'user_bookings'
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='service_bookings')
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='business_bookings')
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
        return f'Booking by {self.user.username} for {self.service.name} at {self.business.name}'


