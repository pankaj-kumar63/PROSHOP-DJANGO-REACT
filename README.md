

# eCommerce Project with Django & React

This is a full-featured eCommerce website built from scratch using **Django** for the backend and **React** for the frontend. The project includes a complete shopping cart system with PayPal and credit/debit card payment integration, product reviews and ratings, and an admin panel for managing users, products, and orders.

## Table of Contents
- [Features]
- [Technologies Used]
- [Getting Started]
- [Installation]
- [Usage]
- [Admin Panel]
- [Payment Integration]
- [Project Structure]
- [License]

## Features
- **Full-Featured Shopping Cart**: Users can add, remove, and update products in the cart.
- **Product Reviews & Ratings**: Customers can leave reviews and rate products.
- **Top Products Carousel**: Display top-rated products on the homepage.
- **Product Pagination**: Browse products with pagination support.
- **Product Search**: Search for products based on name or category.
- **User Profile**: Users can view and manage their orders.
- **Admin Area**: Manage customers, products, and orders with the admin interface.
- **Order Management**: Admins can mark orders as delivered and view detailed order information.
- **Checkout Process**: Handle shipping and payment methods, including PayPal and credit/debit card payments.
  
## Technologies Used
- **Frontend**:
  - React.js (Functional Components, Hooks)
  - React Router
  - React-Bootstrap (UI Components)
  - Redux (for state management)
  - PayPal API Integration

- **Backend**:
  - Django
  - Django Rest Framework (for API)
  - JWT Authentication (JSON Web Tokens)
  - Custom Error Handling

- **Other**:
  - Express (used in the original version of the project by Brad Traversy)
  - PostgreSQL (Database)
  
## Getting Started

To get this project up and running locally, follow the steps below.

### Prerequisites
- **Python 3.x** for Django
- **Node.js** and **npm/yarn** for React
- **PostgreSQL** (or any database you prefer for Django)


### Usage
- **Frontend**: You can view the eCommerce website, browse products, add items to the cart, and proceed to checkout with PayPal or credit/debit card payment.
- **Admin Panel**: Access the admin panel by going to `http://localhost:8000/admin/` and logging in with your superuser credentials.
- **User Profile**: Users can manage their orders from their profile page.
  
### Admin Panel

To manage the application, you can use Django's built-in **admin panel**:
- Products: Add, update, and delete products.
- Orders: View, update, and mark orders as delivered.
- Users: Manage users and their profiles.


### Payment Integration

The project integrates PayPal for processing payments. Users can select PayPal or credit/debit card payment methods during checkout. This integration allows for secure payments within the application.


Feel free to modify or expand this `README.md` to include any additional project details, features, or installation steps specific to your project.

