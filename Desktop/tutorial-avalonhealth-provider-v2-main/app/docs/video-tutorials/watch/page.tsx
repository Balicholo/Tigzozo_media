import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Tutorial - Avalon Health",
  description: "Watch video tutorials to learn how to use Avalon Health effectively",
};

// Add this export to enable dynamic rendering
export const dynamic = 'force-dynamic';

export default function VideoWatchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const videoId = searchParams.v as string || "dQw4w9WgXcQ"; // Default video ID as fallback
  
  // This would typically come from a database or API
  const videoData = {
    title: "Avalon Health Tutorial",
    description: "Learn how to use Avalon Health effectively with this comprehensive tutorial. This video covers the basics of setting up your account, creating projects, managing tasks, and collaborating with team members.",
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" className="mb-4 -ml-4 flex items-center" asChild>
        <Link href="/docs/video-tutorials">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Video Tutorials
        </Link>
      </Button>

      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">{videoData.title}</h1>
      
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/ubXh8m9Sy4c?si=KjF4ut7Y0BepnBTT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      {/* <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoData.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        ></iframe> */}
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-muted-foreground">{videoData.description}</p>
        
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-4 hover:border-primary transition-colors">
              <h3 className="font-medium">Getting Started with Avalon Health</h3>
              <p className="text-sm text-muted-foreground mb-2">Learn the basics of Avalon Health and set up your account.</p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/docs/video-tutorials/watch?v=example1">
                  Watch Video
                </Link>
              </Button>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary transition-colors">
              <h3 className="font-medium">Creating Your First Project</h3>
              <p className="text-sm text-muted-foreground mb-2">Step-by-step guide to creating your first project.</p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/docs/video-tutorials/watch?v=example2">
                  Watch Video
                </Link>
              </Button>
            </div>
            <div className="rounded-lg border p-4 hover:border-primary transition-colors">
              <h3 className="font-medium">Managing Tasks and Deadlines</h3>
              <p className="text-sm text-muted-foreground mb-2">Learn how to create and manage tasks effectively.</p>
              <Button variant="link" className="px-0" asChild>
                <Link href="/docs/video-tutorials/watch?v=example3">
                  Watch Video
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <div className="rounded-lg border p-4">
            <p className="mb-4">Download these resources to follow along with the tutorial:</p>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary hover:underline">
                  TaskMaster Quick Start Guide (PDF)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Project Template (XLSX)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  Keyboard Shortcuts Cheat Sheet (PDF)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 