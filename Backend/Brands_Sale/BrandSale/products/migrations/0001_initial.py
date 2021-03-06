# Generated by Django 3.2.6 on 2021-09-24 13:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='brands',
            fields=[
                ('brand_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('link', models.URLField(blank=True)),
            ],
            options={
                'db_table': 'brands',
            },
        ),
        migrations.CreateModel(
            name='gender',
            fields=[
                ('gender_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=50)),
            ],
            options={
                'db_table': 'gender',
            },
        ),
        migrations.CreateModel(
            name='product_rating',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('product_id', models.IntegerField(blank=True, max_length=100)),
                ('user_email', models.CharField(blank=True, max_length=100)),
                ('product_name', models.CharField(blank=True, max_length=100)),
                ('rating', models.IntegerField(blank=True, max_length=100)),
                ('link', models.URLField(blank=True)),
            ],
            options={
                'db_table': 'product_rating',
            },
        ),
        migrations.CreateModel(
            name='product_type',
            fields=[
                ('product_type_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
            ],
            options={
                'db_table': 'product_type',
            },
        ),
        migrations.CreateModel(
            name='product',
            fields=[
                ('product_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('brand_name', models.CharField(blank=True, max_length=50)),
                ('gender_category', models.CharField(blank=True, max_length=50)),
                ('category_name', models.CharField(blank=True, max_length=50)),
                ('title', models.CharField(blank=True, max_length=50)),
                ('price', models.CharField(blank=True, max_length=50)),
                ('sale_price', models.CharField(blank=True, max_length=50)),
                ('product_link', models.URLField(blank=True)),
                ('image_link', models.URLField(blank=True)),
                ('image_link2', models.URLField(blank=True)),
                ('rating', models.CharField(blank=True, max_length=50)),
                ('status', models.CharField(blank=True, max_length=50)),
                ('datee', models.DateField()),
                ('detail', models.CharField(max_length=50, null=True)),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.brands')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product_type')),
                ('gender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.gender')),
            ],
            options={
                'db_table': 'product',
            },
        ),
    ]
