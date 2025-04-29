from django.db import models
from django.shortcuts import render ,redirect
import bcrypt
import re

class UserManager(models.Manager):
    def validator(self,postdata):
        errors = {}
        if len(postdata['first_name']) < 2:
            errors["first_name"] = "First name should be at least 2 characters"
        if len(postdata['last_name']) < 2:
            errors["last_name"] = "Last name should be at least 3 characters"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postdata['email']):            
            errors['email'] = "Invalid email address!"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255 )
    last_name = models.CharField(max_length=255 )
    email = models.CharField(max_length=255 )
    password = models.CharField(max_length=255 )
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)
    objects = UserManager()
# Create your models here.

def Create_account(postdata):
    password = postdata['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()   
    User.objects.create(first_name = postdata['first_name'], last_name = postdata['last_name'], email = postdata['email'], password = pw_hash  )
    


    
        
# password =postdata['password']