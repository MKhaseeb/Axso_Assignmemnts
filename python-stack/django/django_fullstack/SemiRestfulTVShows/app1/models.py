from django.db import models


class Show(models.Model):
    Title = models.CharField(max_length=255)
    Network = models.CharField(max_length=40)
    Disc = models.CharField(max_length=80)
    Releasdate = models.DateField()
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)

    def addShow(postdata):
        Show.objects.create(Title =postdata['title'],Network =postdata['network'],Disc =postdata['disc'] ,Releasdate =postdata['releasdate']   )

    def allShows():
        return Show.objects.all()