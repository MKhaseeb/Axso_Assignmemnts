
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ,name ='index'),  # Root path
    path('createShow', views.createShow),  # Root path
    path('Showinfo', views.Showinfo),  # Root path
    path('shows/<int:Showid>/delete', views.delete),  # Root path
    path('shows/<int:Showid>/edit', views.edit),  # Root path
    path('shows/<int:Showid>/Updateinfo', views.Updateinfoo),
    path('shows/<int:Showid>/show', views.Showallinfo),  # Root path
    ]