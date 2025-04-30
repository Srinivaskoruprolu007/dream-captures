import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Camera, Heart, Users, Award } from 'lucide-react'; // Added cultural icons implicitly

// Placeholder data (replace with actual data later)
const portfolioImages = [
  { id: 1, src: 'https://picsum.photos/seed/telugu-wedding1/600/400', alt: 'Telugu Wedding Ceremony', category: 'Weddings' },
  { id: 2, src: 'https://picsum.photos/seed/prewedding1/600/400', alt: 'Pre-Wedding Shoot in Araku', category: 'Pre-Weddings' },
  { id: 3, src: 'https://picsum.photos/seed/haldi1/600/400', alt: 'Haldi Ceremony Fun', category: 'Haldi' },
  { id: 4, src: 'https://picsum.photos/seed/baby-shower1/600/400', alt: 'Traditional Baby Shower', category: 'Baby Showers' },
];

const testimonials = [
  { id: 1, name: 'శ్రీనివాస్ & లక్ష్మి', quote: 'మా పెళ్లి ఫోటోలు అద్భుతం! ప్రతి క్షణం ఎంతో అందంగా తీశారు. Dream Captures కి మా ధన్యవాదాలు.', avatar: 'https://picsum.photos/seed/avatar-telugu1/100/100' },
  { id: 2, name: 'Ravi & Priya K.', quote: 'Professional, creative, and captured the soul of our Andhra wedding. Highly recommend!', avatar: 'https://picsum.photos/seed/avatar-telugu2/100/100' },
];

// Example Service Icons (Replace with actual Indian themed icons/SVGs later)
const DiyaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
const MangalsutraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-crack"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 13-1-1 2-2-3-3-1 1"/></svg>; // Placeholder icon
const CameraGarlandIcon = () => <Camera />; // Placeholder, ideally with garland SVG overlay

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Replace with Telugu Wedding Video/Image */}
        <Image
          src="https://picsum.photos/seed/telugu-hero/1920/1080"
          alt="Telugu wedding moment"
          layout="fill"
          objectFit="cover"
          quality={85} // Slightly higher quality for hero
          className="absolute inset-0 z-0 filter brightness-75" // Add brightness filter
          priority // Load hero image faster
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div> {/* Gradient Overlay */}
        <div className="relative z-20 p-4 animate-fade-in-slow">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 drop-shadow-lg text-white">
            Dream Captures
          </h1>
           <p className="text-2xl md:text-3xl font-telugu-stylish text-accent mb-8 drop-shadow-md">
            ప్రతి ఫోటోలో ఒక కథ...
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow text-gray-200">
            Capturing the vibrant traditions and emotions of Telugu weddings across Andhra Pradesh.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 border border-secondary-foreground/20">
              <Link href="/portfolio">Explore Our Captures</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href="/contact" className="font-telugu">మీ క్షణాలను బుక్ చేసుకోండి</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl border-4 border-accent/30">
             <Image
              src="https://picsum.photos/seed/photographer-ap/600/800" // More portrait oriented
              alt="Photographer with Andhra backdrop"
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-110"
            />
            {/* Optional: Subtle overlay like paisley */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent"></div>
          </div>
          <div className="animate-fade-in-slow">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Meet the Artist</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed font-telugu">
             నమస్కారం! నేను [Photographer Name], డ్రీమ్ క్యాప్చర్స్ వెనుక ఉన్న కళాకారుడిని. ఆంధ్రప్రదేశ్‌లో పుట్టి పెరిగిన నాకు, మన సంప్రదాయాలను, పెళ్లి వేడుకల భావోద్వేగాలను చిత్రించడం అంటే ఎంతో ఇష్టం.
            </p>
             <p className="text-muted-foreground mb-6 leading-relaxed">
              Rooted in the rich culture of Andhra Pradesh, I blend traditional aesthetics with modern storytelling to create images that resonate with heart and heritage.
            </p>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Link href="/about">Discover My Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
       <section className="py-16 md:py-24 bg-secondary/10"> {/* Light secondary background */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-foreground">Glimpses of Joy</h2>
           <p className="font-telugu text-muted-foreground mb-10">మా ఇటీవలి వేడుకల నుండి కొన్ని మధురమైన క్షణాలు.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {portfolioImages.map((image) => (
              <Link key={image.id} href="/portfolio" className="group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-accent">
                 <div className="relative aspect-[4/3]"> {/* Adjusted aspect ratio */}
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
                        <span className="text-white font-semibold text-sm">{image.category}</span>
                        {/* Optional: Add a small icon here */}
                    </div>
                 </div>
              </Link>
            ))}
          </div>
           <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/portfolio">Explore Full Portfolio</Link>
            </Button>
        </div>
      </section>

      {/* Testimonials Teaser */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Happy Clients, Lasting Memories</h2>
           <p className="font-telugu text-muted-foreground mb-10">మా ఖాతాదారుల అనుభవాలు.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-left shadow-lg border border-border hover:shadow-xl transition-shadow bg-card rounded-xl overflow-hidden">
                 {/* Optional: Add a subtle traditional border pattern to header */}
                 <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-muted/50 p-4">
                   <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                   <div>
                    <CardTitle className="text-lg font-telugu-stylish text-foreground">{testimonial.name}</CardTitle>
                     {/* Optional: Add Star Rating Here */}
                   </div>
                 </CardHeader>
                 <CardContent className="pt-4 px-6 pb-6">
                   {/* Custom Quote SVG */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary mb-2 opacity-70">
                     <path d="M9.983 3v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1zm14.017 0v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1z"/>
                   </svg>
                   <p className="text-muted-foreground italic font-telugu">"{testimonial.quote}"</p>
                 </CardContent>
              </Card>
            ))}
          </div>
           <Button asChild variant="link" className="mt-10 text-primary hover:text-accent">
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
        </div>
      </section>

       {/* Services Teaser */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Our Signature Services</h2>
           <p className="font-telugu text-muted-foreground mb-10">మీ ప్రతి వేడుకకు అనువైన ప్యాకేజీలు.</p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
             {/* Service Card 1: Wedding */}
             <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden">
               <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground mb-4 shadow-md">
                    <MangalsutraIcon /> {/* Represents Wedding */}
                  </div>
                 <CardTitle className="font-serif text-xl text-foreground">Rajahmundry Royal</CardTitle>
                 <CardDescription className="text-sm text-primary font-semibold">Comprehensive Wedding Coverage</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Capturing every ritual and emotion of your grand Telugu wedding with artistic flair.</p>
               </CardContent>
             </Card>
              {/* Service Card 2: Portraits/Pre-Wedding */}
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6">
                 <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-orange-600 text-secondary-foreground mb-4 shadow-md">
                    <Heart /> {/* Represents Love/Couples */}
                 </div>
                 <CardTitle className="font-serif text-xl text-foreground">Vizag Classic</CardTitle>
                 <CardDescription className="text-sm text-secondary font-semibold">Engagements & Portraits</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Beautifully crafted couple portraits and engagement stories against scenic backdrops.</p>
               </CardContent>
             </Card>
              {/* Service Card 3: Events/Baby Shower */}
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-yellow-100 p-6">
                 <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-500 text-accent-foreground mb-4 shadow-md">
                    <Users /> {/* Represents Family/Events */}
                 </div>
                 <CardTitle className="font-serif text-xl text-foreground">Tirupati Divine</CardTitle>
                  <CardDescription className="text-sm text-accent-foreground font-semibold bg-accent/80 px-2 py-0.5 rounded inline-block">Family & Events</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Documenting baby showers (Sreemantham), birthdays, and other cherished family milestones.</p>
               </CardContent>
             </Card>
           </div>
          <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/services">View All Packages</Link>
          </Button>
        </div>
      </section>

       {/* Final CTA */}
       <section className="py-16 md:py-24 bg-background text-center">
         <div className="container mx-auto px-4 md:px-6">
            <Award className="h-12 w-12 mx-auto text-accent mb-4" />
            <h3 className="text-3xl font-serif font-semibold mb-4 text-foreground">Ready to Preserve Your Moments?</h3>
            <p className="font-telugu text-muted-foreground mb-8 max-w-xl mx-auto">మీ మధుర జ్ఞాపకాలను కలకాలం పదిలపరుచుకోవడానికి మమ్మల్ని సంప్రదించండి.</p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
         </div>
       </section>

    </div>
  );
}
