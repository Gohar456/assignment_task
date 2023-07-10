from rest_framework.permissions import BasePermission


class IsTransporter(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user.is_authenticated and request.user.user_type == 'transporter')

class IsManufacturer(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user.is_authenticated and request.user.user_type == 'manufacturer')