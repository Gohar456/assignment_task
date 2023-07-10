from rest_framework import serializers
from .models import *
from Auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'email', 'first_name',
            'last_name', 'address', 'user_type',
            'password'
                  ]


class TransporterSerialzier(serializers.ModelSerializer):
    class Meta:
        model = Transporter
        fields = '__all__'

