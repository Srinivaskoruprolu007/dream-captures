"use client";

import * as React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder data for festive dates and recommendations
const festiveDates = [
  {
    date: "2024-01-15",
    festival: "Sankranti",
    festivalTelugu: "సంక్రాంతి",
    recommendation: "Book early for Sankranti wedding photography!",
    recommendationTelugu:
      "సంక్రాంతి పెళ్లి ఫోటోగ్రఫీ కోసం ముందుగానే బుక్ చేసుకోండి!",
  },
  {
    date: "2024-08-15",
    festival: "Varalakshmi Vratam",
    festivalTelugu: "వరలక్ష్మి వ్రతం",
    recommendation: "Special Varalakshmi Vratam photography packages available",
    recommendationTelugu:
      "వరలక్ష్మి వ్రతం ప్రత్యేక ఫోటోగ్రఫీ ప్యాకేజీలు అందుబాటులో ఉన్నాయి",
  },
  // Add more festive dates as needed
];

// Event types with Telugu translations
const eventTypes = [
  { value: "wedding", label: "Wedding", labelTelugu: "పెళ్లి" },
  { value: "pre-wedding", label: "Pre-Wedding", labelTelugu: "ప్రీ-వెడ్డింగ్" },
  { value: "engagement", label: "Engagement", labelTelugu: "నిశ్చితార్థం" },
  { value: "baby-shower", label: "Baby Shower", labelTelugu: "సీమంతం" },
  {
    value: "corporate",
    label: "Corporate Event",
    labelTelugu: "కార్పొరేట్ ఈవెంట్",
  },
];

export function ShootScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventType, setEventType] = useState("");

  // Find if selected date is a festive date
  const selectedFestive = festiveDates.find(
    (festive) => festive.date === date?.toISOString().split("T")[0]
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center bg-muted/30 border-b border-border/30">
          <CardTitle className="text-2xl font-serif text-foreground">
            Schedule Your Shoot
          </CardTitle>
          <CardDescription className="font-telugu" lang="te">
            మీ షూట్ షెడ్యూల్ చేసుకోండి
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <div className="space-y-4">
              <Label className="text-lg font-medium">Select Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                // Highlight festive dates
                modifiers={{
                  festive: festiveDates.map(
                    (festive) => new Date(festive.date)
                  ),
                }}
                modifiersClassNames={{
                  festive:
                    "bg-accent/20 text-accent-foreground hover:bg-accent/30",
                }}
              />

              {/* Festive Recommendation */}
              {selectedFestive && (
                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Sparkles className="h-4 w-4" />
                      <p className="font-medium">
                        {selectedFestive.festival} /{" "}
                        <span className="font-telugu" lang="te">
                          {selectedFestive.festivalTelugu}
                        </span>
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedFestive.recommendation}
                    </p>
                    <p
                      className="text-sm text-muted-foreground font-telugu"
                      lang="te"
                    >
                      {selectedFestive.recommendationTelugu}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label} /{" "}
                        <span className="font-telugu" lang="te">
                          {type.labelTelugu}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="font-telugu"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Event Location</Label>
                <Input
                  id="location"
                  placeholder="Enter event location"
                  className="font-telugu"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center p-6 bg-muted/30 border-t border-border/30">
          <Button
            size="lg"
            className="w-full md:w-auto font-semibold"
            onClick={() => {
              // Handle booking submission
              console.log("Booking submitted", { date, eventType });
            }}
          >
            Book Now /{" "}
            <span className="font-telugu ml-1" lang="te">
              ఇప్పుడే బుక్ చేసుకోండి
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
