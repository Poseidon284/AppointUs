from django.db import models
from Businesses.models import Business_User  
from Service.models import Service
from User.models import CommonUser
from analytics.models import Event
from django.contrib.auth.models import User

class BookingStatus(models.TextChoices):
    PENDING = 'Pending', 'Pending'
    CONFIRMED = 'Confirmed', 'Confirmed'
    COMPLETED = 'Completed', 'Completed'
    CANCELED = 'Canceled', 'Canceled'

class TimeChoices(models.TextChoices):
    MORNING = 'morning', 'morning'
    AFTERNOON = 'afternoon', 'afternoon'
    EVENING = 'evening', 'evening'

class Booking(models.Model):
    # service_name = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='booked_service') 
    business = models.ForeignKey(Business_User, on_delete=models.CASCADE, related_name='offered_by') 
    booking_user = models.ForeignKey(CommonUser,on_delete=models.CASCADE, related_name='booking_user')
    event = models.ForeignKey(Event, related_name='booking', on_delete=models.CASCADE)
    booking_date = models.DateField()
    booking_time = models.TimeField()
    # price = models.DecimalField(max_digits=10, decimal_places=2)
    
    status = models.CharField(
        max_length=20,
        choices=BookingStatus.choices,
        default=BookingStatus.PENDING
    )
    cust_notes = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def set_status(self, new_status):
        allowed_transitions = {
            BookingStatus.PENDING: [BookingStatus.CONFIRMED, BookingStatus.CANCELED],
            BookingStatus.CONFIRMED: [BookingStatus.COMPLETED, BookingStatus.CANCELED],
            BookingStatus.COMPLETED: [],
            BookingStatus.CANCELED: [],
        }

        if new_status in allowed_transitions[self.status]:
            self.status = new_status
            self.save()
        else:
            raise ValueError(f"Cannot change status from {self.status} to {new_status}")

    def __str__(self):
        return f'Booking for {self.booking_user.user_regular.first_name} at {self.business.name}'

class BookingEnquiry(models.Model):
    name = models.CharField(max_length=255)  
    location = models.CharField(max_length=255)  
    phone = models.CharField(max_length=15)  
    query = models.TextField()  
    time = models.TextField(max_length=25) 
    email = models.EmailField(blank=True, null=True) 
    booked_user = models.ForeignKey(User,on_delete=models.CASCADE, related_name='booked_user')
    image = models.ImageField(upload_to='Components/bookingimages/',null=True, blank=True)

    def __str__(self):
        return f"Query by {self.name} at {self.time}"