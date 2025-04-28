from django.shortcuts import render ,redirect
from . import models
from .models import User
from django.contrib import messages

# Create your views here.
def index(request):
    
    return render(request,'index.html')

def Regcreate(request):
    if request.method == "POST":
        errors = User.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        models.Create_account(request.POST)
    return redirect('/')
