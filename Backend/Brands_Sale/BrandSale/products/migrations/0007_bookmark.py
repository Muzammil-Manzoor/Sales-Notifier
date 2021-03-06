# Generated by Django 3.2.6 on 2021-10-17 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_user_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='bookmark',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('product_id', models.IntegerField(blank=True, null=True)),
                ('username', models.CharField(blank=True, max_length=50)),
                ('title', models.CharField(blank=True, max_length=50)),
                ('price', models.IntegerField(blank=True, null=True)),
                ('sale_price', models.IntegerField(blank=True, null=True)),
                ('product_link', models.URLField(blank=True)),
                ('image_link', models.URLField(blank=True)),
                ('image_link2', models.URLField(blank=True)),
            ],
            options={
                'db_table': 'bookmark',
            },
        ),
    ]
