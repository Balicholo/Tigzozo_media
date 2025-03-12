"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";
import Link from "next/link";

// Mock search results - in a real app, this would come from a search API or database
const mockSearchResults = [
  {
    title: "Getting Started with Avalon Health",
    description: "Learn the basics of Avalon Health and set up your account for success.",
    href: "/docs/getting-started",
    type: "Guide"
  },
  {
    title: "Creating Your First Project",
    description: "Step-by-step guide to creating and organizing your first project in Avalon Health.",
    href: "/docs/getting-started/first-steps",
    type: "Guide"
  },
  {
    title: "Managing Tasks and Deadlines",
    description: "Learn how to create tasks, set deadlines, and track progress effectively.",
    href: "/docs/features/tasks/creating",
    type: "Guide"
  },
  {
    title: "How do I create a Avalon Health account?",
    description: "Creating an account is easy! Simply visit our website or download the mobile app...",
    href: "/docs/faq#create-account",
    type: "FAQ"
  },
  {
    title: "Collaborating with Team Members",
    description: "Discover how to invite team members and collaborate on projects together.",
    href: "/docs/features/projects/sharing",
    type: "Guide"
  },
  {
    title: "Getting Started with Avalon Health",
    description: "Video tutorial showing the basics of Avalon and how to set up your account.",
    href: "/docs/video-tutorials/watch?v=example1",
    type: "Video"
  },
];

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockSearchResults>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    // Filter mock results based on query
    // In a real app, this would be an API call to a search endpoint
    const filteredResults = mockSearchResults.filter(
      result => 
        result.title.toLowerCase().includes(query.toLowerCase()) || 
        result.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-muted-foreground">
          <SearchIcon className="mr-2 h-4 w-4" />
          <span>Search documentation...</span>
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for tutorials, guides, FAQs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2 h-5 w-5 rounded-full p-0"
                onClick={() => handleSearch("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <Link 
                  key={index} 
                  href={result.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-2 rounded-md hover:bg-accent"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{result.title}</h4>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {result.description}
                  </p>
                </Link>
              ))
            ) : searchQuery ? (
              <div className="text-center py-6 text-muted-foreground">
                No results found for "{searchQuery}"
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SearchInput() {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search tutorials..."
        className="w-full bg-background py-2 pl-8 pr-4"
      />
    </div>
  );
} 