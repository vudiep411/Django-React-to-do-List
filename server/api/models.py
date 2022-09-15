from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    title = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)  # Change everytime update
    created = models.DateTimeField(auto_now_add=True)   # Only once when create
    createdBy = models.ForeignKey(User, related_name='user_id', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.body[0:50]


