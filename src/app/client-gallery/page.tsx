'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, LogIn } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { cn } from '@/lib/utils';

// NOTE: Placeholder page. Requires backend integration (Firebase Auth, etc.).

export default function ClientGalleryPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Or access code
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // --- Placeholder Logic ---
    console.log('Attempting login for:', email);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    toast({
      title: "Login Attempt (Placeholder)",
      description: "Authentication is currently disabled. Please contact us for gallery access. (దయచేసి యాక్సెస్ కోసం మమ్మల్ని సంప్రదించండి.)",
      variant: "destructive",
    });
    setIsLoading(false);
    // --- End Placeholder Logic ---

    /* --- Example Real Logic (with Firebase Auth) ---
    try {
      // await signInWithEmailAndPassword(auth, email, password);
      // router.push(`/client-gallery/${user.uid}`); // Redirect to specific gallery
    } catch (error) {
       const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
       toast({ title: "Login Failed", description: `Invalid credentials or error: ${errorMessage}. Please try again.`, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
     // Ensure full height and center content properly
     <div className="bg-muted/30 min-h-[calc(100dvh-var(--header-height,10rem))] flex items-center justify-center py-16 md:py-24 px-4"> {/* Use dynamic viewport height and variable for header */}
        {/* Add relative positioning for decorative elements */}
       <div className="relative w-full max-w-md">
          {/* Optional: Decorative Border Element (e.g., Banana Leaf SVG) */}
           {/* <img src="/path/to/banana-leaf-corner.svg" alt="" className="absolute -top-8 -left-8 w-24 h-auto opacity-50 hidden md:block" aria-hidden="true" /> */}
           {/* <img src="/path/to/mandala-corner.svg" alt="" className="absolute -bottom-8 -right-8 w-24 h-auto opacity-30 hidden md:block" aria-hidden="true" /> */}

          <Card className="w-full border border-secondary/30 shadow-xl rounded-xl overflow-hidden bg-background">
            <CardHeader className="text-center p-8 bg-gradient-to-br from-secondary/10 via-background to-background">
              <Lock className="h-12 w-12 mx-auto mb-4 text-secondary" aria-hidden="true" />
              {/* Use H1 for the main page title */}
              <CardTitle as="h1" className="font-serif text-3xl text-foreground">Client Gallery Access</CardTitle>
              <CardDescription className="pt-2 font-telugu text-muted-foreground" lang="te">
                మీ ప్రైవేట్ ఫోటో గ్యాలరీని వీక్షించడానికి లాగిన్ చేయండి.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium">Email Address (ఇమెయిల్)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background focus:border-secondary"
                    aria-required="true" // Indicate required field
                    autoComplete="email" // Assistive technology hint
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-medium">Password / Access Code (పాస్‌వర్డ్)</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background focus:border-secondary"
                    aria-required="true" // Indicate required field
                    autoComplete="current-password" // Assistive technology hint
                  />
                  {/* Optional: Add a "Forgot Password?" link here */}
                   <div className="text-right text-xs pt-1"> {/* Added padding top */}
                    <Link href="/forgot-password" className="text-muted-foreground hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Forgot Password?</Link>
                   </div>
                </div>
                <Button
                    type="submit"
                    className={cn(
                        "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md flex items-center justify-center gap-2",
                        isLoading && "opacity-75 cursor-wait" // Use cursor-wait for loading
                    )}
                    disabled={isLoading}
                    aria-live="polite" // Announce loading state changes
                    aria-busy={isLoading} // Indicate busy state
                    >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
                      <span aria-hidden="true">Logging In...</span> {/* Hide text visually, keep for screen readers if needed */}
                      <span className="sr-only">Processing login request</span> {/* Screen reader only text */}
                    </>
                  ) : (
                     <>
                        <LogIn size={18} aria-hidden="true"/> Login (లాగిన్)
                     </>
                  )}
                </Button>
                 <p className="text-xs text-center text-muted-foreground pt-3">
                  Having trouble? <Link href="/contact" className="text-secondary hover:underline font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded">Contact Support</Link>. <span className="font-telugu" lang="te">(సహాయం కావాలా? మమ్మల్ని సంప్రదించండి.)</span>
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
