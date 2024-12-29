from django.contrib.auth.models import User
from django.db import models
from django.utils.text import slugify

class TypeBusiness(models.TextChoices):
    CARPENTRY = ('Carpentry', 'Carpentry')
    PLUMBING = ('Plumbing', 'Plumbing')
    ELECTRICIAN = ('Electrician', 'Electrician')
    MASONRY = ('Masonry', 'Masonry')
    SALON = ('Salon', 'Salon')
    MEDICAL = ('Medical', 'Medical')
    OTHER = ('Other', 'Other')

class Business_User(models.Model):
    user_business = models.ForeignKey(User, on_delete=models.CASCADE, related_name='business_vendor')
    name = models.CharField(max_length=255)
    profile_picture = models.ImageField(upload_to='Components/business_profiles/', blank=True, null=True)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(default="", null=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Business(models.Model):
    business_user = models.ForeignKey(Business_User, on_delete=models.CASCADE, related_name='businesses')
    image = models.URLField(null=True, blank=True)
    name = models.CharField(max_length=100)
    whatsapp_link = models.URLField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=20)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    type = models.CharField(
        max_length=20,
        choices=TypeBusiness.choices,
        default=TypeBusiness.OTHER
    )
    address = models.CharField(max_length=255)
    yearofstart = models.CharField(max_length=5)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    link = models.TextField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    descriptions = models.TextField(blank=True, null=True)

    location = models.CharField(max_length=255)
    lat_long = models.CharField(max_length=25)

    def __str__(self):
        return self.name


