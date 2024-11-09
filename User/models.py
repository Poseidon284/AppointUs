from django.contrib.auth.models import User
from django.db import models

class CommonUser(models.Model):
    user_regular = models.ForeignKey(User, on_delete=models.CASCADE, related_name='common_user')
    location = models.CharField(max_length=255)
    addresses = models.TextField()

    def __str__(self):
        return f"{self.user_regular.first_name}'s Profile"
