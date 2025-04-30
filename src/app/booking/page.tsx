'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarCheck, Send } from 'lucide-react'; // Added icons

export default function BookingPage() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: selectedDate ? format(selectedDate, "PPP") : '', // Format initially selected date
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setFormData({ name: '', email: '', phone: '', serviceType: '', eventDate: selectedDate ? format(selectedDate, "PPP") : '', details: '' });
    setIsSubmitting(false);
    toast({
      title: "Inquiry Sent Successfully!",
      description: "Thank you (ధన్యవాదాలు!) for your interest. We'll check our availability and get back to you soon.",
    });
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
            <CalendarCheck className="h-12 w-12 mx-auto text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Book Your Session
            </h1>
            <p className="font-telugu text-muted-foreground text-lg mb-2">మీ సెషన్‌ను బుక్ చేసుకోండి</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check our availability by selecting a date and fill out the form to inquire about capturing your special moments. We'll follow up to confirm details.
            </p>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Calendar - Enhanced Styling */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
           {/* Wrap Calendar in Card for better styling control */}
           <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
                <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="p-0 border-none [&_button]:rounded-md [&>[data-selected]]:bg-secondary [&>[data-selected]]:text-secondary-foreground [&>[data-today]]:bg-accent/20 [&>[data-today]]:text-accent-foreground" // Shadcn calendar styling
                // Disable past dates
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
           </Card>
        </div>

        {/* Inquiry Form */}
        <div className="md:col-span-2">
          <Card className="border border-border/50 shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-muted/30 p-6">
              <CardTitle className="font-serif text-2xl">Inquiry Details</CardTitle>
               <CardDescription className="font-telugu">విచారణ వివరాలు</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="name" className="font-medium">Name <span className="font-telugu">(పేరు)</span></Label>
                     <Input id="name" name="name" type="text" placeholder="Your Full Name / మీ పూర్తి పేరు" value={formData.name} onChange={handleChange} required className="bg-background focus:border-secondary" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email" className="font-medium">Email <span className="font-telugu">(ఇమెయిల్)</span></Label>
                     <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-background focus:border-secondary" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="phone" className="font-medium">Phone <span className="font-telugu">(ఫోన్)</span> <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                     <Input id="phone" name="phone" type="tel" placeholder="+91 Your Number" value={formData.phone} onChange={handleChange} className="bg-background focus:border-secondary" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="serviceType" className="font-medium">Event Type <span className="font-telugu">(ఈవెంట్ పేరు)</span></Label>
                     <Select name="serviceType" onValueChange={handleSelectChange} value={formData.serviceType} required>
                       <SelectTrigger id="serviceType" className="bg-background focus:border-secondary text-left">
                         <SelectValue placeholder="Select Event Type / ఈవెంట్ పేరు ఎంచుకోండి" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="Wedding">Wedding <span className="font-telugu">(పెళ్లి)</span></SelectItem>
                         <SelectItem value="Engagement">Engagement <span className="font-telugu">(ఎంగేజ్‌మెంట్)</span></SelectItem>
                         <SelectItem value="Pre-Wedding">Pre-Wedding Shoot <span className="font-telugu">(ప్రీ-వెడ్డింగ్)</span></SelectItem>
                         <SelectItem value="Haldi">Haldi Ceremony <span className="font-telugu">(పసుపు కొట్టడం)</span></SelectItem>
                         <SelectItem value="Baby Shower">Baby Shower <span className="font-telugu">(సీమంతం)</span></SelectItem>
                         <SelectItem value="Portrait">Portrait Session</SelectItem>
                         <SelectItem value="Family">Family Session</SelectItem>
                         <SelectItem value="Event">Other Event <span className="font-telugu">(ఇతర ఈవెంట్)</span></SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="font-medium">Preferred Date <span className="font-telugu">(తేదీ)</span></Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="text"
                    value={formData.eventDate}
                    readOnly
                    className="bg-muted cursor-default focus:border-secondary"
                    placeholder="Select date from calendar"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="font-medium">Additional Details <span className="font-telugu">(మీ వివరాలు)</span></Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Tell us more about your event location, guest count, specific requests, etc. (స్థలం, అతిథుల సంఖ్య, ప్రత్యేక అభ్యర్థనలు మొదలైనవి)"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-background focus:border-secondary"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md" disabled={isSubmitting}>
                  <Send size={18} className="mr-2"/>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  * This form submits an inquiry, not a final booking. We will contact you to confirm availability and provide a detailed quote.
                  <br /> (ఇది విచారణ మాత్రమే, బుకింగ్ కాదు.)
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
