from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    EVENT_TYPES = [
        ('carpentry', 'Carpentry'),
        ('plumbing', 'Plumbing'),
        ('saloon', 'Saloon'),
        ('PgView','PgView'),
        ('other', 'Other'),
    ]

    event_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, related_name='events', on_delete=models.CASCADE)
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES)
    timestamp = models.DateTimeField(auto_now_add=True)
    data = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"{self.event_type} - {self.timestamp}"


class PageView(models.Model):
    pageview_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, related_name='pageviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='pageviews', on_delete=models.CASCADE)
    page_url = models.URLField()

    def __str__(self):
        return f"PageView by {self.user.username} - {self.page_url}"
