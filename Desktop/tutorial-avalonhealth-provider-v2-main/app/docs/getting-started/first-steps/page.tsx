import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "First Steps - Avalon Health Tutorial",
  description: "Learn the basics of Avalon Health and set up your account for success",
};

export default function FirstStepsPage() {
  return (
    <div className="space-y-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">First Steps with Avalon Health</h1>
      
      <div className="relative aspect-video overflow-hidden rounded-lg border">
        <Image 
          src="https://i.ibb.co/nMcSvLNf/Screenshot-2025-03-11-134546.png" 
          alt="Avalon Health" 
          fill 
          className="object-cover"
        />
      </div>
      
      <div className="space-y-4">
       <p className="text-lg">
         Welcome to Avalon Healthcare! This guide will walk you through the essential first steps to get started with our AI-powered healthcare assistant. By the end of this tutorial, you'll have your account set up and be ready to manage patient records, schedule appointments, and streamline your practice.
       </p>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            If you haven't installed Avalon Health yet, check out our <Link href="/docs/getting-started/installation" className="text-primary hover:underline">installation guide</Link> first.
          </AlertDescription>
        </Alert>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Step 1: Create Your Account</h2>
        <div className="space-y-4">
          <p>
            To get started with Avalon Health, you'll need to create an account. Follow these simple steps:
          </p>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p className="font-medium">Open Avalon Health</p>
              <p className="text-muted-foreground">Launch the Avalon Health application on your device or visit <span className="font-mono bg-muted px-1 py-0.5 rounded">avalonhealth.cloud</span> in your web browser.</p>
              <div className="mt-2 rounded-md border overflow-hidden">
                <Image 
                  src="https://i.ibb.co/gFfgZXBZ/Screenshot-2025-03-11-160755.png" 
                  alt="TaskMaster Login Screen" 
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </li>
            <li>
              <p className="font-medium">Click "Sign Up"</p>
              <p className="text-muted-foreground">On the welcome screen, click the "Sign Up" button to create a new account.</p>
            </li>
            <li>
              <p className="font-medium">Enter Your Information</p>
              <p className="text-muted-foreground">Fill in the required fields:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Username</li>
                <li>Password (must be at least 8 characters with a mix of letters, numbers, and symbols)</li>
              </ul>
            </li>
            <li>
              <p className="font-medium">Verify Your Email</p>
              <p className="text-muted-foreground">Check your email inbox for a verification message from Avalon Health. Click the verification link to confirm your email address.</p>
              
              <Alert variant="destructive" className="mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  If you don't see the verification email, check your spam or junk folder. The email should arrive within a few minutes.
                </AlertDescription>
              </Alert>
            </li>
          </ol>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Step 2: Set Up Your Profile</h2>
        <div className="space-y-4">
          <p>
            After verifying your email, you'll be prompted to set up your profile. This helps personalize your Avalon Health experience and makes it easier for team members to identify you.
          </p>
          
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal">Personal Account</TabsTrigger>
              <TabsTrigger value="team">Team Account</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4 pt-4">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-medium">Upload a Profile Picture</p>
                  <p className="text-muted-foreground">Click on the avatar placeholder and select a profile picture from your device.</p>
                </li>
                <li>
                  <p className="font-medium">Set Your Time Zone</p>
                  <p className="text-muted-foreground">Select your time zone from the dropdown menu. This ensures that deadlines and notifications are displayed in your local time.</p>
                </li>
                <li>
                  <p className="font-medium">Choose Notification Preferences</p>
                  <p className="text-muted-foreground">Select how you'd like to receive notifications (email, in-app, or both).</p>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="team" className="space-y-4 pt-4">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-medium">Create a Team</p>
                  <p className="text-muted-foreground">Enter your team or organization name and upload a team logo if available.</p>
                </li>
                <li>
                  <p className="font-medium">Set Team Time Zone</p>
                  <p className="text-muted-foreground">Select the primary time zone for your team.</p>
                </li>
                <li>
                  <p className="font-medium">Invite Team Members</p>
                  <p className="text-muted-foreground">Enter the email addresses of team members you'd like to invite to TaskMaster.</p>
                </li>
                <li>
                  <p className="font-medium">Set Team Notification Preferences</p>
                  <p className="text-muted-foreground">Configure default notification settings for your team.</p>
                </li>
              </ol>
            </TabsContent>
          </Tabs>
          
          <div className="rounded-md border overflow-hidden mt-4">
            <Image 
              src="https://i.ibb.co/prZ4sNb1/Generative-AI-s-Happy-Smile-Doctors-Nurses-and-Other-Hospital-Staff-Premium-AI-generated-image.jpg" 
              alt="Avalon Health Profile Setup" 
              width={800}
              height={450}
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Step 3: Take the Tour</h2>
        <div className="space-y-4">
          <p>
            Avalon Health offers an interactive tour to help you get familiar with the interface and key features. We highly recommend taking this tour to get the most out of Avalon Health.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Dashboard Tour</h3>
              <p className="text-sm text-muted-foreground">Learn about the main dashboard and how to navigate between different sections.</p>
              <div className="mt-2 rounded-md border overflow-hidden">
                <Image 
                  src="https://i.ibb.co/5WB10FqG/Screenshot-2025-03-11-162454.png" 
                  alt="Avalon Dashboard Tour" 
                  width={400}
                  height={225}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Project Creation Tour</h3>
              <p className="text-sm text-muted-foreground">Learn how to create and organize your first project.</p>
              <div className="mt-2 rounded-md border overflow-hidden">
                <Image 
                  src="https://i.ibb.co/PG65G27Y/Screenshot-2025-03-11-162655.png" 
                  alt="Avalon Project Creation Tour" 
                  width={400}
                  height={225}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-6">Step 4: Customize Your Workspace</h2>
        <div className="space-y-4">
          <p>
            Avalon Health allows you to customize your workspace to suit your preferences and workflow. Here are some customization options to explore:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Theme:</strong> Choose between light, dark, or system theme in the settings menu.
            </li>
            <li>
              <strong>Dashboard Layout:</strong> Arrange widgets and panels on your dashboard to display the information most relevant to you.
            </li>
            <li>
              <strong>Quick Access:</strong> Pin frequently used projects or tasks to your sidebar for easy access.
            </li>
            <li>
              <strong>Keyboard Shortcuts:</strong> Enable and customize keyboard shortcuts to speed up your workflow.
            </li>
          </ul>
          
          <div className="rounded-md border overflow-hidden mt-4">
            <Image 
              src="https://i.ibb.co/21PH6TbX/Screenshot-2025-03-11-163412.png" 
              alt="TaskMaster Workspace Customization" 
              width={800}
              height={450}
              className="object-cover"
            />
          </div>
        </div>

        <Alert className="mt-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-800 dark:text-green-300">Congratulations!</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-400">
            You've completed the first steps to getting started with TaskMaster. You're now ready to create your first project and start being more productive!
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button asChild>
            <Link href="https://avalonhealth.cloud">{/* /docs/features/projects/creating */}
              Create Your First Project
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/video-tutorials/watch?v=example1">
              Watch Video Tutorial
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 