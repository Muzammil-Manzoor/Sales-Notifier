from django.db import models
# Create your models here.

class brands(models.Model):
    brand_id = models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=100,blank=True)
    link=models.URLField(blank=True)   
    class Meta:
        db_table='brands'
    def __str__(self):
        return self.name


class gender(models.Model):
    gender_id= models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=50,blank=True)
    class Meta:
        db_table='gender'
    def __str__(self):
        return self.name

class product_type(models.Model):
    product_type_id= models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=150,blank=True)
    
    class Meta:
        db_table='product_type'
    def __str__(self):
        return self.name
    


class product(models.Model):
    product_id= models.BigAutoField(primary_key=True)
    brand=models.ForeignKey(brands, on_delete=models.CASCADE)
    gender=models.ForeignKey(gender, on_delete=models.CASCADE)
    category=models.ForeignKey(product_type, on_delete=models.CASCADE)

    brand_name=models.CharField(max_length=50,blank=True)
    gender_category=models.CharField(max_length=50,blank=True)
    category_name=models.CharField(max_length=50,blank=True)
    title=models.CharField(max_length=50,blank=True)
    
    price=models.IntegerField(blank=True,null=True)
    sale_price= models.IntegerField(blank=True,null=True)

    overview=models.CharField(max_length=500,blank=True)
    product_link=models.URLField(blank=True)   
    image_link=models.CharField(max_length=500,blank=True)
    image_link2=models.CharField(max_length=500,blank=True)

    rating=models.IntegerField(blank=True)
    status=models.CharField(max_length=50,blank=True)
    datee= models.DateField()
    detail=models.CharField(max_length=50,null=True)

    class Meta:
        db_table='product'
    def __str__(self):
        return self.brand_name
    



class product_rating(models.Model):
    id = models.BigAutoField(primary_key=True)
    product_id=models.IntegerField(blank=True)
    user_email=models.CharField(max_length=100,blank=True)
    product_name=models.CharField(max_length=100,blank=True)
    rating=models.IntegerField(blank=True)

    link=models.URLField(blank=True)   
    class Meta:
        db_table='product_rating'
    def __str__(self):
        return self.product_name


class sale_notification(models.Model):
    id = models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=100,blank=True)
    user_email=models.CharField(max_length=100,blank=True)
    brand_name=models.CharField(max_length=100,blank=True)
    subscribe=models.BooleanField(blank=True)

    class Meta:
        db_table='sale_notification'
    def __str__(self):
        return self.brand_name



class user_rating(models.Model):
    id = models.BigAutoField(primary_key=True)
    product_id=models.IntegerField(blank=True,null=True)
    user_name=models.CharField(max_length=100,blank=True)
    rating=models.IntegerField(blank=True,null=True)
    product_name=models.CharField(max_length=50,blank=True)
    overview=models.CharField(max_length=500,blank=True)

    brand_name=models.CharField(max_length=100,blank=True)
    
    price=models.IntegerField(blank=True,null=True)
    sale_price= models.IntegerField(blank=True,null=True)

    product_link=models.URLField(blank=True)   
    image_link=models.CharField(max_length=500,blank=True)
    image_link2=models.CharField(max_length=500,blank=True)

    class Meta:
        db_table='user_rating'
    def __str__(self):
        return self.product_id




class bookmark(models.Model):
    id= models.BigAutoField(primary_key=True)
    product_id=models.IntegerField(blank=True,null=True)

    brand_name=models.CharField(max_length=100,blank=True)

    username=models.CharField(max_length=50,blank=True)
    title=models.CharField(max_length=50,blank=True)
    
    price=models.IntegerField(blank=True,null=True)
    sale_price= models.IntegerField(blank=True,null=True)

    product_link=models.URLField(blank=True)   
    image_link=models.CharField(max_length=500,blank=True)
    image_link2=models.CharField(max_length=500,blank=True)

    class Meta:
        db_table='bookmark'
    def __str__(self):
        return self.product_id

class recommended_item(models.Model):
    id= models.BigAutoField(primary_key=True)
    product_id=models.IntegerField(blank=True,null=True)

    brand_name=models.CharField(max_length=100,blank=True)

    username=models.CharField(max_length=50,blank=True)
    title=models.CharField(max_length=50,blank=True)
    
    price=models.IntegerField(blank=True,null=True)
    sale_price= models.IntegerField(blank=True,null=True)

    product_link=models.URLField(blank=True)   
    image_link=models.CharField(max_length=500,blank=True)
    image_link2=models.CharField(max_length=500,blank=True)
    rating=models.IntegerField(blank=True,null=True)
    overview=models.CharField(max_length=500,blank=True)

    brand=models.ForeignKey(brands, on_delete=models.CASCADE ,null=True)
    gender=models.ForeignKey(gender, on_delete=models.CASCADE ,null=True)
    category=models.ForeignKey(product_type, on_delete=models.CASCADE ,null=True)

    gender_category=models.CharField(max_length=50,blank=True,null=True)
    category_name=models.CharField(max_length=50,blank=True,null=True)
    
    status=models.CharField(max_length=50,blank=True,null=True)
    datee= models.DateField(null=True)
    detail=models.CharField(max_length=50,null=True)






    class Meta:
        db_table='recommended_item'
    def __str__(self):
        return self.product_id