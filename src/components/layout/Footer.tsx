import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        {/* About/Brand */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Dream Captures</h4>
          <p className="text-sm leading-relaxed">Capturing life's moments, beautifully.</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Newsletter</h4>
          <p className="text-sm mb-3">Stay updated with our latest stories and offers.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="bg-background flex-1" />
            <Button type="submit" variant="default">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-border text-center text-xs">
        <p>&copy; {currentYear} Dream Captures. All rights reserved.</p>
      </div>
    </footer>
  );
}
