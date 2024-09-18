from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return JsonResponse("Hello", safe=False)
@api_view(['GET'])
def getHome(request):
    return JsonResponse("This is home tab.", safe=False)

@api_view(['GET'])
def getProducts(request):
    return JsonResponse(products, safe=False)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return JsonResponse(product, safe=False)