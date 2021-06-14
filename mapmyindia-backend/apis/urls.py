from django.urls import path
from .views import (
    GetAuthAccessToken
)
urlpatterns = [
    path('get-token/', GetAuthAccessToken.as_view())
]
