from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.
USER_CHOICES = (
('transporter', 'Transporter'),
('manufacturer', 'Manufacturer'),
)

# Create your models here.
class MyUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **kwargs):
        user = self.model(
            email=email, is_staff=True, is_superuser=True, is_active=True, **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractUser):
    email = models.EmailField(max_length=254, unique=True)
    address  = models.CharField(max_length=255)
    user_type = models.CharField(max_length=255, choices=USER_CHOICES)
    username = None
    
    objects = MyUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'address', 'user_type']

    def __str__(self):
        return self.email