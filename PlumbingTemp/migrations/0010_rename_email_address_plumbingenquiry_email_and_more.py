# Generated by Django 5.1.1 on 2024-11-11 21:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("PlumbingTemp", "0009_alter_plumbingenquiry_preferred_time"),
    ]

    operations = [
        migrations.RenameField(
            model_name="plumbingenquiry",
            old_name="email_address",
            new_name="email",
        ),
        migrations.RenameField(
            model_name="plumbingenquiry",
            old_name="exact_location",
            new_name="location",
        ),
        migrations.RenameField(
            model_name="plumbingenquiry",
            old_name="phone_number",
            new_name="phone",
        ),
        migrations.RenameField(
            model_name="plumbingenquiry",
            old_name="preferred_time",
            new_name="time",
        ),
    ]