from django.shortcuts import render,redirect
from django.http import HttpResponse
from . models import *

def index(request):
    context= {
        'users':Users.allusers()
    }
    return render(request,'index.html',context)

def createuser(request):
    if request.method == "POST":
        Users.adduser(request.POST)
        return redirect('/')
