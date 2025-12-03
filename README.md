# 🧸 ToyTopia - Kids Toy Marketplace

![Project Status](https://img.shields.io/badge/Status-In%20Development-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)

**ToyTopia** is a modern, responsive single-page e-commerce application designed for buying and selling high-quality, handmade, and educational toys. It focuses on connecting local makers with parents who value sustainability and creativity.

## 🚀 Live Demo
> https://simpleauth-e3d22.web.app/

## ✨ Key Features

### 🛒 Shopping Experience
* **Hero Slider:** Interactive banner showcasing featured products using Swiper.js.
* **Advanced Search & Filter:** Search toys by name, sort by price (Low/High), and filter by category via a sticky sidebar (desktop) or drawer (mobile).
* **Product Details:** Comprehensive details page with image zoom, seller info, and a sticky inquiry form.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop using Tailwind CSS.

### 👤 User Features
* **Authentication:** Secure Login and Registration (Email/Password & Google Social Login) using **Firebase**.
* **User Profile:** Dashboard to view account info and update display name/profile picture.
* **My Toys (Private):** Sellers can manage their own listings (Add/Update/Delete).
* **Toy Return:** A streamlined, stylish interface for submitting return requests.

### ℹ️ Pages & Utilities
* **About Us:** Storytelling page featuring company mission, team, and stats.
* **Support Center:** Searchable FAQ, quick access grid for orders/shipping, and contact options.
* **Contact:** Glassmorphism-style contact form with email integration.
* **Toast Notifications:** Real-time feedback for actions (Login success, Item added, Form submitted).

## 🛠️ Technology Stack

**Frontend:**
* [React.js](https://reactjs.org/) - Component-based UI library.
* [React Router DOM](https://reactrouter.com/) - Client-side routing.
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
* [DaisyUI](https://daisyui.com/) - Component classes for Tailwind.

**Libraries & Tools:**
* **Firebase Authentication:** User management.
* **Swiper.js:** Touch-enabled carousels.
* **React Icons:** Lightweight vector icons.
* **React Toastify:** Beautiful notification popups.
* **AOS (Animate On Scroll):** Scroll animations.

## ⚙️ Installation & Run Locally

Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/toytopia-client.git](https://github.com/your-username/toytopia-client.git)
cd toytopia-client
npm i
npm run dev
