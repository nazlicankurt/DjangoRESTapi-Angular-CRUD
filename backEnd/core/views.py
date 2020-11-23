
from .models import Series
from .serializers import SeriesSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
# from django.shortcuts import get_object_or_404


class SeriesViewSet(viewsets.ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer


#    # if ı used this functionallty, i have to write all of funct. like retrieve, create etc.

    # def list(self, request):
    #      series= Series.objects.all()
    #      serializer = SeriesSerializer(series, many= True)
    #      return Response(serializer.data)

    # def create (self, request):
    #     serializer= SeriesSerializer(data=request.data)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    # def retrieve(self, request, pk =None):
    #     # it is related to the update, so when ı update i need retrieve
    #     queryset = Series.object.all()
    #     series = get_object_or_404(queryset, pk=pk)
    #     #  i can use id with lookup_field
    #     serializer = SeriesSerializer(series)
    #     return Response(serializer.data)

    # def destroy(self, request, pk=None):
    #     series = Series.objects.get(pk=pk)
    #     series.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


# def update(self, request, pk= None):
#         series = Series.objects.get(pk=pk)
#         serializer = SeriesSerializer(series, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class GenericAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin,
#                      mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.RetrieveModelMixin):

#     serializer_class = SeriesSerializer
#     queryset = Series.objects.all()
#     # lookup_field = 'id'

#     def get(self, request, pk=None):

#         if pk:
#             return self.retrieve(request)
# # implements returning an existing model instance in a response retrievemodelmix
#         else:
#             return self.list(request)

#     def post(self, request):
#         return self.create(request)

#     # def put(self, request, id=None):
#     #     return self.update(request, id)

#     def delete(self, request, pk):
#         return self.destroy(request, pk)

#         def put(self, request,pk):
#         series = self.get_object(pk)
#         serializer = SeriesSerializer(series, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class SeriesAPIView(APIView):

    # def get(self, request):
    #     seriesss = Series.objects.all()
    #     serializer = SeriesSerializer(seriesss, many=True)
    #     return Response(serializer.data)

    # def post(self, request):
    #     serializer = SeriesSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class SeriesDetails(APIView):

    # def get_object(self, id):
    #     try:
    #         return Series.objects.get(id=id)
    #     except Series.DoesNotExist:
    #         return Response(status=status.HTTP_404_NOT_FOUND)

    # def get(self, request, id):
    #     series = self.get_object(id)
    #     serializer = SeriesSerializer(series)
    #     return Response(serializer.data)



    # def delete(self, request, id):
    #     series = self.get_object(id)
    #     series.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
