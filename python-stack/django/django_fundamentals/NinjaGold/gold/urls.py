from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ,name ='index'),  # Root path
    path('goldres', views.gold, name='gold'),  # Root path
    path('/res', views.result ),  # Root path

    ]