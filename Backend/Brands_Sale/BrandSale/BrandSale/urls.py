"""BrandSale URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include, re_path

from products import views as product_view

from rest_framework.routers import DefaultRouter
from accounts import views as UserAccount

# creating router
router=DefaultRouter()

#register studentviewset with router
router.register('productapi',product_view.productViewSet,basename='product')
router.register('brandapi',product_view.brandViewSet,basename='brand')

router.register('product_typeapi',product_view.product_typeViewSet,basename='product_type')
router.register('users',UserAccount.UserAccountViewSet,basename='UserAccount')

#notifictaion
router.register('subscribeapi',product_view.sale_notificationViewSet,basename='sale_notification')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('',include(router.urls)),

]
