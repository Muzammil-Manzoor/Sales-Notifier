# Generated by Django 3.2.6 on 2021-10-17 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_product_overview'),
    ]

    operations = [
        migrations.CreateModel(
            name='user_rating',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('product_id', models.IntegerField(blank=True, null=True)),
                ('user_name', models.CharField(blank=True, max_length=100)),
                ('rating', models.IntegerField(blank=True, null=True)),
                ('product_name', models.CharField(blank=True, max_length=50)),
                ('overview', models.CharField(blank=True, max_length=500)),
            ],
            options={
                'db_table': 'user_rating',
            },
        ),
    ]
