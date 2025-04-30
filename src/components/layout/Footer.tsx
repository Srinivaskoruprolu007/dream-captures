import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'; // Added Youtube, Mail
import { Logo } from './Logo'; // Import the logo
import { Separator } from '@/components/ui/separator'; // Import Separator

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 md:py-16 text-muted-foreground border-t border-border/50"> {/* Slightly lighter background */}
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-6">
        {/* About/Brand */}
        <div className="md:col-span-1">
           <Link href="/" className="inline-block mb-4">
             <Logo className="h-10 w-auto text-secondary" />
           </Link>
          <p className="text-sm leading-relaxed mb-4">
            Capturing the timeless elegance and vibrant emotions of Telugu weddings. Based in Andhra Pradesh.
          </p>
           <p className="text-sm font-telugu">మీ కలల పెళ్లి క్షణాలను శాశ్వతంగా మార్చే ఫోటోగ్రఫీ.</p>
          <div className="flex space-x-5 mt-6"> {/* Slightly increased spacing */}
            {/* Styled Social Icons */}
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
             <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@dreamcaptures.com" aria-label="Email" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm"> {/* Increased spacing */}
            <li><Link href="/about" className="hover:text-secondary transition-colors duration-200">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-secondary transition-colors duration-200">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition-colors duration-200">Services</Link></li>
            <li><Link href="/blog" className="hover:text-secondary transition-colors duration-200">Blog</Link></li>
            <li><Link href="/testimonials" className="hover:text-secondary transition-colors duration-200">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200">Contact</Link></li>
             <li><Link href="/booking" className="hover:text-secondary transition-colors duration-200">Booking Inquiry</Link></li>
             <li><Link href="/client-gallery" className="hover:text-secondary transition-colors duration-200">Client Access</Link></li>
          </ul>
        </div>

         {/* Services */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm"> {/* Increased spacing */}
            <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200">Wedding Photography</Link></li> {/* Linked to package section */}
            <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200">Engagement Sessions</Link></li>
             <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200">Pre-Wedding Shoots</Link></li>
            <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200">Portraits & Family</Link></li>
            <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200">Events & Baby Showers</Link></li>
          </ul>
        </div>


        {/* Newsletter */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Stay Inspired</h4>
          <p className="text-sm mb-4">Get the latest wedding trends, stories, and exclusive offers delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-background flex-1 border-input focus:border-secondary text-sm" aria-label="Newsletter Email"/>
            <Button type="submit" variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm">Subscribe</Button>
          </form>
        </div>
      </div>
      {/* Use Separator for a cleaner look */}
       <Separator className="container my-8 md:my-10 bg-border/50" />
      <div className="container text-center text-xs">
        <p>&copy; {currentYear} Dream Captures. All rights reserved. Designed with <span className="text-red-500">❤</span> in Andhra Pradesh.</p>
        {/* Optional: Add links to Privacy Policy, Terms */}
         <div className="mt-2 space-x-4">
           <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
           <Link href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
         </div>
      </div>
    </footer>
  );
}
