from django.urls import path
from django.urls import path
from . import views


urlpatterns = [
    path('views', views.getRoutes),
    path('', views.getNotes.as_view()),
    path('<str:id>/', views.getNote.as_view()),   #<str:id> -> str=type id=name
]