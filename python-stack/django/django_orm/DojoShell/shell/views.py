from django.shortcuts import render ,redirect
from . import models 

def index(request):
    context = {
        'dojos':models.allShows,
        'ninjas':models.ninjaShows,
        'dojoid':models.dojoid
    }
    return render(request,'index.html',context)


def dojocreate(request):
    if request.method == "POST":
        models.addDojos(request.POST)
    return redirect('/')


def ninjscreate(request):
    if request.method == "POST":
        models.addNinjas(request.POST)
    return redirect('/')



# Create your views here.
