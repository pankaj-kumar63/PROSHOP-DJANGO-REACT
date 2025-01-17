from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('', views.getOrders, name='orders'),
    path('add/', views.addOrderItems, name='orders-add'),
    path('myorders/', views.getMyOrders, name='myorders'),

    path('<str:pk>/deliver/', views.updateOrderToDelivered, name = 'order-deliver'),
    path('<str:pk>', views.getOrderById, name = 'order-by-id'),
    path('<str:pk>', views.updateOrderToPaid, name = 'pay'),

]
