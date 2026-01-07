# 📦 Backend – Portfolio API

This folder contains the **backend service** for the Portfolio application.
It is built using **Node.js, Express.js, MongoDB**, and follows a **modular MVC-based architecture** with proper routing, middleware handling, and environment configuration.

The backend exposes REST APIs consumed by the frontend to manage projects, categories, images, and other dynamic data.

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – REST API framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB
* **Cloudinary** – Cloud-based image storage
* **dotenv** – Environment variable management
* **CORS** – Cross-origin resource sharing

---

## 📂 Folder Structure

```text
backend/
│
├── configs/          # Configuration files (DB connection, Cloudinary setup)
├── controllers/      # Business logic for handling requests
├── middleware/       # Custom middleware (auth, error handling, etc.)
├── models/           # Mongoose schemas and models
├── routers/          # Express route definitions
│
├── .env              # Environment variables (ignored in production)
├── .gitignore        # Git ignore rules
├── index.js          # Application entry point
├── package.json      # Project metadata and scripts
└── package-lock.json # Dependency lock file
```

---

## 🔄 Application Flow

1. Client sends a request to an API endpoint
2. Request is routed via **routers**
3. Middleware processes validation / CORS / authentication
4. Controllers execute business logic
5. Models interact with MongoDB
6. Response is returned to the client

This separation ensures:

* Better maintainability
* Easier debugging
* Scalable codebase

---

## 🔐 Environment Variables

Create a `.env` file in the backend root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ `.env` is excluded from version control for security reasons.

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Run Development Server

```bash
npm run dev
```

OR (if using nodemon manually):

```bash
node index.js
```

Server will start on:

```
http://localhost:5000
```

---

## 📡 API Design

* RESTful endpoints
* Centralized routing
* Controller-based logic
* Proper status codes and JSON responses
* CORS enabled for frontend communication

Example route pattern:

```text
/api/projects
/api/categories
/api/upload
```

---

## ☁️ Image Handling

* Images are uploaded to **Cloudinary**
* Only image URLs are stored in MongoDB
* Improves performance and reduces backend load
* Enables easy scaling and CDN benefits

---

## 🧠 Middleware Usage

Custom middleware is used for:

* Request validation
* Error handling
* CORS configuration
* Reusable logic across routes

This keeps controllers clean and focused.

---

## 📈 Current Status

* Core APIs implemented
* CRUD operations for major entities
* MongoDB schema validation in place
* Cloudinary image integration completed
* JWT authentication & protected routes
* Admin dashboard integration

---

## 🔮 Future Enhancements

* Centralized error logger
* API rate limiting
* Input validation using Joi/Zod

---

## 👨‍💻 Author

**Nikhil Gorule**
MERN Stack Developer
📍 Mumbai, India
📧 [nikhilgorule7@gmail.com](mailto:nikhilgorule7@gmail.com)
