'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Lock } from 'lucide-react'; // Added Lock icon
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Booking' },
];

export function Header() {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60",
      "transition-shadow duration-300 shadow-sm hover:shadow-md" // Slightly more prominent shadow on hover
    )}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Dream Captures Home">
          {/* Adjusted Logo size */}
          <Logo className="h-9 w-auto text-secondary" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  {/* Use cn to apply styles and ensure smooth transition */}
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/5 transition-colors duration-200 px-3 py-2" // Refined styling
                  )}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
             <NavigationMenuItem>
                <Link href="/client-gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/5 transition-colors duration-200 px-3 py-2" // Refined styling
                   )}>
                     <Lock size={14} /> Client Access
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-secondary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background p-6 shadow-xl border-l border-border/50">
              <nav className="flex flex-col gap-5 pt-8">
                 {/* Mobile Logo */}
                 <Link href="/" className="mb-6 block">
                    <Logo className="h-10 w-auto text-secondary" />
                 </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground rounded-md transition-colors duration-200" // Use accent for mobile hover
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link
                    href="/client-gallery"
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground rounded-md transition-colors duration-200 flex items-center gap-2"
                  >
                   <Lock size={18} /> Client Access
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
