from django.db import models

# Create your models here.


class Note(models.Model):
    title = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)  # Change everytime update
    created = models.DateTimeField(auto_now_add=True)   # Only once when create

    def __str__(self):
        return self.body[0:50]

class User(models.Model):
    userName = models.TextField(max_length=200)
    image = models.ImageField(upload_to ='uploads/')

