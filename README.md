# E-commerce Backend

This is a backend for an e-commerce application built with Node.js and MongoDB. It allows users to manage their products, carts, and wishlists.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Product Endpoints](#product-endpoints)
  - [Cart Endpoints](#cart-endpoints)
  - [Wishlist Endpoints](#wishlist-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration
- User-specific cart management
- User-specific wishlist management
- Add/remove products to/from cart and wishlist
- CRUD operations for products

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- Faker.js (for generating fake products)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ecommerce-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start MongoDB server (if not already running):

   ```bash
   mongod
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

The server will start running on `http://localhost:5000`.

## API Endpoints

### User Endpoints

#### Register User

- **POST** `/api/users/register`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "cart": "cart_id",
      "wishlist": "wishlist_id"
    }
  }
  ```

### Product Endpoints

#### Create Product

- **POST** `/api/products`
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product created successfully",
    "product": {
      "_id": "product_id",
      "name": "Product Name",
      "description": "Product Description",
      "price": 100,
      "imageUrl": "https://example.com/image.jpg"
    }
  }
  ```

#### Get All Products

- **GET** `/api/products`
- **Response:**
  ```json
  [
    {
      "_id": "product_id",
      "name": "Product Name",
      "description": "Product Description",
      "price": 100,
      "imageUrl": "https://example.com/image.jpg"
    }
  ]
  ```

#### Get Single Product

- **GET** `/api/products/:productId`
- **Response:**
  ```json
  {
    "_id": "product_id",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "imageUrl": "https://example.com/image.jpg"
  }
  ```

#### Update Product

- **PUT** `/api/products/:productId`
- **Request Body:**
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Description",
    "price": 150,
    "imageUrl": "https://example.com/updated-image.jpg"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product updated successfully"
  }
  ```

#### Delete Product

- **DELETE** `/api/products/:productId`
- **Response:**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

### Cart Endpoints

#### Get User's Cart

- **GET** `/api/cart/:userId`
- **Response:**
  ```json
  {
    "userId": "user_id",
    "products": [
      {
        "productId": "product_id",
        "quantity": 2
      }
    ]
  }
  ```

#### Add Product to Cart

- **POST** `/api/cart/:userId`
- **Request Body:**
  ```json
  {
    "productId": "product_id",
    "quantity": 1
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product added to cart"
  }
  ```

#### Remove Product from Cart

- **DELETE** `/api/cart/:userId/:productId`
- **Response:**
  ```json
  {
    "message": "Product removed from cart"
  }
  ```

### Wishlist Endpoints

#### Get User's Wishlist

- **GET** `/api/wishlist/:userId`
- **Response:**
  ```json
  {
    "userId": "user_id",
    "products": [
      {
        "productId": "product_id"
      }
    ]
  }
  ```

#### Add Product to Wishlist

- **POST** `/api/wishlist/:userId`
- **Request Body:**
  ```json
  {
    "productId": "product_id"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Product added to wishlist"
  }
  ```

#### Remove Product from Wishlist

- **DELETE** `/api/wishlist/:userId/:productId`
- **Response:**
  ```json
  {
    "message": "Product removed from wishlist"
  }
  ```

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

Feel free to make any further adjustments or additions! If you have other features or requirements in mind, just let me know!
```
