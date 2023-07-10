from django.db import models
from Auth.models import User
# Create your models here.
QUANTITY_CHOICES = (
    ('one_ton', '1 ton'),
    ('two_ton', '2 ton'),
    ('three_ton', '3 ton')
)


class Manufacturer(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    #order_id = models.
    from_address = models.CharField(max_length=255)
    to_address = models.CharField(max_length=255)
    quantity = models.CharField(max_length=255, choices=QUANTITY_CHOICES)
    