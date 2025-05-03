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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Lock, Sparkles } from "lucide-react"; // Removed X as it's handled by SheetClose
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../lib/logo.png"; // Adjust the path to your logo.png
import { ThemeToggle } from "@/components/theme/theme-toggle"; // Re-add ThemeToggle import
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/ai-tools/image-describer", label: "AI Describer", icon: Sparkles }, // Added AI Tool link with icon
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Booking" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        // Updated header style: Pastel background with blur, softer border
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60",
        "transition-shadow duration-300 shadow-sm hover:shadow-md" // Keep subtle shadow
      )}
      // Added CSS variable for header height
      style={{ "--header-height": "4rem" } as React.CSSProperties}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label="Dream Captures Home"
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on logo click
        >
          <Image
            src={logo}
            width={350}
            height={350}
            alt="Dream Captures Logo"
            className="w-auto h-[40px] md:h-[50px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <nav aria-label="Main Navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200 px-3 py-2 flex items-center gap-1.5",
                          pathname === link.href &&
                            "bg-primary/15 text-primary font-semibold shadow-sm"
                        )}
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}{" "}
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
                        "flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200 px-3 py-2",
                        pathname === "/client-gallery" &&
                          "bg-primary/15 text-primary font-semibold shadow-sm"
                      )}
                    >
                      <Lock size={14} /> Client Access
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <ThemeToggle /> {/* Re-added ThemeToggle for desktop */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle /> {/* Re-added ThemeToggle for mobile */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-2" // Use primary (Mint) for hover
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-background p-0 shadow-xl border-l border-border/50 flex flex-col" // Removed p-6
              aria-label="Mobile Navigation Menu"
            >
              {/* Header for Mobile Menu with Logo and Close Button */}
              <div className="flex justify-between items-center p-4 border-b border-border/50">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  <Logo className="h-8 w-auto text-primary" />{" "}
                  {/* Slightly smaller logo, Mint */}
                </Link>
                {/* SheetClose is automatically provided by SheetContent */}
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 p-4 flex-grow overflow-y-auto">
                {" "}
                {/* Reduced gap, added padding */}
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background" // Mint hover
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/client-gallery"
                    className="flex items-center gap-2 px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background" // Mint hover
                  >
                    <Lock size={16} /> Client Access
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
