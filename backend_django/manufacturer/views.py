from django.shortcuts import render
from rest_framework import generics, status, viewsets
from .permissions import IsTransporter, IsManufacturer
from .models import *
from .serializers import *

# Create your views here.
class TransporterViewset(viewsets.ModelViewSet):

    """
    This viewset is used by authenticated user only
    user can crete update and delete its Movers
    """

    permission_classes = [IsTransporter]
    queryset = Transporter.objects.all()
    serializer_class = TransporterSerialzier

    def get_queryset(self):
        """
        This function is used to set user of the Movers
        """
        queryset = self.queryset
        query_set = queryset.filter(user=self.request.user)
        return query_set