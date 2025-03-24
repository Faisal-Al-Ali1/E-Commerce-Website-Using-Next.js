# 🛒 E-Commerce Store with Next.js 13+

A handy online store that fetches products via the **Fakestore API**, using **Next.js 13+ App Router**, **Tailwind CSS**, and **Axios** in **JavaScript**. Browse all products, check individual product details, or learn more on the About page.

---

## ⚙️ Technologies Employed

1. **Next.js 13+ App Router**  
   - A React-based framework simplifying server-side rendering and static site generation.  
   - [Official Docs](https://nextjs.org/docs)

2. **Tailwind CSS**  
   - A utility-first CSS framework that enables rapid UI development with ease.  
   - [Official Docs](https://tailwindcss.com/docs)

3. **Axios**  
   - A JavaScript library for handling HTTP requests seamlessly.  
   - [Official Docs](https://axios-http.com/docs/intro)

4. **Fakestore API**  
   - An open-source RESTful API providing sample product data for testing.  
   - [Documentation](https://fakestoreapi.com/)

5. **JavaScript**  
   - The language that powers this project (no TypeScript here).

---

## 🌐 Data Fetching Strategies

Leveraging various **Next.js** data fetching mechanisms ([see docs](https://nextjs.org/docs/basic-features/data-fetching)):

| Page               | Strategy         | Description                                                           |
|--------------------|-----------------|-----------------------------------------------------------------------|
| `/` (Home)         | **SSG**          | Static content, generated at build time.                              |
| `/about`           | **SSG**          | Static content, featuring a Next.js Image component.                  |
| `/products`        | **ISR** or **SSR** | Incremental updates (ISR) or fresh rendering on every request (SSR).   |
| `/products/[id]`   | **SSG** or **SSR** | Pre-render each product (SSG) or dynamically fetch via SSR.            |

> **SSG** (Static Site Generation), **SSR** (Server-Side Rendering), and **ISR** (Incremental Static Regeneration) are supported out of the box in Next.js.  
> [Learn more here](https://nextjs.org/docs/basic-features/data-fetching).

---

## 🚀 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/my-ecommerce.git
   cd my-ecommerce
