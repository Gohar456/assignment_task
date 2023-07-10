from django.db import models
from Auth.models import User
import uuid

# Create your models here.
QUANTITY_CHOICES = (
    ('one_ton', '1 ton'),
    ('two_ton', '2 ton'),
    ('three_ton', '3 ton')
)

class Transporter(models.Model):
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    price = models.FloatField()


class Manufacturer(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    from_address = models.CharField(max_length=255)
    to_address = models.CharField(max_length=255)
    quantity = models.CharField(max_length=255, choices=QUANTITY_CHOICES)
    transporter = models.ForeignKey(Transporter, on_delete=models.CASCADE)