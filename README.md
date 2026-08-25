# Full-Stack Book Management Web Application (WEB422)

## Overview
A feature-rich, full-stack web application built with **Next.js**, **React-Bootstrap**, **Node.js (Express)**, and **MongoDB**. This application interfaces with the public OpenLibrary API to provide robust book discovery, advanced search capabilities, secure user authentication (JWT), and personalized cloud-backed favourites management.

---

## 🚀 Key Features & Technical Highlights

* **Advanced Search & Pagination:** Client-side search form leveraging React Hook Form and Next.js dynamic routing to query books by author, title, subject, language, and publication year, complete with paginated result views.
* **Global State Management:** Utilized **Jotai** atoms to manage global application state, enabling seamless cross-component synchronization of user favourites.
* **Secure Authentication & Authorization:** Implemented a robust security layer featuring **JWT (JSON Web Token)** authentication, Passport.js strategy, password hashing, and a Next.js **Route Guard** component to protect private user routes.
* **Data Persistence (Backend API & MongoDB):** Developed and deployed a custom RESTful Express backend API integrated with **MongoDB Atlas** to securely persist user accounts and individual favourites lists across sessions and devices.
* **Optimized Data Fetching:** Leveraged **SWR** (Stale-While-Revalidate) for high-performance client-side data fetching, automatic caching, and seamless loading states.

---

## 📂 Repository Structure

* **`my-app/`:** Frontend Next.js application.
  * **`pages/`:** Application views including dynamic book routes (`works/[workId].js`), search, authentication (`login.js`, `register.js`), and user favourites.
  * **`components/`:** Reusable UI components including `BookDetails`, `BookCard`, `MainNav`, and the security `RouteGuard`.
  * **`lib/`:** Utility modules for API requests (`userData.js`) and token handling (`authenticate.js`).
  * **`store.js`:** Jotai global state definitions.
* **`user-api/`:** Backend Express REST API server.
  * **`server.js`:** Main server entry point configured with Passport and secured API routes.
  * **`user-service.js`:** Mongoose database service logic for user management and data persistence.
