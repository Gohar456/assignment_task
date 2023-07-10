from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("transporters", TransporterViewset)

urlpatterns = [
    path("services/", include(router.urls)),
    path("services/<int:pk>/", include(router.urls)),
    ]