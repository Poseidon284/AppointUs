# Generated by Django 5.1.1 on 2024-11-08 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("Bookings", "0003_remove_booking_bookings_booking_bookings"),
    ]

    operations = [
        migrations.RenameField(
            model_name="booking",
            old_name="bookings",
            new_name="booking_user",
        ),
    ]