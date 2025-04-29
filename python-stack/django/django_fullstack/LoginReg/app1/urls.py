from django.urls import path
from . import views

urlpatterns = [
    path('', views.index ,name ='index'),  # Root path
    path('Regcreate', views.Regcreate),
    path('success', views.successlogin),
    path('login', views.loginval),
    path('success/logout', views.logout)
]