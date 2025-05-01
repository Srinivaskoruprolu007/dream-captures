import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Package, Sparkles, Camera, Users, PartyPopper, Mountain, Video, Rings, Flower, Bell } from 'lucide-react'; // Added more relevant pastel icons
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Updated service packages with pastel theme colors
const servicePackages = [
  {
    id: 'weddings-premium',
    title: 'పెళ్లి పందిరి సూపర్', // Premium Wedding
    category: 'Weddings',
    price: '₹1,50,000+',
    features: ['Full Day Coverage (10-12 Hrs)', '2 Photographers + 1 Cinematographer', 'Pre-Wedding Shoot Included', 'Luxury Album (e.g., Kalankari Cover)', 'Drone Shots*', 'Online Gallery'],
    icon: Rings, // Wedding Rings icon
    themeColor: 'accent' // Powder Pink
  },
  {
    id: 'weddings-standard',
    title: 'ఆలయ ఘనత', // Standard Wedding
    category: 'Weddings',
    price: '₹90,000+',
    features: ['8 Hours Coverage', '1 Photographer + 1 Cinematographer', 'Key Ceremonies (Haldi/Engagement)', 'Standard Album', 'Online Gallery'],
    icon: Bell, // Temple Bell icon
    themeColor: 'primary' // Mint Green
  },
   {
    id: 'outdoor-shoots',
    title: 'ప్రకృతి ఒడిలో', // In Nature's Lap (Outdoor)
    category: 'Outdoor',
    price: '₹40,000+',
    features: ['4-6 Hour Session', '1 Photographer', 'Scenic Location Shoot (e.g., Araku)', 'Online Gallery', 'Outfit Changes'],
    icon: Flower, // Flower icon
    themeColor: 'lavender' // Soft Lavender
  },
  {
    id: 'events-parties',
    title: 'వేడుక స్పెషల్', // Event Special (Parties)
    category: 'Parties',
    price: '₹35,000+',
    features: ['3-4 Hours Coverage', '1 Photographer', 'Birthdays, Anniversaries, Small Events', 'Candid & Group Shots', 'Online Gallery'],
    icon: PartyPopper,
    themeColor: 'secondary' // Ice Blue
  },
   {
    id: 'model-shoots',
    title: 'ఫ్యాషన్ ఫోకస్', // Fashion Focus (Model Shoots)
    category: 'Model Shoots',
    price: 'Contact Us',
    features: ['Portfolio Building', 'Fashion & Lifestyle Clicks', 'Studio or Outdoor Options', 'Professional Editing', 'Usage Rights Discussion'],
    icon: Camera,
    themeColor: 'muted' // Muted Grey/Beige
  },
   {
    id: 'reels-edits',
    title: 'సినిమాటిక్ టచ్', // Cinematic Touch (Reels/Edits)
    category: 'Reels & Edits',
    price: 'Starting ₹15,000',
    features: ['Instagram Reel Creation', 'Cinematic Highlights Video', 'Short Films for Events', 'Advanced Editing & Color Grading', 'Music Licensing'],
    icon: Video,
    themeColor: 'primary' // Mint Green again for variation
  },
];

const addOns = [
  { title: 'కలంకారి ఆర్ట్ ఫోటో ఆల్బమ్', description: 'Bespoke album with traditional Andhra art covers.' },
  { title: 'డ్రోన్ ఏరియల్ ఫోటోగ్రఫీ/వీడియోగ్రఫీ', description: 'Breathtaking aerial views for weddings or outdoor shoots.' },
  { title: 'లైవ్ స్ట్రీమింగ్ (పెళ్లిళ్లు)', description: 'Share your wedding live with distant family & friends.' },
  { title: 'ఫన్ ఫోటోబూత్', description: 'Interactive booth with props for parties and receptions.' },
  { title: 'సేమ్-డే ఎడిట్ (వెడ్డింగ్ హైలైట్స్)', description: 'A quick highlight reel shown during your wedding reception.' },
  { title: 'అదనపు ఫోటోగ్రాఫర్/సినిమాటోగ్రాఫర్', description: 'Ensure more coverage for large events.' },
];

const faqs = [
  { question: 'What is your team\'s photography style?', answer: 'We blend modern, candid photojournalism with a touch of fine-art portraiture. We focus on capturing genuine emotions and vibrant details, especially in weddings and cultural events in Andhra Pradesh.' },
  { question: 'Are you available for travel outside our city in AP?', answer: 'Yes! While we are based in [Your City], we love covering events across Andhra Pradesh and are open to traveling further. Travel costs may apply depending on the distance.' },
  { question: 'How soon do we get our photos/videos?', answer: 'You\'ll get a sneak peek gallery within a week for weddings! Full photo delivery is typically 6-8 weeks, and videos around 10-12 weeks, depending on the package and season.' },
  { question: 'Can we customize a package?', answer: 'Absolutely! Our listed packages are starting points. We prefer discussing your specific needs (event type, duration, budget) to create a personalized quote.' },
  { question: 'How do we book the Dream Captures team?', answer: 'Fill out our Booking or Contact form! We’ll schedule a call to chat about your event. A signed contract and a retainer fee (usually 30-50%) will secure your date with our team.' },
  { question: 'Do you offer both photography and videography?', answer: 'Yes, many of our packages include both. We have dedicated photographers and cinematographers on our team to ensure high-quality coverage for both mediums.' },
];

export default function ServicesPage() {
  // Helper function to get theme classes based on pastel palette
  const getThemeClasses = (themeColor: string) => {
     const baseColors = ['primary', 'secondary', 'accent', 'lavender', 'muted'];
     if (baseColors.includes(themeColor)) {
        // Adjust hover based on theme color lightness
        const hoverOpacity = ['primary', 'secondary', 'accent', 'lavender'].includes(themeColor) ? 'hover:opacity-90' : 'hover:bg-muted/80';
        return {
           border: `border-${themeColor}/30`,
           headerBg: `bg-${themeColor}/10`, // Use light tint for header
           iconBg: `bg-${themeColor}`,
           iconText: `text-${themeColor}-foreground`,
           priceText: `text-${themeColor}`, // Use the direct color for price
           checkColor: `text-${themeColor}`, // Use direct color for checkmark
           buttonBg: `bg-${themeColor}`,
           buttonHover: hoverOpacity,
           buttonText: `text-${themeColor}-foreground`,
           titleText: `text-${themeColor}`, // Use direct color for title if needed
        };
     }
     // Fallback for unexpected values (shouldn't happen with current setup)
     return {
       border: 'border-border/30',
       headerBg: 'bg-muted/10',
       iconBg: 'bg-muted',
       iconText: 'text-muted-foreground',
       priceText: 'text-muted-foreground',
       checkColor: 'text-primary', // Default to primary
       buttonBg: 'bg-primary',
       buttonHover: 'hover:opacity-90',
       buttonText: 'text-primary-foreground',
       titleText: 'text-foreground',
     };
   };


  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-background"> {/* Use theme background */}
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Photography & Videography Services
        </h1>
        <p className="font-noto text-center text-muted-foreground text-lg" lang="te">మీ ప్రతి వేడుకకు, మా ప్రత్యేక సేవలు</p>
      </header>

      {/* Packages Section */}
      <section id="packages" className="mb-16 md:mb-20 scroll-mt-20" aria-labelledby="packages-heading">
        <h2 id="packages-heading" className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Service Offerings</h2>
         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => {
              const theme = getThemeClasses(pkg.themeColor);
              return (
                <li key={pkg.id} className="h-full">
                    <Card className={cn(`flex flex-col h-full border shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-card transform hover:-translate-y-2`, theme.border)}>
                    <CardHeader className={cn(`text-center p-6 border-b`, theme.headerBg, theme.border)}>
                        <div className={cn(`mx-auto h-16 w-16 flex items-center justify-center rounded-full mb-4 shadow-md shrink-0`, theme.iconBg, theme.iconText)} aria-hidden="true">
                            <pkg.icon className="h-8 w-8" />
                        </div>
                        {/* Use specific theme color for title */}
                        <CardTitle as="h3" className={cn(`text-xl font-serif font-noto`, theme.titleText || 'text-foreground')} lang="te">{pkg.title}</CardTitle>
                        <CardDescription className={cn(`font-semibold text-lg`, theme.priceText)}>{pkg.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                        <ul className="space-y-3 text-sm text-muted-foreground">
                        {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                            {/* Use theme color for checkmark */}
                            <CheckCircle size={16} className={cn(`mr-2 mt-0.5 flex-shrink-0`, theme.checkColor)} aria-hidden="true" />
                            <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                        <div className="text-xs text-center text-muted-foreground mt-4 pt-3 border-t border-border/30 space-y-1">
                            <p className="font-noto" lang="te">
                                ధరలు మాట్లాడుకోవచ్చు. మీ బడ్జెట్ ప్రకారం మేము సెట్ చేస్తాం.
                            </p>
                            <p>
                                (Pricing is flexible based on your needs.)
                            </p>
                        </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                        {/* Use specific button theme */}
                        <Button asChild className={cn(`w-full mt-4`, theme.buttonBg, theme.buttonHover, theme.buttonText)}>
                        <Link href={`/contact?service=${pkg.id}`}>Inquire Now</Link>
                        </Button>
                    </div>
                    </Card>
                </li>
             );
          })}
        </ul>
         <p className="text-center text-sm text-muted-foreground mt-10">
            {/* Link uses accent color */}
            Looking for something specific? <Link href="/contact?custom=true" className="text-accent hover:opacity-80 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Request a Custom Quote!</Link>
          </p>
      </section>

      {/* Add-ons Section - Muted pastel background */}
      <section id="addons" className="mb-16 md:mb-20 scroll-mt-20 bg-muted/50 py-16 rounded-lg border border-border/30 shadow-inner" aria-labelledby="addons-heading">
        <h2 id="addons-heading" className="text-3xl font-serif font-semibold text-center mb-4 text-foreground">Enhance Your Package</h2>
         <p className="font-noto text-center text-muted-foreground mb-10 -mt-2" lang="te">ప్రత్యేక యాడ్-ఆన్‌లు</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {addOns.map((addOn) => (
            <li key={addOn.title}>
                {/* Use card background for add-on items */}
                <div className="flex items-start h-full p-4 bg-card rounded-lg shadow border border-border/50 transition-transform duration-300 hover:scale-105">
                 {/* Use accent color for Sparkles */}
                <Sparkles size={24} className="text-accent mr-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                    <h4 className="font-semibold text-foreground mb-1 font-noto" lang="te">{addOn.title}</h4>
                    <p className="text-sm text-muted-foreground">{addOn.description}</p>
                </div>
                </div>
            </li>
          ))}
        </ul>
         <div className="text-center mt-8">
             {/* Link uses primary color */}
            <Link href="/contact?addons=true" className="text-primary hover:text-accent text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">See All Add-on Details &rarr;</Link>
          </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="scroll-mt-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl font-serif font-semibold text-center mb-4 text-foreground">Frequently Asked Questions</h2>
         <p className="font-noto text-center text-muted-foreground mb-10 -mt-2" lang="te">తరచుగా అడిగే ప్రశ్నలు</p>
         {/* Accordion uses card background */}
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto bg-card p-4 rounded-lg shadow border border-border/50">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 border-border/50">
              {/* Hover uses secondary color */}
              <AccordionTrigger className="text-left font-semibold text-base hover:text-secondary py-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">
                <h3>{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-4 pr-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

        {/* Final CTA - Use background color */}
        <section className="text-center mt-16 md:mt-20" aria-labelledby="final-cta-services-heading">
           <h2 id="final-cta-services-heading" className="text-2xl font-serif font-semibold mb-4 text-foreground">Let's Capture Your Story</h2>
           <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Connect with our team to discuss your event and how we can bring your vision to life.</p>
           {/* Button uses Accent (Pink) */}
            <Button asChild size="lg" variant="accent" className="rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105">
             <Link href="/booking">మమ్మల్ని బుక్ చేయండి / Book Now</Link>
           </Button>
         </section>
    </div>
  );
}
