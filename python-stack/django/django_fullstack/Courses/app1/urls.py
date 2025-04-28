from django.urls import path
from . import views

urlpatterns = [
    path('', views.index ,name ='index'),  
    path('alldata', views.data),  
    path('user/<int:Userid>/delete', views.delete ),
    path('user/<int:Userid>/deleteuser', views.deleteuser)
    ]