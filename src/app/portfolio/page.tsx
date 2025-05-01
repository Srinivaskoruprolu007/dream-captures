"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle, // Import DialogTitle
  DialogDescription, // Import DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, X, Share2, PlayCircle } from "lucide-react"; // Added PlayCircle
import { cn } from "@/lib/utils";
import { VideoGallery } from "@/components/portfolio/VideoGallery";

// Placeholder data
const allPortfolioItems = [
  // Weddings (పెళ్లిళ్లు)
  {
    id: 1,
    src: "https://picsum.photos/seed/telugu-wedding1/800/600",
    alt: "Traditional Thali Tying ceremony during a Telugu wedding", // Descriptive alt
    altTelugu: "సంప్రదాయ తాళి కట్టు వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Rajahmundry Temple",
    dataAiHint: "wedding ceremony tradition couple",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/telugu-wedding2/600/800",
    alt: "Bride and groom during Mandapam Ceremony", // Descriptive alt
    altTelugu: "మండపం వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Vijayawada Convention Hall",
    dataAiHint: "wedding ceremony couple mandap",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/telugu-wedding3/800/600",
    alt: "Couple enjoying the Oonjal swing ritual", // Descriptive alt
    altTelugu: "ఊయల వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Hyderabad Garden Venue",
    dataAiHint: "wedding ritual couple swing",
  },
  // Pre-Weddings (ప్రీ-వెడ్డింగ్)
  {
    id: 2,
    src: "https://picsum.photos/seed/prewedding1/800/600",
    alt: "Romantic couple photoshoot in the scenic Araku Valley", // Descriptive alt
    altTelugu: "అరకు లోయలో ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Araku Valley",
    dataAiHint: "couple nature landscape prewedding",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/prewedding2/600/800",
    alt: "Couple walking on Vizag Beach during pre-wedding shoot", // Descriptive alt
    altTelugu: "బీచ్ ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Vizag Beach",
    dataAiHint: "couple beach prewedding sunset",
  },
  // Haldi (పసుపు కొట్టడం)
  {
    id: 3,
    src: "https://picsum.photos/seed/haldi1/800/600",
    alt: "Joyful moments during a traditional Haldi ceremony", // Descriptive alt
    altTelugu: "పసుపు కొట్టడం ఆనందం",
    category: "Haldi",
    location: "Client Residence, Guntur",
    dataAiHint: "wedding haldi tradition smile",
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/haldi2/600/800",
    alt: "Family applying turmeric paste to the bride during Haldi", // Descriptive alt
    altTelugu: "పసుపు పూత",
    category: "Haldi",
    location: "Nellore Farmhouse",
    dataAiHint: "wedding haldi ritual family",
  },
  // Engagements (ఎంగేజ్‌మెంట్)
  {
    id: 6,
    src: "https://picsum.photos/seed/engagement1/800/600",
    alt: "Couple exchanging rings during engagement ceremony", // Descriptive alt
    altTelugu: "ఉంగరాల మార్పిడి",
    category: "ఎంగేజ్‌మెంట్",
    location: "Secunderabad Banquet Hall",
    dataAiHint: "engagement ring ceremony couple",
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/engagement2/800/600",
    alt: "Portrait of an engaged couple near Kurnool Fort", // Descriptive alt
    altTelugu: "ఎంగేజ్‌మెంట్ జంట చిత్రం",
    category: "ఎంగేజ్‌మెంట్",
    location: "Kurnool Fort",
    dataAiHint: "engagement couple portrait traditional",
  },
  // Baby Showers (సీమంతం)
  {
    id: 7,
    src: "https://picsum.photos/seed/babyshower1/800/600",
    alt: "Mother-to-be receiving blessings during Sreemantham ceremony", // Descriptive alt
    altTelugu: "సీమంతం ఆశీస్సులు",
    category: "సీమంతం",
    location: "Tirupati Home",
    dataAiHint: "baby shower tradition ritual pregnant",
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/babyshower2/600/800",
    alt: "Traditional rituals being performed at a Sreemantham", // Descriptive alt
    altTelugu: "సంప్రదాయ క్రతువులు",
    category: "సీమంతం",
    location: "Client Home, Kakinada",
    dataAiHint: "baby shower ceremony tradition culture",
  },
];

// Updated categories with Telugu names
const categories = [
  "All",
  "పెళ్లిళ్లు",
  "ప్రీ-వెడ్డింగ్",
  "ఎంగేజ్‌మెంట్",
  "Haldi", // Kept simple for code, display "పసుపు కొట్టడం"
  "సీమంతం",
];

export default function PortfolioPage() {
  const [galleryType, setGalleryType] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof allPortfolioItems)[0] | null
  >(null);

  const filteredItems =
    selectedCategory === "All"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: (typeof allPortfolioItems)[0]) => {
    setSelectedImage(item);
    // Dialog's onOpenChange handles setting lightboxOpen state implicitly
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Function to handle share action
  const handleShare = (src: string, alt: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Dream Captures: ${alt}`,
          text: `Check out this photo captured by Dream Captures!`,
          url: window.location.href, // Or a more specific URL if available
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard! Share functionality not available."))
        .catch(() => alert("Share functionality not available on this browser."));
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <header className="text-center mb-8 md:mb-12"> {/* Use header */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Portfolio
        </h1>
        <p className="font-telugu text-muted-foreground text-lg" lang="te">
          క్షణాలను కళాఖండాలుగా మార్చడం
        </p>
      </header>

      {/* Gallery Type Selector - Main Tabs */}
      <Tabs
        defaultValue="photos"
        value={galleryType}
        onValueChange={setGalleryType}
        className="w-full mb-8" // Add margin bottom
      >
        <TabsList className="flex justify-center bg-muted p-1 rounded-full shadow-inner max-w-xs mx-auto">
          <TabsTrigger
            value="photos"
            className="flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md" // Use primary color for active photos tab
          >
            Photos
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md" // Use primary color for active videos tab
          >
            Videos
          </TabsTrigger>
        </TabsList>

        {/* Photo Gallery Content */}
        <TabsContent value="photos" className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
          {/* Photo Category Filter Tabs */}
          <Tabs
            defaultValue="All"
            value={selectedCategory} // Control selected category
            onValueChange={setSelectedCategory}
            className="w-full"
            aria-label="Filter photo categories" // ARIA label for filtering
          >
             <TabsList className="flex flex-wrap justify-center bg-muted p-1 rounded-full shadow-inner gap-1 mb-8"> {/* Allow wrapping and add gap */}
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={cn(
                      "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md hover:text-secondary focus-visible:ring-offset-background", // Adjusted focus offset
                      // Apply Telugu font if category is in Telugu
                      category !== "All" && category !== "Haldi" && "font-telugu" // Example condition
                    )}
                  >
                    {category === "Haldi" ? "పసుపు కొట్టడం" : category}
                  </TabsTrigger>
                ))}
              </TabsList>


              {/* Gallery Grid */}
              {/* Use UL for semantic list of items */}
              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"> {/* Adjust grid columns */}
                {filteredItems.map((item) => (
                 <li key={item.id}>
                    <Dialog
                        onOpenChange={(open) => {
                        if (open) {
                            openLightbox(item);
                        } else {
                            closeLightbox();
                        }
                        }}
                    >
                    <DialogTrigger asChild>
                      {/* Use button for trigger for better accessibility */}
                      <button
                        className={cn(
                          "block w-full overflow-hidden group border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-accent rounded-xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          "animate-fade-in" // Keep fade-in
                        )}
                        aria-label={`View details for ${item.alt}`}
                        data-category={item.category}
                      >
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] bg-muted">
                            <Image
                              src={item.src}
                              alt="" // Alt is handled by the button's aria-label
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105" // Add focus scale
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Refined sizes
                              priority={item.id <= 8} // Prioritize loading first ~2 rows
                              quality={85} // Slightly reduced quality for grid
                              data-ai-hint={item.dataAiHint}
                            />
                            {/* Overlay with Title - enhanced styling */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4" aria-hidden="true"> {/* Hide overlay content from screen readers */}
                              <h3 className="text-white text-sm sm:text-base font-semibold font-serif truncate">
                                {item.alt}
                              </h3>
                              {item.altTelugu && (
                                <p className="text-gray-200 text-xs font-telugu truncate" lang="te">
                                  {item.altTelugu}
                                </p>
                              )}
                              {item.location && (
                                <div className="flex items-center text-xs text-gray-300 mt-1">
                                  <MapPin size={12} className="mr-1 shrink-0" />
                                  <span className="truncate">{item.location}</span>
                                </div>
                              )}
                            </div>
                            {/* Category badge - visually hidden on focus? */}
                            <span
                              className={cn(
                                "absolute top-2 right-2 bg-secondary/80 text-secondary-foreground text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10",
                                item.category !== "All" &&
                                  item.category !== "Haldi" &&
                                  "font-telugu"
                              )}
                              aria-hidden="true" // Hide decorative badge
                            >
                              {item.category === "Haldi"
                                ? "పసుపు"
                                : item.category}
                            </span>
                          </div>
                        </CardContent>
                      </button>
                    </DialogTrigger>

                    {/* Lightbox/Dialog Content - Enhanced Accessibility */}
                    {selectedImage && selectedImage.id === item.id && (
                      <DialogContent
                        className="max-w-3xl w-11/12 p-0 bg-background/95 backdrop-blur-lg border-border/30 shadow-2xl rounded-xl overflow-hidden"
                        aria-labelledby={`lightbox-title-${item.id}`}
                        aria-describedby={`lightbox-desc-${item.id}`}
                      >
                        <div className="relative aspect-video w-full bg-muted/30"> {/* Use aspect-video for consistency */}
                          <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt} // Important alt text for lightbox image
                            fill
                            className="object-contain"
                            quality={95} // Higher quality for lightbox
                            priority // Load lightbox image quickly
                          />
                        </div>
                        {/* Use DialogHeader, DialogTitle, DialogDescription */}
                        <div className="p-4 sm:p-6 text-center bg-muted/50 rounded-b-lg">
                           <DialogTitle id={`lightbox-title-${item.id}`} className="font-semibold font-serif text-xl sm:text-2xl mb-2 text-foreground">
                             {selectedImage.alt}
                           </DialogTitle>
                           <DialogDescription id={`lightbox-desc-${item.id}`} className="space-y-2">
                             {selectedImage.altTelugu && (
                               <p className="font-telugu text-base sm:text-lg text-muted-foreground" lang="te">
                                 {selectedImage.altTelugu}
                               </p>
                             )}
                             {selectedImage.location && (
                               <div className="flex items-center justify-center text-sm text-muted-foreground">
                                 <MapPin size={16} className="mr-2 text-primary" aria-hidden="true" />
                                 <span>{selectedImage.location}</span>
                               </div>
                             )}
                           </DialogDescription>
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6"> {/* Stack buttons on small screens */}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleShare(selectedImage.src, selectedImage.alt)
                              }
                              className="text-primary border-primary hover:bg-primary/10 px-4"
                              aria-label={`Share photo: ${selectedImage.alt}`}
                            >
                              <Share2 size={16} className="mr-2" aria-hidden="true" /> Share
                            </Button>
                            <DialogClose asChild>
                              <Button variant="ghost" size="sm" className="px-4">
                                Close
                              </Button>
                            </DialogClose>
                          </div>
                        </div>
                         {/* Explicit Close Button (already part of DialogContent) */}
                         {/* <DialogClose className="absolute top-4 right-4 rounded-full p-2 bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground transition-colors z-10">
                            <X className="h-5 w-5" />
                            <span className="sr-only">Close</span>
                         </DialogClose> */}
                      </DialogContent>
                    )}
                  </Dialog>
                  </li>
                ))}
              </ul>

              {/* Message if no items in category */}
              {filteredItems.length === 0 && (
                <div className="text-center py-16 text-muted-foreground" role="alert"> {/* Role alert */}
                  <p className="text-lg font-telugu" lang="te">
                    క్షమించండి, "
                    {selectedCategory === "Haldi"
                      ? "పసుపు కొట్టడం"
                      : selectedCategory}
                    " వర్గంలో చిత్రాలు కనుగొనబడలేదు.
                  </p>
                   <p className="text-sm mt-2">Please try selecting another category.</p>
                </div>
              )}
            </Tabs>
        </TabsContent>

        {/* Video Gallery Content */}
        <TabsContent value="videos" className="mt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
          <VideoGallery />
        </TabsContent>
      </Tabs>
    </div>
  );
}
