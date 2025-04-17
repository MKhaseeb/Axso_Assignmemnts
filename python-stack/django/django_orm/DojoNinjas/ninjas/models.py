from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    ceated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




class Ninjas(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    ceated_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    dojoid = models.ForeignKey(Dojo, related_name="ninjas", on_delete=models.CASCADE ,default=1)