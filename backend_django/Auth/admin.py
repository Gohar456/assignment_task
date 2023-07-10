from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
    list_display = ["id", "email", "password", "user_type"]
    list_filter = ["email"]
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal info",
            {
                "fields": (
                    "is_active",
                    "last_login",
                    "is_superuser",
                    "date_joined",
                    "first_name",
                    "last_name",
                    "is_staff",
                    "user_type",
                    "address"
                )
            },
        ),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (
            None,
            {"classes": ("wide",), "fields": ("email", "password")},
        ),
    )
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = ()


admin.site.register(User, CustomUserAdmin)