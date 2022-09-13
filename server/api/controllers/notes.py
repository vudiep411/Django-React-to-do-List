from ..serializers import NoteSerializer
from ..models import Note
from rest_framework.response import Response
from django.http import JsonResponse

def getAllNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)    # Serialize it 
    return Response(serializer.data)

def getOneNote(request, id):
    note = Note.objects.get(id=id)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def addNote(request):
    data = request.data
    note = Note.objects.create(
        title = data["title"],
        body = data["body"]
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
    note.save()
    serializer = NoteSerializer(note)
    return Response(serializer.data)