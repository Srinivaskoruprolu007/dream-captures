import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'; // Added Youtube, Mail
import { Logo } from './Logo'; // Import the logo

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-10 md:py-16 text-muted-foreground border-t border-border/50">
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
          <div className="flex space-x-4 mt-6">
            {/* Styled Social Icons */}
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
             <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-secondary transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@dreamcaptures.com" aria-label="Email" className="text-muted-foreground hover:text-secondary transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
            <li><Link href="/testimonials" className="hover:text-secondary transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
             <li><Link href="/booking" className="hover:text-secondary transition-colors">Booking Inquiry</Link></li>
             <li><Link href="/client-gallery" className="hover:text-secondary transition-colors">Client Access</Link></li>
          </ul>
        </div>

         {/* Services */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services#wedding" className="hover:text-secondary transition-colors">Wedding Photography</Link></li>
            <li><Link href="/services#engagement" className="hover:text-secondary transition-colors">Engagement Sessions</Link></li>
             <li><Link href="/services#prewedding" className="hover:text-secondary transition-colors">Pre-Wedding Shoots</Link></li>
            <li><Link href="/services#portraits" className="hover:text-secondary transition-colors">Portraits & Family</Link></li>
            <li><Link href="/services#events" className="hover:text-secondary transition-colors">Events & Baby Showers</Link></li>
          </ul>
        </div>


        {/* Newsletter */}
        <div className="md:col-span-1">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Stay Inspired</h4>
          <p className="text-sm mb-3">Get the latest wedding trends, stories, and exclusive offers delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-background flex-1 border-input focus:border-secondary" aria-label="Newsletter Email"/>
            <Button type="submit" variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container mt-10 pt-8 border-t border-border/50 text-center text-xs">
        <p>&copy; {currentYear} Dream Captures. All rights reserved. Designed with love in Andhra Pradesh.</p>
        {/* Optional: Add links to Privacy Policy, Terms */}
      </div>
    </footer>
  );
}
