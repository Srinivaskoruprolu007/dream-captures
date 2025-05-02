"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"; // Keep DialogTrigger
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Share2, PlayCircle } from "lucide-react"; // Removed X
import { cn } from "@/lib/utils";
import { VideoGallery } from "@/components/portfolio/VideoGallery";
import { CameraBackground } from "@/components/portfolio/CameraBackground";
import { FeaturedCarousel } from "@/components/portfolio/FeaturedCarousel";
import { BeforeAfterGallery } from "@/components/portfolio/BeforeAfterGallery";
import { ImageLightbox } from "@/components/portfolio/ImageLightbox"; // Import the new Lightbox component

// Placeholder data structure for portfolio items
interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  altTelugu?: string;
  category: string;
  location: string;
  dataAiHint: string;
}

// Placeholder data remains the same
const allPortfolioItems: PortfolioItem[] = [
  // ... (existing portfolio items) ...
  {
    id: 1,
    src: "https://picsum.photos/seed/telugu-wedding1/800/600",
    alt: "Traditional Thali Tying ceremony during a Telugu wedding",
    altTelugu: "సంప్రదాయ తాళి కట్టు వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Rajahmundry Temple",
    dataAiHint: "wedding ceremony tradition couple",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/telugu-wedding2/600/800",
    alt: "Bride and groom during Mandapam Ceremony",
    altTelugu: "మండపం వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Vijayawada Convention Hall",
    dataAiHint: "wedding ceremony couple mandap",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/telugu-wedding3/800/600",
    alt: "Couple enjoying the Oonjal swing ritual",
    altTelugu: "ఊయల వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Hyderabad Garden Venue",
    dataAiHint: "wedding ritual couple swing",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/prewedding1/800/600",
    alt: "Romantic couple photoshoot in the scenic Araku Valley",
    altTelugu: "అరకు లోయలో ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Araku Valley",
    dataAiHint: "couple nature landscape prewedding",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/prewedding2/600/800",
    alt: "Couple walking on Vizag Beach during pre-wedding shoot",
    altTelugu: "బీచ్ ప్రీ-వెడ్డింగ్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Vizag Beach",
    dataAiHint: "couple beach prewedding sunset",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/haldi1/800/600",
    alt: "Joyful moments during a traditional Haldi ceremony",
    altTelugu: "పసుపు కొట్టడం ఆనందం",
    category: "Haldi",
    location: "Client Residence, Guntur",
    dataAiHint: "wedding haldi tradition smile",
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/haldi2/600/800",
    alt: "Family applying turmeric paste to the bride during Haldi",
    altTelugu: "పసుపు పూత",
    category: "Haldi",
    location: "Nellore Farmhouse",
    dataAiHint: "wedding haldi ritual family",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/engagement1/800/600",
    alt: "Couple exchanging rings during engagement ceremony",
    altTelugu: "ఉంగరాల మార్పిడి",
    category: "ఎంగేజ్‌మెంట్",
    location: "Secunderabad Banquet Hall",
    dataAiHint: "engagement ring ceremony couple",
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/engagement2/800/600",
    alt: "Portrait of an engaged couple near Kurnool Fort",
    altTelugu: "ఎంగేజ్‌మెంట్ జంట చిత్రం",
    category: "ఎంగేజ్‌మెంట్",
    location: "Kurnool Fort",
    dataAiHint: "engagement couple portrait traditional",
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/babyshower1/800/600",
    alt: "Mother-to-be receiving blessings during Sreemantham ceremony",
    altTelugu: "సీమంతం ఆశీస్సులు",
    category: "సీమంతం",
    location: "Tirupati Home",
    dataAiHint: "baby shower tradition ritual pregnant",
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/babyshower2/600/800",
    alt: "Traditional rituals being performed at a Sreemantham",
    altTelugu: "సంప్రదాయ క్రతువులు",
    category: "సీమంతం",
    location: "Client Home, Kakinada",
    dataAiHint: "baby shower ceremony tradition culture",
  },
];

// Updated categories remain the same
const categories = [
  "All",
  "పెళ్లిళ్లు",
  "ప్రీ-వెడ్డింగ్",
  "ఎంగేజ్‌మెంట్",
  "Haldi", // Display "పసుపు కొట్టడం"
  "సీమంతం",
];

export default function PortfolioPage() {
  const [galleryType, setGalleryType] = useState("photos");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
  };

  return (
    <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24 bg-background">
      {/* Camera-themed Background Pattern */}
      <CameraBackground />
      {/* Main Content */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Portfolio
        </h1>
        <p className="font-telugu text-muted-foreground text-lg" lang="te">
          క్షణాలను కళాఖండాలుగా మార్చడం
        </p>
      </header>

      {/* Featured Work Carousel */}
      <FeaturedCarousel />
      {/* Gallery Type Selector - Main Tabs - Pastel Theme */}
      <Tabs
        defaultValue="photos"
        value={galleryType}
        onValueChange={setGalleryType}
        className="w-full mb-8"
      >
        {/* Use muted pastel for TabsList background */}
        <TabsList className="flex justify-center bg-muted/70 p-1 rounded-full shadow-inner max-w-xs mx-auto">
          {/* Active state uses Primary (Mint) */}
          <TabsTrigger
            value="photos"
            className="flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            Photos
          </TabsTrigger>
          {/* Active state uses Primary (Mint) */}
          <TabsTrigger
            value="videos"
            className="flex-1 px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            Videos
          </TabsTrigger>
        </TabsList>

        {/* Photo Gallery Content */}
        <TabsContent
          value="photos"
          className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        >
          {/* Before & After Gallery */}
          <BeforeAfterGallery />
          {/* Photo Category Filter Tabs - Pastel Theme */}
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
            aria-label="Filter photo categories"
          >
            {/* Use muted pastel for TabsList background */}
            <TabsList className="flex flex-wrap justify-center bg-muted/70 p-1 rounded-full shadow-inner gap-1 mb-8 max-w-fit mx-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    // Use Secondary (Ice Blue) for active state in category filter
                    "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md hover:text-primary focus-visible:ring-offset-background",
                    category !== "All" && category !== "Haldi" && "font-telugu"
                  )}
                >
                  {category === "Haldi" ? "పసుపు కొట్టడం" : category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Gallery Grid */}
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <li key={item.id}>
                   {/* Use DialogTrigger to open the lightbox */}
                  <DialogTrigger asChild>
                      <button
                        onClick={() => openLightbox(item)} // Open lightbox on click
                        className={cn(
                          // Use Accent (Pink) for hover border
                          "block w-full overflow-hidden group border border-border/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-accent rounded-xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          "animate-fade-in"
                        )}
                        aria-label={`View details for ${item.alt}`}
                        data-category={item.category}
                      >
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] bg-muted">
                            <Image
                              src={item.src}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              priority={item.id <= 8}
                              quality={85}
                              data-ai-hint={item.dataAiHint}
                            />
                            {/* Overlay with Title */}
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4"
                              aria-hidden="true"
                            >
                              <h3 className="text-white text-sm sm:text-base font-semibold font-serif truncate">
                                {item.alt}
                              </h3>
                              {item.altTelugu && (
                                <p
                                  className="text-gray-200 text-xs font-telugu truncate"
                                  lang="te"
                                >
                                  {item.altTelugu}
                                </p>
                              )}
                              {item.location && (
                                <div className="flex items-center text-xs text-gray-300 mt-1">
                                  <MapPin size={12} className="mr-1 shrink-0" />{" "}
                                  {/* Default muted color */}
                                  <span className="truncate">
                                    {item.location}
                                  </span>
                                </div>
                              )}
                            </div>
                            {/* Category badge - Use Secondary (Ice Blue) */}
                            <span
                              className={cn(
                                "absolute top-2 right-2 bg-secondary/80 text-secondary-foreground text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10",
                                item.category !== "All" &&
                                  item.category !== "Haldi" &&
                                  "font-telugu"
                              )}
                              aria-hidden="true"
                            >
                              {item.category === "Haldi"
                                ? "పసుపు"
                                : item.category}
                            </span>
                          </div>
                        </CardContent>
                      </button>
                  </DialogTrigger>
                </li>
              ))}
            </ul>

            {/* Render the ImageLightbox component */}
            <ImageLightbox
              image={selectedImage}
              isOpen={isLightboxOpen}
              onClose={closeLightbox}
            />

            {filteredItems.length === 0 && (
              <div
                className="text-center py-16 text-muted-foreground"
                role="alert"
              >
                <p className="text-lg font-telugu" lang="te">
                  క్షమించండి, "
                  {selectedCategory === "Haldi"
                    ? "పసుపు కొట్టడం"
                    : selectedCategory}
                  " వర్గంలో చిత్రాలు కనుగొనబడలేదు.
                </p>
                <p className="text-sm mt-2">
                  Please try selecting another category.
                </p>
              </div>
            )}
          </Tabs>
        </TabsContent>

        {/* Video Gallery Content */}
        <TabsContent
          value="videos"
          className="mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        >
          <VideoGallery />
        </TabsContent>
      </Tabs>
    </div>
  );
}
