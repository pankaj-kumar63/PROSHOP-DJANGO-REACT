# Generated by Django 5.1.5 on 2025-01-15 09:51

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("base", "0006_alter_product__id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="_id",
            field=models.CharField(
                default=uuid.uuid4,
                editable=False,
                max_length=255,
                primary_key=True,
                serialize=False,
            ),
        ),
    ]
