'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar'; // Assuming shadcn/ui calendar
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

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
       toast({ title: "Please select a date", variant: "destructive" });
       return;
     }
    setIsSubmitting(true);
    // Update eventDate with the potentially newly selected date just before submit
    const submissionData = { ...formData, eventDate: selectedDate ? format(selectedDate, "PPP") : '' };


    // TODO: Implement actual inquiry submission logic (e.g., send to backend, CRM)
    console.log('Booking inquiry submitted:', submissionData);

     // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

     // Reset form and show success toast
    setFormData({ name: '', email: '', phone: '', serviceType: '', eventDate: selectedDate ? format(selectedDate, "PPP") : '', details: '' });
    // Optionally reset date: setSelectedDate(new Date());
    setIsSubmitting(false);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest! We'll check availability and get back to you shortly.",
    });
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-foreground">
        Book Your Session
      </h1>
       <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Check our availability and send an inquiry. We'll confirm the details and finalize your booking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Calendar */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
           <Card className="border border-border shadow-sm p-0 inline-block">
             <Calendar
               mode="single"
               selected={selectedDate}
               onSelect={handleDateSelect}
               className="rounded-md border-none" // Remove default border if Card provides it
                // Disable past dates - adjust as needed
               disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
             />
           </Card>
        </div>

        {/* Inquiry Form */}
        <div className="md:col-span-2">
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Inquiry Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="name">Name</Label>
                     <Input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="bg-background" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <Label htmlFor="phone">Phone (Optional)</Label>
                     <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="bg-background" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="serviceType">Service Type</Label>
                     <Select name="serviceType" onValueChange={handleSelectChange} value={formData.serviceType} required>
                       <SelectTrigger id="serviceType" className="bg-background">
                         <SelectValue placeholder="Select a service" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="Wedding">Wedding Photography</SelectItem>
                         <SelectItem value="Engagement">Engagement Session</SelectItem>
                         <SelectItem value="Portrait">Portrait Session</SelectItem>
                         <SelectItem value="Family">Family Session</SelectItem>
                         <SelectItem value="Event">Event Photography</SelectItem>
                         <SelectItem value="Other">Other (Specify Below)</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                 </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Preferred Date</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="text"
                    value={formData.eventDate} // Display formatted date
                    readOnly // Make it read-only, controlled by calendar
                    className="bg-muted cursor-default" // Style as non-editable
                    placeholder="Select a date on the calendar"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Tell us more about your event, location, specific requests, etc."
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  * This is an inquiry, not a final booking. We will contact you to confirm availability and details.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
