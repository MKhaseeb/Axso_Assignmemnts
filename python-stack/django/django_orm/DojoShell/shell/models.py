from django.db import models

# Create your models here.
class Dojo(models.Model):
    name=models.CharField(max_length=255)
    city=models.CharField(max_length=255)
    state=models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Ninja(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    dojo_id = models.ForeignKey(Dojo, related_name='ninjas', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



def addDojos(postdata):
    Dojo.objects.create(name =postdata['name'] ,city =postdata['city'], state =postdata['state'])

def addNinjas(postdata):
    dojo= Dojo.objects.get(id = postdata['dojo_name'])
    return Ninja.objects.create(first_name =postdata['first_name'] ,last_name =postdata['last_name'], dojo_id =dojo)

def ninjaShows():
    return Ninja.objects.all()

def allShows():
    return Dojo.objects.all()

def dojoid():
    return Dojo.objects.get(id)

    # context {
    #     dojo :etc 

    # }
    # index 
    # for ninja in dojo.dojo_id.all:
