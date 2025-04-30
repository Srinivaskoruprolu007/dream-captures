'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react'; // Added Send icon
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

// Placeholder for Map Component - Updated Placeholder
const MapPlaceholder = () => (
  <div className="aspect-video w-full bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground border border-border/50 shadow-inner">
    <div className="text-center">
        <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50 mb-2" />
        <p>Google Map Integration</p>
        <p className="text-xs">(Loading map for [Your Studio Address]...)</p>
    </div>
  </div>
);

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '', eventType: '', eventDate: '' }); // Added eventType and eventDate
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setFormData({ name: '', email: '', message: '', phone: '', eventType: '', eventDate: '' }); // Reset form including new fields
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out (ధన్యవాదాలు!). We'll connect with you shortly.",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Get In Touch
          </h1>
           <p className="font-telugu text-muted-foreground text-lg mb-2">మమ్మల్ని సంప్రదించండి</p>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our Telugu wedding photography packages, want to check availability, or just say hello? We'd love to hear from you!
          </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form - Spanning 2 columns on large screens */}
        <div className="lg:col-span-2">
            <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="font-telugu">మీ సందేశం పంపండి</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <Label htmlFor="name" className="font-medium">Name <span className="font-telugu">(పేరు)</span></Label>
                        <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name / మీ పేరు"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background focus:border-secondary"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium">Email <span className="font-telugu">(ఇమెయిల్)</span></Label>
                        <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background focus:border-secondary"
                        />
                    </div>
                 </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="font-medium">Phone <span className="font-telugu">(ఫోన్)</span> <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="eventDate" className="font-medium">Event Date <span className="font-telugu">(తేదీ)</span></Label>
                        <Input
                            id="eventDate"
                            name="eventDate"
                            type="date" // Use date input type
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="bg-background focus:border-secondary"
                            required
                        />
                    </div>
                   </div>
                   <div className="space-y-2">
                        <Label htmlFor="eventType" className="font-medium">Event Type <span className="font-telugu">(ఈవెంట్ పేరు)</span></Label>
                        <Input
                            id="eventType"
                            name="eventType"
                            type="text"
                            placeholder="e.g., Wedding, Engagement, Sreemantham"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            className="bg-background focus:border-secondary"
                        />
                    </div>
                <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Message <span className="font-telugu">(మీ వివరాలు)</span></Label>
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your event, dates, and vision..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background focus:border-secondary"
                    />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md" disabled={isSubmitting}>
                    <Send size={18} className="mr-2"/>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                </form>
            </CardContent>
            </Card>
        </div>

        {/* Contact Info & Map - Spanning 1 column */}
        <div className="lg:col-span-1 space-y-8">
           <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
             <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
                <CardDescription className="font-telugu">సంప్రదింపు వివరాలు</CardDescription>
             </CardHeader>
             <CardContent className="p-6 space-y-5 text-muted-foreground">
                 <div className="flex items-start">
                    <MapPin size={20} className="mr-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <span className="font-medium text-foreground block">Our Studio</span>
                        <span>[Your Studio Address], [City], Andhra Pradesh, [Zip Code]</span>
                        <span className="block text-xs">(By Appointment Only)</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-4 text-primary flex-shrink-0" />
                     <div>
                        <span className="font-medium text-foreground block">Call Us</span>
                        <a href="tel:+91xxxxxxxxxx" className="hover:text-secondary transition-colors">[+91 Your Phone Number]</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-4 text-primary flex-shrink-0" />
                     <div>
                        <span className="font-medium text-foreground block">Email Us</span>
                        <a href="mailto:hello@dreamcaptures.com" className="hover:text-secondary transition-colors">hello@dreamcaptures.com</a>
                     </div>
                   </div>
                  {/* Social Links within the card */}
                  <div className="pt-4 border-t border-border/30">
                     <h5 className="font-semibold text-foreground mb-3 text-sm">Connect With Us</h5>
                     <div className="flex space-x-5">
                        <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors">
                            <Facebook size={22}/>
                        </Link>
                        <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors">
                            <Instagram size={22}/>
                        </Link>
                        <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-secondary transition-colors">
                             <Youtube size={22}/>
                        </Link>
                     </div>
                  </div>
             </CardContent>
           </Card>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
              {/* Telugu Label for Map */}
              <h3 className="text-xl font-serif font-semibold text-center mb-0 text-foreground px-6 pt-4 bg-muted/30 pb-3 font-telugu">
                ఇక్కడ మాతో కలవండి
             </h3>
            <MapPlaceholder />
          </div>
        </div>
      </div>

       {/* Optional: Add a section about consultation */}
        <div className="mt-24 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 py-12 rounded-lg border border-border/30">
            <h3 className="text-2xl font-serif font-semibold mb-3">Ready for a Consultation?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Schedule a free call to discuss your dream wedding photography experience.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md">
                <Link href="/booking">Book Now</Link>
            </Button>
        </div>
    </div>
  );
}
