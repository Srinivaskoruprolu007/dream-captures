"use client";

import type { Metadata } from 'next'; // Import Metadata type
import { ShootScheduler } from "@/components/booking/ShootScheduler";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

// NOTE: Metadata cannot be defined directly in a "use client" component.
// If needed, this should be moved to a parent server component or handled differently.
// For now, this is commented out.
/*
export const metadata: Metadata = {
  title: 'Book Your Photography Session',
  description: 'Schedule your wedding, pre-wedding, party, or portrait session with Dream Captures in Andhra Pradesh.',
};
*/


// Placeholder data for booking information
const bookingInfo = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    titleTelugu: "సౌకర్యవంతమైన షెడ్యూలింగ్",
    description: "Book your preferred date and time",
    descriptionTelugu: "మీకు అనుకూలమైన తేదీ మరియు సమయాన్ని ఎంచుకోండి",
  },
  {
    icon: Clock,
    title: "Quick Response",
    titleTelugu: "త్వరిత ప్రతిస్పందన",
    description: "Get confirmation within 24 hours",
    descriptionTelugu: "24 గంటలలోపు నిర్ధారణ పొందండి",
  },
  {
    icon: MapPin,
    title: "Location Flexibility",
    titleTelugu: "ప్రదేశ సౌలభ్యం",
    description: "We cover all of Andhra Pradesh",
    descriptionTelugu: "ఆంధ్రప్రదేశ్ అంతటా మేము అందుబాటులో ఉన్నాము",
  },
  {
    icon: Phone,
    title: "Direct Support",
    titleTelugu: "నేరుగా సహాయం",
    description: "Get instant help via phone/WhatsApp",
    descriptionTelugu: "ఫోన్/వాట్సాప్ ద్వారా తక్షణ సహాయం పొందండి",
  },
];

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Book Your Session
        </h1>
        <p className="font-telugu text-muted-foreground text-lg" lang="te">
          మీ క్షణాలను మేము అందంగా బంధిస్తాం
        </p>
      </header>

      {/* Booking Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {bookingInfo.map((info, index) => (
          <Card
            key={index}
            className="text-center border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardContent className="p-6 flex flex-col items-center">
              <info.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {info.title}
              </h3>
              <p className="font-telugu text-sm mb-1" lang="te">
                {info.titleTelugu}
              </p>
              <p className="text-sm text-muted-foreground">
                {info.description}
              </p>
              <p
                className="text-sm text-muted-foreground font-telugu"
                lang="te"
              >
                {info.descriptionTelugu}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Shoot Scheduler Component */}
      <ShootScheduler />

      {/* WhatsApp Contact Section */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">
          Need help with booking? Contact us directly on WhatsApp
        </p>
        <Button
          variant="outline"
          className="text-green-600 hover:text-green-700 border-green-600 hover:border-green-700"
          onClick={() => {
            window.open(
              `https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(
                "Hi, I'd like to book a photography session."
              )}`,
              "_blank"
            );
          }}
        >
          Chat on WhatsApp
        </Button>
      </div>
    </div>
  );
}
