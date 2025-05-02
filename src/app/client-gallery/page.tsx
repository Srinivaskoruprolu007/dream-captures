"use client";

import type { Metadata } from 'next'; // Import Metadata type
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// NOTE: Metadata cannot be defined directly in a "use client" component.
// If needed, this should be moved to a parent server component or handled differently.
// For now, this is commented out.
/*
export const metadata: Metadata = {
  title: 'Client Gallery Access',
  description: 'Log in to access your private photo gallery from Dream Captures.',
  robots: { index: false, follow: false }, // Discourage search engines from indexing login page
};
*/

// NOTE: Placeholder page. Requires backend integration (Firebase Auth, etc.).

export default function ClientGalleryPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Or access code
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "You have been logged in. Redirecting to your gallery...",
        variant: "default",
      });
      // TODO: Redirect to gallery page or load gallery content
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    // Use theme background and ensure vertical centering
    <div className="bg-background min-h-[calc(100dvh-var(--header-height,10rem))] flex items-center justify-center py-16 md:py-24 px-4">
      <div className="relative w-full max-w-md">
        {/* Optional: Decorative element with pastel color */}
        {/* <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full opacity-50 hidden md:block blur-lg" aria-hidden="true"></div> */}
        {/* <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full opacity-50 hidden md:block blur-lg" aria-hidden="true"></div> */}

        <Card className="w-full border border-border/50 shadow-xl rounded-xl overflow-hidden bg-card">
          {" "}
          {/* Use card bg */}
          <CardHeader className="text-center p-8 bg-gradient-to-br from-primary/10 via-background to-background">
            {" "}
            {/* Mint tint gradient */}
            <Lock
              className="h-12 w-12 mx-auto mb-4 text-primary"
              aria-hidden="true"
            />{" "}
            {/* Mint icon */}
            <CardTitle as="h1" className="font-serif text-3xl text-foreground">
              Client Gallery Access
            </CardTitle>
            <CardDescription
              className="pt-2 font-telugu text-muted-foreground"
              lang="te"
            >
              మీ ప్రైవేట్ ఫోటో గ్యాలరీని వీక్షించడానికి లాగిన్ చేయండి.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email Address (ఇమెయిల్)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input focus:border-primary" // Use input bg, primary focus
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-medium">
                  Password / Access Code (పాస్‌వర్డ్)
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input focus:border-primary" // Use input bg, primary focus
                  aria-required="true"
                  autoComplete="current-password"
                />
                <div className="text-right text-xs pt-1">
                  {/* Use primary color for link */}
                  <Link
                    href="/forgot-password"
                    className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              {/* Login Button - Use Primary (Mint) */}
              <Button
                type="submit"
                className={cn(
                  "w-full bg-primary hover:opacity-90 text-primary-foreground text-base py-3 rounded-lg shadow-md flex items-center justify-center gap-2",
                  isLoading && "opacity-75 cursor-wait"
                )}
                disabled={isLoading}
                aria-live="polite"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span aria-hidden="true">Logging In...</span>
                    <span className="sr-only">Processing login request</span>
                  </>
                ) : (
                  <>
                    <LogIn size={18} aria-hidden="true" /> Login (లాగిన్)
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground pt-3">
                {/* Use primary color for link */}
                Having trouble?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                >
                  Contact Support
                </Link>
                .{" "}
                <span className="font-telugu" lang="te">
                  (సహాయం కావాలా? మమ్మల్ని సంప్రదించండి.)
                </span>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Define CSS variable for header height in globals.css or layout
// :root { --header-height: 4rem; /* or your actual header height */ }
// @media (min-width: 768px) { :root { --header-height: 4.5rem; } }
