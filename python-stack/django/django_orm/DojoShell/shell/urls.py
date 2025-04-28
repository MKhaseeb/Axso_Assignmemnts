from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ,name ='index'),  # Root path
    path('DojosCreate', views.dojocreate),
    path('NinjsCreate', views.ninjscreate)
    ]
