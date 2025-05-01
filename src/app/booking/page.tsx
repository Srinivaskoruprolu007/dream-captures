'use client';

import { useState, useEffect } from 'react'; // Import useEffect
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

export default function BookingPage() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // Initialize as undefined
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '', // Initialize empty, update on select
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track client-side mount

  useEffect(() => {
    setIsClient(true); // Set to true once component mounts
    // Set initial date only on client side to avoid hydration mismatch
    const today = new Date();
    setSelectedDate(today);
    setFormData(prev => ({ ...prev, eventDate: format(today, "PPP") }));
  }, []); // Empty dependency array ensures this runs only once on mount

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form - keep selected date maybe? Or reset fully.
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
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <header className="text-center mb-16"> {/* Use header */}
            <CalendarCheck className="h-12 w-12 mx-auto text-secondary mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Book Your Session
            </h1>
            <p className="font-telugu text-muted-foreground text-lg mb-2" lang="te">మీ సెషన్‌ను బుక్ చేసుకోండి</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check our availability by selecting a date and fill out the form to inquire about capturing your special moments. We'll follow up to confirm details.
            </p>
       </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start"> {/* Use lg breakpoint */}
        {/* Calendar - Enhanced Styling & Accessibility */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
           {/* Wrap Calendar in Card for better styling control */}
           <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden w-full max-w-sm lg:max-w-none">
                {/* Conditional rendering to avoid hydration mismatch */}
                {isClient ? (
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        className="p-0 border-none [&_button]:rounded-md [&>[data-selected]]:bg-secondary [&>[data-selected]]:text-secondary-foreground [&>[data-today]]:bg-accent/20 [&>[data-today]]:text-accent-foreground" // Shadcn calendar styling
                        // Disable past dates - ensure date logic is robust
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus // Improve keyboard navigation
                        footer={<p className="text-center text-sm text-muted-foreground p-2">Select your preferred date.</p>} // Add footer for context
                    />
                ) : (
                    // Render a placeholder or loading state on the server
                    <div className="p-4 text-center text-muted-foreground">Loading Calendar...</div>
                )}
           </Card>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-2">
          <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-muted/30 p-6">
              <CardTitle className="font-serif text-2xl">Inquiry Details</CardTitle>
               <CardDescription className="font-telugu" lang="te">విచారణ వివరాలు</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              {/* Add status role for screen readers */}
              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     {/* Link label to input */}
                     <Label htmlFor="name" className="font-medium">Name <span className="font-telugu" lang="te">(పేరు)</span></Label>
                     <Input id="name" name="name" type="text" placeholder="Your Full Name / మీ పూర్తి పేరు" value={formData.name} onChange={handleChange} required className="bg-background focus:border-secondary" aria-required="true" autoComplete="name" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email" className="font-medium">Email <span className="font-telugu" lang="te">(ఇమెయిల్)</span></Label>
                     <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-background focus:border-secondary" aria-required="true" autoComplete="email" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="phone" className="font-medium">Phone <span className="font-telugu" lang="te">(ఫోన్)</span> <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                     <Input id="phone" name="phone" type="tel" placeholder="+91 Your Number" value={formData.phone} onChange={handleChange} className="bg-background focus:border-secondary" autoComplete="tel" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="serviceType" className="font-medium">Event Type <span className="font-telugu" lang="te">(ఈవెంట్ పేరు)</span></Label>
                     <Select name="serviceType" onValueChange={handleSelectChange} value={formData.serviceType} required>
                       <SelectTrigger id="serviceType" className="bg-background focus:border-secondary text-left w-full" aria-required="true">
                         <SelectValue placeholder="Select Event Type / ఈవెంట్ పేరు ఎంచుకోండి" />
                       </SelectTrigger>
                       <SelectContent>
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
                    className="bg-muted cursor-default focus:border-secondary"
                    placeholder="Select date from calendar"
                    aria-label="Selected event date (read-only)" // ARIA label for read-only field
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
                    className="bg-background focus:border-secondary"
                    aria-label="Additional details about your event"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md" disabled={isSubmitting}>
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
