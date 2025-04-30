import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Package, Sparkles, Film, Users, Camera } from 'lucide-react'; // Added Camera import
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Culturally themed package names and icons with Telugu names
const servicePackages = [
  {
    id: 'premium', // Changed ID for clarity
    title: 'పెళ్లి పందిరి సూపర్', // Premium
    price: '₹1,50,000+', // Example Price in INR
    features: ['Full Day Coverage (10-12 Hrs)', '2 Photographers + 1 Cinematographer', 'Pre-Wedding Shoot', 'Luxury Album (Kalankari Cover Option)', 'Online Gallery + Drone Shots*'],
    icon: Sparkles, // Represents luxury/grandeur
    themeColor: 'secondary' // Maroon theme
  },
   {
    id: 'mid-tier', // Changed ID
    title: 'ఆలయ ఘనత', // Mid-tier
    price: '₹90,000+',
    features: ['8 Hours Coverage', '1 Photographer + 1 Cinematographer', 'Engagement/Haldi Coverage', 'Standard Album', 'Online Gallery'],
    icon: Package, // Standard package
    themeColor: 'primary' // Teal theme
  },
  {
    id: 'basic', // Changed ID
    title: 'వెంకటాద్రి ప్లాన్', // Basic
    price: '₹40,000+',
    features: ['4-6 Hour Session', '1 Photographer', 'Key Ceremony Coverage', 'Online Gallery', 'Essential Edits'],
    icon: Camera, // Represents photography focus
    themeColor: 'accent' // Gold theme
  },
  {
    id: 'event',
    title: 'తిరుపతి ప్రత్యేకం', // Renamed for consistency
    price: '₹30,000+',
    features: ['3-4 Hours Coverage', '1 Photographer', 'Ideal for Sreemantham, Birthdays', 'Online Gallery', 'Candid & Group Shots'],
    icon: Users, // Represents family/events
    themeColor: 'muted' // Use muted color for simplicity or another theme color
  },
];

// Cultural Add-ons
const addOns = [
  { title: 'కలంకారి ఆర్ట్ ఫోటో ఆల్బమ్', description: 'A bespoke album featuring traditional Andhra art covers.' },
  { title: 'డ్రోన్ వెడ్డింగ్ ఎంట్రీ / కవరేజ్', description: 'Capture breathtaking aerial views of your venue and entry.' },
  { title: 'లైవ్ వెబ్‌కాస్టింగ్', description: 'Share your ceremony live with loved ones who cannot attend.' },
  { title: 'ఇన్‌స్టంట్ ఫోటోబూత్', description: 'Fun, interactive booth with traditional props and instant prints.' },
  { title: 'సేమ్-డే ఎడిట్ హైలైట్ రీల్', description: 'A short cinematic video edited and shown during your reception.' },
  { title: 'క్యాండిడ్ సినిమాటోగ్రఫీ యాడ్-ఆన్', description: 'Dedicated cinematographer for a storytelling film.' },
];

// Updated FAQs with cultural context
const faqs = [
  { question: 'What is your photography style for Telugu weddings?', answer: 'We blend candid photojournalism with fine-art portraiture, focusing on capturing the genuine emotions, vibrant colors, and unique rituals of Telugu weddings. We love natural light and creating timeless, elegant images.' },
  { question: 'Do you cover weddings outside Andhra Pradesh?', answer: 'Absolutely! While we are based in [Your City], Andhra Pradesh, we frequently travel across India and internationally for weddings. Travel and accommodation costs are applicable for destination weddings.' },
  { question: 'How soon will we get our wedding photos and videos?', answer: 'You can expect a sneak peek gallery within a week! The full set of edited photos is typically delivered in 6-8 weeks, and the final cinematic wedding film within 10-12 weeks, depending on the package.' },
  { question: 'Can we customize the packages?', answer: 'Yes, definitely! The packages listed are starting points. We understand every wedding is unique, and we are happy to create a custom package tailored to your specific needs and budget.' },
  { question: 'How do we book Dream Captures for our wedding?', answer: 'It\'s simple! Fill out the inquiry form on our Booking page or Contact page. We\'ll schedule a consultation (online or in-person) to discuss your vision. A signed contract and a retainer fee (typically 30-50%) secures your date.' },
   { question: 'Do you provide traditional videography?', answer: 'Our main focus is cinematic wedding films. However, we can arrange for traditional videography coverage through trusted partners if required. Please mention this during your consultation.' },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
        Our Photography Services
      </h1>
       <p className="font-telugu text-center text-muted-foreground text-lg mb-12">మీ ప్రతి వేడుకకు, మా ప్రత్యేక ప్యాకేజీలు</p>

      {/* Packages Section - Enhanced Styling */}
      <section id="packages" className="mb-16 md:mb-20 scroll-mt-20"> {/* Added ID and scroll-margin */}
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Signature Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePackages.map((pkg) => (
            <Card key={pkg.title} className={`flex flex-col border border-${pkg.themeColor}/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-card transform hover:-translate-y-2`}>
              <CardHeader className={`text-center p-6 bg-gradient-to-br from-${pkg.themeColor}/10 to-${pkg.themeColor}/5 border-b border-${pkg.themeColor}/20`}>
                {/* Icon with background matching theme */}
                 <div className={`mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-${pkg.themeColor} text-${pkg.themeColor}-foreground mb-4 shadow-md`}>
                    <pkg.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="text-xl font-serif text-foreground font-telugu">{pkg.title}</CardTitle> {/* Apply Telugu font */}
                <CardDescription className={`font-semibold text-lg text-${pkg.themeColor}`}>{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={16} className={`text-${pkg.themeColor} mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                 {/* Negotiable Pricing Note */}
                  <p className="text-xs text-center text-muted-foreground mt-4 pt-3 border-t border-border/30 font-telugu">
                     ధరలు మాట్లాడుకోవచ్చు. మీ బడ్జెట్ ప్రకారం మేము సెట్ చేస్తాం.
                  </p>
                  <p className="text-xs text-center text-muted-foreground">
                      (Pricing is negotiable based on your budget.)
                  </p>
              </CardContent>
               <div className="p-6 pt-0 mt-auto">
                 {/* Button matching theme color */}
                 <Button asChild className={`w-full mt-4 bg-${pkg.themeColor} hover:bg-${pkg.themeColor}/90 text-${pkg.themeColor}-foreground`}>
                  <Link href={`/contact?service=${pkg.id}`}>Inquire Now</Link> {/* Use ID for query */}
                 </Button>
               </div>
            </Card>
          ))}
        </div>
         <p className="text-center text-sm text-muted-foreground mt-10">
            Looking for something unique? <Link href="/contact?custom=true" className="text-secondary hover:text-accent font-semibold">Request a Custom Quote!</Link>
          </p>
      </section>

      {/* Add-ons Section */}
      <section id="addons" className="mb-16 md:mb-20 scroll-mt-20 bg-muted/50 py-16 rounded-lg border border-border/30 shadow-inner">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Enhance Your Experience</h2>
         <p className="font-telugu text-center text-muted-foreground mb-10 -mt-6">ప్రత్యేక యాడ్-ఆన్‌లు</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="flex items-start p-4 bg-background rounded-lg shadow border border-border/50 transition-transform duration-300 hover:scale-105">
               {/* Use a relevant icon - Sparkles for special items */}
              <Sparkles size={24} className="text-accent mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1 font-telugu">{addOn.title}</h4>
                <p className="text-sm text-muted-foreground">{addOn.description}</p>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-8">
            <Link href="/contact?addons=true" className="text-primary hover:text-accent text-sm font-medium">See All Add-on Details & Pricing &rarr;</Link>
          </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Frequently Asked Questions</h2>
         <p className="font-telugu text-center text-muted-foreground mb-10 -mt-6">తరచుగా అడిగే ప్రశ్నలు</p>
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
           <h3 className="text-2xl font-serif font-semibold mb-4">Let's Create Your Dream Wedding Story</h3>
           <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Connect with us to discuss your vision and how we can capture the magic of your special day in Andhra Pradesh and beyond.</p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-10 py-3 shadow-lg transition-transform duration-300 hover:scale-105">
             <Link href="/booking">Book Your Free Consultation</Link>
           </Button>
         </div>
    </div>
  );
}
