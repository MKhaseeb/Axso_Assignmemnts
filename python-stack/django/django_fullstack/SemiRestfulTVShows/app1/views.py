from django.shortcuts import render,redirect
from django.http import HttpResponse
from . models import *

def index(request):
    context= {
        'Shows':Show.allShows()
    }
    return render(request,'index.html',context)

def createShow(request):
    if request.method == "POST":
        Show.addShow(request.POST)
    return redirect('/')

def Showinfo(request):
    context= {
        'Shows':Show.allShows()
    }
    return render(request,'movieinfo.html' , context)
