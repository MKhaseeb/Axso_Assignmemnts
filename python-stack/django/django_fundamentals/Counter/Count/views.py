from django.shortcuts import render,redirect
from django.http import HttpResponse

def index(request):
    if not "number" in request.session:
        request.session["number"] = 1
    else:
        request.session["number"] += 1
    return render(request, "index.html" ,)

def reset(request):
    if "number" in request.session:
        request.session.clear()
    return redirect('/')

def addtwo(request):
    if "number" in request.session:
        request.session["number"] += 1
    else:
        request.session["number"] = 1
    return redirect('/')

