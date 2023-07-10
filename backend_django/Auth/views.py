from .serializers import *
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    """To pass extra data when user is logged in"""
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.GenericAPIView):
    """This View is for registration of user"""

    serializer_class = RegisterSerializier
    permission_classes = (AllowAny,)

    def post(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return  Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)