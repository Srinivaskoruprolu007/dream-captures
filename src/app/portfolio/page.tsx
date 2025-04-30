"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, X, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { VideoGallery } from "@/components/portfolio/VideoGallery";

// Placeholder data - Categorized for Indian Weddings with Telugu names
const allPortfolioItems = [
  // Weddings (పెళ్లిళ్లు)
  {
    id: 1,
    src: "https://picsum.photos/seed/telugu-wedding1/800/600",
    alt: "Traditional Thali Tying",
    altTelugu: "సంప్రదాయ తాళి కట్టు వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Rajahmundry Temple",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/telugu-wedding2/600/800",
    alt: "Mandapam Ceremony",
    altTelugu: "మండపం వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Vijayawada Convention Hall",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/telugu-wedding3/800/600",
    alt: "Oonjal Fun",
    altTelugu: "ఊయల వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Hyderabad Garden Venue",
  },
  // Pre-Weddings (ప్రీ-వెడ్డింగ్)
  {
    id: 2,
    src: "https://picsum.photos/seed/prewedding1/800/600",
    alt: "Romantic Shoot in Araku Valley",
    altTelugu: "అరకు లోయలో ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Araku Valley",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/prewedding2/600/800",
    alt: "Beach Pre-Wedding",
    altTelugu: "బీచ్ ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Vizag Beach",
  },
  // Haldi (పసుపు కొట్టడం) - Note: Using Haldi as category name for simplicity in code, label can be Telugu
  {
    id: 3,
    src: "https://picsum.photos/seed/haldi1/800/600",
    alt: "Joyful Haldi Moments",
    altTelugu: "పసుపు కొట్టడం ఆనందం",
    category: "Haldi",
    location: "Client Residence, Guntur",
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/haldi2/600/800",
    alt: "Applying Turmeric Paste",
    altTelugu: "పసుపు పూత",
    category: "Haldi",
    location: "Nellore Farmhouse",
  },
  // Engagements (ఎంగేజ్‌మెంట్)
  {
    id: 6,
    src: "https://picsum.photos/seed/engagement1/800/600",
    alt: "Ring Exchange Ceremony",
    altTelugu: "ఉంగరాల మార్పిడి",
    category: "ఎంగేజ్‌మెంట్",
    location: "Secunderabad Banquet Hall",
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/engagement2/800/600",
    alt: "Engagement Couple Portrait",
    altTelugu: "ఎంగేజ్‌మెంట్ జంట చిత్రం",
    category: "ఎంగేజ్‌మెంట్",
    location: "Kurnool Fort",
  },
  // Baby Showers (సీమంతం)
  {
    id: 7,
    src: "https://picsum.photos/seed/babyshower1/800/600",
    alt: "Sreemantham Blessings",
    altTelugu: "సీమంతం ఆశీస్సులు",
    category: "సీమంతం",
    location: "Tirupati Home",
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/babyshower2/600/800",
    alt: "Traditional Rituals",
    altTelugu: "సంప్రదాయ క్రతువులు",
    category: "సీమంతం",
    location: "Client Home, Kakinada",
  },
];

// Updated categories with Telugu names
const categories = [
  "All",
  "పెళ్లిళ్లు",
  "ప్రీ-వెడ్డింగ్",
  "ఎంగేజ్‌మెంట్",
  "Haldi",
  "సీమంతం",
]; // Keep 'Haldi' simple or use 'పసుపు కొట్టడం'

export default function PortfolioPage() {
  const [galleryType, setGalleryType] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    (typeof allPortfolioItems)[0] | null
  >(null);

  const filteredItems =
    selectedCategory === "All"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: (typeof allPortfolioItems)[0]) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Delay clearing selectedImage to allow fade-out animation if Dialog used with manual state
    // With shadcn's Dialog onOpenChange, this might not be needed.
    // setTimeout(() => setSelectedImage(null), 300);
  };

  // Function to handle potential download action (placeholder)
  const handleDownload = (src: string) => {
    console.log("Download requested for:", src);
    // Implement actual download logic here, likely needs backend for protected downloads
    alert("Download functionality not implemented yet.");
  };

  // Function to handle potential share action (placeholder)
  const handleShare = (src: string, alt: string) => {
    console.log("Share requested for:", src);
    // Implement basic web share API if available, or links to social platforms
    if (navigator.share) {
      navigator
        .share({
          title: alt,
          text: `Check out this photo by Dream Captures: ${alt}`,
          url: window.location.href, // Or ideally, a direct link to the image/gallery item
        })
        .catch(console.error);
    } else {
      alert("Share functionality not available on this browser.");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
        Our Portfolio
      </h1>
      <p className="font-telugu text-center text-muted-foreground text-lg mb-8">
        క్షణాలను కళాఖండాలుగా మార్చడం
      </p>

      {/* Gallery Type Selector */}
      <Tabs
        defaultValue="photos"
        value={galleryType}
        onValueChange={setGalleryType}
        className="w-full"
      >
        <div className="flex flex-col items-center space-y-8">
          <TabsList className="bg-muted p-1 rounded-full shadow-inner">
            <TabsTrigger
              value="photos"
              className="px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300"
            >
              Photos
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300"
            >
              Videos
            </TabsTrigger>
          </TabsList>
        </div>
          <TabsContent value="photos" className="w-full">
            {/* Photo Gallery Filter Tabs */}
            <Tabs
              defaultValue="All"
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <div className="flex flex-col items-center space-y-8">
                <TabsList className="bg-muted p-1 rounded-full shadow-inner">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className={cn(
                        "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md hover:text-secondary",
                        // Apply Telugu font if category is in Telugu
                        category !== "All" && category !== "Haldi" && "font-telugu" // Example condition
                      )}
                    >
                      {category === "Haldi" ? "పసుపు కొట్టడం" : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                </div>

            {/* Gallery Grid - Masonry style could be an enhancement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-6 max-w-7xl mx-auto">
              {filteredItems.map((item) => (
                <Dialog
                  key={item.id}
                  onOpenChange={(open) => {
                    if (!open) closeLightbox();
                  }}
                >
                  <DialogTrigger asChild>
                    <Card
                      className={cn(
                        "overflow-hidden cursor-pointer group border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-accent rounded-xl bg-card",
                        "animate-fade-in-slow" // Add fade-in animation
                      )}
                      onClick={() => openLightbox(item)}
                      data-category={item.category}
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] bg-muted">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={item.id <= 6}
                            quality={90}
                          />
                          {/* Overlay with Title - enhanced styling */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-white text-base font-semibold font-serif truncate">
                              {item.alt}
                            </h3>
                            {item.altTelugu && (
                              <p className="text-gray-200 text-xs font-telugu truncate">
                                {item.altTelugu}
                              </p>
                            )}
                            {item.location && (
                              <div className="flex items-center text-xs text-gray-300 mt-1">
                                <MapPin size={12} className="mr-1" />
                                <span>{item.location}</span>
                              </div>
                            )}
                          </div>
                          {/* Category badge */}
                          <span
                            className={cn(
                              "absolute top-2 right-2 bg-secondary/80 text-secondary-foreground text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm",
                              item.category !== "All" &&
                                item.category !== "Haldi" &&
                                "font-telugu"
                            )}
                          >
                            {item.category === "Haldi"
                              ? "పసుపు"
                              : item.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  {/* Lightbox/Dialog Content - Enhanced */}
                  {selectedImage && selectedImage.id === item.id && (
                    <DialogContent className="max-w-6xl w-11/12 p-0 bg-background/95 backdrop-blur-lg border-border/30 shadow-2xl rounded-xl overflow-hidden">
                      <div className="relative aspect-[4/3] w-full bg-muted/30">
                        <Image
                          src={selectedImage.src}
                          alt={selectedImage.alt}
                          fill
                          className="object-contain"
                          quality={95}
                          priority
                        />
                      </div>
                      <div className="p-6 text-center bg-muted/50 rounded-b-lg">
                        <p className="font-semibold font-serif text-2xl mb-2 text-foreground">
                          {selectedImage.alt}
                        </p>
                        {selectedImage.altTelugu && (
                          <p className="font-telugu text-lg text-muted-foreground mb-3">
                            {selectedImage.altTelugu}
                          </p>
                        )}
                        {selectedImage.location && (
                          <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                            <MapPin size={16} className="mr-2 text-primary" />
                            <span>{selectedImage.location}</span>
                          </div>
                        )}
                        {/* Action Buttons */}
                        <div className="flex justify-center gap-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleShare(selectedImage.src, selectedImage.alt)
                            }
                            className="text-primary border-primary hover:bg-primary/10 px-4"
                          >
                            <Share2 size={16} className="mr-2" /> Share
                          </Button>
                          <DialogClose asChild>
                            <Button variant="ghost" size="sm" className="px-4">
                              Close
                            </Button>
                          </DialogClose>
                        </div>
                      </div>
                      {/* Explicit Close Button for Accessibility */}
                      <DialogClose className="absolute top-4 right-4 rounded-full p-2 bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground transition-colors z-10">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </DialogClose>
                    </DialogContent>
                  )}
                </Dialog>
              ))}
            </div>

            {/* Message if no items in category */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-telugu">
                  క్షమించండి, "
                  {selectedCategory === "Haldi"
                    ? "పసుపు కొట్టడం"
                    : selectedCategory}
                  " వర్గంలో చిత్రాలు కనుగొనబడలేదు.
                </p>
              </div>
            )}
          </Tabs>
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <VideoGallery />
        </TabsContent>
      </Tabs>
    </div>
  );
}
