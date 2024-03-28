from django.urls import path
from .views import user_signup, user_login,ecosignup
from .views import prediction_view

from .views import submit_contact_form

from .views import PredictionList
from .views import CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView

from .views import EcoActorListCreate, EcoActorRetrieveUpdateDestroy

from .views import filter_actors_by_location,filter_actors_by_category


urlpatterns = [ 
     path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
     path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
       path('ecoactors/filter-by-location/', filter_actors_by_location, name='filter_by_location'),
    path('ecoactors/filter-by-category/', filter_actors_by_category, name='filter_by_category'),
    
    path('ecoactors/', EcoActorListCreate.as_view(), name='ecoactor-list-create'),
    path('ecoactors/<int:pk>/', EcoActorRetrieveUpdateDestroy.as_view(), name='ecoactor-retrieve-update-destroy'),

    path('submit/', submit_contact_form, name='submit_contact_form'),

    path('signup/', user_signup),
    path('ecosignup/', ecosignup),
    path('login/', user_login),
    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
