from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
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
from .models import EcoActor
from .serializers import EcoActorSerializer

class EcoActorListCreate(generics.ListCreateAPIView):
    queryset = EcoActor.objects.all()
    serializer_class = EcoActorSerializer

class EcoActorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = EcoActor.objects.all()
    serializer_class = EcoActorSerializer

    def perform_update(self, serializer):
        serializer.save(partial=True)  # Allow partial updates


class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



class UserView(APIView):
    authentication_classes = [authentication.SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.user.is_authenticated:
            return Response({'username': request.user.username})
        else:
            return Response({'error': 'User not authenticated'})

@api_view(['POST'])
def user_signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    try:
        user = User.objects.get(email=email, password=password)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
def prediction_view(request):
    serializer = PredictionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def submit_contact_form(request):
    if request.method == 'POST':
        name = request.data.get('name', '')
        email = request.data.get('email', '')  
        phone = request.data.get('phone', '')
        message = request.data.get('message', '')

        if email:
            try:
                send_mail(
                    'New Contact Form Submission',
                    f'Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}',
                    email,
                    ['benhajalayateja@gmail.com'],
                    fail_silently=False
                )
                return JsonResponse({'message': 'Form submitted successfully.'})
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)
        else:
            return JsonResponse({'error': 'Email is required.'}, status=400)
    return JsonResponse({'error': 'Invalid request method.'}, status=400)

class PredictionList(generics.ListAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer



