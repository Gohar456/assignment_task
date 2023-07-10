from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.hashers import check_password
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        
        # Add extra responses here
        data['id'] = self.user.id
        data['user_type'] = self.user.user_type

        return data

class RegisterSerializier(serializers.ModelSerializer):
    """This Serialzier is for Signup/Register user on wbsite """

    password = serializers.CharField(write_only = True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only = True, required=True,)


    class Meta:
        model = User
        fields = [
            'email', 'first_name',
            'last_name', 'address', 'user_type',
            'password', 'confirm_password',
                  ]

    def validate(self, attrs):

        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": ["Password fields didn't match."]})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            email = self.validated_data['email'],
            first_name = self.validated_data['first_name'],
            last_name = self.validated_data ['last_name'],
            address = self.validated_data ['address'],
            user_type = self.validated_data ['user_type'],
        )
        user.set_password(validated_data['password'])
        user.save()


        return user