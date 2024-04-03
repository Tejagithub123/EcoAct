from django.urls import path
from .views import user_signup, user_login
from .views import prediction_view
from django.conf import settings
from .views import submit_contact_form
from django.conf.urls.static import static
from .views import PredictionList
from .views import CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView

from .views import EcoActorListCreate, EcoActorRetrieveUpdateDestroy

from .views import filter_actors_by_location,filter_actors_by_category

from .views import EventListCreate, EventRetrieveUpdateDestroy 

from .views import recommend_eco_actors

urlpatterns = [ 
     path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
     path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
    
     path('ecoactors/filter-by-location/', filter_actors_by_location, name='filter_by_location'),
    path('ecoactors/filter-by-category/', filter_actors_by_category, name='filter_by_category'),
    
    
     path('events/', EventListCreate.as_view(), name='event-list-create'),
     path('events/<int:pk>/', EventRetrieveUpdateDestroy.as_view(), name='event-detail'),
     

    path('recommandactors/',recommend_eco_actors , name='recommend_eco_actors'),

    path('ecoactors/', EcoActorListCreate.as_view(), name='ecoactor-list-create'),
    path('ecoactors/<int:pk>/', EcoActorRetrieveUpdateDestroy.as_view(), name='ecoactor-retrieve-update-destroy'),


    path('submit/', submit_contact_form, name='submit_contact_form'),
    
    path('signup/', user_signup),
    path('login/', user_login),
    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
