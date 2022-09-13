from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from .controllers.notes import deleteNote, getAllNotes, getOneNote, addNote, updateNote

#rest_framework UI for development to see all routes
@api_view(['GET'])  
def getRoutes(request):
    routes = [      
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
             'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
         },
        {
             'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },        
    ]
    return Response(routes)

# Get all Notes
@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        return getAllNotes(request)

    elif request.method == 'POST':
        return addNote(request)

# Get one Note
@api_view(['GET', 'DELETE', 'PUT'])                 # id match with dynamic url
def getNote(request, id):
    if request.method == 'GET':
        return getOneNote(request, id)

    elif request.method == 'DELETE':
        return deleteNote(request, id)
    
    elif request.method == 'PUT':
        return updateNote(request, id)