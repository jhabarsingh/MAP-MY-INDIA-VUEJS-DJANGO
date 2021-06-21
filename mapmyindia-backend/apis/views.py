from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import requests
import json
import os
# Create your views here.


class GetAuthAccessToken(APIView):
    '''
    Create Item account
    '''

    def get(self, request):
        ID = os.environ.get("ID")
        SECRET = os.environ.get("SECRET")
        URL = "https://outpost.mapmyindia.com/api/security/oauth/token?grant_type=client_credentials"

        URL = URL + f'&client_id={ID}&client_secret={SECRET}'
        print(URL)
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        response = requests.post(URL, headers=headers)

        response = json.loads(response.text)
        return Response(response)
