from django.contrib.auth.models import User
from django.db import models

class CommonUser(models.Model):
    LANGUAGE_CHOICES = [
    ('eng', 'English'),
    ('tam', 'Tamil'),
    ('tel', 'Telugu'),
    ('kan', 'Kannada'),
    ('mal', 'Malayalam'),
    ('hin', 'Hindi'),
    ]

    user_regular = models.ForeignKey(User, on_delete=models.CASCADE, related_name='common_user')
    age = models.IntegerField()
    location = models.CharField(max_length=255)
    language = models.CharField(max_length=15, choices=LANGUAGE_CHOICES, default='eng')
    addresses = models.TextField()

    def __str__(self):
        return f"{self.user_regular.first_name}'s Profile"
