from django.urls import path 
from . import views
from .views import submit_contact_form
app_name = 'contactus'

urlpatterns = [
    #path('', views.contact, name='contact'),
    path('submit/', submit_contact_form, name='submit_contact_form'),
]