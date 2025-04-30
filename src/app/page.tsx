import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

// Placeholder data (replace with actual data later)
const portfolioImages = [
  { id: 1, src: 'https://picsum.photos/seed/wedding1/600/400', alt: 'Wedding photo 1', category: 'Weddings' },
  { id: 2, src: 'https://picsum.photos/seed/portrait1/600/400', alt: 'Portrait photo 1', category: 'Portraits' },
  { id: 3, src: 'https://picsum.photos/seed/event1/600/400', alt: 'Event photo 1', category: 'Events' },
  { id: 4, src: 'https://picsum.photos/seed/landscape1/600/400', alt: 'Landscape photo 1', category: 'Landscapes' },
];

const testimonials = [
  { id: 1, name: 'Jane Doe', quote: 'Dream Captures made our wedding day unforgettable. The photos are absolutely breathtaking!', avatar: 'https://picsum.photos/seed/avatar1/100/100' },
  { id: 2, name: 'John Smith', quote: 'Professional, creative, and a joy to work with. Highly recommend!', avatar: 'https://picsum.photos/seed/avatar2/100/100' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero/1920/1080"
          alt="Hero background image"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0"
          priority // Load hero image faster
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark Overlay */}
        <div className="relative z-20 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 drop-shadow-md">
            Capturing Dreams, One Frame at a Time.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            Professional photography for life's most precious moments. Based in YourCity.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
             <Image
              src="https://picsum.photos/seed/photographer/600/600"
              alt="Photographer portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Meet the Artist</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm [Photographer Name], the eye behind Dream Captures. With a passion for storytelling and an obsession with light, I strive to create timeless images that evoke emotion and preserve memories.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About My Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-foreground">Our Recent Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {portfolioImages.map((image) => (
              <Link key={image.id} href="/portfolio" className="group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                 <div className="relative aspect-video">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-semibold">{image.category}</span>
                    </div>
                 </div>
              </Link>
            ))}
          </div>
           <Button asChild variant="default">
              <Link href="/portfolio">Explore Full Portfolio</Link>
            </Button>
        </div>
      </section>

      {/* Testimonials Teaser */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-foreground">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-left shadow-sm border border-border hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                   <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                   <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                     {/* Optional: Add Star Rating Here */}
                   </div>
                 </CardHeader>
                 <CardContent className="pt-2">
                   <Quote className="h-5 w-5 text-primary mb-2" />
                   <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                 </CardContent>
              </Card>
            ))}
          </div>
           <Button asChild variant="outline" className="mt-10">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
        </div>
      </section>

       {/* Services Teaser */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-foreground">Our Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
             {/* Service Card 1 */}
             <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
               <CardHeader>
                 {/* Placeholder Icon */}
                 <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                 </div>
                 <CardTitle className="font-serif text-xl">Weddings</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground text-sm">Capturing the magic of your special day with elegance and emotion.</p>
               </CardContent>
             </Card>
              {/* Service Card 2 */}
              <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
               <CardHeader>
                 {/* Placeholder Icon */}
                 <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                 </div>
                 <CardTitle className="font-serif text-xl">Portraits</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground text-sm">Beautifully crafted portraits that reflect personality and style.</p>
               </CardContent>
             </Card>
              {/* Service Card 3 */}
              <Card className="text-center shadow-sm hover:shadow-lg transition-shadow">
               <CardHeader>
                 {/* Placeholder Icon */}
                 <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M11.3 5.8 22 2l-3.79 10.7"/><path d="m13.41 13.41 2.35 2.35"/><path d="M10.59 10.59 8.24 8.24"/><path d="M14.83 7.17 12 10"/><path d="m7.17 14.83 2.83-2.83"/><path d="m12 12 7.07-7.07"/><path d="m7.07 7.07 5.66 5.66"/><path d="M11 3 8 3"/><path d="M13 21h3"/><path d="M3 11v3"/><path d="M21 13v-3"/></svg>
                 </div>
                 <CardTitle className="font-serif text-xl">Events</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground text-sm">Documenting your corporate events, parties, and gatherings.</p>
               </CardContent>
             </Card>
           </div>
          <Button asChild variant="default">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
