'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog'; // Added DialogClose
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Removed TabsContent as grid is dynamic
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, X, Download, Share2 } from 'lucide-react'; // Added Download, Share2
import { cn } from '@/lib/utils';

// Placeholder data - Categorized for Indian Weddings with Telugu names
const allPortfolioItems = [
  // Weddings (పెళ్లిళ్లు)
  { id: 1, src: 'https://picsum.photos/seed/telugu-wedding1/800/600', alt: 'Traditional Thali Tying', altTelugu: 'సంప్రదాయ తాళి కట్టు వేడుక', category: 'పెళ్లిళ్లు', location: 'Rajahmundry Temple' },
  { id: 5, src: 'https://picsum.photos/seed/telugu-wedding2/600/800', alt: 'Mandapam Ceremony', altTelugu: 'మండపం వేడుక', category: 'పెళ్లిళ్లు', location: 'Vijayawada Convention Hall' },
  { id: 8, src: 'https://picsum.photos/seed/telugu-wedding3/800/600', alt: 'Oonjal Fun', altTelugu: 'ఊయల వేడుక', category: 'పెళ్లిళ్లు', location: 'Hyderabad Garden Venue' },
  // Pre-Weddings (ప్రీ-వెడ్డింగ్)
  { id: 2, src: 'https://picsum.photos/seed/prewedding1/800/600', alt: 'Romantic Shoot in Araku Valley', altTelugu: 'అరకు లోయలో ప్రీ-వెడ్డింగ్', category: 'ప్రీ-వెడ్డింగ్', location: 'Araku Valley' },
  { id: 9, src: 'https://picsum.photos/seed/prewedding2/600/800', alt: 'Beach Pre-Wedding', altTelugu: 'బీచ్ ప్రీ-వెడ్డింగ్', category: 'ప్రీ-వెడ్డింగ్', location: 'Vizag Beach' },
  // Haldi (పసుపు కొట్టడం) - Note: Using Haldi as category name for simplicity in code, label can be Telugu
  { id: 3, src: 'https://picsum.photos/seed/haldi1/800/600', alt: 'Joyful Haldi Moments', altTelugu: 'పసుపు కొట్టడం ఆనందం', category: 'Haldi', location: 'Client Residence, Guntur' },
  { id: 10, src: 'https://picsum.photos/seed/haldi2/600/800', alt: 'Applying Turmeric Paste', altTelugu: 'పసుపు పూత', category: 'Haldi', location: 'Nellore Farmhouse' },
  // Engagements (ఎంగేజ్‌మెంట్)
  { id: 6, src: 'https://picsum.photos/seed/engagement1/800/600', alt: 'Ring Exchange Ceremony', altTelugu: 'ఉంగరాల మార్పిడి', category: 'ఎంగేజ్‌మెంట్', location: 'Secunderabad Banquet Hall' },
  { id: 12, src: 'https://picsum.photos/seed/engagement2/800/600', alt: 'Engagement Couple Portrait', altTelugu: 'ఎంగేజ్‌మెంట్ జంట చిత్రం', category: 'ఎంగేజ్‌మెంట్', location: 'Kurnool Fort' },
  // Baby Showers (సీమంతం)
  { id: 7, src: 'https://picsum.photos/seed/babyshower1/800/600', alt: 'Sreemantham Blessings', altTelugu: 'సీమంతం ఆశీస్సులు', category: 'సీమంతం', location: 'Tirupati Home' },
  { id: 11, src: 'https://picsum.photos/seed/babyshower2/600/800', alt: 'Traditional Rituals', altTelugu: 'సంప్రదాయ క్రతువులు', category: 'సీమంతం', location: 'Client Home, Kakinada' },
];

// Updated categories with Telugu names
const categories = ['All', 'పెళ్లిళ్లు', 'ప్రీ-వెడ్డింగ్', 'ఎంగేజ్‌మెంట్', 'Haldi', 'సీమంతం']; // Keep 'Haldi' simple or use 'పసుపు కొట్టడం'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof allPortfolioItems)[0] | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? allPortfolioItems
    : allPortfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: typeof allPortfolioItems[0]) => {
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
       navigator.share({
         title: alt,
         text: `Check out this photo by Dream Captures: ${alt}`,
         url: window.location.href, // Or ideally, a direct link to the image/gallery item
       }).catch(console.error);
     } else {
        alert("Share functionality not available on this browser.");
     }
   };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
        Our Portfolio
      </h1>
       <p className="font-telugu text-center text-muted-foreground text-lg mb-12">క్షణాలను కళాఖండాలుగా మార్చడం</p>

      {/* Filter Tabs - Styled */}
      <Tabs defaultValue="All" onValueChange={setSelectedCategory} className="mb-12 flex justify-center">
        <TabsList className="bg-muted p-1 rounded-full shadow-inner">
          {categories.map(category => (
            <TabsTrigger
              key={category}
              value={category}
              className={cn(
                "px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md hover:text-secondary",
                 // Apply Telugu font if category is in Telugu
                 category !== 'All' && category !== 'Haldi' && 'font-telugu' // Example condition
              )}
            >
              {category === 'Haldi' ? 'పసుపు కొట్టడం' : category} {/* Display Telugu label for Haldi */}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Gallery Grid - Masonry style could be an enhancement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredItems.map((item) => (
           <Dialog key={item.id} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
             <DialogTrigger asChild>
                <Card
                  className={cn(
                    "overflow-hidden cursor-pointer group border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-accent rounded-lg",
                    "animate-fade-in-slow" // Add fade-in animation
                    )}
                  onClick={() => openLightbox(item)}
                  // Add data attributes for potential JS-based filtering/animations
                  data-category={item.category}
                >
                  <CardContent className="p-0">
                     <div className="relative aspect-[4/3] bg-muted"> {/* Aspect ratio */}
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                       {/* Overlay with Title - enhanced styling */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white text-base font-semibold font-serif truncate">{item.alt}</h3>
                        {item.altTelugu && <p className="text-gray-200 text-xs font-telugu truncate">{item.altTelugu}</p>}
                         {item.location && (
                            <div className="flex items-center text-xs text-gray-300 mt-1">
                                <MapPin size={12} className="mr-1" />
                                <span>{item.location}</span>
                            </div>
                         )}
                      </div>
                       {/* Optional: Category badge */}
                       <span className={cn(
                          "absolute top-2 right-2 bg-secondary/80 text-secondary-foreground text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm",
                          item.category !== 'All' && item.category !== 'Haldi' && 'font-telugu' // Apply Telugu font to badge if needed
                       )}>
                         {item.category === 'Haldi' ? 'పసుపు' : item.category}
                       </span>
                    </div>
                  </CardContent>
                </Card>
             </DialogTrigger>

              {/* Lightbox/Dialog Content - Enhanced */}
              {selectedImage && selectedImage.id === item.id && (
                 <DialogContent className="max-w-5xl w-11/12 p-2 sm:p-4 bg-background/90 backdrop-blur-lg border-secondary/30 shadow-2xl rounded-lg overflow-hidden">
                   <div className="relative aspect-video w-full my-4"> {/* Maintain aspect ratio */}
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain" // Use contain to show full image
                    />
                   </div>
                    <div className="p-4 text-center bg-muted/50 rounded-b-lg">
                      <p className="font-semibold font-serif text-xl mb-1 text-foreground">{selectedImage.alt}</p>
                      {selectedImage.altTelugu && <p className="font-telugu text-muted-foreground mb-2">{selectedImage.altTelugu}</p>}
                      {selectedImage.location && (
                        <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                          <MapPin size={14} className="mr-1.5 text-primary" />
                          <span>{selectedImage.location}</span>
                        </div>
                      )}
                       {/* Action Buttons */}
                       <div className="flex justify-center gap-4 mt-2">
                         <Button variant="outline" size="sm" onClick={() => handleShare(selectedImage.src, selectedImage.alt)} className="text-primary border-primary hover:bg-primary/10">
                           <Share2 size={16} className="mr-1.5"/> Share
                         </Button>
                         {/* <Button variant="outline" size="sm" onClick={() => handleDownload(selectedImage.src)} className="text-secondary border-secondary hover:bg-secondary/10">
                           <Download size={16} className="mr-1.5"/> Download
                         </Button> */}
                         <DialogClose asChild>
                           <Button variant="ghost" size="sm">Close</Button>
                         </DialogClose>
                       </div>
                    </div>
                     {/* Explicit Close Button for Accessibility */}
                      <DialogClose className="absolute top-3 right-3 rounded-full p-1.5 bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground transition-colors z-10">
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
            <p className="text-lg font-telugu">క్షమించండి, "{selectedCategory === 'Haldi' ? 'పసుపు కొట్టడం' : selectedCategory}" వర్గంలో చిత్రాలు కనుగొనబడలేదు.</p>
             <p>No images found in the "{selectedCategory}" category.</p>
            </div>
        )}
    </div>
  );
}
