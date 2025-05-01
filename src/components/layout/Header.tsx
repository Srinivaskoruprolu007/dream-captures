"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Import SheetClose
import { Menu, Lock, X } from "lucide-react"; // Added Lock and X icons
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../lib/logo.png"; // Adjust the path to your logo.png
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useState } from "react"; // Import useState for mobile menu state

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Booking" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60",
        "transition-shadow duration-300 shadow-sm hover:shadow-md" // Slightly more prominent shadow on hover
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm" // Add focus styles
          aria-label="Dream Captures Home"
        >
          <Image
            src={logo}
            width={350}
            height={350}
            alt="Dream Captures Logo"
            className="w-auto h-[40px] md:h-[50px]"
            priority // Ensure logo loads quickly
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <nav aria-label="Main Navigation"> {/* Add ARIA label */}
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      {/* Use cn to apply styles and ensure smooth transition */}
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/5 transition-colors duration-200 px-3 py-2" // Refined styling
                        )}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href="/client-gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/5 transition-colors duration-200 px-3 py-2" // Refined styling
                      )}
                    >
                      <Lock size={14} /> Client Access
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-secondary focus-visible:ring-ring focus-visible:ring-offset-2" // Consistent focus
                aria-label="Toggle Menu" // Add ARIA label
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-background p-6 shadow-xl border-l border-border/50 flex flex-col" // Ensure content fills height
              aria-label="Mobile Navigation Menu" // Add ARIA label for the sheet content
            >
              {/* Header for Mobile Menu with Logo and Close Button */}
              <div className="flex justify-between items-center mb-6 border-b pb-4 border-border/50">
                 <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
                    <Logo className="h-10 w-auto text-secondary" />
                 </Link>
                 <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="text-foreground hover:text-secondary" aria-label="Close Menu">
                     <X className="h-5 w-5" />
                   </Button>
                 </SheetClose>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 flex-grow overflow-y-auto"> {/* Adjust gap and make scrollable */}
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild> {/* Close sheet on link click */}
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background" // Consistent focus
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <SheetClose asChild>
                    <Link
                    href="/client-gallery"
                    className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground rounded-md transition-colors duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background" // Consistent focus
                    >
                    <Lock size={18} /> Client Access
                    </Link>
                 </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
