from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=100)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Prediction(models.Model):
    text = models.CharField(max_length=200)
    prediction = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text



class Category(models.Model):
    name = models.CharField(max_length=100)

class EcoActor(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20, default="Default telephone")
    role = models.CharField(max_length=100, default="Acteur ecologique")
    address = models.CharField(max_length=255, default="Default address")
    city= models.CharField(max_length=100, default="Default city")
    longitude = models.FloatField(default=5)
    latitude = models.FloatField(default=5)
    activities = models.CharField(max_length=255, default="Default activities")
    category = models.CharField(max_length=100, default="Argiculture")
    
    def __str__(self):
        return self.username








