from django.shortcuts import render,redirect
from django.http import HttpResponse
from . import models 
from .models import Show
from django.contrib import messages



def index(request):
    context= {
        'Shows':models.Show.allShows()
    }
    return render(request,'index.html',context)

def createShow(request):
    if request.method == "POST":
        errors = Show.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            print('im here')
            return redirect('/')
        models.Show.addShow(request.POST)
    return redirect('/Showinfo')

def Showinfo(request):
    context= {
        'Shows':models.Show.allShows()
    }
    return render(request,'movieinfo.html' , context)

def delete(request,Showid):
    models.Show.deleteinfo(Showid)
    return redirect('/Showinfo')


def edit(request, Showid):
    context= {
        'show':models.Show.objects.get(id=Showid)
    } 
    print(models.Show.objects.get(id=Showid).Network)
    return render(request,'updateinfo.html',context)


def Updateinfoo(request,Showid):
    if request.method == "POST":
        models.Show.edit(request.POST,Showid)
    return redirect('/Showinfo')

def Showallinfo(request,Showid):
    context= {
        'show':models.Show.objects.get(id=Showid)
    } 
    print(models.Show.objects.get(id=Showid))
    return render(request,'showinfo.html',context)


def Valdaitor(request,id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        print('im here')
        return redirect('/')
    else:
        Showid = Show.objects.get(id = id)
        Showid.Title = request.POST['title']
        Showid.Network = request.POST['Network']
        Showid.Disc = request.POST['Disc']
        Showid.save()
        messages.success(request, "Successfully updated")
        print('im not here')
    return redirect('/')



