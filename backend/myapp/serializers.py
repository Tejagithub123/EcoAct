from rest_framework import serializers
from .models import User
from .models import Prediction

from .models import Category

from .models import EcoActor
from .models import Event

class EcoActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = EcoActor
        fields = '__all__'
        extra_kwargs = {
            'trash': {'required': False},  # Rendre facultatif
        }

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']

# class ResultSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Result
#         fields = '__all__'

class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ['id', 'text', 'prediction', 'created_at', 'user']
        extra_kwargs = {
            'user': {'required': False},
        }

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'image', 'name', 'description', 'date']  