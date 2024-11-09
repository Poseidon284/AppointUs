# Generated by Django 5.1.1 on 2024-11-09 04:51

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("User", "0002_remove_commonuser_bookings"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name="commonuser",
            name="user_regular",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="common_user",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
