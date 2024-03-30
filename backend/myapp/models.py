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
    telephone = models.CharField(max_length=20)
    role = models.CharField(max_length=100,default="actor")
    adresse = models.CharField(max_length=255)
    ville = models.CharField(max_length=100)
    longitude = models.FloatField()
    latitude = models.FloatField()
    activitis = models.CharField(max_length=255)
    categories = models.ManyToManyField(Category)  # Many-to-many relationship with Category model

class Event(models.Model):
    image = models.ImageField(upload_to='event_images')  # For storing event images
    name = models.CharField(max_length=255)  # Name of the event
    description = models.TextField()  # Description of the event
    date = models.DateField()  # Date of the event

    def __str__(self):
        return self.name





