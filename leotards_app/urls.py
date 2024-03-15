from django.urls import path
from . import views

app_name = 'leotards_app'

urlpatterns = [
  path('', views.index, name='index'),
  path('conditions/', views.conditions, name='conditions'),
  path('contact/', views.contact, name='contact'),
]