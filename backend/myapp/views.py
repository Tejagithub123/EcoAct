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
from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from django.http import JsonResponse 
from .models import Event

from django.urls import reverse_lazy
from .models import Category
from .serializers import CategorySerializer
from .models import EcoActor
from .serializers import EcoActorSerializer
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Event
from .serializers import EventSerializer

class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def perform_update(self, serializer):
        serializer.save(partial=True)  # Allow partial updates

        
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
    
    # Try to find the user in the User model
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        # If user is not found in User model, try finding in EcoActor model
        try:
            user = EcoActor.objects.get(email=email)
        except EcoActor.DoesNotExist:
            # If user is not found in EcoActor model, return error response
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

    # Verify the password
    if not check_password(password, user.password):
        # If password does not match, return error response
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)

    # Generate JWT token with user role
    user_role = user.role
    user_id = user.id
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    data = {
        'refresh': str(refresh),
        'access': access_token,
        'role': user_role,
        'id': user_id
    }
    
    return Response(data)


@api_view(['POST'])
def prediction_view(request):
    # Extract user ID from the request data
    user_id = request.data.get('user_id')
    print("user_id",user_id)
    # Combine request data with user ID
    data = request.data.copy()
    data['user'] = user_id

    serializer = PredictionSerializer(data=data)
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
                    [email],  # Use provided email as recipient
                    fail_silently=False
                )
                return Response({'message': 'Form submitted successfully.'})
            except Exception as e:
                return Response({'error': str(e)}, status=500)
        else:
            return Response({'error': 'Email is required.'}, status=400)
    return Response({'error': 'Invalid request method.'}, status=400)

@api_view(['GET'])
def filter_actors_by_location(request):
    ville = request.query_params.get('ville')
    actors = EcoActor.objects.filter(ville=ville)
    serializer = EcoActorSerializer(actors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def filter_actors_by_category(request):
    category_name = request.query_params.get('category')
    actors = EcoActor.objects.filter(categories__name=category_name)
    serializer = EcoActorSerializer(actors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def recommend_eco_actors(request):
    
    last_prediction = Prediction.objects.last()
    if last_prediction:
        
        prediction_text = last_prediction.text
        print(prediction_text)
        
        recommended_actors = EcoActor.objects.filter(trash=prediction_text)
        
        print(recommended_actors)
        serializer = EcoActorSerializer(recommended_actors, many=True)
        
        
        return Response(serializer.data)
    else:
        return Response({'message': 'No predictions found'}, status=404)


class PredictionList(generics.ListAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer



