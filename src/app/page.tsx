import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Camera, Heart, Users, Award } from 'lucide-react';

// Placeholder data (replace with actual data later)
const portfolioImages = [
  { id: 1, src: 'https://picsum.photos/seed/telugu-wedding1/600/400', alt: 'Telugu Wedding Ceremony', category: 'Weddings', dataAiHint: 'wedding ceremony tradition' },
  { id: 2, src: 'https://picsum.photos/seed/prewedding1/600/400', alt: 'Pre-Wedding Shoot in Araku', category: 'Pre-Weddings', dataAiHint: 'couple outdoors nature' },
  { id: 3, src: 'https://picsum.photos/seed/haldi1/600/400', alt: 'Haldi Ceremony Fun', category: 'Haldi', dataAiHint: 'wedding haldi tradition' },
  { id: 4, src: 'https://picsum.photos/seed/baby-shower1/600/400', alt: 'Traditional Baby Shower', category: 'Baby Showers', dataAiHint: 'baby shower tradition' },
];

// Updated testimonials with bilingual example
const testimonials = [
   { id: 3, name: 'పల్లవి, విజయవాడ', quote: 'మన పెళ్లిని ఇలా అందంగా క్యాప్చర్ చేస్తారని అనుకోలేదు! డ్రీమ్ క్యాప్చర్స్ టీమ్ చాల బాగుంది.', avatar: 'https://picsum.photos/seed/avatar-telugu2/100/100', dataAiHint: 'woman portrait happy' },
  { id: 2, name: 'Ravi & Priya K.', quote: 'Professional, creative, and captured the soul of our Andhra wedding. Highly recommend!', avatar: 'https://picsum.photos/seed/avatar-english1/100/100', dataAiHint: 'couple portrait happy' },
];

// Example Service Icons (Replace with actual Indian themed icons/SVGs later)
const DiyaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>;
const MangalsutraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M12 22V9"/><path d="m3.45 9 8.55 13"/><path d="m20.55 9-8.55 13"/></svg>; // Placeholder icon, using Gem
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
          data-ai-hint="wedding ceremony couple tradition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div> {/* Gradient Overlay */}
        <div className="relative z-20 p-4 animate-fade-in-slow">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 drop-shadow-lg text-white">
            Dream Captures
          </h1>
           <p className="text-2xl md:text-3xl font-baloo text-accent mb-8 drop-shadow-md">
             ప్రతి ఫోటోలో ఒక అందమైన గుర్తు...
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow text-gray-200">
             Capturing the vibrant traditions and emotions of Telugu weddings across Andhra Pradesh. Every photo holds a beautiful memory.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 border border-secondary-foreground/20">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
              <Link href="/portfolio" className="font-noto">ఫొటోలను చూడండి</Link>
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
              data-ai-hint="photographer camera team"
            />
            {/* Optional: Subtle overlay like paisley */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent"></div>
          </div>
          <div className="animate-fade-in-slow">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Meet the Team</h2>
             {/* Updated Bilingual Intro */}
             <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-noto">
                 డ్రీమ్ క్యాప్చర్స్ అనేది ఆంధ్రప్రదేశ్‌లో ఉన్న యువ ఫోటోగ్రాఫర్ల టీమ్. మేము పెళ్లిళ్లు, పార్టీలు, మరియు ఎన్నో అందమైన క్షణాలను బంధిస్తాం.
             </p>
             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are Dream Captures, a passionate team of young photographers from Andhra Pradesh. We specialize in turning your special moments – weddings, parties, model shoots – into timeless memories.
             </p>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
       <section className="py-16 md:py-24 bg-secondary/10"> {/* Light secondary background */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">Glimpses of Joy</h2>
           <p className="font-noto text-muted-foreground mb-10">మా ఇటీవలి వేడుకల నుండి కొన్ని మధురమైన క్షణాలు.</p>
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
                        data-ai-hint={image.dataAiHint}
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
           <p className="font-noto text-muted-foreground mb-10">మా ఖాతాదారుల అనుభవాలు.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-left shadow-lg border border-border hover:shadow-xl transition-shadow bg-card rounded-xl overflow-hidden">
                 {/* Optional: Add a subtle traditional border pattern to header */}
                 <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-muted/50 p-4">
                   <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                   <div>
                    <CardTitle className="text-lg font-baloo text-foreground">{testimonial.name}</CardTitle>
                     {/* Optional: Add Star Rating Here */}
                   </div>
                 </CardHeader>
                 <CardContent className="pt-4 px-6 pb-6">
                   {/* Custom Quote SVG */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary mb-2 opacity-70">
                     <path d="M9.983 3v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1zm14.017 0v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1z"/>
                   </svg>
                   <p className="text-muted-foreground italic font-noto">"{testimonial.quote}"</p>
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
           <p className="font-noto text-muted-foreground mb-10">మీ ప్రతి వేడుకకు అనువైన ప్యాకేజీలు.</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-10"> {/* Adjusted grid for 4 services */}
             {/* Service Card 1: Wedding */}
             <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1">
               <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground mb-4 shadow-md">
                    <MangalsutraIcon /> {/* Represents Wedding */}
                  </div>
                 <CardTitle className="font-serif text-xl text-foreground">Weddings</CardTitle>
                 <CardDescription className="text-sm text-primary font-semibold font-noto">పెళ్లిళ్లు</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Traditional, candid, haldi, reception – we capture it all.</p>
               </CardContent>
             </Card>
              {/* Service Card 2: Parties */}
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6">
                 <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-red-700 text-secondary-foreground mb-4 shadow-md">
                    <Users /> {/* Represents Gatherings */}
                 </div>
                 <CardTitle className="font-serif text-xl text-foreground">Parties</CardTitle>
                 <CardDescription className="text-sm text-secondary font-semibold font-noto">పార్టీలు / పుట్టినరోజులు</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Birthdays, events, anniversaries – celebrating life's milestones.</p>
               </CardContent>
             </Card>
              {/* Service Card 3: Model Shoots */}
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-yellow-100 p-6">
                 <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-500 text-accent-foreground mb-4 shadow-md">
                    <Camera /> {/* Represents Fashion/Portfolio */}
                 </div>
                 <CardTitle className="font-serif text-xl text-foreground">Model Shoots</CardTitle>
                  <CardDescription className="text-sm text-accent-foreground font-semibold bg-accent/80 px-2 py-0.5 rounded inline-block font-noto">మోడల్ షూట్స్</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Portfolio creation, fashion clicks, and creative portraits.</p>
               </CardContent>
             </Card>
             {/* Service Card 4: Outdoor Sessions */}
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-br from-teal-500/10 to-cyan-100 p-6"> {/* Using Teal/Cyan variation */}
                 <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white mb-4 shadow-md">
                    <Heart /> {/* Represents Love/Couples/Nature */}
                 </div>
                 <CardTitle className="font-serif text-xl text-foreground">Outdoor Sessions</CardTitle>
                  <CardDescription className="text-sm text-teal-700 font-semibold font-noto">అవుట్‌డోర్ ఫోటోలు</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-4">
                 <p className="text-muted-foreground text-sm">Pre-wedding romance, nature's beauty, stunning sunset shoots.</p>
               </CardContent>
             </Card>
           </div>
           {/* Tagline */}
            <p className="font-baloo text-2xl text-foreground mb-10">"మీ ప్రతి షాట్ లో ఒక కథ ఉంటుంది!"</p>
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
            <p className="font-noto text-muted-foreground mb-8 max-w-xl mx-auto">మీ మధుర జ్ఞాపకాలను కలకాలం పదిలపరుచుకోవడానికి మమ్మల్ని సంప్రదించండి.</p>
            {/* Updated Bilingual CTA Button */}
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105">
               <Link href="/booking">మమ్మల్ని బుక్ చేయండి / Book Now</Link>
            </Button>
         </div>
       </section>

    </div>
  );
}
