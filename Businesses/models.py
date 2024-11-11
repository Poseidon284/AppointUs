from django.contrib.auth.models import User
from django.db import models
from django.utils.text import slugify

class TypeBusiness(models.TextChoices):
    CARPENTRY = ('Carpentry', 'Carpentry')
    PLUMBING = ('Plumbing', 'Plumbing')
    ELECTRICIAN = ('Electrician','Electrician')
    MASONRY = ('Masonry','Masonry')
    SALON = ('Salon','Salon')
    MEDICAL = ('Medical','Medical')
    OTHER = ('Other','Other')

class Business_User(models.Model):
    user_business = models.ForeignKey(User,on_delete=models.CASCADE, related_name='business_vendor')
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    type = models.CharField(
        max_length=20,
        choices=TypeBusiness.choices,
        default=TypeBusiness.OTHER
    )
    profile_picture = models.ImageField(upload_to='Components/business_profiles/', blank=True, null=True)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(default="", null=True)

    class Meta:
        ordering = ['name']

    from django.utils.text import slugify

    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = slugify(self.name)
    #     super().save(*args, **kwargs)


    def __str__(self):
        return self.name


