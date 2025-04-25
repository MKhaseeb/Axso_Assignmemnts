
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ,name ='index'),  # Root path
    path('createShow', views.createShow),  # Root path
    path('Showinfo', views.Showinfo),  # Root path

    ]