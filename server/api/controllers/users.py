from ..serializers import UserSerializer
from ..models import User
from rest_framework.response import Response
from django.http import JsonResponse


def getOneUser(request, id):
    user = User.objects.get(id=id)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
