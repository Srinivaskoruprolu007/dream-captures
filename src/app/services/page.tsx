import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Package, Sparkles, Film, Users, Camera, PartyPopper, Mountain, Video } from 'lucide-react'; // Added more relevant icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Import cn

// Updated service packages reflecting the new brand identity
const servicePackages = [
  {
    id: 'weddings-premium',
    title: 'పెళ్లి పందిరి సూపర్', // Premium Wedding
    category: 'Weddings',
    price: '₹1,50,000+',
    features: ['Full Day Coverage (10-12 Hrs)', '2 Photographers + 1 Cinematographer', 'Pre-Wedding Shoot Included', 'Luxury Album (e.g., Kalankari Cover)', 'Drone Shots*', 'Online Gallery'],
    icon: Sparkles,
    themeColor: 'secondary' // Maroon
  },
  {
    id: 'weddings-standard',
    title: 'ఆలయ ఘనత', // Standard Wedding
    category: 'Weddings',
    price: '₹90,000+',
    features: ['8 Hours Coverage', '1 Photographer + 1 Cinematographer', 'Key Ceremonies (Haldi/Engagement)', 'Standard Album', 'Online Gallery'],
    icon: Camera,
    themeColor: 'primary' // Teal
  },
  {
    id: 'events-parties',
    title: 'వేడుక స్పెషల్', // Event Special (Parties)
    category: 'Parties',
    price: '₹35,000+',
    features: ['3-4 Hours Coverage', '1 Photographer', 'Birthdays, Anniversaries, Small Events', 'Candid & Group Shots', 'Online Gallery'],
    icon: PartyPopper,
    themeColor: 'accent' // Gold
  },
  {
    id: 'outdoor-shoots',
    title: 'ప్రకృతి ఒడిలో', // In Nature's Lap (Outdoor)
    category: 'Outdoor',
    price: '₹25,000+',
    features: ['2-3 Hour Session', '1 Photographer', 'Pre-Wedding, Nature, Sunset', 'Creative Portraits', 'Online Gallery'],
    icon: Mountain,
    themeColor: 'teal-700' // Using a direct Tailwind color for variation
  },
   {
    id: 'model-shoots',
    title: 'ఫ్యాషన్ ఫోకస్', // Fashion Focus (Model Shoots)
    category: 'Model Shoots',
    price: 'Contact Us', // Price on request
    features: ['Portfolio Building', 'Fashion & Lifestyle Clicks', 'Studio or Outdoor Options', 'Professional Editing', 'Usage Rights Discussion'],
    icon: Users, // Placeholder, maybe a better icon exists
    themeColor: 'gray-600' // Neutral color
  },
   {
    id: 'reels-edits',
    title: 'సినిమాటిక్ టచ్', // Cinematic Touch (Reels/Edits)
    category: 'Reels & Edits',
    price: 'Starting ₹15,000', // Example starting price
    features: ['Instagram Reel Creation', 'Cinematic Highlights Video', 'Short Films for Events', 'Advanced Editing & Color Grading', 'Music Licensing'],
    icon: Video,
    themeColor: 'indigo-600' // Different color
  },
];

// Add-ons remain similar but contextually relevant
const addOns = [
  { title: 'కలంకారి ఆర్ట్ ఫోటో ఆల్బమ్', description: 'Bespoke album with traditional Andhra art covers.' },
  { title: 'డ్రోన్ ఏరియల్ ఫోటోగ్రఫీ/వీడియోగ్రఫీ', description: 'Breathtaking aerial views for weddings or outdoor shoots.' },
  { title: 'లైవ్ స్ట్రీమింగ్ (పెళ్లిళ్లు)', description: 'Share your wedding live with distant family & friends.' },
  { title: 'ఫన్ ఫోటోబూత్', description: 'Interactive booth with props for parties and receptions.' },
  { title: 'సేమ్-డే ఎడిట్ (వెడ్డింగ్ హైలైట్స్)', description: 'A quick highlight reel shown during your wedding reception.' },
  { title: 'అదనపు ఫోటోగ్రాఫర్/సినిమాటోగ్రాఫర్', description: 'Ensure more coverage for large events.' },
];

// FAQs updated for the team context
const faqs = [
  { question: 'What is your team\'s photography style?', answer: 'We blend modern, candid photojournalism with a touch of fine-art portraiture. We focus on capturing genuine emotions and vibrant details, especially in weddings and cultural events in Andhra Pradesh.' },
  { question: 'Are you available for travel outside our city in AP?', answer: 'Yes! While we are based in [Your City], we love covering events across Andhra Pradesh and are open to traveling further. Travel costs may apply depending on the distance.' },
  { question: 'How soon do we get our photos/videos?', answer: 'You\'ll get a sneak peek gallery within a week for weddings! Full photo delivery is typically 6-8 weeks, and videos around 10-12 weeks, depending on the package and season.' },
  { question: 'Can we customize a package?', answer: 'Absolutely! Our listed packages are starting points. We prefer discussing your specific needs (event type, duration, budget) to create a personalized quote.' },
  { question: 'How do we book the Dream Captures team?', answer: 'Fill out our Booking or Contact form! We’ll schedule a call to chat about your event. A signed contract and a retainer fee (usually 30-50%) will secure your date with our team.' },
  { question: 'Do you offer both photography and videography?', answer: 'Yes, many of our packages include both. We have dedicated photographers and cinematographers on our team to ensure high-quality coverage for both mediums.' },
];

export default function ServicesPage() {
  // Helper function to get theme classes - simplified
  const getThemeClasses = (themeColor: string) => {
     // Direct Tailwind color usage (requires these colors in tailwind.config.ts or using full class names)
     // Example: themeColor = 'secondary' or 'teal-700'
     if (['primary', 'secondary', 'accent'].includes(themeColor)) {
        return {
           border: `border-${themeColor}/30`,
           headerBg: `bg-gradient-to-br from-${themeColor}/10 to-${themeColor}/5`,
           iconBg: `bg-${themeColor}`,
           iconText: `text-${themeColor}-foreground`,
           priceText: `text-${themeColor}`,
           checkColor: `text-${themeColor}`,
           buttonBg: `bg-${themeColor}`,
           buttonHover: `hover:bg-${themeColor}/90`,
           buttonText: `text-${themeColor}-foreground`,
        };
     }
     // Handle direct Tailwind colors like 'teal-700'
      const colorName = themeColor.split('-')[0]; // e.g., 'teal'
      const colorShade = themeColor.split('-')[1] || '500'; // default shade
     return {
       border: `border-${colorName}-${colorShade}/30`,
       headerBg: `bg-gradient-to-br from-${colorName}-${colorShade}/10 to-${colorName}-${colorShade}/5`,
       iconBg: `bg-${colorName}-${colorShade}`,
       iconText: `text-white`, // Assuming white foreground for most direct colors
       priceText: `text-${colorName}-${colorShade}`,
       checkColor: `text-${colorName}-${colorShade}`,
       buttonBg: `bg-${colorName}-${colorShade}`,
       buttonHover: `hover:bg-${colorName}-${parseInt(colorShade) + 100 > 900 ? 900 : parseInt(colorShade) + 100}`, // Simple hover darken
       buttonText: `text-white`,
     };
   };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
        Our Photography & Videography Services
      </h1>
       <p className="font-noto text-center text-muted-foreground text-lg mb-12">మీ ప్రతి వేడుకకు, మా ప్రత్యేక సేవలు</p>

      {/* Packages Section - Updated Layout */}
      <section id="packages" className="mb-16 md:mb-20 scroll-mt-20">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Service Offerings</h2>
        {/* Using grid for potentially varying number of items */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => {
              const theme = getThemeClasses(pkg.themeColor);
              return (
                <Card key={pkg.id} className={cn(`flex flex-col border shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-card transform hover:-translate-y-2`, theme.border)}>
                  <CardHeader className={cn(`text-center p-6 border-b`, theme.headerBg, theme.border)}>
                     <div className={cn(`mx-auto h-16 w-16 flex items-center justify-center rounded-full mb-4 shadow-md`, theme.iconBg, theme.iconText)}>
                        <pkg.icon className="h-8 w-8" />
                     </div>
                    <CardTitle className="text-xl font-serif text-foreground font-noto">{pkg.title}</CardTitle>
                    <CardDescription className={cn(`font-semibold text-lg`, theme.priceText)}>{pkg.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle size={16} className={cn(`mr-2 mt-0.5 flex-shrink-0`, theme.checkColor)} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-center text-muted-foreground mt-4 pt-3 border-t border-border/30 font-noto">
                         ధరలు మాట్లాడుకోవచ్చు. మీ బడ్జెట్ ప్రకారం మేము సెట్ చేస్తాం.
                    </p>
                    <p className="text-xs text-center text-muted-foreground">
                        (Pricing is flexible based on your needs.)
                    </p>
                  </CardContent>
                   <div className="p-6 pt-0 mt-auto">
                     <Button asChild className={cn(`w-full mt-4`, theme.buttonBg, theme.buttonHover, theme.buttonText)}>
                      <Link href={`/contact?service=${pkg.id}`}>Inquire Now</Link>
                     </Button>
                   </div>
                </Card>
             );
          })}
        </div>
         <p className="text-center text-sm text-muted-foreground mt-10">
            Looking for something specific? <Link href="/contact?custom=true" className="text-secondary hover:text-accent font-semibold">Request a Custom Quote!</Link>
          </p>
      </section>

      {/* Add-ons Section */}
      <section id="addons" className="mb-16 md:mb-20 scroll-mt-20 bg-muted/50 py-16 rounded-lg border border-border/30 shadow-inner">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Enhance Your Package</h2>
         <p className="font-noto text-center text-muted-foreground mb-10 -mt-6">ప్రత్యేక యాడ్-ఆన్‌లు</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="flex items-start p-4 bg-background rounded-lg shadow border border-border/50 transition-transform duration-300 hover:scale-105">
              <Sparkles size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 font-noto">{addOn.title}</h4>
                <p className="text-sm text-muted-foreground">{addOn.description}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-8">
            <Link href="/contact?addons=true" className="text-primary hover:text-accent text-sm font-medium">See All Add-on Details &rarr;</Link>
          </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Frequently Asked Questions</h2>
         <p className="font-noto text-center text-muted-foreground mb-10 -mt-6">తరచుగా అడిగే ప్రశ్నలు</p>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-background p-4 rounded-lg shadow border border-border/50">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 border-border/50">
              <AccordionTrigger className="text-left font-semibold text-base hover:text-secondary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-4 pr-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

        {/* Final CTA */}
        <div className="text-center mt-20">
           <h3 className="text-2xl font-serif font-semibold mb-4">Let's Capture Your Story</h3>
           <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Connect with our team to discuss your event and how we can bring your vision to life.</p>
           {/* Updated Bilingual CTA Button */}
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105">
             <Link href="/booking">మమ్మల్ని బుక్ చేయండి / Book Now</Link>
           </Button>
         </div>
    </div>
  );
}
