from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from .controllers.notes import deleteNote, getAllNotes, getOneNote, addNote, updateNote
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication

#rest_framework UI for development to see all routes
@api_view(['GET'])  
def getRoutes(request):
    routes = [
        {}            
    ]
    return Response(routes)

# Get all Notes
class getNotes(APIView):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        return getAllNotes(request)

    def post(self, request):
        return addNote(request=request)

# Get one Note
class getNote(APIView):
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    def get(self, request, id):
        if request.method == 'GET':
            return getOneNote(request, id)

    def delete(self, request, id):
        if request.method == 'DELETE':
            return deleteNote(request, id)
    
    def put(self, request, id):
        if request.method == 'PUT':
            return updateNote(request, id)
