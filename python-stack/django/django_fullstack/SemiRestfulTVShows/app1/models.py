from django.db import models


class ShowManager(models.Manager):
    def basic_validator(postdata):
        errors = {}
        if len(postdata['title']) < 3:
            errors["title"] = "title should be at least 2 characters"
        if len(postdata['network']) < 3:
            errors["network"] = "network should be at least 3 characters"
        if len(postdata['description']) < 10:
            errors["description"] = "description should be at least 10 characters"
        return errors

class Show(models.Model):
    Title = models.CharField(max_length=255)
    Network = models.CharField(max_length=40)
    Disc = models.CharField(max_length=80)
    Releasdate = models.DateField()
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)
    objects = ShowManager()

    def addShow(postdata):
        Show.objects.create(Title =postdata['title'],Network =postdata['network'],Disc =postdata['disc'] ,Releasdate =postdata['releasdate']   )

    def allShows():
        return Show.objects.all()
    

    def deleteinfo(Showid):
        show=Show.objects.get(id=Showid)
        show.delete()  

    def edit(post,showid):
        edit =Show.objects.get(id=showid)
        # Show.objects.update(Title =Updateid['title'],Network =Updateid['network'],Disc =Updateid['disc'] ,Releasdate =Updateid['releasdate'])
        # Updateid.save()
        edit.Title = post['title']
        edit.Network = post['network']
        edit.Disc = post['disc']
        edit.Releasdate = post['releasdate']
        edit.save()


