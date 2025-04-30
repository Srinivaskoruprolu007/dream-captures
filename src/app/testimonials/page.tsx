'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Quote, Star } from 'lucide-react';

// Placeholder data
const testimonials = [
  { id: 1, name: 'Jane & Michael Doe', quote: 'Dream Captures turned our wedding photos into pure art. Every shot tells a story, and we couldn\'t be happier. Professional, creative, and captured the essence of our day perfectly.', avatar: 'https://picsum.photos/seed/avatar1/100/100', rating: 5, service: 'Wedding Photography' },
  { id: 2, name: 'The Smith Family', quote: 'Working with [Photographer Name] was a fantastic experience. They made our family photoshoot fun and relaxed, and the photos are treasures we\'ll keep forever.', avatar: 'https://picsum.photos/seed/avatar2/100/100', rating: 5, service: 'Family Portraits' },
  { id: 3, name: 'David Lee', quote: 'Needed professional headshots, and Dream Captures delivered beyond expectations. Quick turnaround and high-quality images.', avatar: 'https://picsum.photos/seed/avatar3/100/100', rating: 5, service: 'Corporate Headshots' },
  { id: 4, name: 'Sarah Chen', quote: 'The event photography was exceptional. They captured all the key moments without being intrusive. Highly recommend for any corporate event.', avatar: 'https://picsum.photos/seed/avatar4/100/100', rating: 4, service: 'Event Coverage' },
   { id: 5, name: 'Emily & Tom White', quote: 'Our engagement photos are stunning! [Photographer Name] found the perfect locations and made us feel so comfortable in front of the camera.', avatar: 'https://picsum.photos/seed/avatar5/100/100', rating: 5, service: 'Engagement Session' },
];

// Helper to render stars
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={`mr-1 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
    />
  ));
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
        Words From Our Clients
      </h1>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-4"> {/* Show 2 testimonials on medium screens */}
               <Card className="h-full flex flex-col justify-between border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                 <CardHeader className="flex flex-col items-center text-center pb-4">
                   <Avatar className="h-16 w-16 mb-3">
                     <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                     <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                   </Avatar>
                   <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                   <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                   {testimonial.rating && (
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  )}
                 </CardHeader>
                 <CardContent className="flex-grow pt-0 text-center">
                   <Quote className="h-5 w-5 text-primary mx-auto mb-3 transform scale-x-[-1]" /> {/* Flipped quote */}
                   <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                 </CardContent>
               </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
      </Carousel>
       <p className="text-center text-muted-foreground mt-12">
        Want to share your experience? <a href="/contact" className="text-primary hover:underline">Contact us!</a>
      </p>
    </div>
  );
}

// Make sure you have Carousel components installed/available
// Assuming shadcn/ui carousel is used:
// components/ui/carousel.tsx (make sure this file exists and is correct)
