'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, X } from 'lucide-react';

// Placeholder data
const allPortfolioItems = [
  { id: 1, src: 'https://picsum.photos/seed/wedding1/800/600', alt: 'Wedding photo 1', category: 'Weddings', location: 'Sunset Beach' },
  { id: 2, src: 'https://picsum.photos/seed/portrait1/600/800', alt: 'Portrait photo 1', category: 'Portraits', location: 'Downtown Studio' },
  { id: 3, src: 'https://picsum.photos/seed/event1/800/600', alt: 'Event photo 1', category: 'Events', location: 'Grand Ballroom' },
  { id: 4, src: 'https://picsum.photos/seed/landscape1/800/600', alt: 'Landscape photo 1', category: 'Landscapes', location: 'Mountain Peak' },
  { id: 5, src: 'https://picsum.photos/seed/wedding2/600/800', alt: 'Wedding photo 2', category: 'Weddings', location: 'Vineyard Estate' },
  { id: 6, src: 'https://picsum.photos/seed/portrait2/800/600', alt: 'Portrait photo 2', category: 'Portraits', location: 'Urban Park' },
  { id: 7, src: 'https://picsum.photos/seed/family1/800/600', alt: 'Family photo 1', category: 'Family', location: 'Golden Meadow' },
  { id: 8, src: 'https://picsum.photos/seed/wedding3/800/600', alt: 'Wedding photo 3', category: 'Weddings', location: 'Historic Chapel' },
  { id: 9, src: 'https://picsum.photos/seed/landscape2/600/800', alt: 'Landscape photo 2', category: 'Landscapes', location: 'Coastal Cliffs' },
   { id: 10, src: 'https://picsum.photos/seed/event2/800/600', alt: 'Event photo 2', category: 'Events', location: 'Rooftop Gala' },
   { id: 11, src: 'https://picsum.photos/seed/family2/600/800', alt: 'Family photo 2', category: 'Family', location: 'Cozy Home Session' },
   { id: 12, src: 'https://picsum.photos/seed/portrait3/800/600', alt: 'Portrait photo 3', category: 'Portraits', location: 'Art Gallery' },
];

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Landscapes', 'Family'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof allPortfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? allPortfolioItems
    : allPortfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: typeof allPortfolioItems[0]) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Delay clearing selectedImage to allow fade-out animation
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
        Our Portfolio
      </h1>

      {/* Filter Tabs */}
      <Tabs defaultValue="All" onValueChange={setSelectedCategory} className="mb-12 flex justify-center">
        <TabsList>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredItems.map((item) => (
           <Dialog key={item.id} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
             <DialogTrigger asChild>
                <Card
                  className="overflow-hidden cursor-pointer group border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openLightbox(item)}
                >
                  <CardContent className="p-0">
                     <div className="relative aspect-square">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="transition-transform duration-500 group-hover:scale-110"
                        // Implement lazy loading - Next/Image does this by default
                        loading="lazy"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium truncate">{item.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
             </DialogTrigger>
              {selectedImage && selectedImage.id === item.id && (
                 <DialogContent className="max-w-4xl p-2 bg-background border-none shadow-2xl">
                   <div className="relative aspect-video w-full">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                    />
                   </div>
                    <div className="p-4 text-center">
                      <p className="font-semibold text-lg mb-1">{selectedImage.alt}</p>
                      {selectedImage.location && (
                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                          <MapPin size={14} className="mr-1" />
                          <span>{selectedImage.location}</span>
                        </div>
                      )}
                    </div>
                   {/* No explicit close button needed as clicking outside or escape closes Dialog */}
                 </DialogContent>
               )}
           </Dialog>
        ))}
      </div>

        {/* Message if no items in category */}
        {filteredItems.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
            <p>No images found in the "{selectedCategory}" category.</p>
            </div>
        )}
    </div>
  );
}
