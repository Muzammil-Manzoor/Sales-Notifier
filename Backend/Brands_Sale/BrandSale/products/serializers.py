from rest_framework import serializers
from .models import brands,gender,product_type,product,sale_notification

class brandsSerializer(serializers.ModelSerializer):
    class Meta:
        model= brands
        fields="__all__"

class genderSerializer(serializers.ModelSerializer):
    class Meta:
        model= gender
        fields="__all__"

class product_typeSerializer(serializers.ModelSerializer):
    class Meta:
        model= product_type
        fields="__all__"

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model= product
        fields="__all__"


class sale_notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model= sale_notification
        fields="__all__"