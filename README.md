Hotel Management System (NestJS)
<p align="center"> <a href="http://nestjs.com/" target="blank"> <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /> </a> </p> <p align="center"> A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications. </p>
📜 Description

The Hotel Management System is built using NestJS and TypeScript to handle hotel operations including Admin, Customer, Room, Booking, Payment, Inventory, and Services.
It includes a Postman collection with endpoints for CRUD operations and authentication.

🚀 Project Setup
# Install dependencies
npm install

# Development mode
npm run start:dev

# Production mode
npm run start:prod

🔐 Authentication

Login → POST /auth/login

Logout → POST /auth/logout

JWT-based authentication with role-based access control.

Tokens are stored in Postman globals as accessToken.

📬 API Endpoints

Below is a summary of the key endpoints from the Postman collection.

1️⃣ Admin
Method	Endpoint	Description
POST	/admin	Create Admin
GET	/admin	Get all Admins
GET	/admin/:id	Get Admin by ID
PATCH	/admin/:id	Update Admin
DELETE	/admin/:id	Remove Admin
2️⃣ Customer
Method	Endpoint	Description
POST	/customer	Create Customer
GET	/customer	Get all Customers
GET	/customer/:id	Get Customer by ID
PATCH	/customer/:id	Update Customer
DELETE	/customer/:id	Delete Customer
3️⃣ Room Category
Method	Endpoint
POST	/rooms-category
GET	/rooms-category
GET	/rooms-category/:id
PATCH	/rooms-category/:id
DELETE	/rooms-category/:id
4️⃣ Room
Method	Endpoint
POST	/room
GET	/room
GET	/room/:id
PATCH	/room/:id
DELETE	/room/:id
5️⃣ Booking
Method	Endpoint
POST	/bookings
GET	/bookings
GET	/bookings/:id
PATCH	/bookings/:id
DELETE	/bookings/:id
6️⃣ Payment
Method	Endpoint
POST	/payments
GET	/payments
GET	/payments/:id
PATCH	/payments/:id
DELETE	/payments/:id
7️⃣ Food Inventory
Method	Endpoint
POST	/food-inventory
GET	/food-inventory
GET	/food-inventory/:id
PATCH	/food-inventory/:id
DELETE	/food-inventory/:id
8️⃣ Food Order Service
Method	Endpoint
POST	/food-order-service
GET	/food-order-service
GET	/food-order-service/:id
PATCH	/food-order-service/:id
DELETE	/food-order-service/:id
9️⃣ Room Service
Method	Endpoint
POST	/room-service
GET	/room-service
GET	/room-service/:id
PATCH	/room-service/:id
DELETE	/room-service/:id
🔟 Service
Method	Endpoint
POST	/services
GET	/services
GET	/services/:id
PATCH	/services/:id
DELETE	/services/:id
📂 Postman Collection

The complete Postman API collection is available in Hotel_Managment.postman_collection.json.
Import it into Postman to test all API routes.

📌 Deployment

See NestJS deployment documentation for instructions.
You can also deploy using NestJS Mau:

npm install -g @nestjs/mau
mau deploy
