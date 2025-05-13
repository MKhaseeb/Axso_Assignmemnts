from django.shortcuts import render ,redirect
from . import models
from .models import User
from django.contrib import messages
import bcrypt

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


def successlogin(request):
    if 'userid' in request.session:
        userid=request.session['userid']
        context={
            'user':models.User.objects.get(id=userid)
        }
        return render(request,'success.html',context)
    return redirect("/")


def loginval(request):
    email = models.User.objects.filter(email=request.POST['email']).first()
    if bcrypt.checkpw(request.POST['password'].encode(),email.password.encode()):
        request.session['userid'] = email.id
        return redirect('/success')
    else:
        return redirect("/")


def logout(request):
    del request.session['userid']
    return redirect('/')
