from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PredictionSerializer
from .models import Prediction
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework import generics 
from django.core.mail import send_mail
from django.http import JsonResponse

from django.core.mail import send_mail
from django.http import JsonResponse


from .models import Category
from .serializers import CategorySerializer

class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



@api_view(['POST'])
def prediction_view(request):
    serializer = PredictionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PredictionList(generics.ListAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer



