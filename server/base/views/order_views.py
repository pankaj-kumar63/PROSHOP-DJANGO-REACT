from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from base.serializers import ProductSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser 
from django.contrib.auth.models import User
from base.models import Product, Order, OrderItem, ShippingAddress
from rest_framework import status
from datetime import datetime

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data
    orderItems = data['orderItems']
    print(orderItems)

    if orderItems and len(orderItems) == 0:
        return Response({'detail':"No order Items"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        order = Order.objects.create(
            user = user,
            paymentMethod = data['paymentMethod'],
            taxPrice = data['taxPrice'],
            shippingPrice = data['shippingPrice'],
            totalPrice = data['totalPrice']
        )

        shipping = ShippingAddress.objects.create(
            order = order,
            address = data['shippingAddress']['address'],
            city = data['shippingAddress']['city'],
            country = data['shippingAddress']['country'],
            postalCode = data['shippingAddress']['postalcode']

        )

        for i in orderItems:
            product = Product.objects.get(_id = int(i['product']))
            item = OrderItem.objects.create(
                product = product,
                order = order,
                name = product.name,
                qty = i['qty'],
                price = i['price'],
                image = product.image.url,
            )

            # Updata stock

            product.countInstock -= item.qty
            product.save()
        serializer = OrderSerializer(order, many = False)

        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set_all()
    serializer = OrderSerializer(orders, many= True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many= True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):
    user = request.user
    try:
        order = Order.objects.get(_id = pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many = False)
            return Response(serializer.data)
        else:
            Response({'detail':'Not Authorized to view this order'}, status = status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'detail':'Order does not exists'})
@api_view(['PUT'])
@permission_classes([IsAuthenticated])    
def updateOrderToPaid(request, pk):
    order = Order.objects.get(_id = pk)

    order.isPaid = True
    order.paidAt = datetime.now()
    order.save()

    return Response('Order was paid')

@api_view(['PUT'])
@permission_classes([IsAdminUser])    
def updateOrderToDelivered(request, pk):
    order = Order.objects.get(_id = pk)

    order.isDelivered = True
    order.deliveredAt = datetime.now()
    order.save()

    return Response('Order was Delivered')