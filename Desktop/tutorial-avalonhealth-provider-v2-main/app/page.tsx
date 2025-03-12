"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, BookOpen, HelpCircle, Video } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    window.location.href = "/docs/getting-started";
  }, []);

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to {process.env.NEXT_PUBLIC_BRAND_NAME} Tutorials
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Learn how to use our app with step-by-step tutorials, video guides, and interactive examples.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search tutorials..."
                  className="w-full bg-background py-2 pl-8 pr-4 rounded-md border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button asChild>
                <Link href="/docs/getting-started">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/video-tutorials">
                  <Video className="mr-2 h-4 w-4" /> Video Tutorials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Step-by-Step Guides</h3>
              <p className="text-center text-muted-foreground">
                Comprehensive tutorials to help you master every feature of our app.
              </p>
              <Button variant="link" asChild>
                <Link href="/docs/getting-started">
                  Browse Guides <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Video Tutorials</h3>
              <p className="text-center text-muted-foreground">
                Watch and learn with our collection of helpful video guides.
              </p>
              <Button variant="link" asChild>
                <Link href="/docs/video-tutorials">
                  Watch Videos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">FAQ</h3>
              <p className="text-center text-muted-foreground">
                Find answers to commonly asked questions about our app.
              </p>
              <Button variant="link" asChild>
                <Link href="/docs/faq">
                  View FAQ <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Tutorials
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Check out our most popular tutorials to get started quickly.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              <Link href="/docs/getting-started/first-steps" className="group rounded-lg border bg-background p-4 shadow-sm transition-colors hover:border-primary">
                <div className="relative aspect-video overflow-hidden rounded-md mb-3">
                  <Image 
                    src="https://i.ibb.co/bR8C92YK/Afrika-humanitaire-hulp-arts-die-voor-de-pati-nt-zorgt-Gratis-Foto.jpg" 
                    alt="Getting Started Tutorial" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary">Getting Started with Our App</h3>
                <p className="text-sm text-muted-foreground">Learn the basics and set up your account in minutes.</p>
              </Link>
              <Link href="/docs/features/dashboard" className="group rounded-lg border bg-background p-4 shadow-sm transition-colors hover:border-primary">
                <div className="relative aspect-video overflow-hidden rounded-md mb-3">
                  <Image 
                    src="https://i.ibb.co/nMcSvLNf/Screenshot-2025-03-11-134546.png" 
                    alt="Dashboard Tutorial" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary">Navigating the Dashboard</h3>
                <p className="text-sm text-muted-foreground">Master the dashboard to access all features efficiently.</p>
              </Link>
              <Link href="/docs/features/advanced" className="group rounded-lg border bg-background p-4 shadow-sm transition-colors hover:border-primary">
                <div className="relative aspect-video overflow-hidden rounded-md mb-3">
                  <Image 
                    src="https://i.ibb.co/VcPp8z0t/Screenshot-2025-03-11-165213.png" 
                    alt="Advanced Features Tutorial" 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary">Advanced Features</h3>
                <p className="text-sm text-muted-foreground">Take your skills to the next level with advanced techniques.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}