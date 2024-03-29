from rest_framework import serializers
from .models import User
from .models import Prediction

from .models import Category

from .models import EcoActor

class EcoActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = EcoActor
        fields = '__all__'

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
        fields = ['id','text', 'prediction', 'created_at']

