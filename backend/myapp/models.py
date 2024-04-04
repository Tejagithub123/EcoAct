from django.db import models
from django.contrib.auth.hashers import make_password


class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=100,default="member")
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    def save(self, *args, **kwargs):
        # Check if the password is already hashed
        if not self.password.startswith('pbkdf2_sha256$'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)


class Prediction(models.Model):
    text = models.CharField(max_length=200)
    prediction = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text




class Category(models.Model):
    name = models.CharField(max_length=100)

class EcoActor(models.Model):
    TRASH_CHOICES = [
        ('radioactive', 'Radioactive'),
        ('organic', 'Organic'),
        ('batteries', 'Batteries'),
        ('light bulbs', 'Light Bulbs'),
        ('biomedical', 'Biomedical'),
        ('paper', 'Paper'),
        ('metal', 'Metal'),
        ('e-waste', 'E-Waste'),
        ('glass', 'Glass'),
        ('clothes', 'Clothes'),
        ('plastic', 'Plastic'),
    ]
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
    trash = models.CharField(max_length=100, choices=TRASH_CHOICES, blank=True, null=True) 
class Event(models.Model):
    image = models.ImageField(upload_to='event_images')  # For storing event images
    name = models.CharField(max_length=255)  # Name of the event
    description = models.TextField()  # Description of the event
    date = models.DateField()  # Date of the event

    def __str__(self):
        return self.name





