from django.urls import path
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getRoutes),
    path('notes/', views.getNotes),
    path('notes/<str:id>/', views.getNote)   #<str:id> -> str=type id=name
]