# Generated by Django 3.2.6 on 2021-10-28 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20211023_0014'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_rating',
            name='brand_name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='user_rating',
            name='image_link',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='user_rating',
            name='image_link2',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='user_rating',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user_rating',
            name='product_link',
            field=models.URLField(blank=True),
        ),
        migrations.AddField(
            model_name='user_rating',
            name='sale_price',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
