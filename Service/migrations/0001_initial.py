# Generated by Django 5.1.1 on 2025-04-20 15:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("Businesses", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Service",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("service_name", models.CharField(max_length=255)),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                (
                    "type",
                    models.CharField(
                        choices=[
                            ("Home-Service", "Home-Service"),
                            ("Shop", "Shop"),
                            ("Item", "Item"),
                            ("Other", "Other"),
                        ],
                        default="Other",
                        max_length=20,
                    ),
                ),
                (
                    "rating",
                    models.DecimalField(decimal_places=2, default=0.0, max_digits=3),
                ),
                ("description", models.TextField(blank=True, null=True)),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("Carpentry", "Carpentry"),
                            ("Plumbing", "Plumbing"),
                            ("Electrician", "Electrician"),
                            ("Masonry", "Masonry"),
                            ("Salon", "Salon"),
                            ("Medical", "Medical"),
                            ("Other", "Other"),
                        ],
                        default="Other",
                        max_length=20,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "business_listed",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="listed_business",
                        to="Businesses.business_user",
                    ),
                ),
            ],
            options={
                "ordering": ["service_name"],
            },
        ),
    ]
