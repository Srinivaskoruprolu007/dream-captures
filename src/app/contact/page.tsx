'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"; // Assuming useToast hook exists

// Placeholder for Map Component - Replace with actual map later
const MapPlaceholder = () => (
  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
    Map Placeholder (Integrate @vis.gl/react-google-maps later)
  </div>
);

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission logic (e.g., send to backend, email service)
    console.log('Form submitted:', formData);

     // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

     // Reset form and show success toast
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
      variant: "default", // or "success" if you have that variant
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
        Get In Touch
      </h1>
       <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
        Have questions, want to book a session, or just say hello? Fill out the form below or use the contact details provided.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                   value={formData.email}
                  onChange={handleChange}
                  required
                   className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                   value={formData.message}
                  onChange={handleChange}
                  required
                   className="bg-background"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info & Map */}
        <div className="space-y-8">
           <Card className="border border-border shadow-sm">
             <CardHeader>
                <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4 text-muted-foreground">
                 <div className="flex items-center">
                    <MapPin size={18} className="mr-3 text-primary flex-shrink-0" />
                    <span>[Your Studio Address], [City], [State], [Zip Code]</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                    <a href="tel:+1234567890" className="hover:text-primary">[Your Phone Number]</a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                     <a href="mailto:hello@dreamcaptures.com" className="hover:text-primary">hello@dreamcaptures.com</a>
                   </div>
                  <div className="flex space-x-4 pt-4">
                    <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter /></a>
                  </div>
             </CardContent>
           </Card>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Find Us</h3>
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
}
