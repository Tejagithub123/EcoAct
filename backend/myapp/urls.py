from django.urls import path
from .views import user_signup, user_login
from .views import prediction_view

from .views import submit_contact_form

from .views import PredictionList
from .views import CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView
from .views import EcoActorListCreate, EcoActorRetrieveUpdateDestroy
urlpatterns = [ 
     path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
    
    path('ecoactors/', EcoActorListCreate.as_view(), name='ecoactor-list-create'),
    path('ecoactors/<int:pk>/', EcoActorRetrieveUpdateDestroy.as_view(), name='ecoactor-retrieve-update-destroy'),

    path('submit/', submit_contact_form, name='submit_contact_form'),

    path('signup/', user_signup),
    path('login/', user_login),
    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
