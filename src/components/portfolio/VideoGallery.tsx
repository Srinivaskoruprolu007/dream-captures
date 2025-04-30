"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X, Share2, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample video data - Replace with your actual video content
const allVideoItems = [
  {
    id: 1,
    title: "Wedding Highlights",
    titleTelugu: "పెళ్లి హైలైట్స్",
    category: "Weddings",
    thumbnailUrl: "https://picsum.photos/seed/video1/800/450",
    videoUrl: "https://example.com/video1.mp4",
    duration: "2:30",
    location: "Hyderabad",
  },
  {
    id: 2,
    title: "Pre-Wedding Story",
    titleTelugu: "ప్రీ వెడ్డింగ్ స్టోరీ",
    category: "Pre-Wedding",
    thumbnailUrl: "https://picsum.photos/seed/video2/800/450",
    videoUrl: "https://example.com/video2.mp4",
    duration: "3:45",
    location: "Vizag Beach",
  },
  // Add more video items as needed
];

const categories = ["All", "Weddings", "Pre-Wedding", "Events", "Short Films"];

export function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof allVideoItems)[0] | null
  >(null);

  const filteredVideos =
    selectedCategory === "All"
      ? allVideoItems
      : allVideoItems.filter((video) => video.category === selectedCategory);

  const handleShare = (video: (typeof allVideoItems)[0]) => {
    if (navigator.share) {
      navigator
        .share({
          title: video.title,
          text: `Check out this video by Dream Captures: ${video.title}`,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      alert("Share functionality not available on this browser.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <Tabs
        defaultValue="All"
        onValueChange={setSelectedCategory}
        className="flex justify-center"
      >
        <TabsList className="bg-muted p-1 rounded-full shadow-inner">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Dialog
            key={video.id}
            onOpenChange={(open) => {
              if (!open) setSelectedVideo(null);
            }}
          >
            <Card
              className={cn(
                "overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                "animate-fade-in"
              )}
              onClick={() => setSelectedVideo(video)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
                    {video.duration}
                  </span>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {video.title}
                    </h3>
                    <p className="text-gray-200 text-sm font-telugu">
                      {video.titleTelugu}
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      {video.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Dialog */}
            {selectedVideo && selectedVideo.id === video.id && (
              <DialogContent className="max-w-4xl w-11/12 p-2 sm:p-4 bg-background/95 backdrop-blur-lg">
                <div className="relative aspect-video w-full">
                  {/* Replace with actual video player component */}
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    className="w-full h-full"
                    poster={selectedVideo.thumbnailUrl}
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-muted-foreground font-telugu">
                      {selectedVideo.titleTelugu}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(selectedVideo)}
                        className="flex items-center gap-2"
                      >
                        <Share2 size={16} />
                        Share
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() =>
                          window.open(
                            "https://instagram.com/your_account",
                            "_blank"
                          )
                        }
                      >
                        <Instagram size={16} />
                        Follow on Instagram
                      </Button>
                    </div>
                    <DialogClose asChild>
                      <Button variant="ghost" size="sm">
                        <X className="h-5 w-5" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">No videos found in this category.</p>
        </div>
      )}
    </div>
  );
}
