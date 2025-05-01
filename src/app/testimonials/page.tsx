'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react'; // Keep Star for rating
import Autoplay from "embla-carousel-autoplay" // Import Autoplay plugin
import * as React from "react"; // Import React for plugin ref
import Link from 'next/link'; // Import Link
import { cn } from '@/lib/utils'; // Import cn

// Placeholder data with Telugu names/context
const testimonials = [
   { id: 6, name: 'పల్లవి, విజయవాడ', quote: 'మన పెళ్లిని ఇలా అందంగా క్యాప్చర్ చేస్తారని అనుకోలేదు! డ్రీమ్ క్యాప్చర్స్ టీమ్ చాల బాగుంది.', avatar: 'https://picsum.photos/seed/avatar-telugu4/100/100', rating: 5, service: 'Wedding Photography', dataAiHint: 'woman portrait smiling' },
  { id: 1, name: 'శ్రీనివాస్ & లక్ష్మి', quote: 'మా పెళ్లి ఫోటోలు అద్భుతం! డ్రీమ్ క్యాప్చర్స్ ప్రతి క్షణాన్ని ఎంతో అందంగా బంధించారు. చాలా ప్రొఫెషనల్ గా, సృజనాత్మకంగా పనిచేశారు.', avatar: 'https://picsum.photos/seed/avatar-telugu1/100/100', rating: 5, service: 'Wedding Photography', dataAiHint: 'couple portrait wedding' },
  { id: 2, name: 'The Rao Family', quote: 'Our family function photos (Gruhapravesam) are cherished memories now, thanks to their wonderful work. Very patient and captured natural moments.', avatar: 'https://picsum.photos/seed/avatar-english1/100/100', rating: 5, service: 'Family Event', dataAiHint: 'family portrait group photo' },
  { id: 3, name: 'Priya & Ravi Kumar', quote: 'From our engagement shoot near Charminar to the wedding day, every photo is stunning. They made us feel so comfortable!', avatar: 'https://picsum.photos/seed/avatar-telugu2/100/100', rating: 5, service: 'Engagement & Wedding', dataAiHint: 'couple portrait engagement' },
  { id: 4, name: 'Ananya Reddy', quote: 'The Sreemantham (Baby Shower) photos were beautiful. Captured all the traditions perfectly. Highly recommended!', avatar: 'https://picsum.photos/seed/avatar-english2/100/100', rating: 4, service: 'Baby Shower (Sreemantham)', dataAiHint: 'woman portrait pregnant' },
  { id: 5, name: 'వెంకటేష్ గ్రూప్', quote: 'Excellent corporate event coverage in Hyderabad. Professional team and timely delivery of high-quality images.', avatar: 'https://picsum.photos/seed/avatar-telugu3/100/100', rating: 5, service: 'Corporate Event', dataAiHint: 'professional portrait business' },
];

// Custom SVG Quote Mark (Indian style)
const IndianQuoteMark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-secondary opacity-70 mb-3 mx-auto" aria-hidden="true"> {/* Hide decorative SVG */}
     <path d="M10.68,3.08 C8.75,3.71 7.2,5.32 6.5,7.29 C5.79,9.27 6.11,11.46 7.32,13.09 C5.84,12.2 4.75,10.78 4.75,9 C4.75,6.24 6.99,4 9.75,4 C10.17,4 10.57,4.05 10.96,4.14 C11.09,3.75 11.11,3.34 10.99,2.95 C10.91,2.69 10.73,2.5 10.5,2.43 C11.5,-1.31 17.8,0.33 10.68,3.08 Z M20.68,3.08 C18.75,3.71 17.2,5.32 16.5,7.29 C15.79,9.27 16.11,11.46 17.32,13.09 C15.84,12.2 14.75,10.78 14.75,9 C14.75,6.24 16.99,4 19.75,4 C20.17,4 20.57,4.05 20.96,4.14 C21.09,3.75 21.11,3.34 20.99,2.95 C20.91,2.69 20.73,2.5 20.5,2.43 C21.5,-1.31 27.8,0.33 20.68,3.08 Z" />
   </svg>
);


// Helper to render stars with accessibility
const renderStars = (rating: number) => {
  // Label for the rating div
  const ratingLabel = `${rating} out of 5 stars`;

  return (
    <div className="flex items-center justify-center" role="img" aria-label={ratingLabel}> {/* Role img and ARIA label */}
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(
            "mr-1 transition-colors duration-200",
            i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'
          )}
          // Individual star aria-hidden as the group has the label
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
    // Ref for Autoplay plugin
   const plugin = React.useRef(
     Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }) // Added stopOnMouseEnter
   )

  return (
    <div className="bg-gradient-to-b from-background via-secondary/5 to-background"> {/* Subtle gradient background */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <header className="text-center mb-12 md:mb-16"> {/* Use header, adjusted margin */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Words From Our Clients
            </h1>
            <p className="font-telugu text-center text-muted-foreground text-lg" lang="te">మా ఖాతాదారులు ఏమంటున్నారు</p>
        </header>

        {/* Add ARIA roles and labels to the carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative" // Add relative positioning for button placement
          // onMouseEnter={plugin.current.stop} // Already handled by plugin option
          // onMouseLeave={plugin.current.reset}
          role="region" // Carousel role
          aria-roledescription="carousel"
          aria-label="Client Testimonials" // Label for the carousel
        >
          <CarouselContent className="-ml-4"> {/* Adjust margin for spacing */}
            {testimonials.map((testimonial) => (
              // Add role="group" and aria-label to each item
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3" role="group" aria-roledescription="slide" aria-label={`Testimonial from ${testimonial.name}`}>
                 <div className="p-1 h-full"> {/* Padding wrapper for spacing */}
                    <Card className="h-full flex flex-col justify-between border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl overflow-hidden transform hover:-translate-y-1">
                      {/* Card Header */}
                      <CardHeader className="flex flex-col items-center text-center pb-4 pt-6 bg-muted/30 border-b border-border/30 relative">
                          {/* Decorative element */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true"></div>
                        <Avatar className="h-20 w-20 mb-4 border-4 border-background shadow-md shrink-0"> {/* Larger Avatar */}
                          <AvatarImage src={testimonial.avatar} alt="" data-ai-hint={testimonial.dataAiHint}/> {/* Alt handled by aria-label on item */}
                          <AvatarFallback className="text-lg font-semibold bg-secondary text-secondary-foreground">
                            {/* Handle both English and Telugu names for fallback */}
                            {testimonial.name.split(' ').map(n => n[0]).join('') || testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {/* Use H2 for the client name within the testimonial card */}
                        <CardTitle as="h2" className="text-lg font-telugu-stylish text-foreground">{testimonial.name}</CardTitle>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.service}</p>
                        {/* Render stars */}
                        {testimonial.rating && (
                          <div className="mt-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        )}
                      </CardHeader>
                      {/* Card Content */}
                      <CardContent className="flex-grow pt-6 px-6 pb-8 text-center">
                        <IndianQuoteMark />
                        {/* Use blockquote for the quote */}
                        <blockquote className="text-muted-foreground italic leading-relaxed font-telugu">
                           <p lang={/^[؀-ۿऀ-ॿ](?:[؀-ۿऀ-ॿ\s:"!,.?()-]+)?$/.test(testimonial.quote) ? 'te' : undefined}>{/* Detect Telugu script for lang attr */}
                            "{testimonial.quote}"
                          </p>
                        </blockquote>
                      </CardContent>
                    </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Styled Previous/Next Buttons - Positioned for better usability */}
          <CarouselPrevious className="absolute left-[-10px] sm:left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground border-border/50 shadow-md focus-visible:ring-offset-background" />
          <CarouselNext className="absolute right-[-10px] sm:right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground border-border/50 shadow-md focus-visible:ring-offset-background" />
        </Carousel>
         <p className="text-center text-muted-foreground mt-16">
          Loved our service? We'd be thrilled to hear from you! <Link href="/contact" className="text-secondary hover:text-accent font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Share Your Story</Link>.
        </p>
      </div>
    </div>
  );
}
