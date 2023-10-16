
from django.contrib import admin
from django.urls import path, include
from auths.views import *

urlpatterns = [
    path('register', UserRegister.as_view(), name='register'),
	path('login', UserLogin.as_view(), name='login'),
	path('logout', UserLogout.as_view(), name='logout'),
	path('user', UserView.as_view(), name='user'),
	path("check_superuser/<str:userprofile>", check_superuser, name='user_status'),
 
]