"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

// Featured items data structure
interface FeaturedItem {
  id: number;
  src: string;
  alt: string;
  altTelugu?: string;
  category: string;
  location: string;
  dataAiHint: string;
}

// Featured items selection (choose your best work)
const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/featured-wedding1/1200/800",
    alt: "Elegant Telugu Wedding Ceremony",
    altTelugu: "అందమైన తెలుగు పెళ్లి వేడుక",
    category: "పెళ్లిళ్లు",
    location: "Taj Falaknuma Palace, Hyderabad",
    dataAiHint: "luxury wedding palace ceremony",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/featured-prewedding/1200/800",
    alt: "Romantic Pre-wedding Shoot at Sunset",
    altTelugu: "సూర్యాస్తమయ ప్రీ-వెడ్డింగ్ షూట్",
    category: "ప్రీ-వెడ్డింగ్",
    location: "Rushikonda Beach, Vizag",
    dataAiHint: "couple beach sunset romantic",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/featured-event/1200/800",
    alt: "Grand Corporate Event Coverage",
    altTelugu: "భారీ కార్పొరేట్ ఈవెంట్",
    category: "ఈవెంట్స్",
    location: "HICC, Hyderabad",
    dataAiHint: "corporate event conference professional",
  },
];

export function FeaturedCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full max-w-6xl mx-auto mb-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
          Featured Work
        </h2>
        <p className="font-telugu text-muted-foreground" lang="te">
          మా ఉత్తమ క్షణాలు
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {featuredItems.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="border-0 shadow-lg overflow-hidden bg-transparent">
                <CardContent className="p-0 relative aspect-[16/9]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    quality={90}
                    data-ai-hint={item.dataAiHint}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-serif mb-2">{item.alt}</h3>
                      {item.altTelugu && (
                        <p className="font-telugu text-lg mb-2" lang="te">
                          {item.altTelugu}
                        </p>
                      )}
                      <div className="flex items-center text-sm opacity-80">
                        <MapPin size={16} className="mr-2" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <span
                    className={cn(
                      "absolute top-6 right-6 bg-primary/80 text-primary-foreground px-4 py-1 rounded-full backdrop-blur-sm",
                      "font-telugu text-sm"
                    )}
                  >
                    {item.category}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 sm:-left-6 bg-background/80 hover:bg-background" />
        <CarouselNext className="-right-4 sm:-right-6 bg-background/80 hover:bg-background" />
      </Carousel>
    </section>
  );
}
