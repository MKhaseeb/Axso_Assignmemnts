from django.urls import path
from . import views

urlpatterns = [
        path('', views.index ,name ='index'),  # Root path
        path('saveinput',views.save ,name='correct'),
        path('test',views.test ,name='test')
        ]