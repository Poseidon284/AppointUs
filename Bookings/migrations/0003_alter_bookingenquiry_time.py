# Generated by Django 5.1.1 on 2024-12-06 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Bookings", "0002_bookingenquiry"),
    ]

    operations = [
        migrations.AlterField(
            model_name="bookingenquiry",
            name="time",
            field=models.CharField(
                choices=[
                    ("morning", "morning"),
                    ("afternoon", "afternoon"),
                    ("evening", "evening"),
                ],
                default="afternoon",
                max_length=10,
            ),
        ),
    ]
