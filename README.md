# Vibe Commerce

## Summary
Vibe Commerce is a full-stack e-commerce web application built with React (Vite) for the frontend and Express.js with MongoDB for the backend. It allows users to browse products, view details, add items to a cart, and complete a mock checkout that generates a receipt. The app includes a fixed navbar with a live cart counter, a dynamic image slider, and a clean responsive interface.

## Tech Stack
**Frontend**
- React (Vite)
- TailwindCSS
- React Router DOM
- Axios
- Lucide React Icons

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- Dotenv
- Nodemon

## Features
**Frontend**
- Responsive design built with TailwindCSS  
- Homepage with auto-sliding hero image carousel  
- Product listing grid with dynamic product data from the backend  
- Product details page with image, description, and price  
- Global cart state management using React Context API  
- Fixed top navbar with user greeting and live cart item count  
- Mock authentication that accepts a name as user identity  
- Cart page with add, update, remove, and clear functionality  
- Checkout simulation that generates an order receipt  
- Smooth scroll and transition effects  

**Backend**
- RESTful API with Express.js  
- MVC architecture with controllers, models, and routes  
- MongoDB integration via Mongoose  
- Auto-seeding of mock products if database is empty  
- CRUD operations for cart management  
- Checkout endpoint that creates a mock order and returns structured receipt  
- Global error handling middleware  
- Environment configuration using dotenv

## Explanation

**Project Structure**

 - Project follows proper MVC structure and I have made sure to follow all the best practices.
 - The project have been divided into 2 parts: Frontend, and Backend. This makes it easy to deploy on different platforms.
 
 **Backend**

 - The backend includes MongoDB integration and CORS .
 - The API has 3 routes : 1. /api/products  2. /api/cart  3. /api/checkout             
 
 *BackendAPI* :-
 
1. GET /api/products: 5-10 hardcoded items
2. POST /api/cart: Add {productId, qty}. 
3. DELETE /api/cart/:id  Remove item with Id. 
4. GET /api/cart: Get cart + total. 
5. POST /api/checkout: {cartItems} → mock receipt (total, timestamp).

**Frontend**

 - Built in React, and includes react-router for routing.
 - Followed all the best practices.
 - Includes TailwindCSS for styling.
 - The frontend has 3 routes : 1.Home ("/) , 2. Login ("/login"), 3. Cart("/cart")
 - Used React Context for easy developer experience.
