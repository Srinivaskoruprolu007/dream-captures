import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Package, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const servicePackages = [
  {
    title: 'Essential Wedding',
    price: '$2,500+',
    features: ['6 Hours Coverage', 'One Photographer', 'Online Gallery', 'High-Resolution Images'],
    icon: Package
  },
  {
    title: 'Premium Wedding',
    price: '$4,000+',
    features: ['8 Hours Coverage', 'Two Photographers', 'Engagement Session', 'Online Gallery + USB', 'Print Credit'],
    icon: Package
  },
  {
    title: 'Luxury Wedding',
    price: '$6,000+',
    features: ['Full Day Coverage (10+ hrs)', 'Two Photographers', 'Engagement Session', 'Custom Album', 'Online Gallery + USB', 'Large Print Credit'],
    icon: Package
  },
   {
    title: 'Portrait Session',
    price: '$500+',
    features: ['1-2 Hour Session', 'One Location', 'Online Gallery', 'Outfit Changes'],
    icon: Package
  },
];

const addOns = [
  { title: 'Additional Hour of Coverage', description: 'Extend the photography time for your event.' },
  { title: 'Second Photographer', description: 'Ensure comprehensive coverage from multiple angles.' },
  { title: 'Engagement Session', description: 'Capture beautiful photos before the big day.' },
  { title: 'Custom Photo Album', description: 'A professionally designed album to showcase your memories.' },
  { title: 'Drone Photography/Videography', description: 'Get stunning aerial shots of your venue or event.' },
  { title: 'Rush Editing', description: 'Receive your edited photos faster than standard delivery times.' },
];

const faqs = [
  { question: 'What is your photography style?', answer: 'My style is a blend of photojournalism and fine art photography. I aim to capture candid moments naturally while also creating beautifully composed, artistic shots. I love working with natural light whenever possible.' },
  { question: 'How far do you travel?', answer: 'I am based in [Your City/Area] but love to travel! Travel fees may apply for locations outside a certain radius. Please contact me with your venue details for a custom quote.' },
  { question: 'When will we receive our photos?', answer: 'For weddings, the typical turnaround time for the full edited gallery is 6-8 weeks. For portrait sessions, it\'s usually 2-3 weeks. Sneak peeks are often provided within a few days!' },
  { question: 'Do you offer videography services?', answer: 'While my primary focus is photography, I work closely with talented videographers and can offer package deals or recommendations.' },
  { question: 'How do we book you?', answer: 'To book, please fill out the contact form or inquiry form on the Booking page. A signed contract and a retainer fee are required to secure your date.' },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-foreground">
        Our Photography Services
      </h1>

      {/* Packages Section */}
      <section className="mb-16 md:mb-20">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Investment Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePackages.map((pkg) => (
            <Card key={pkg.title} className="flex flex-col border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <pkg.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                <CardTitle className="text-xl font-serif">{pkg.title}</CardTitle>
                <CardDescription className="font-semibold text-lg text-primary">{pkg.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
               <div className="p-6 pt-0 mt-auto">
                 <Button asChild className="w-full mt-4">
                  <Link href="/contact">Inquire Now</Link>
                 </Button>
               </div>
            </Card>
          ))}
        </div>
         <p className="text-center text-sm text-muted-foreground mt-8">
            Need something different? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for a custom quote!
          </p>
      </section>

      {/* Add-ons Section */}
      <section className="mb-16 md:mb-20">
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Optional Add-Ons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="flex items-start p-4 bg-secondary rounded-lg">
              <PlusCircle size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">{addOn.title}</h4>
                <p className="text-sm text-muted-foreground">{addOn.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <h2 className="text-3xl font-serif font-semibold text-center mb-10 text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold hover:text-primary">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
        <div className="text-center mt-16">
           <h3 className="text-2xl font-serif font-semibold mb-4">Ready to Capture Your Story?</h3>
           <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's discuss how we can create beautiful, lasting memories for you. Get in touch today!</p>
            <Button asChild size="lg">
             <Link href="/booking">Book a Consultation</Link>
           </Button>
         </div>
    </div>
  );
}
