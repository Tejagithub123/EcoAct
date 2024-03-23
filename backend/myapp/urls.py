from django.urls import path

from .views import prediction_view



from .views import PredictionList
from .views import CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView



urlpatterns = [ 
     path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
    

    path('prediction/', prediction_view),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),

]
