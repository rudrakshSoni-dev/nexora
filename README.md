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
