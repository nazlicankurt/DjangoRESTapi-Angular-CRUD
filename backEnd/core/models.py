
from django.db import models

# Create your models here.


class Series(models.Model):

    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    imagePath = models.CharField(max_length=5000)
    series_date = models.DateField()
    season = models.IntegerField()


def __str__(self):
    return self.name
