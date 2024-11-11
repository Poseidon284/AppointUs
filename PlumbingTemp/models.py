from django.db import models 

# Create your models here.
class Plumbing(models.Model):
    image = models.URLField(null=True, blank=True)
    
    name = models.CharField(max_length=100)
    whatsapp_link = models.URLField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    
    link = models.TextField(max_length=200, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    descriptions = models.TextField(blank=True,null=True)

    def __str__(self):
        return self.name

class PlumbingEnquiry(models.Model):
    name = models.CharField(max_length=255)  # Name of the person
    location = models.CharField(max_length=255)  # Exact location of the person
    phone = models.CharField(max_length=15)  # Phone number
    query = models.TextField()  # The query or service request
    time = models.TextField(max_length=10) 
    email = models.EmailField(blank=True, null=True)  # Email address (optional)

    def __str__(self):
        return f"Query by {self.name} at {self.time}"
