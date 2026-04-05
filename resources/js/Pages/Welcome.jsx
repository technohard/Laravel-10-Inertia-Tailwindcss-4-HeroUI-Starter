import React from "react";
import { Head, Link } from "@inertiajs/react";
import { 
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@heroui/react";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <Head title="Welcome" />

      {/* Standard Header with Tailwind */}
      <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 dark:bg-slate-900/75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0 flex items-center">
                    <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Laravel Neon Starter</span>
                </div>
                <div className="hidden sm:flex space-x-8">
                    <a href="#" className="font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-300">Features</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-400">Documentation</a>
                </div>
                <div className="flex items-center">
                    <Button variant="outline" size="sm">Start Building</Button>
                </div>
            </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-6 flex-grow py-16">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Build Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Inertia & HeroUI</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl dark:text-slate-400">
            A beautiful, modern, and rapid development starter kit featuring Laravel 10, Tailwind CSS v4, and HeroUI v3.
          </p>
          <div className="flex gap-4">
            <Button size="lg" color="primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS v4</CardTitle>
              <CardDescription>Styling Engine</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Harness the power of the latest TailwindCSS version, fully optimized with a CSS-first approach for speed and simplicity.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>HeroUI Components</CardTitle>
              <CardDescription>React UI Library v3</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Beautiful, fast and modern React UI library. It comes with full accessible components out of the box using React Aria Components.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Neon Ready</CardTitle>
              <CardDescription>Database</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Start with static pages or default SQLite, and simply update your .env to connect straight to a scalable Neon Postgres database.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
