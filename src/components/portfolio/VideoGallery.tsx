"use client";

import { useState } from "react";
import Image from "next/image"; // Import Next Image
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader, // Import DialogHeader
  DialogTrigger, // Import DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X, Share2, Instagram, PlayCircle } from "lucide-react"; // Added PlayCircle
import { cn } from "@/lib/utils";

// Sample video data
const allVideoItems = [
  {
    id: 1,
    title: "Vibrant Wedding Highlights Reel",
    titleTelugu: "కలర్‌ఫుల్ పెళ్లి హైలైట్స్",
    category: "Weddings",
    thumbnailUrl: "https://picsum.photos/seed/video1/800/450",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a sample MP4 video URL
    duration: "2:30",
    location: "Hyderabad Convention Center",
    dataAiHint: "wedding highlights cinematic couple",
  },
  {
    id: 2,
    title: "Araku Valley Pre-Wedding Story",
    titleTelugu: "అరకులోయ ప్రీ-వెడ్డింగ్ కథ",
    category: "Pre-Wedding",
    thumbnailUrl: "https://picsum.photos/seed/video2/800/450",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a sample MP4 video URL
    duration: "3:45",
    location: "Araku Valley, Andhra Pradesh",
    dataAiHint: "prewedding cinematic couple nature",
  },
   {
    id: 3,
    title: "Grand Engagement Ceremony Film",
    titleTelugu: "ఘనమైన ఎంగేజ్‌మెంట్ వేడుక",
    category: "Events",
    thumbnailUrl: "https://picsum.photos/seed/video3/800/450",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a sample MP4 video URL
    duration: "5:10",
    location: "Vijayawada Function Hall",
    dataAiHint: "engagement ceremony event cinematic",
  },
  // Add more video items as needed
];

// Categories adjusted for videos
const categories = ["All", "Weddings", "Pre-Wedding", "Events"]; // Removed Short Films for now

export function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof allVideoItems)[0] | null
  >(null);

  const filteredVideos =
    selectedCategory === "All"
      ? allVideoItems
      : allVideoItems.filter((video) => video.category === selectedCategory);

  // Function to handle share action
  const handleShare = (video: (typeof allVideoItems)[0]) => {
     if (navigator.share) {
      navigator
        .share({
          title: `Dream Captures: ${video.title}`,
          text: `Check out this video by Dream Captures!`,
          url: window.location.href, // Or video specific URL if available
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
       navigator.clipboard.writeText(window.location.href)
         .then(() => alert("Link copied to clipboard! Share functionality not available."))
         .catch(() => alert("Share functionality not available on this browser."));
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <Tabs
        defaultValue="All"
        value={selectedCategory} // Control selected category
        onValueChange={setSelectedCategory}
        className="flex justify-center"
        aria-label="Filter video categories" // ARIA label for filtering
      >
        <TabsList className="bg-muted p-1 rounded-full shadow-inner flex flex-wrap gap-1 justify-center"> {/* Allow wrapping */}
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md hover:text-secondary focus-visible:ring-offset-background" // Consistent focus styling
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Video Grid */}
      {/* Use UL for semantic list */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
         <li key={video.id}>
            <Dialog
                onOpenChange={(open) => {
                if (open) {
                    setSelectedVideo(video);
                } else {
                    setSelectedVideo(null);
                }
                }}
            >
                {/* Use button for trigger */}
                <DialogTrigger asChild>
                <button
                    className={cn(
                    "block w-full overflow-hidden cursor-pointer group border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-accent rounded-xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "animate-fade-in" // Keep fade-in
                    )}
                    aria-label={`Watch video: ${video.title}`}
                >
                    <CardContent className="p-0">
                    <div className="relative aspect-video bg-muted">
                        {/* Thumbnail Image */}
                        <Image // Use Next Image for optimization
                        src={video.thumbnailUrl}
                        alt="" // Handled by button aria-label
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" // Scale on hover/focus
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Optimize image sizes
                        quality={80} // Slightly lower quality for thumbnails
                        data-ai-hint={video.dataAiHint}
                        />
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" aria-hidden="true">
                            <PlayCircle className="h-16 w-16 text-white/80" />
                        </div>
                        {/* Duration Badge */}
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full z-10" aria-hidden="true">
                        {video.duration}
                        </span>
                        {/* Text Overlay (optional, could be simpler) */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true">
                        <h3 className="text-white text-base font-semibold truncate">{video.title}</h3>
                        <p className="text-gray-200 text-xs font-telugu truncate" lang="te">{video.titleTelugu}</p>
                        </div>
                    </div>
                    </CardContent>
                </button>
                </DialogTrigger>

                {/* Video Dialog - Enhanced Accessibility */}
                {selectedVideo && selectedVideo.id === video.id && (
                <DialogContent
                    className="max-w-4xl w-11/12 p-2 sm:p-4 bg-background/95 backdrop-blur-lg border-border/30 shadow-2xl rounded-xl overflow-hidden"
                    aria-labelledby={`video-title-${video.id}`}
                    aria-describedby={`video-desc-${video.id}`}
                >
                    <DialogHeader className="sr-only"> {/* Header for screen readers */}
                        <DialogTitle id={`video-title-${video.id}`}>{selectedVideo.title}</DialogTitle>
                        <DialogDescription id={`video-desc-${video.id}`}>
                            Video playback for {selectedVideo.title}. Location: {selectedVideo.location}.
                        </DialogDescription>
                    </DialogHeader>
                    {/* Video Player */}
                    <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden">
                    {/* Ensure controls are accessible */}
                    <video
                        src={selectedVideo.videoUrl}
                        controls
                        className="w-full h-full"
                        poster={selectedVideo.thumbnailUrl}
                        aria-label={`Video player for ${selectedVideo.title}`} // ARIA label for video
                        preload="metadata" // Preload metadata for duration etc.
                    >
                        Your browser does not support the video tag. {/* Fallback content */}
                    </video>
                    </div>
                    {/* Video Info & Actions */}
                    <div className="p-4 space-y-3 sm:space-y-4">
                    <div>
                        {/* Display title prominently */}
                        <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{selectedVideo.title}</h2>
                        <p className="text-muted-foreground font-telugu" lang="te">{selectedVideo.titleTelugu}</p>
                         <p className="text-sm text-muted-foreground mt-1">{selectedVideo.location}</p>
                    </div>
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <div className="flex gap-2 flex-wrap justify-center sm:justify-start"> {/* Allow wrapping */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare(selectedVideo)}
                            className="flex items-center gap-2"
                            aria-label={`Share video: ${selectedVideo.title}`}
                        >
                            <Share2 size={16} aria-hidden="true"/> Share
                        </Button>
                        {/* Link to Instagram */}
                        <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                            asChild // Use asChild to make it a link
                        >
                           <a href="https://instagram.com/your_account" target="_blank" rel="noopener noreferrer">
                             <Instagram size={16} aria-hidden="true"/> Follow on Instagram
                           </a>
                        </Button>
                        </div>
                        {/* Close Button */}
                        <DialogClose asChild>
                        <Button variant="ghost" size="sm" className="mt-2 sm:mt-0">
                            Close <X className="h-4 w-4 ml-2" aria-hidden="true"/>
                        </Button>
                        </DialogClose>
                    </div>
                    </div>
                </DialogContent>
                )}
            </Dialog>
          </li>
        ))}
      </ul>

      {/* No Videos Message */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-16 text-muted-foreground" role="alert"> {/* Role alert */}
          <p className="text-lg">No videos found in this category.</p>
          <p className="text-sm mt-2">Please try selecting another category or check back later.</p>
        </div>
      )}
    </div>
  );
}
