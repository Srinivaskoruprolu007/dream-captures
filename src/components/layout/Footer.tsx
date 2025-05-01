import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'; // Removed Twitter, Added Youtube, Mail
import { Logo } from './Logo'; // Import the logo
import { Separator } from '@/components/ui/separator'; // Import Separator

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 md:py-16 text-muted-foreground border-t border-border/50"> {/* Slightly lighter background */}
      {/* Use max-w-7xl for consistency with potential page content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-6">
        {/* About/Brand */}
        <div className="sm:col-span-2 lg:col-span-1"> {/* Span 2 on small, 1 on large */}
           <Link href="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm" aria-label="Dream Captures Home">
             <Logo className="h-10 w-auto text-secondary" />
           </Link>
          <p className="text-sm leading-relaxed mb-4">
            A team of young, passionate photographers from Andhra Pradesh capturing weddings, parties, and more.
          </p>
           <p className="text-sm font-noto">ఆంధ్రప్రదేశ్‌లోని యువ ఫోటోగ్రాఫర్ల టీమ్.</p>
          <div className="flex space-x-5 mt-6" role="group" aria-label="Social Media Links"> {/* Group social links */}
            {/* Styled Social Icons */}
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
              <Instagram className="h-5 w-5" />
            </Link>
             <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@dreamcaptures.com" aria-label="Email" className="text-muted-foreground hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div> {/* Default to 1 col */}
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <nav aria-label="Quick Navigation"> {/* Add ARIA label */}
            <ul className="space-y-2.5 text-sm"> {/* Increased spacing */}
              <li><Link href="/about" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Services</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Booking Inquiry</Link></li>
              <li><Link href="/client-gallery" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Client Access</Link></li>
            </ul>
          </nav>
        </div>

         {/* Services */}
        <div> {/* Default to 1 col */}
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Our Services</h4>
          <nav aria-label="Services Navigation"> {/* Add ARIA label */}
            <ul className="space-y-2.5 text-sm"> {/* Increased spacing */}
              <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Weddings</Link></li>
              <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Parties & Events</Link></li>
              <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Model Shoots</Link></li>
              <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Outdoor Sessions</Link></li>
              <li><Link href="/services#packages" className="hover:text-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Reels & Edits</Link></li>
            </ul>
          </nav>
        </div>


        {/* Newsletter */}
        <div> {/* Default to 1 col */}
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Stay Inspired</h4>
          <p className="text-sm mb-4">Get the latest photography trends, stories, and offers from our team.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Newsletter Email</label> {/* Add label for accessibility */}
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="bg-background flex-1 border-input focus:border-secondary text-sm"
              aria-label="Newsletter Email"
              required // Indicate required field
            />
            <Button type="submit" variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm">Subscribe</Button>
          </form>
        </div>
      </div>
      {/* Use Separator for a cleaner look */}
       <Separator className="container my-8 md:my-10 bg-border/50" />
      <div className="container text-center text-xs">
        <p>&copy; {currentYear} Dream Captures Team. All rights reserved. Crafted with <span className="text-red-500">❤</span> in Andhra Pradesh.</p>
        {/* Optional: Add links to Privacy Policy, Terms */}
         <div className="mt-2 space-x-4">
           <Link href="/privacy-policy" className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Privacy Policy</Link>
           <Link href="/terms-of-service" className="hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Terms of Service</Link>
         </div>
      </div>
    </footer>
  );
}
