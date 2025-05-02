'use client';

import type { Metadata } from 'next'; // Import Metadata type
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarCheck, Send } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn

// NOTE: Metadata cannot be defined directly in a "use client" component.
// If needed, this should be moved to a parent server component or handled differently.
// For now, this is commented out.
/*
export const metadata: Metadata = {
  title: 'Inquire About Your Photography Session',
  description: 'Send an inquiry to Dream Captures for your wedding, party, or photoshoot. Check availability and get a quote.',
};
*/

export default function BookingPage() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const today = new Date();
    setSelectedDate(today);
    setFormData(prev => ({ ...prev, eventDate: format(today, "PPP") }));
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setFormData(prev => ({ ...prev, eventDate: date ? format(date, "PPP") : '' }));
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSelectChange = (value: string) => {
      setFormData(prev => ({ ...prev, serviceType: value }));
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!selectedDate) {
       toast({ title: "Please select a preferred date", description: "దయచేసి తేదీని ఎంచుకోండి", variant: "destructive" });
       return;
     }
    setIsSubmitting(true);
    const submissionData = { ...formData, eventDate: selectedDate ? format(selectedDate, "PPP") : '' };

    console.log('Booking inquiry submitted:', submissionData);
    // Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const today = new Date();
    setSelectedDate(today);
    setFormData({ name: '', email: '', phone: '', serviceType: '', eventDate: format(today, "PPP") , details: '' });

    setIsSubmitting(false);
    toast({
      title: "Inquiry Sent Successfully!",
      description: "Thank you (ధన్యవాదాలు!) for your interest. We'll check our availability and get back to you soon.",
    });
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background"> {/* Use theme background */}
        <header className="text-center mb-16">
            <CalendarCheck className="h-12 w-12 mx-auto text-primary mb-4" aria-hidden="true" /> {/* Mint icon */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Book Your Session
            </h1>
            <p className="font-telugu text-muted-foreground text-lg mb-2" lang="te">మీ సెషన్‌ను బుక్ చేసుకోండి</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check our availability by selecting a date and fill out the form to inquire about capturing your special moments. We'll follow up to confirm details.
            </p>
       </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Calendar - Pastel Styling */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
           <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden w-full max-w-sm lg:max-w-none bg-card"> {/* Use card bg */}
                {isClient ? (
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        // Use pastel colors for calendar: primary (Mint) for selected, accent (Pink) for today
                        className={cn(
                            "p-0 border-none [&_button]:rounded-md",
                            "[&>[data-selected]]:bg-primary [&>[data-selected]]:text-primary-foreground", // Mint selected
                            "[&>[data-today]]:bg-accent/20 [&>[data-today]]:text-accent-foreground" // Pink today
                        )}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        footer={<p className="text-center text-sm text-muted-foreground p-2">Select your preferred date.</p>}
                    />
                ) : (
                    <div className="p-4 text-center text-muted-foreground">Loading Calendar...</div>
                )}
           </Card>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-2">
          <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden bg-card"> {/* Use card bg */}
            <CardHeader className="bg-muted/50 p-6"> {/* Muted pastel header */}
              <CardTitle className="font-serif text-2xl text-foreground">Inquiry Details</CardTitle>
               <CardDescription className="font-telugu text-muted-foreground" lang="te">విచారణ వివరాలు</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="name" className="font-medium">Name <span className="font-telugu" lang="te">(పేరు)</span></Label>
                     <Input id="name" name="name" type="text" placeholder="Your Full Name / మీ పూర్తి పేరు" value={formData.name} onChange={handleChange} required className="bg-input focus:border-primary" aria-required="true" autoComplete="name" /> {/* Use input bg, primary focus */}
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email" className="font-medium">Email <span className="font-telugu" lang="te">(ఇమెయిల్)</span></Label>
                     <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-input focus:border-primary" aria-required="true" autoComplete="email" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="phone" className="font-medium">Phone <span className="font-telugu" lang="te">(ఫోన్)</span> <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                     <Input id="phone" name="phone" type="tel" placeholder="+91 Your Number" value={formData.phone} onChange={handleChange} className="bg-input focus:border-primary" autoComplete="tel" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="serviceType" className="font-medium">Event Type <span className="font-telugu" lang="te">(ఈవెంట్ పేరు)</span></Label>
                     <Select name="serviceType" onValueChange={handleSelectChange} value={formData.serviceType} required>
                       <SelectTrigger id="serviceType" className="bg-input focus:border-primary text-left w-full" aria-required="true"> {/* Use input bg, primary focus */}
                         <SelectValue placeholder="Select Event Type / ఈవెంట్ పేరు ఎంచుకోండి" />
                       </SelectTrigger>
                       <SelectContent> {/* Uses pastel theme from ui/select */}
                         <SelectItem value="Wedding">Wedding <span className="font-telugu" lang="te">(పెళ్లి)</span></SelectItem>
                         <SelectItem value="Engagement">Engagement <span className="font-telugu" lang="te">(ఎంగేజ్‌మెంట్)</span></SelectItem>
                         <SelectItem value="Pre-Wedding">Pre-Wedding Shoot <span className="font-telugu" lang="te">(ప్రీ-వెడ్డింగ్)</span></SelectItem>
                         <SelectItem value="Haldi">Haldi Ceremony <span className="font-telugu" lang="te">(పసుపు కొట్టడం)</span></SelectItem>
                         <SelectItem value="Baby Shower">Baby Shower <span className="font-telugu" lang="te">(సీమంతం)</span></SelectItem>
                         <SelectItem value="Portrait">Portrait Session</SelectItem>
                         <SelectItem value="Family">Family Session</SelectItem>
                         <SelectItem value="Event">Other Event <span className="font-telugu" lang="te">(ఇతర ఈవెంట్)</span></SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="font-medium">Preferred Date <span className="font-telugu" lang="te">(తేదీ)</span></Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="text"
                    value={formData.eventDate}
                    readOnly
                    className="bg-muted cursor-default focus:border-primary" // Muted bg, primary focus
                    placeholder="Select date from calendar"
                    aria-label="Selected event date (read-only)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="font-medium">Additional Details <span className="font-telugu" lang="te">(మీ వివరాలు)</span></Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Tell us more about your event location, guest count, specific requests, etc. (స్థలం, అతిథుల సంఖ్య, ప్రత్యేక అభ్యర్థనలు మొదలైనవి)"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-input focus:border-primary" // Use input bg, primary focus
                    aria-label="Additional details about your event"
                  />
                </div>

                {/* Submit Button - Use Primary (Mint) */}
                <Button type="submit" className="w-full bg-primary hover:opacity-90 text-primary-foreground text-base py-3 rounded-lg shadow-md" disabled={isSubmitting}>
                  <Send size={18} className="mr-2" aria-hidden="true"/>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  * This form submits an inquiry, not a final booking. We will contact you to confirm availability and provide a detailed quote.
                  <br /> <span lang="te">(ఇది విచారణ మాత్రమే, బుకింగ్ కాదు.)</span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
