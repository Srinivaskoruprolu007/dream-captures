"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Camera,
  Heart,
  Users,
  Award,
  MapPin,
  Gem,
  Flower,
  Sparkles,
  Bell,
} from "lucide-react";
import { HeroVideo } from "@/components/home/HeroVideo";
import { MandalaPattern } from "@/components/shared/MandalaPattern";

// Placeholder data (replace with actual data later)
const portfolioImages = [
  {
    id: 1,
    src: "https://picsum.photos/seed/telugu-wedding1/600/400",
    alt: "Traditional Telugu Wedding Ceremony Moment",
    category: "Weddings",
    dataAiHint: "wedding ceremony tradition",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/prewedding1/600/400",
    alt: "Couple posing during a Pre-Wedding Shoot in Araku Valley",
    category: "Pre-Weddings",
    dataAiHint: "couple outdoors nature",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/haldi1/600/400",
    alt: "Joyful moment during a Haldi Ceremony",
    category: "Haldi",
    dataAiHint: "wedding haldi tradition",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/baby-shower1/600/400",
    alt: "Blessings during a Traditional Baby Shower",
    category: "Baby Showers",
    dataAiHint: "baby shower tradition",
  },
];

// Updated testimonials with bilingual example
const testimonials = [
  {
    id: 3,
    name: "పల్లవి, విజయవాడ",
    quote:
      "మన పెళ్లిని ఇలా అందంగా క్యాప్చర్ చేస్తారని అనుకోలేదు! డ్రీమ్ క్యాప్చర్స్ టీమ్ చాల బాగుంది.",
    avatar: "https://picsum.photos/seed/avatar-telugu2/100/100",
    dataAiHint: "woman portrait happy",
  },
  {
    id: 2,
    name: "Ravi & Priya K.",
    quote:
      "Professional, creative, and captured the soul of our Andhra wedding. Highly recommend!",
    avatar: "https://picsum.photos/seed/avatar-english1/100/100",
    dataAiHint: "couple portrait happy",
  },
];

// Example Service Icons using Lucide - Replaced Rings with Gem
const WeddingIcon = () => <Gem aria-hidden="true" className="h-6 w-6" />; // Use Gem instead of Rings
const PartyIcon = () => <Users aria-hidden="true" className="h-6 w-6" />;
const ModelIcon = () => <Camera aria-hidden="true" className="h-6 w-6" />;
const OutdoorIcon = () => <Flower aria-hidden="true" className="h-6 w-6" />;

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      {" "}
      {/* Use background color */}
      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Video Background */}
        <HeroVideo />
        {/* Decorative Mandala Pattern */}
        <MandalaPattern className="z-10 opacity-30" />
        {/* Hero Content */}
        <div className="relative z-20 p-6 md:p-8 animate-fade-in-slow max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 drop-shadow-lg text-white">
            {" "}
            {/* Ensure text color is white */}
            Dream Captures
          </h1>
          <p
            className="text-2xl md:text-3xl font-baloo text-accent mb-8 drop-shadow-md"
            lang="te"
          >
            {" "}
            {/* Accent Pink */}
            ప్రతి ఫోటోలో ఒక అందమైన గుర్తు...
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow text-gray-200">
            {" "}
            {/* Ensure text color is light */}
            Capturing the vibrant traditions and emotions of Telugu weddings
            across Andhra Pradesh. Every photo holds a beautiful memory.
          </p>
          {/* Call to Actions - Updated button colors */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary button (Secondary color - Maroon) */}
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
            {/* Outline button (White/Transparent) */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/portfolio" className="font-noto" lang="te">
                ఫొటోలను చూడండి
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* About Teaser - Use background color */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="about-teaser-heading"
      >
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Container - Use accent border (Teal) */}
          <div className="relative aspect-[4/3] max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl border-4 border-accent/30 order-1 md:order-none">
            {" "}
            {/* Teal border */}
            <Image
              src="https://picsum.photos/seed/photographer-ap/600/800"
              alt="One of the Dream Captures photographers holding a camera."
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 hover:scale-110"
              data-ai-hint="photographer camera team"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent"
              aria-hidden="true"
            ></div>{" "}
            {/* Softer overlay */}
          </div>
          {/* Text Content */}
          <div className="animate-fade-in-slow order-2 md:order-none">
            <h2
              id="about-teaser-heading"
              className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground"
            >
              Meet the Team
            </h2>
            <p
              className="text-lg text-muted-foreground mb-4 leading-relaxed font-noto"
              lang="te"
            >
              డ్రీమ్ క్యాప్చర్స్ అనేది ఆంధ్రప్రదేశ్‌లో ఉన్న యువ ఫోటోగ్రాఫర్ల
              టీమ్. మేము పెళ్లిళ్లు, పార్టీలు, మరియు ఎన్నో అందమైన క్షణాలను
              బంధిస్తాం.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are Dream Captures, a passionate team of young photographers
              from Andhra Pradesh. We specialize in turning your special moments
              – weddings, parties, model shoots – into timeless memories.
            </p>
            <div className="flex items-center text-muted-foreground text-sm mb-6">
              {/* Use primary color (Maroon) for icon */}
              <MapPin size={16} className="mr-2 text-primary" /> Based in [Your
              City], Andhra Pradesh
            </div>
            {/* Outline button (Accent - Teal) */}
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Portfolio Teaser - Light pastel background (e.g., Primary tint) */}
      <section
        className="py-16 md:py-24 bg-primary/5"
        aria-labelledby="portfolio-teaser-heading"
      >
        {" "}
        {/* Muted Sand/Beige tint background */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2
            id="portfolio-teaser-heading"
            className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground"
          >
            Glimpses of Joy
          </h2>
          <p className="font-noto text-muted-foreground mb-10" lang="te">
            మా ఇటీవలి వేడుకల నుండి కొన్ని మధురమైన క్షణాలు.
          </p>
          {/* Responsive Grid for Portfolio Images - Use accent border on hover (Teal) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {portfolioImages.map((image) => (
              <Link
                key={image.id}
                href="/portfolio"
                className="group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {" "}
                {/* Teal border on hover */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={image.dataAiHint}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay visible on hover/focus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 flex items-end justify-between p-2 sm:p-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                    <span className="text-white font-semibold text-xs sm:text-sm line-clamp-1">
                      {image.category}
                    </span>
                    {/* Optional: Add small icon like Camera or Heart */}
                    {/* <Camera size={14} className="text-white opacity-80" /> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Default button (Secondary - Maroon) */}
          <Button
            asChild
            variant="secondary"
            className="hover:opacity-90 text-secondary-foreground"
          >
            <Link href="/portfolio">Explore Full Portfolio</Link>
          </Button>
        </div>
      </section>
      {/* Testimonials Teaser - Use background color */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="testimonials-teaser-heading"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2
            id="testimonials-teaser-heading"
            className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground"
          >
            Happy Clients, Lasting Memories
          </h2>
          <p className="font-noto text-muted-foreground mb-10" lang="te">
            మా ఖాతాదారుల అనుభవాలు.
          </p>
          {/* Responsive Grid for Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="text-left shadow-lg border border-border hover:shadow-xl transition-shadow bg-card rounded-xl overflow-hidden"
              >
                {" "}
                {/* Softer border */}
                <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-muted/50 p-4">
                  {" "}
                  {/* Muted pastel bg */}
                  {/* Use Primary (Maroon) for border */}
                  <Avatar className="h-14 w-14 border-2 border-primary shrink-0">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.name}`}
                      data-ai-hint={testimonial.dataAiHint}
                    />
                    {/* Use Primary (Maroon) for fallback */}
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-baloo text-foreground">
                      {testimonial.name}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 px-6 pb-6">
                  {/* Decorative Quote SVG - Secondary (Maroon) */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-secondary mb-2 opacity-70"
                    aria-hidden="true"
                  >
                    <path d="M9.983 3v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1zm14.017 0v7.391c0 2.795-2.246 5.041-5.041 5.041-2.795 0-5.041-2.246-5.041-5.041s2.246-5.041 5.041-5.041c.472 0 .93.065 1.367.182-.692-1.457-1.34-2.804-1.784-3.552-.07-.12-.034-.28.085-.353.119-.072.279-.036.348.084 1.33 2.36 2.303 4.058 2.966 5.261.023.04.048.077.075.11l.02.026v-7.391c0-.552.447-1 1-1s1 .448 1 1z" />
                  </svg>
                  <blockquote
                    className="text-muted-foreground italic font-noto"
                    lang={testimonial.id === 3 ? "te" : undefined}
                  >
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Link uses primary color (Maroon) */}
          <Button
            asChild
            variant="link"
            className="mt-10 text-primary hover:text-accent"
          >
            <Link href="/testimonials">Read More Stories</Link>
          </Button>
        </div>
      </section>
      {/* Services Teaser - Light pastel background (e.g., Accent tint - Teal) */}
      <section
        className="py-16 md:py-24 bg-accent/5"
        aria-labelledby="services-teaser-heading"
      >
        {" "}
        {/* Teal tint */}
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2
            id="services-teaser-heading"
            className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground"
          >
            Our Signature Services
          </h2>
          <p className="font-noto text-muted-foreground mb-10" lang="te">
            మీ ప్రతి వేడుకకు అనువైన ప్యాకేజీలు.
          </p>
          {/* Responsive Grid for Services - Use gradient backgrounds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-10">
            {/* Service Card 1: Wedding - Primary/Accent Gradient (Maroon/Teal) */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                {" "}
                {/* Maroon/Teal tint bg */}
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal-600 text-primary-foreground mb-4 shadow-md shrink-0">
                  <WeddingIcon /> {/* Updated icon */}
                </div>
                <CardTitle className="font-serif text-xl text-foreground">
                  Weddings
                </CardTitle>
                <CardDescription
                  className="text-sm text-primary font-semibold font-noto"
                  lang="te"
                >
                  పెళ్లిళ్లు
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow">
                <p className="text-muted-foreground text-sm">
                  Traditional, candid, haldi, reception – we capture it all.
                </p>
              </CardContent>
            </Card>
            {/* Service Card 2: Parties - Secondary/Gold Gradient */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="bg-gradient-to-br from-secondary/10 to-yellow-100 p-6">
                {" "}
                {/* Maroon/Gold tint bg */}
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-600 text-secondary-foreground mb-4 shadow-md shrink-0">
                  <PartyIcon />
                </div>
                <CardTitle className="font-serif text-xl text-foreground">
                  Parties & Events
                </CardTitle>
                <CardDescription
                  className="text-sm text-secondary font-semibold font-noto"
                  lang="te"
                >
                  పార్టీలు / పుట్టినరోజులు
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow">
                <p className="text-muted-foreground text-sm">
                  Birthdays, anniversaries, corporate events – celebrating
                  life's milestones.
                </p>
              </CardContent>
            </Card>
            {/* Service Card 3: Model Shoots - Accent/Gold Gradient */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="bg-gradient-to-br from-accent/10 to-yellow-100 p-6">
                {" "}
                {/* Teal/Gold tint bg */}
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-yellow-500 text-accent-foreground mb-4 shadow-md shrink-0">
                  <ModelIcon />
                </div>
                <CardTitle className="font-serif text-xl text-foreground">
                  Model Shoots
                </CardTitle>
                {/* Use themed badge for description */}
                <CardDescription
                  className="text-sm text-accent-foreground font-semibold bg-accent/80 px-2 py-0.5 rounded inline-block font-noto"
                  lang="te"
                >
                  మోడల్ షూట్స్
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow">
                <p className="text-muted-foreground text-sm">
                  Portfolio creation, fashion clicks, and creative portraits.
                </p>
              </CardContent>
            </Card>
            {/* Service Card 4: Outdoor Sessions - Teal/Cyan Gradient */}
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border border-border rounded-xl overflow-hidden transform hover:-translate-y-1 flex flex-col">
              <CardHeader className="bg-gradient-to-br from-teal-500/10 to-cyan-100 p-6">
                {" "}
                {/* Teal/Cyan tint bg */}
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white mb-4 shadow-md shrink-0">
                  <OutdoorIcon />
                </div>
                <CardTitle className="font-serif text-xl text-foreground">
                  Outdoor Sessions
                </CardTitle>
                {/* Use themed badge for description */}
                <CardDescription
                  className="text-sm text-teal-700 font-semibold font-noto"
                  lang="te"
                >
                  అవుట్‌డోర్ ఫోటోలు
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow">
                <p className="text-muted-foreground text-sm">
                  Pre-wedding romance, nature's beauty, stunning sunset shoots.
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Tagline */}
          <p className="font-baloo text-2xl text-foreground mb-10" lang="te">
            "మీ ప్రతి షాట్ లో ఒక కథ ఉంటుంది!"
          </p>
          {/* Secondary button (Maroon) */}
          <Button
            asChild
            variant="secondary"
            className="hover:opacity-90 text-secondary-foreground"
          >
            <Link href="/services">View All Packages</Link>
          </Button>
        </div>
      </section>
      {/* Final CTA - Use background color */}
      <section
        className="py-16 md:py-24 bg-background text-center"
        aria-labelledby="final-cta-heading"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Use accent color (Teal) for icon */}
          <Award
            className="h-12 w-12 mx-auto text-accent mb-4"
            aria-hidden="true"
          />
          <h3
            id="final-cta-heading"
            className="text-3xl font-serif font-semibold mb-4 text-foreground"
          >
            Ready to Preserve Your Moments?
          </h3>
          <p
            className="font-noto text-muted-foreground mb-8 max-w-xl mx-auto"
            lang="te"
          >
            మీ మధుర జ్ఞాపకాలను కలకాలం పదిలపరుచుకోవడానికి మమ్మల్ని సంప్రదించండి.
          </p>
          {/* Primary Button (Maroon) */}
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Link href="/booking">మమ్మల్ని బుక్ చేయండి / Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
