"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface BeforeAfterImage {
  id: number;
  beforeSrc: string;
  afterSrc: string;
  title: string;
  titleTelugu?: string;
  description: string;
  descriptionTelugu?: string;
  category: string;
}

const beforeAfterImages: BeforeAfterImage[] = [
  {
    id: 1,
    beforeSrc: "https://picsum.photos/seed/before-wedding1/800/600",
    afterSrc: "https://picsum.photos/seed/after-wedding1/800/600",
    title: "Wedding Portrait Enhancement",
    titleTelugu: "పెళ్లి చిత్రం మెరుగుదల",
    description: "Professional color grading and skin tone enhancement",
    descriptionTelugu: "వృత్తిపరమైన రంగు మార్పు మరియు చర్మం టోన్ మెరుగుదల",
    category: "పెళ్లిళ్లు",
  },
  {
    id: 2,
    beforeSrc: "https://picsum.photos/seed/before-prewedding1/800/600",
    afterSrc: "https://picsum.photos/seed/after-prewedding1/800/600",
    title: "Pre-wedding Sunset Magic",
    titleTelugu: "ప్రీ-వెడ్డింగ్ సూర్యాస్తమయ మాయ",
    description: "Enhanced sunset colors and dramatic lighting",
    descriptionTelugu: "మెరుగైన సూర్యాస్తమయ రంగులు మరియు నాటకీయ లైటింగ్",
    category: "ప్రీ-వెడ్డింగ్",
  },
];

function BeforeAfterSlider({ image }: { image: BeforeAfterImage }) {
  const [position, setPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <Card className="overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-muted/30 border-b border-border/30">
        <CardTitle className="text-lg font-serif">
          {image.title}
          {image.titleTelugu && (
            <span
              className="block text-sm font-telugu text-muted-foreground mt-1"
              lang="te"
            >
              {image.titleTelugu}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          ref={containerRef}
        >
          {/* After Image (Base Layer) */}
          <Image
            src={image.afterSrc}
            alt="After editing"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* Before Image (Overlay) */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src={image.beforeSrc}
              alt="Before editing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <Slider
            value={[position]}
            onValueChange={(value) => setPosition(value[0])}
            className="py-4"
            aria-label="Adjust before/after comparison"
          />
          <p className="text-sm text-muted-foreground mt-2">
            {image.description}
            {image.descriptionTelugu && (
              <span className="block font-telugu mt-1" lang="te">
                {image.descriptionTelugu}
              </span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function BeforeAfterGallery() {
  return (
    <section className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
          Before & After
        </h2>
        <p className="font-telugu text-muted-foreground" lang="te">
          ఎడిటింగ్ ప్రభావం
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beforeAfterImages.map((image) => (
          <BeforeAfterSlider key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
}
