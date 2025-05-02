"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Lightbulb, Laptop, Users } from "lucide-react";

// Studio sections with equipment and process details
const studioSections = [
  {
    id: "equipment",
    title: "Our Equipment",
    titleTelugu: "మా పరికరాలు",
    icon: Camera,
    items: [
      {
        title: "Professional Cameras",
        titleTelugu: "ప్రొఫెషనల్ కెమెరాలు",
        description: "High-end DSLRs and Mirrorless cameras for stunning shots",
        descriptionTelugu: "అద్భుతమైన ఫోటోల కోసం అత్యంత నాణ్యమైన కెమెరాలు",
        image: "https://picsum.photos/seed/camera-gear/800/600",
        dataAiHint: "professional camera equipment setup",
      },
      {
        title: "Lighting Setup",
        titleTelugu: "లైటింగ్ సెటప్",
        description: "Professional studio lights and modifiers",
        descriptionTelugu: "ప్రొఫెషనల్ స్టూడియో లైట్లు మరియు మాడిఫైయర్లు",
        image: "https://picsum.photos/seed/lighting-setup/800/600",
        dataAiHint: "professional lighting equipment studio",
      },
    ],
  },
  {
    id: "process",
    title: "Our Process",
    titleTelugu: "మా ప్రక్రియ",
    icon: Lightbulb,
    items: [
      {
        title: "Pre-shoot Planning",
        titleTelugu: "షూట్ ప్లానింగ్",
        description: "Detailed discussion about your vision and requirements",
        descriptionTelugu: "మీ అభిరుచి మరియు అవసరాల గురించి వివరమైన చర్చ",
        image: "https://picsum.photos/seed/planning-meeting/800/600",
        dataAiHint: "team meeting planning discussion",
      },
      {
        title: "Shooting Day",
        titleTelugu: "షూటింగ్ రోజు",
        description: "Professional team capturing your special moments",
        descriptionTelugu: "మీ ప్రత్యేక క్షణాలను బంధించే నిపుణుల బృందం",
        image: "https://picsum.photos/seed/shooting-day/800/600",
        dataAiHint: "photographer working professional",
      },
    ],
  },
  {
    id: "editing",
    title: "Post-Production",
    titleTelugu: "పోస్ట్-ప్రొడక్షన్",
    icon: Laptop,
    items: [
      {
        title: "Professional Editing",
        titleTelugu: "ప్రొఫెషనల్ ఎడిటింగ్",
        description: "Color correction and enhancement using pro software",
        descriptionTelugu: "ప్రొఫెషనల్ సాఫ్ట్‌వేర్‌తో రంగుల మెరుగుదల",
        image: "https://picsum.photos/seed/editing-setup/800/600",
        dataAiHint: "photo editing computer setup",
      },
    ],
  },
  {
    id: "team",
    title: "Meet the Team",
    titleTelugu: "మా టీమ్",
    icon: Users,
    items: [
      {
        title: "Our Photographers",
        titleTelugu: "మా ఫోటోగ్రాఫర్లు",
        description: "Experienced professionals dedicated to their craft",
        descriptionTelugu: "అనుభవజ్ఞులైన ప్రొఫెషనల్స్",
        image: "https://picsum.photos/seed/team-working/800/600",
        dataAiHint: "photography team working together",
      },
    ],
  },
];

export function StudioTour() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            Behind the Scenes
          </h2>
          <p className="font-telugu text-muted-foreground" lang="te">
            మా స్టూడియో టూర్
          </p>
        </div>

        <Tabs defaultValue="equipment" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {studioSections.map((section) => {
              const Icon = section.icon;
              return (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex flex-col items-center gap-2 p-4"
                >
                  <Icon className="h-6 w-6" />
                  <span>{section.title}</span>
                  <span className="text-sm font-telugu" lang="te">
                    {section.titleTelugu}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {studioSections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={item.dataAiHint}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {item.title}
                        <span
                          className="block text-base font-telugu text-muted-foreground"
                          lang="te"
                        >
                          {item.titleTelugu}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                      <p
                        className="text-muted-foreground font-telugu mt-1"
                        lang="te"
                      >
                        {item.descriptionTelugu}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
