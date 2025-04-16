from django.db import models


class Users(models.Model):
    FirstName = models.CharField(max_length=30)
    LastName = models.CharField(max_length=40)
    EmailAddress = models.CharField(max_length=80)
    Age = models.IntegerField()
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)

    def adduser(postdata):
        Users.objects.create(FirstName =postdata['first_name'],LastName =postdata['last_name'],EmailAddress =postdata['email'] ,Age =postdata['age']   )

    def allusers():
        return Users.objects.all()
