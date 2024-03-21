from django.urls import path
from .views import user_signup, user_login
from .views import prediction_view

from .views import submit_contact_form

from .views import PredictionList
urlpatterns = [ 
    path('submit/', submit_contact_form, name='submit_contact_form'),

    path('signup/', user_signup),
    path('login/', user_login),
    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
