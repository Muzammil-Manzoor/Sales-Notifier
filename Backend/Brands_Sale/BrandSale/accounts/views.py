from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse,JsonResponse
from .models import UserAccount
from .serializers import UserCreateSerializer
from rest_framework import status
# Create your views here.

class UserAccountViewSet(viewsets.ViewSet):

    def list(self,request):
        stu=UserAccount.objects.all()
        serializer=UserCreateSerializer(stu,many=True)
        return Response(serializer.data)
        print(serializer.data)

    def retrieve(self,request,pk=None):
        id=pk
        print(id)
        print("runnnnnnnnnnnnnnnnnnnn")
        if id is not None:
            stu=UserAccount.objects.get(first_name__exact=id)
            serializer=UserCreateSerializer(stu)
            return Response(serializer.data)
    # pick rules row for recommendation system