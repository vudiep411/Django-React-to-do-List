from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import Note


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note        # Name of your db Model
        fields = '__all__'  # ['field1', 'field2', ...]

