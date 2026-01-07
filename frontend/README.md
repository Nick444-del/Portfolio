# 🎨 Frontend – Portfolio Application

This folder contains the **frontend application** for the Portfolio project.
It is built using **Vite + React with TypeScript**, styled with **Tailwind CSS**, and follows a **component-driven architecture** with centralized state management and routing.

The frontend consumes REST APIs from the backend to display projects, categories, images, and to manage admin-only operations.

---

## 🛠️ Tech Stack

### Core

* **Vite** – Fast build tool and dev server
* **React** – Component-based UI library
* **TypeScript** – Type safety and better developer experience

### Styling

* **Tailwind CSS** – Utility-first CSS framework
* **PostCSS** – CSS processing

### State & Routing

* **React Context API** – Global state & API handling
* **React Router DOM** – Client-side routing

### Tooling & Quality

* **ESLint** – Code quality & linting
* **TypeScript ESLint** – Type-aware linting
* **Autoprefixer** – Cross-browser CSS support

### Deployment

* **Vercel** – Frontend deployment and hosting

---

## 📂 Folder Structure

```text
frontend/
│
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images and static resources
│   ├── components/      # Reusable UI components
│   ├── context/         # Global state & API context
│   ├── pages/           # Page-level components
│   ├── routes/          # Route configuration & guards
│   │
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   ├── App.css          # Global app styles
│   └── index.css        # Tailwind base styles
│
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment config
├── package.json         # Dependencies and scripts
└── package-lock.json    # Dependency lock file
```

---

## 🧠 Architecture Overview

### Component-Based Design

* UI is broken into **reusable, composable components**
* Page-level components handle layout and data composition
* Smaller components focus on presentation and interaction

---

### Global State Management (Context API)

* React Context is used for:

  * API communication
  * Shared application state
  * Authentication & admin state
* Prevents prop drilling
* Keeps API logic centralized and predictable

---

### Routing Strategy

* **React Router DOM** handles navigation
* Route-level separation between:

  * Public pages
  * Admin-only pages
* Admin routes are protected and redirect unauthenticated users to login

---

## 🔐 Admin Panel Integration

* Admin panel is accessible via `/admin`
* No public registration route exists
* Login is required to access admin features
* Access is granted only if:

  * User is authenticated
  * `isAdmin === true` (verified by backend)

This mirrors **real-world internal dashboards** rather than public user systems.

---

## 🌐 API Integration

* Frontend communicates with backend via REST APIs
* Backend URL is centrally managed
* API calls are handled inside context/services
* Proper loading and error states are implemented

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Start Development Server

```bash
npm run dev
```

Application will run on:

```
http://localhost:5173
```

---

## 🧪 Code Quality

* ESLint ensures consistent code style
* TypeScript enforces strict typing
* Modular folder structure improves maintainability

---

## 🚀 Deployment

* Frontend is deployed using **Vercel**
* `vercel.json` is configured for proper routing
* Environment variables are handled via Vercel dashboard

---

## 📈 Current Features

* Responsive portfolio UI
* Dynamic project & category rendering
* Admin dashboard integration
* Protected admin routes
* Backend API integration
* Clean and scalable architecture

---

## 🔮 Future Improvements

* Improved UI animations
* SEO optimization
* Better loading skeletons
* Role-based UI rendering
* Performance optimization (memoization, lazy loading)

---

## 👨‍💻 Author

**Nikhil Gorule**
MERN Stack Developer
📍 Mumbai, India
📧 [nikhilgorule7@gmail.com](mailto:nikhilgorule7@gmail.com)
