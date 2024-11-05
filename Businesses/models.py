from django.db import models

class Business(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    num_of_services = models.IntegerField(default=0)
    description = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    profile_picture = models.ImageField(upload_to='business_profiles/', blank=True, null=True)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Service(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='services')
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    description = models.TextField(blank=True, null=True)  # Description of the service

    def __str__(self):
        return f'{self.name} - {self.business.name}'
