import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME + " - Video Tutorials",
  description: "Watch video tutorials to learn how to use Avalon Health effectively",
};

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoId: string;
}

function VideoCard({ title, description, thumbnail, duration, videoId }: VideoCardProps) {
  return (
    <div className="rounded-lg border overflow-hidden bg-background">
      <div className="relative aspect-video">
        <Image 
          src={thumbnail} 
          alt={title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
          <Link href={`/docs/video-tutorials/watch?v=${videoId}`} className="rounded-full bg-primary/90 p-3 text-primary-foreground">
            <Play className="h-8 w-8" />
          </Link>
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <Button variant="link" className="px-0" asChild>
            <Link href={`/docs/video-tutorials/watch?v=${videoId}`}>
              Watch Video
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function VideoTutorialsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Video Tutorials</h1>
      <p className="text-lg text-muted-foreground">
        Learn how to use TaskMaster with our comprehensive video tutorials. These videos will guide you through all the features and functionalities of our app.
      </p>

      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="beginner" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard 
              title="Getting Started with Avalon" 
              description="Learn the basics of TaskMaster and how to set up your account for success."
              thumbnail="https://i.ibb.co/VcPp8z0t/Screenshot-2025-03-11-165213.png"
              duration="5:24"
              videoId="example1"
            />
            <VideoCard 
              title="Creating Your First Project" 
              description="Step-by-step guide to creating and organizing your first project in TaskMaster."
              thumbnail="https://i.ibb.co/21PH6TbX/Screenshot-2025-03-11-163412.png"
              duration="7:15"
              videoId="example2"
            />
            <VideoCard 
              title="Registration" 
              description="Learn how to create tasks, set deadlines, and track progress effectively."
              thumbnail="https://i.ibb.co/PG65G27Y/Screenshot-2025-03-11-162655.png"
              duration="6:42"
              videoId="example3"
            />
            <VideoCard 
              title="Scheduling" 
              description="Discover how to invite team members and collaborate on projects together."
              thumbnail="https://i.ibb.co/5WB10FqG/Screenshot-2025-03-11-162454.png"
              duration="8:10"
              videoId="example4"
            />
            <VideoCard 
              title="Transcriptions" 
              description="A tour of the TaskMaster mobile app for iOS and Android devices."
              thumbnail="https://i.ibb.co/prZ4sNb1/Generative-AI-s-Happy-Smile-Doctors-Nurses-and-Other-Hospital-Staff-Premium-AI-generated-image.jpg"
              duration="4:55"
              videoId="example5"
            />
            <VideoCard 
              title="Customizing Your Workspace" 
              description="Learn how to personalize your TaskMaster workspace to suit your preferences."
              thumbnail="https://i.ibb.co/gFfgZXBZ/Screenshot-2025-03-11-160755.png"
              duration="5:38"
              videoId="example6"
            />
          </div>
        </TabsContent>
        <TabsContent value="intermediate" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard 
              title="Features" 
              description="Learn about subtasks, dependencies, and advanced task organization techniques."
              thumbnail="https://i.ibb.co/Y4gDgbJ9/Screenshot-2025-03-11-180032.png"
              duration="9:12"
              videoId="example7"
            />
            <VideoCard 
              title="Profile" 
              description="Save time by creating and using project templates for recurring work."
              thumbnail="https://i.ibb.co/7NC15Kc7/Screenshot-2025-03-11-175847.png"
              duration="7:45"
              videoId="example8"
            />
            <VideoCard 
              title="Custom Settings" 
              description="Organize your work with custom fields and tags for better filtering and reporting."
              thumbnail="https://i.ibb.co/j9YQwcW4/Screenshot-2025-03-11-175744.png"
              duration="6:30"
              videoId="example9"
            />
            <VideoCard 
              title="Patients Transfer" 
              description="Track time spent on tasks and generate time reports for billing or productivity analysis."
              thumbnail="https://i.ibb.co/sJDBmCMP/Screenshot-2025-03-11-175805.png"
              duration="8:22"
              videoId="example10"
            />
          </div>
        </TabsContent>
        <TabsContent value="advanced" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard 
              title="Automations and Workflows" 
              description="Set up automated workflows to reduce manual work and increase efficiency."
              thumbnail="https://i.ibb.co/0RYCgRB9/Screenshot-2025-03-11-175701.png"
              duration="10:15"
              videoId="example11"
            />
            <VideoCard 
              title="Clinics" 
              description="Generate and customize detailed reports to gain insights into your projects and team performance."
              thumbnail="https://i.ibb.co/bR8C92YK/Afrika-humanitaire-hulp-arts-die-voor-de-pati-nt-zorgt-Gratis-Foto.jpg"
              duration="9:48"
              videoId="example12"
            />
            <VideoCard 
              title="Searching Patients" 
              description="Learn how to integrate TaskMaster with other tools using our API."
              thumbnail="https://i.ibb.co/kgWPhq04/Screenshot-2025-03-11-180946.png"
              duration="12:30"
              videoId="example13"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Avalon Health - tutorial</h2>
        <p className="mb-6">
         Learn how to use Avalon Health effectively with this comprehensive tutorial. This video covers the basics of setting up your account, creating projects, managing tasks, and collaborating with team members.
        </p>
        <div className="relative aspect-video overflow-hidden rounded-lg border">
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <div className="text-center">
              <p className="text-lg font-medium">Tutorial Video</p>
              <p className="text-sm text-muted-foreground mb-4">This is where a YouTube video would be embedded</p>
              <iframe
          src="https://www.youtube.com/embed/ubXh8m9Sy4c?si=KjF4ut7Y0BepnBTT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        ></iframe>
              {/* <code className="px-2 py-1 bg-background rounded border">
                {`<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
              </code> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 