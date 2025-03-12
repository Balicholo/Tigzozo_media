import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME + " - Tutorial Documentation",
  description: "Learn how to use our app with step-by-step tutorials and guides",
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction to Avalon Health</h1>
      
      <div className="relative aspect-video overflow-hidden rounded-lg border">
        <Image 
          src="https://i.ibb.co/VcPp8z0t/Screenshot-2025-03-11-165213.png" 
          alt="TaskMaster App Dashboard" 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="space-y-4">
        <p className="text-lg">
          Welcome to Avalon Health, your all-in-one AI-powered healthcare assistant. This tutorial documentation will guide you through all the features and functionalities of our platform, helping you streamline patient management, schedule appointments, and enhance your practice's efficiency in no time.
        </p>
        
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">What is Avalon Health?</h2>
        <p>
          Avalon Health is a comprehensive AI-powered healthcare assistant designed to help medical professionals and healthcare teams streamline patient management, schedule appointments, and enhance workflow efficiency. With an intuitive interface and powerful features, Avalon Health simplifies healthcare administration for improved patient care.
        </p>
        
<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Key Features</h2>
<ul className="list-disc pl-6 space-y-2">
  <li><strong>Patient Management:</strong> Easily store, organize, and access patient records securely.</li>
  <li><strong>Appointment Scheduling:</strong> Streamline scheduling with automated reminders and easy calendar integration.</li>
  <li><strong>Telemedicine Support:</strong> Conduct virtual consultations with secure video and messaging features.</li>
  <li><strong>AI-Powered Insights:</strong> Get data-driven recommendations to improve patient care and operational efficiency.</li>
  <li><strong>Mobile Access:</strong> Manage patient data and appointments on the go with our mobile-friendly platform.</li>
  <li><strong>Integration with Health Systems:</strong> Seamlessly connect with electronic health records (EHR) and other medical tools.</li>
</ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-4">Getting Started</h2>
        <p>
          Ready to dive in? Follow our step-by-step tutorials to get started with Avalon Health:
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 pt-2">
          <div className="rounded-lg border p-4 hover:border-primary transition-colors">
            <h3 className="font-medium">First Steps</h3>
            <p className="text-sm text-muted-foreground mb-2">Learn the basics of Avalon Health and set up your account.</p>
            <Button variant="link" className="px-0" asChild>
              <Link href="/docs/getting-started/first-steps">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg border p-4 hover:border-primary transition-colors">
            <h3 className="font-medium">Installation</h3>
            <p className="text-sm text-muted-foreground mb-2">Install Avalon Health on your desktop or mobile device.</p>
            <Button variant="link" className="px-0" asChild>
              <Link href="/docs/getting-started/first-steps">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg border p-4 hover:border-primary transition-colors">
            <h3 className="font-medium">Account Setup</h3>
            <p className="text-sm text-muted-foreground mb-2">Configure your profile and account settings.</p>
            <Button variant="link" className="px-0" asChild>
              <Link href="/docs/getting-started/first-steps">
                View Guide <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="rounded-lg border p-4 hover:border-primary transition-colors">
            <h3 className="font-medium">Dashboard Overview</h3>
            <p className="text-sm text-muted-foreground mb-2">Navigate the Avalon Health dashboard like a pro.</p>
            <Button variant="link" className="px-0" asChild>
              <Link href="https://avalonhealth.cloud">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Video Introduction</h2>
        <div className="relative aspect-video overflow-hidden rounded-lg border">
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <div className="text-center">
              <p className="text-lg font-medium">Avalon Health Introduction Video</p>
              <p className="text-sm text-muted-foreground">A quick overview of Avalon Health's features and benefits</p>
              <Button className="mt-4" asChild>
                <Link href="/docs/video-tutorials">
                  Watch Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Need Help?</h2>
        <p>
          If you have any questions or need assistance, check out our <Link href="/docs/faq" className="text-primary hover:underline">FAQ section</Link> or <Link href="mailto:support@avalonhealth.cloud" className="text-primary hover:underline">contact our support team</Link>.
        </p>
      </div>
    </div>
  );
}