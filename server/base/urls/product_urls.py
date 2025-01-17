from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('create/', views.createProduct, name = 'create-product'),
    path('<str:pk>/reviews/', views.createProductReview, name = 'create-review'),
    path('top/', views.getTopProducts, name = 'top-products'),
    path('<str:pk>/', views.getProduct, name = 'product'),
    path('upload/', views.uploadImage, name = 'image-upload'),
    path('update/<str:pk>/', views.updateProduct, name = 'update-product'),
    path('delete/<str:pk>/', views.deleteProduct, name = 'delete-product'),
    path('', views.getProducts, name = 'products'),

]
