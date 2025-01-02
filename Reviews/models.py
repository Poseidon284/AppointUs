from django.db import models
from django.contrib.auth.models import User
from Businesses.models import Business

# Create your models here.
from django.db import models

class SatisfactionChoices(models.TextChoices):
    VERY_SATISFIED = 'Very Satisfied', 'Very Satisfied'
    SATISFIED = 'Satisfied', 'Satisfied'
    NEUTRAL = 'Neutral', 'Neutral'
    DISSATISFIED = 'Dissatisfied', 'Dissatisfied'
    VERY_DISSATISFIED = 'Very Dissatisfied', 'Very Dissatisfied'

def get_default_user():
    return User.objects.get(username='tarun')

def get_default_business():
    return Business.objects.get(name="Fix Speed")

class Reviews(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_by_user')
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='rev_business', default=0)
    # service = models.ForeignKey(Business, on_delete=models.CASCADE, related_name='reviews_to_service')
    rating = models.FloatField()
    satisfaction = models.CharField(
        max_length=20,
        choices=SatisfactionChoices.choices,
    )
    recommendation = models.CharField(
        max_length=20,
        choices=SatisfactionChoices.choices,
    )
    communication = models.CharField(
        max_length=20,
        choices=SatisfactionChoices.choices,
    )
    value_for_money = models.CharField(
        max_length=20,
        choices=SatisfactionChoices.choices,
    )
    review = models.TextField()

    def __str__(self):
        return f"Review - Rating: {self.rating}, Satisfaction: {self.satisfaction}"

