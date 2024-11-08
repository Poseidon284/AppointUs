from django.db import models
from Businesses.models import Business_User

# Create your models here.
class Service(models.Model):
    business_listed = models.ForeignKey(Business_User, on_delete=models.CASCADE, related_name='listed_business')
    service_name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    description = models.TextField(blank=True, null=True)  
    
    category = models.CharField(max_length=20, choices=[
        ('Home Service', 'Home Service'),
        ('Salon/Spa', 'Salon/Spa'),
        ('Medical', 'Medical'),
        ('Miscellaneous', 'Miscellaneous')
    ], default='Miscellaneous')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ['service_name']

    def __str__(self):
        return f'{self.service_name} - {self.business_listed.name}'
