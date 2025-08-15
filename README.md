Hotel Management System (NestJS) Documentation
<p align="center"> <a href="http://nestjs.com/" target="_blank"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /> </a> <h1 align="center">Hotel Management System</h1> </p>
📜 Overview
A comprehensive hotel management backend system built with NestJS and TypeScript. Features include multi-role authentication, resource management for rooms, bookings, payments, inventory, and service tracking. Designed with modular architecture and RESTful principles.

✨ Features
JWT Authentication with role-based access control (Admin/Customer)

12+ Entity Modules with full CRUD operations

Inventory Management for food stock tracking

Booking & Payment Integration

Room Service Coordination

Postman API Collection for immediate testing

TypeORM for database operations

Validation Pipes for data integrity

Scalable Architecture

🚀 Getting Started
Prerequisites
Node.js v18+

PostgreSQL (or compatible SQL database)

npm v9+

Postman (for API testing)

Installation
bash
# Clone repository
git clone https://github.com/your-repo/hotel-management-nest.git

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
Database Setup
Create PostgreSQL database

Update .env file:

env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=hotel_db
JWT_SECRET=your_secure_secret
Running the Application
bash
# Development mode
npm run start:dev

# Production build
npm run build
npm run start:prod

# Testing
npm run test
🔐 Authentication System
Uses JWT strategy with access tokens (expire after 1 hour).

Login Flow:
Diagram
Code
sequenceDiagram
    Client->>AuthController: POST /auth/login
    AuthController->>AuthService: validateUser()
    AuthService->>Database: Verify credentials
    AuthService-->>AuthController: User payload
    AuthController->>JwtService: Generate accessToken
    AuthController-->>Client: { accessToken }
Protected Route Example:
http
GET /api/customer/123
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
User Roles:
Role	Access Scope
admin	All endpoints
customer	Own bookings/orders/services
📬 API Endpoints
Base URL
http://localhost:3000

🔑 1. Authentication
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/auth/login</code></td> <td>User login</td> </tr> <tr> <td>POST</td> <td><code>/auth/logout</code></td> <td>Invalidate token</td> </tr> </tbody> </table>
👤 2. Admin Management
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/admin</code></td> <td>Create new admin</td> </tr> <tr> <td>GET</td> <td><code>/admin</code></td> <td>List all admins</td> </tr> <tr> <td>GET</td> <td><code>/admin/:id</code></td> <td>Get admin by ID</td> </tr> <tr> <td>PATCH</td> <td><code>/admin/:id</code></td> <td>Update admin details</td> </tr> <tr> <td>DELETE</td> <td><code>/admin/:id</code></td> <td>Remove admin (soft delete)</td> </tr> </tbody> </table>
👥 3. Customer Management
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/customer</code></td> <td>Register new customer</td> </tr> <tr> <td>GET</td> <td><code>/customer</code></td> <td>List all customers</td> </tr> <tr> <td>GET</td> <td><code>/customer/:id</code></td> <td>Get customer profile</td> </tr> <tr> <td>PATCH</td> <td><code>/customer/:id</code></td> <td>Update customer details</td> </tr> <tr> <td>DELETE</td> <td><code>/customer/:id</code></td> <td>Delete customer account</td> </tr> </tbody> </table>
🏷️ 4. Room Category Management
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/rooms-category</code></td> <td>Create room category</td> </tr> <tr> <td>GET</td> <td><code>/rooms-category</code></td> <td>List all categories</td> </tr> <tr> <td>GET</td> <td><code>/rooms-category/:id</code></td> <td>Get category by ID</td> </tr> <tr> <td>PATCH</td> <td><code>/rooms-category/:id</code></td> <td>Update category</td> </tr> <tr> <td>DELETE</td> <td><code>/rooms-category/:id</code></td> <td>Delete category</td> </tr> </tbody> </table>
🛏️ 5. Room Management
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/room</code></td> <td>Add new room</td> </tr> <tr> <td>GET</td> <td><code>/room</code></td> <td>List all rooms</td> </tr> <tr> <td>GET</td> <td><code>/room/:id</code></td> <td>Get room details</td> </tr> <tr> <td>PATCH</td> <td><code>/room/:id</code></td> <td>Update room status</td> </tr> <tr> <td>DELETE</td> <td><code>/room/:id</code></td> <td>Remove room</td> </tr> </tbody> </table>
📅 6. Booking System
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/bookings</code></td> <td>Create new booking</td> </tr> <tr> <td>GET</td> <td><code>/bookings</code></td> <td>List all bookings</td> </tr> <tr> <td>GET</td> <td><code>/bookings/:id</code></td> <td>Get booking details</td> </tr> <tr> <td>PATCH</td> <td><code>/bookings/:id</code></td> <td>Modify booking dates</td> </tr> <tr> <td>DELETE</td> <td><code>/bookings/:id</code></td> <td>Cancel booking</td> </tr> </tbody> </table>
💳 7. Payment Processing
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/payments</code></td> <td>Record payment</td> </tr> <tr> <td>GET</td> <td><code>/payments</code></td> <td>View payment history</td> </tr> <tr> <td>GET</td> <td><code>/payments/:id</code></td> <td>Get payment receipt</td> </tr> <tr> <td>PATCH</td> <td><code>/payments/:id</code></td> <td>Update payment status</td> </tr> <tr> <td>DELETE</td> <td><code>/payments/:id</code></td> <td>Void payment record</td> </tr> </tbody> </table>
🍽️ 8. Food Inventory
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/food-inventory</code></td> <td>Add inventory item</td> </tr> <tr> <td>GET</td> <td><code>/food-inventory</code></td> <td>View all inventory</td> </tr> <tr> <td>GET</td> <td><code>/food-inventory/:id</code></td> <td>Get item details</td> </tr> <tr> <td>PATCH</td> <td><code>/food-inventory/:id</code></td> <td>Update stock quantity</td> </tr> <tr> <td>DELETE</td> <td><code>/food-inventory/:id</code></td> <td>Remove inventory item</td> </tr> </tbody> </table>
📋 9. Food Order Service
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/food-order-service</code></td> <td>Place food order</td> </tr> <tr> <td>GET</td> <td><code>/food-order-service</code></td> <td>List all orders</td> </tr> <tr> <td>GET</td> <td><code>/food-order-service/:id</code></td> <td>Get order details</td> </tr> <tr> <td>PATCH</td> <td><code>/food-order-service/:id</code></td> <td>Update order status</td> </tr> <tr> <td>DELETE</td> <td><code>/food-order-service/:id</code></td> <td>Cancel order</td> </tr> </tbody> </table>
🧹 10. Room Service
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/room-service</code></td> <td>Create room service</td> </tr> <tr> <td>GET</td> <td><code>/room-service</code></td> <td>List all services</td> </tr> <tr> <td>GET</td> <td><code>/room-service/:id</code></td> <td>Get service by ID</td> </tr> <tr> <td>PATCH</td> <td><code>/room-service/:id</code></td> <td>Update service</td> </tr> <tr> <td>DELETE</td> <td><code>/room-service/:id</code></td> <td>Delete service</td> </tr> </tbody> </table>
🔧 11. Service Management
<table> <thead> <tr> <th>Method</th> <th>Endpoint</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>POST</td> <td><code>/services</code></td> <td>Create service entry</td> </tr> <tr> <td>GET</td> <td><code>/services</code></td> <td>List all services</td> </tr> <tr> <td>GET</td> <td><code>/services/:id</code></td> <td>Get service by ID</td> </tr> <tr> <td>PATCH</td> <td><code>/services/:id</code></td> <td>Update service</td> </tr> <tr> <td>DELETE</td> <td><code>/services/:id</code></td> <td>Delete service</td> </tr> </tbody> </table>
📂 Postman Collection
Import Hotel_Management.postman_collection.json

Configure environment:

json
{
  "base_url": "http://localhost:3000",
  "accessToken": "{{login_response.accessToken}}"
}
Execute Login request first to populate token

🚀 Deployment
Option 1: NestJS Mau
bash
npm install -g @nestjs/mau
mau deploy
Option 2: PM2 Process Manager
bash
npm run build
npm install -g pm2
pm2 start dist/main.js --name hotel-api
Hosting Recommendations:
Platform	Setup Guide
AWS Elastic Beanstalk	NestJS on AWS
Google Cloud Run	Container Deployment
Heroku	Deploy Node.js
📊 Database Schema
Diagram
Code
erDiagram
    ADMIN ||--o{ BOOKING : manages
    CUSTOMER ||--o{ BOOKING : creates
    ROOM_CATEGORY ||--o{ ROOM : classifies
    ROOM ||--o{ BOOKING : assigned_to
    BOOKING ||--o{ PAYMENT : has
    BOOKING ||--o{ ROOM_SERVICE : requests
    FOOD_INVENTORY ||--o{ FOOD_ORDER_SERVICE : supplies
    SERVICE ||--o{ ROOM_SERVICE : includes
🤝 Contributing
Fork repository

Create feature branch:
git checkout -b feature/new-module

Commit changes:
git commit -m 'Add new functionality'

Push to branch:
git push origin feature/new-module

Open pull request

📜 License
MIT License - see LICENSE for details 
