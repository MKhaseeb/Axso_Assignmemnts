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


# def loginval(request):
#     email = models.User.objects.filter(email=request.POST['email'])
#     if email:
#         logged_user=email[0]
#     if bcrypt.checkpw( request.POST['password'].encode(), logged_user.password.encode()):
#         request.session['userid'] = logged_user.id
#         return redirect('/success')
#     else:
#         return redirect("/")
    

def loginval(request):
    email = models.User.objects.filter(email=request.POST['email']).first()
            
    if bcrypt.checkpw(request.POST['password'].encode(),email.password.encode()):
        request.session['userid'] = email.id
        # request.POST['first_name'] = request.session['userid'] 
        return redirect('/success')
    else:
        return redirect("/")


def logout(request):
    del request.session['userid']
    return redirect('/')

# def loginval(request):
#     if request.method == "POST":
#         email_query = models.User.objects.filter(email=request.POST['email'])
#         if not email_query:
#             messages.error(request, "Invalid Email or Password")
#             return redirect('/')
        
#         logged_user = email_query[0]

#         if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
#             request.session['userid'] = logged_user.id
#             return redirect('/success')
#         else:
#             messages.error(request, "Invalid Email or Password")
#             return redirect('/')