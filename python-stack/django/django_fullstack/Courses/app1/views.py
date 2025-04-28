from django.shortcuts import render , redirect
from django.http import HttpResponse
from . import models 
from .models import UserData
from . import models 


def index(request):    
    context = {
        'user':models.UserData.objects.all
    }
    return render(request,'index.html' ,context)
# Create your views here.

def data(request):
    if request.method =='POST':
        models.userinfo(request.POST)
    return redirect('/')


def delete(request,Userid):
    context = {
        'User': UserData.objects.get(id=Userid)
    }
    return render(request,'deleteinfo.html' ,context)

def deleteuser(request,Userid):
    #     context = {
    #     'User': UserData.objects.get(id=Userid)
    # }
        models.deleteinfo(Userid)
        return redirect('/',Userid)