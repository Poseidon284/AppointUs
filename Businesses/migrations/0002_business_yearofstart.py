# Generated by Django 5.1.1 on 2024-12-29 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Businesses", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="business",
            name="yearofstart",
            field=models.CharField(default=2014, max_length=5),
            preserve_default=False,
        ),
    ]