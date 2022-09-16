from ..serializers import NoteSerializer
from ..models import Note
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import permissions
from django.contrib.auth.models import User

def getAllNotes(request):
    user_id = request.GET.get('id', '')
    user = User.objects.get(id=user_id)
    notes = Note.objects.filter(createdBy=user)
    serializer = NoteSerializer(notes, many=True)    # Serialize it 
    return Response(serializer.data)

def getOneNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def addNote(request):
    data = request.data
    user = User.objects.get(id=data["createdBy"])
    note = Note.objects.create(
        title = data["title"],
        body = data["body"],
        createdBy = user
    )
    serializer = NoteSerializer(note)
    return Response(serializer.data)

def deleteNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note)
    note.delete()
    return Response(serializer.data)

def updateNote(request, id):
    data = request.data
    note = Note.objects.get(id=id)
    note.body = data['body']
    note.title = data['title']
    note.save()
    serializer = NoteSerializer(note)
    return Response(serializer.data)