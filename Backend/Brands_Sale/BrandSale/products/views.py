from django.shortcuts import render
from rest_framework.response import Response
from .models import product,product_type,brands,bookmark,user_rating,sale_notification,recommended_item
from django.http import HttpResponse,JsonResponse
from .serializers import productSerializer,product_typeSerializer,brandsSerializer,sale_notificationSerializer,user_ratingSerializer,bookmarkSerializer,recommended_itemSerializer
from rest_framework import status
from rest_framework import viewsets

# recommendation library
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from sklearn.metrics.pairwise import cosine_similarity

df1 = pd.read_csv('./products/nproduct.csv')

tfidf = TfidfVectorizer(stop_words='english')

#Replace NaN with an empty string
df1['overview'] = df1['overview'].fillna('')
tfidf_matrix = tfidf.fit_transform(df1['overview'])
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
similarity = cosine_similarity(tfidf_matrix)
indices = pd.Series(df1.index, index=df1['overview'])

def get_recommendations(title, cosine_sim=cosine_sim):
    # Get the index of the movie that matches the title
    if indices[title].size==1:
        idx = indices[title]
    else:
        idx = indices[title][0]

    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))    
        
    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[0:3]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
#     return df1['title'].iloc[movie_indices]
    rlist=[]
    a=df1['product_id'].iloc[movie_indices]
    for i in movie_indices:      
        rlist.append(a[i])
    return rlist


class productViewSet(viewsets.ViewSet):

    def list(self, request):
        # from rest_framework.pagination import PageNumberPagination
        item = product.objects.all()
        # paginator = PageNumberPagination()
        # page = paginator.paginate_queryset(item, request)
        # if page is not None:
        #     serializer = productSerializer(page, many=True)
        #     return paginator.get_paginated_response(serializer.data)
        # else:
        serializer = productSerializer(item, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



    def retrieve(self,request,*args,**kwargs):
        params=kwargs
        print(params)
        print('*******************')
        params_list=params['pk'].split('-')
        #id=params['pk']
        size=len(params_list)
        print(f'**************************{params_list}****{size}********')
        
        if(size==1):
            item=product.objects.filter(brand_name=params_list[0])
        elif(size==2):
            item=product.objects.filter(brand_name=params_list[0],gender_category=params_list[1] )  
        elif(size==3):
            item=product.objects.filter(brand_name=params_list[0],gender_category=params_list[1],category_name=params_list[2] )
        if(size==4):
            item=product.objects.filter(gender_category=params_list[0])
        if(size==5):
            item=product.objects.filter(gender_category=params_list[0],category_name=params_list[1])
        if(size==6):
            minn=params_list[0]
            maxx=params_list[3]
            item=product.objects.filter(brand_name=params_list[0],gender_category=params_list[1],category_name=params_list[2] ,sale_price__range=(0, maxx))           
            print(maxx)
       

        #pagination_class=MyPageNumberPagiation
        # from rest_framework.pagination import PageNumberPagination
        # paginator = PageNumberPagination()
        # page = paginator.paginate_queryset(item, request)
        # if page is not None:
        #     serializer = productSerializer(page, many=True)
        #     return paginator.get_paginated_response(serializer.data)
        # else:
        #     serializer = productSerializer(item, many=True)
        #     return Response(serializer.data, status=status.HTTP_200_OK)

        serializer=productSerializer(item,many=True)
        return Response(serializer.data)

class product_typeViewSet(viewsets.ViewSet):
    def list(self,request):
        item=product_type.objects.all()
        serializer=product_typeSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

        

    def retrieve(self,request,*args,**kwargs):
        pharms=kwargs
        print(pharms)
        print('*******************')

        id=pharms['pk']

        stu=product_type.objects.get(product_type_id=id)
        serializer=product_typeSerializer(stu,many=True)
        return Response(serializer.data)

    
class brandViewSet(viewsets.ViewSet):
    def list(self,request):
        item=brands.objects.all()
        serializer=brandsSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

        

    def retrieve(self,request,pk=None):
        id=pk
        if id is not None:
            stu=brands.objects.get(name=id)
            serializer=brandsSerializer(stu)
            print(serializer.data['name'])
            return Response(serializer.data)

    
class sale_notificationViewSet(viewsets.ViewSet):

    def list(self,request):
        item=sale_notification.objects.all()
        serializer=sale_notificationSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self,request):
        serializer=sale_notificationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msj':'data creates'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
        

    def retrieve(self,request,*args,**kwargs):
        params=kwargs
        print(params)
        print('*******************')
        params_list=params['pk'].split('-')
        #id=params['pk']
        size=len(params_list)
        print(f'**************************{params_list}****{size}********')
        # id=pk
        if(size==1):
            item=sale_notification.objects.filter(name=params_list[0])
        elif(size==2):
            item=sale_notification.objects.filter(name=params_list[0],brand_name=params_list[1]) 
        
        serializer=sale_notificationSerializer(item,many=True)
        return Response(serializer.data)
    
    def destroy(self,request,*args,**kwargs):
        params=kwargs
        print(params)
        print('*******************')
        params_list=params['pk'].split('-')
        #id=params['pk']
        size=len(params_list)
        print(f'**************************{params_list}****{size}********')
        # id=pk
        if(size==1):
            item=sale_notification.objects.filter(name=params_list[0])
        elif(size==2):
            item=sale_notification.objects.filter(name=params_list[0],brand_name=params_list[1])         
        item.delete()
        return Response({'msj':'data deleted'})
        
    
class user_ratingViewSet(viewsets.ViewSet):
    def list(self,request):
        item=user_rating.objects.all()
        serializer=user_ratingSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self,request):
        serializer=user_ratingSerializer(data=request.data)
        # stu=sale_notification.objects.get(id=1)
        # serializer1=sale_notificationSerializer(stu)
        # print(serializer1.data)
        # return Response(serializer.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'msj':'data creates'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
         

    def retrieve(self,request,pk=None):
        id=pk
        if id is not None:
            stu=user_rating.objects.get(name=id)
            serializer=user_ratingSerializer(stu)
            return Response(serializer.data)
        

class bookmarkViewSet(viewsets.ViewSet):
    
    def list(self,request):
        item=bookmark.objects.all()
        serializer=bookmarkSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self,request):
        serializer=bookmarkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msj':'data creates'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
        

    def retrieve(self,request,*args,**kwargs):
        params=kwargs
        print(params)
        print('*******************')
        params_list=params['pk'].split('-')
        #id=params['pk']
        size=len(params_list)
        print(f'**************************{params_list}****{size}********')
        # id=pk
        if(size==1):
            item=bookmark.objects.filter(username=params_list[0])
        elif(size==2):
            item=bookmark.objects.filter(product_id=params_list[0]) 
        
        serializer=bookmarkSerializer(item,many=True)
        return Response(serializer.data)
        
        # if id is not None:
        #     stu=bookmark.objects.get(name=id)
        #     serializer=bookmarkSerializer(stu)
        #     # print(serializer.data['name'])
        #     return Response(serializer.data)

            

class recommended_itemViewSet(viewsets.ViewSet):
        

    def create(self,request):

        serializer=recommended_itemSerializer(data=request.data) 
        item=request.data['overview']
        rzlt=get_recommendations(item)

        item_id=rzlt[1]

        print(item_id)

        stu=product.objects.get(product_id=item_id)
        # stu=stu.update(new_user)
        serializer1=productSerializer(stu)       

        dataa=serializer1.data

        dataa['username']=request.data['user_name']
        serializer3=recommended_itemSerializer(data=dataa) 

        print("chck product is already present or not")
        item=recommended_item.objects.filter(username=request.data['user_name'],product_id=dataa['product_id'])
        serializer=recommended_itemSerializer(item,many=True)

        print(dataa)

        if len(serializer.data) == 0:
            print("item is not present")
            if serializer3.is_valid():
                print('**************************************************item is inserted')
                serializer3.save()
            return Response({'msj':'data creates'},status=status.HTTP_201_CREATED)
        else:
            serializer3.is_valid()
            print("item is present")
            return Response({'msj':'item is already present for recommend'},status=status.HTTP_201_CREATED)

        return Response(serializer3.errors)      

    def list(self,request):
        item=recommended_item.objects.all()
        serializer=recommended_itemSerializer(item,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self,request,*args,**kwargs):
        params=kwargs
        print(params)
        params_list=params['pk'].split('-')
        #id=params['pk']
        size=len(params_list)
        
        item=recommended_item.objects.filter(username=params_list[0])
            # stu=recommended_item.objects.get(username=id)
        serializer=recommended_itemSerializer(item,many=True)
            # print(serializer.data['name'])
        return Response(serializer.data)