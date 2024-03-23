from django.urls import path
from .views import user_signup, user_login,profile


urlpatterns = [ 

    path('signup/', user_signup),
    path('login/', user_login),
    path('profile/', profile, name='profile'),

]




