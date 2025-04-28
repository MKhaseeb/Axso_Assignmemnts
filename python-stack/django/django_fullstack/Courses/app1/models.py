from django.db import models


class UserData(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)
# Create your models here.

def userinfo(postdata):
    UserData.objects.create(name =postdata['name'],description =postdata['description'])



def allShows():
    return UserData.objects.all()



def deleteinfo(Userid):
    User=UserData.objects.get(id=Userid)
    User.delete() 