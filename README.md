# Laravel 10 · Inertia · Tailwind CSS 4 · HeroUI Starter

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-10-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 10" />
  <img src="https://img.shields.io/badge/Inertia.js-v2-6C5CE7?style=for-the-badge&logo=inertia&logoColor=white" alt="Inertia.js v2" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/HeroUI-v3-000000?style=for-the-badge&logoColor=white" alt="HeroUI v3" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
</p>

<p align="center">
  A modern, opinionated starter kit for building full-stack web applications with <strong>Laravel 10</strong>, <strong>Inertia.js v2</strong>, <strong>React 19</strong>, <strong>Tailwind CSS v4</strong>, and <strong>HeroUI v3</strong> — all wired together with <strong>Vite 8</strong>.
</p>

<p align="center">
  <a href="https://github.com/technohard/Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter">
    <img src="https://img.shields.io/github/stars/technohard/Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/technohard/Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/technohard/Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter" alt="License" />
  </a>
</p>

---

## ✨ Features

- ⚡ **Laravel 10** — Robust PHP backend with elegant syntax
- 🔄 **Inertia.js v2** — Build SPAs without building an API; server-driven, client-rendered
- ⚛️ **React 19** — Latest React with modern hooks and concurrent features
- 🎨 **Tailwind CSS v4** — CSS-first configuration, lightning-fast builds
- 🧩 **HeroUI v3** — Beautiful, accessible React component library (formerly NextUI)
- 🎬 **Framer Motion** — Production-ready animation library for React
- 🚀 **Vite 8** — Next-generation frontend tooling with instant HMR
- 🌗 **Dark Mode Ready** — Pre-configured class-based dark mode support
- 📦 **Zero Config** — Everything is pre-wired and ready to go

---

## 📋 Requirements

| Requirement | Version  |
| ----------- | -------- |
| PHP         | ≥ 8.1    |
| Composer    | ≥ 2.x    |
| Node.js     | ≥ 18.x   |
| npm         | ≥ 9.x    |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/technohard/Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter.git
cd Laravel-10-Inertia-Tailwindcss-4-HeroUI-Starter
```

### 2. Install dependencies

```bash
# Backend
composer install

# Frontend
npm install
```

### 3. Environment setup

```bash
cp .env.example .env
php artisan key:generate
```

### 4. Run the application

Open **two terminal windows** and run:

```bash
# Terminal 1 — Laravel dev server
php artisan serve

# Terminal 2 — Vite dev server (HMR)
npm run dev
```

Visit **[http://localhost:8000](http://localhost:8000)** in your browser.

---

## 🗂️ Project Structure

```
├── app/                    # Laravel application (Models, Controllers, etc.)
├── resources/
│   ├── css/
│   │   ├── app.css         # Tailwind CSS v4 entry (CSS-first config)
│   │   └── hero.js         # HeroUI theme plugin configuration
│   ├── js/
│   │   ├── app.jsx         # Inertia + React entry point
│   │   ├── bootstrap.js    # Axios & global bootstrapping
│   │   └── Pages/          # Inertia page components (.jsx)
│   │       └── Welcome.jsx # Default landing page
│   └── views/
│       └── app.blade.php   # Root Blade template (Inertia shell)
├── routes/
│   └── web.php             # Web routes (Inertia::render)
├── vite.config.js          # Vite 8 config (Tailwind + Laravel + React)
├── package.json            # Frontend dependencies
└── composer.json           # Backend dependencies
```

---

## ⚙️ Configuration Details

### Tailwind CSS v4 (CSS-first)

Tailwind CSS v4 uses a **CSS-first** configuration approach. All config lives in `resources/css/app.css`:

```css
@import "tailwindcss";
@plugin "./hero.js";

@source "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}";

@layer theme, base, components, utilities;

@custom-variant dark (&:is(.dark *));
```

### HeroUI Theme Plugin

The HeroUI theme is configured in `resources/css/hero.js`:

```js
import { heroui } from "@heroui/theme";

export default heroui({
  themes: {
    light: {},
    dark: {},
  },
});
```

You can customize colors, fonts, and spacing by extending the `light` and `dark` theme objects. See the [HeroUI Theming Docs](https://heroui.com/docs/customization/theme) for details.

### Vite Configuration

`vite.config.js` wires together Tailwind CSS, Laravel, and React plugins:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
```

---

## 📄 Creating Pages

### 1. Add a route in `routes/web.php`

```php
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('About');
});
```

### 2. Create the page component

Create `resources/js/Pages/About.jsx`:

```jsx
import { Head } from "@inertiajs/react";
import { Button } from "@heroui/react";

export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Head title="About" />
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">About Page</h1>
                <Button color="primary">Hello from HeroUI!</Button>
            </div>
        </div>
    );
}
```

That's it — no manual routing on the frontend, Inertia handles it all.

---

## 🏗️ Building for Production

```bash
npm run build
```

This outputs optimized assets to `public/build/`. Deploy the full Laravel application as you normally would.

---

## 🛠️ Tech Stack

| Layer     | Technology            | Version |
| --------- | --------------------- | ------- |
| Backend   | Laravel               | 10.x   |
| Adapter   | Inertia.js            | 2.x    |
| Frontend  | React                 | 19.x   |
| Styling   | Tailwind CSS          | 4.x    |
| UI Library| HeroUI                | 3.x    |
| Animation | Framer Motion         | 12.x   |
| Bundler   | Vite                  | 8.x    |
| HTTP      | Axios                 | 1.x    |
| Auth      | Laravel Sanctum       | 3.x    |

---

## 📚 Resources

- [Laravel Documentation](https://laravel.com/docs/10.x)
- [Inertia.js Documentation](https://inertiajs.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [HeroUI Documentation](https://heroui.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vite.dev/)

---

## 📝 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
