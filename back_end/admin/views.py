from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
# Create your views here.



# access admin dashboard 
@permission_classes([IsAuthenticated])
def adminDashboardApi(request):
    pass 


@permission_classes([IsAuthenticated])
def userDashboardApi(request):
    if request.user.is_superuser():
        return Response({'message': 'Permission denied.'}, status=status.HTTP_403_FORBIDDEN)
    else:
        pass 
    
    