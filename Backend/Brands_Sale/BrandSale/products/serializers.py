from rest_framework import serializers
from .models import brands,gender,product_type,product,sale_notification,user_rating,bookmark,recommended_item

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



class user_ratingSerializer(serializers.ModelSerializer):
    class Meta:
        model= user_rating
        fields="__all__"


class bookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model= bookmark
        fields="__all__"


class recommended_itemSerializer(serializers.ModelSerializer):
    class Meta:
        model= recommended_item
        fields="__all__"
        # fields=['username','product_id','brand_name','price','sale_price','title','product_link','image_link']
