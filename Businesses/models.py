from django.contrib.auth.models import User
from django.db import models
from django.utils.text import slugify

class Business_User(models.Model):
    user_business = models.OneToOneField(User, on_delete=models.CASCADE, related_name='business_vendor')
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    profile_picture = models.ImageField(upload_to='business_profiles/', blank=True, null=True)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # slug = models.SlugField(unique=True, blank=False, null=False)

    class Meta:
        ordering = ['name']

    from django.utils.text import slugify

    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = slugify(self.name)
    #     super().save(*args, **kwargs)


    def __str__(self):
        return self.name


