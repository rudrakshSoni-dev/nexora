Vibe Commerce

Vibe Commerce is a full-stack e-commerce web application built using React (Vite) for the frontend, Express.js for the backend, and MongoDB as the database.
It allows users to browse products, add items to a cart, view details, and simulate checkout with a generated receipt.

Table of Contents

Overview

Features

Tech Stack

Project Structure

Setup Instructions

Environment Variables

Available Scripts

API Endpoints

Frontend Features

Future Enhancements

License

Overview

This project demonstrates a simple, modular e-commerce system following the MVC pattern on the backend and a component-based React architecture on the frontend.
It includes product management, cart operations, mock authentication, and checkout simulation.

Features
Backend

RESTful API built with Express.js and MongoDB (Mongoose).

MVC structure with separate controllers, models, and routes.

Product management with auto-seeding of mock data.

Cart operations including add, update, remove, and clear.

Checkout endpoint that creates an order and returns a digital receipt.

Centralized error handling and status codes.

Configurable MongoDB URI via environment variables.

Frontend

Built with React (Vite) for fast rendering.

TailwindCSS for clean and responsive UI design.

Global state management using React Context API.

Mock authentication that allows users to enter a name for identification.

Dynamic navigation bar displaying the logged-in user and cart count.

Fixed top navigation bar that remains visible while scrolling.

Homepage with a sliding product display (carousel) that auto-slides every 5 seconds.

Product listing page that fetches data from the backend API.

Product detail page with image, price, description, and “Add to Cart” button.

Cart page with item summary, total calculation, and clear/checkout functionality.

Checkout process that generates a mock order receipt.

Responsive layout that adapts to both desktop and mobile screens.

Tech Stack

Frontend

React (Vite)

TailwindCSS

Axios

React Router DOM
Lucide React Icons
Backend
Node.js
Express.js
MongoDB with Mongoose
Dotenv

CORS

Nodemon (for development)
