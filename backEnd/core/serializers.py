from rest_framework import serializers
from .models import Series
class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Series
        fields = ['id', 'name', 'description', 'imagePath', 'series_date', 'season']
#   //how we can rite API view