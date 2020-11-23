
from django.urls import path
from django.conf.urls import url, include
from .views import  SeriesViewSet
from rest_framework.routers import DefaultRouter
from core import views
from rest_framework import permissions
from django.contrib import admin
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'series', views.SeriesViewSet)
urlpatterns = router.urls
