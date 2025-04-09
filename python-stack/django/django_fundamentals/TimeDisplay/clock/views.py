from django.shortcuts import render
from django.http import HttpResponse
from time import gmtime, strftime


def index(request):
    context = {
        "time": strftime("%a %d, %Y %I:%M:%p", gmtime())
    }
    return render(request,"index.html",context)

