# Generated by Django 3.2.6 on 2021-11-09 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_auto_20211028_1602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.IntegerField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='recommended_item',
            name='rating',
            field=models.IntegerField(blank=True, max_length=50, null=True),
        ),
    ]