from django.urls import path
from . import views
urlpatterns = [
    path('', views.contact, name='contact'),
    path('details/<slug:slug>/',
    views.details, name='details'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout')
]



