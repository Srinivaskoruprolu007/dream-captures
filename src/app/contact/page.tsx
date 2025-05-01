'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import cn

// Placeholder for Map Component - Improved Accessibility
const MapPlaceholder = () => (
  <div
    className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground border border-border/50 shadow-inner"
    role="img" // Role for image/graphic
    aria-label="Placeholder for Google Map showing service location" // Descriptive ARIA label
    >
    <div className="text-center p-4"> {/* Add padding */}
        <MapPin className="mx-auto h-10 w-10 md:h-12 md:w-12 text-muted-foreground/50 mb-2" aria-hidden="true"/>
        <p className="font-semibold">Google Map Integration</p>
        <p className="text-xs font-noto" lang="te">(ఇక్కడ మాతో కలవండి)</p>
    </div>
  </div>
);

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '', eventType: '', eventDate: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', formData);
    // Simulate API call (replace with actual submission logic)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setFormData({ name: '', email: '', message: '', phone: '', eventType: '', eventDate: '' }); // Reset form
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out (ధన్యవాదాలు!). Our team will connect with you shortly.",
      variant: "default", // Use default variant for success
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <header className="text-center mb-16"> {/* Use header */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Get In Touch
          </h1>
           <p className="font-noto text-muted-foreground text-lg mb-2" lang="te">మమ్మల్ని సంప్రదించండి</p>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions for the Dream Captures team? Want to check availability for your wedding, party, or photoshoot? We'd love to hear from you!
          </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"> {/* Adjusted gap */}
        {/* Contact Form */}
        <div className="lg:col-span-2">
            <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-muted/30 p-6">
                {/* Use h2 for section heading */}
                <CardTitle as="h2" className="font-serif text-2xl">Send Our Team a Message</CardTitle>
                <CardDescription className="font-noto" lang="te">మీ సందేశం పంపండి</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                {/* Add status role for screen readers */}
                <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <Label htmlFor="name" className="font-medium">Name <span className="font-noto" lang="te">(పేరు)</span></Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name / మీ పేరు"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            autoComplete="name"
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium">Email <span className="font-noto" lang="te">(ఇమెయిల్)</span></Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            autoComplete="email"
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                 </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="font-medium">Phone <span className="font-noto" lang="te">(ఫోన్)</span> <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="eventDate" className="font-medium">Event Date <span className="font-noto" lang="te">(తేదీ)</span> <span className="text-muted-foreground text-xs">(Approx if unsure)</span></Label>
                        <Input
                            id="eventDate"
                            name="eventDate"
                            type="date" // Use date type for better UX
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="bg-background focus:border-secondary"
                            // Consider adding min attribute for usability: min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                   </div>
                   <div className="space-y-2">
                        <Label htmlFor="eventType" className="font-medium">Event Type <span className="font-noto" lang="te">(ఈవెంట్ పేరు)</span></Label>
                        <Input
                            id="eventType"
                            name="eventType"
                            type="text"
                            placeholder="e.g., Wedding, Party, Outdoor Shoot"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Message <span className="font-noto" lang="te">(మీ వివరాలు)</span></Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your event, location, guest count, and vision..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="bg-background focus:border-secondary"
                    />
                </div>
                <Button
                    type="submit"
                    className={cn(
                        "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md",
                        isSubmitting && "opacity-75 cursor-wait" // Loading state styles
                    )}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting} // Indicate busy state
                    >
                    <Send size={18} className="mr-2" aria-hidden="true"/>
                    {isSubmitting ? (
                        <>
                         <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" role="status" aria-hidden="true"></span>
                         <span>Sending...</span>
                         <span className="sr-only">Submitting message</span>
                        </>
                    ) : 'Send Message'}
                </Button>
                </form>
            </CardContent>
            </Card>
        </div>

        {/* Contact Info & Map */}
        <aside className="lg:col-span-1 space-y-8"> {/* Use aside for secondary content */}
           <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
             <CardHeader className="bg-muted/30 p-6">
                 {/* Use h2 for section heading */}
                <CardTitle as="h2" className="font-serif text-2xl">Contact Information</CardTitle>
                <CardDescription className="font-noto" lang="te">సంప్రదింపు వివరాలు</CardDescription>
             </CardHeader>
             <CardContent className="p-6 space-y-5 text-muted-foreground">
                 {/* Use definition list (dl, dt, dd) for semantics */}
                 <dl className="space-y-4">
                     <div className="flex items-start">
                        <dt className="sr-only">Address</dt> {/* Screen reader only term */}
                        <dd className="flex items-start">
                            <MapPin size={20} className="mr-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
                            <div>
                                <span className="font-medium text-foreground block">Our Base</span>
                                <span>[Your City/Area], Andhra Pradesh</span>
                                <span className="block text-xs">(We primarily travel to your location!)</span>
                            </div>
                        </dd>
                    </div>
                    <div className="flex items-start">
                        <dt className="sr-only">Phone</dt>
                        <dd className="flex items-center">
                            <Phone size={18} className="mr-4 text-primary flex-shrink-0" aria-hidden="true" />
                            <div>
                                <span className="font-medium text-foreground block">Call Us</span>
                                <a href="tel:+91xxxxxxxxxx" className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">[+91 Your Phone Number]</a>
                            </div>
                        </dd>
                    </div>
                    <div className="flex items-start">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex items-center">
                            <Mail size={18} className="mr-4 text-primary flex-shrink-0" aria-hidden="true" />
                            <div>
                                <span className="font-medium text-foreground block">Email Us</span>
                                <a href="mailto:hello@dreamcaptures.com" className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">hello@dreamcaptures.com</a>
                            </div>
                        </dd>
                    </div>
                 </dl>
                  {/* Social Links */}
                  <div className="pt-4 border-t border-border/30">
                     {/* Use h3 for subsection */}
                     <h3 className="font-semibold text-foreground mb-3 text-sm">Connect With Us</h3>
                     <div className="flex space-x-5" role="group" aria-label="Social Media"> {/* Group social links */}
                        <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
                            <Facebook size={22}/>
                        </Link>
                        <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
                            <Instagram size={22}/>
                        </Link>
                        <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
                             <Youtube size={22}/>
                        </Link>
                     </div>
                  </div>
             </CardContent>
           </Card>

          {/* Map Section */}
          <section className="rounded-xl overflow-hidden shadow-lg border border-border/50" aria-labelledby="map-heading">
              {/* Use h3 for map heading */}
              <h3 id="map-heading" className="text-xl font-serif font-semibold text-center mb-0 text-foreground px-6 pt-4 bg-muted/30 pb-3 font-noto" lang="te">
                ఇక్కడ మాతో కలవండి
             </h3>
            <MapPlaceholder />
          </section>
        </aside>
      </div>

       {/* Consultation CTA */}
        <section className="mt-16 md:mt-24 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 py-12 rounded-lg border border-border/30" aria-labelledby="consultation-heading"> {/* Increased margin */}
            {/* Use H2 */}
            <h2 id="consultation-heading" className="text-2xl font-serif font-semibold mb-3">Ready to Book or Discuss?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Schedule a quick call with our team to discuss your photography needs and get a personalized quote.</p>
            {/* Updated Bilingual CTA Button */}
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md px-8">
                <Link href="/booking">మమ్మల్ని బుక్ చేయండి / Book Now</Link>
            </Button>
        </section>
    </div>
  );
}
