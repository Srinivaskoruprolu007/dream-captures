'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, LogIn } from 'lucide-react'; // Added LogIn icon
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link'; // Import Link for contact
import { cn } from '@/lib/utils'; // Import cn for conditional classes

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
    await new Promise(resolve => setTimeout(resolve, 1000));

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
       toast({ title: "Login Failed", description: "Invalid credentials. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
     // Added subtle background pattern or texture
     <div className="bg-muted/30 min-h-[calc(100vh-10rem)] flex items-center justify-center py-16 md:py-24 px-4">
        {/* Add relative positioning for decorative elements */}
       <div className="relative w-full max-w-md">
          {/* Optional: Decorative Border Element (e.g., Banana Leaf SVG) */}
           {/* <img src="/path/to/banana-leaf-corner.svg" alt="" className="absolute -top-8 -left-8 w-24 h-auto opacity-50 hidden md:block" /> */}
           {/* <img src="/path/to/mandala-corner.svg" alt="" className="absolute -bottom-8 -right-8 w-24 h-auto opacity-30 hidden md:block" /> */}

          <Card className="w-full border border-secondary/30 shadow-xl rounded-xl overflow-hidden bg-background">
            <CardHeader className="text-center p-8 bg-gradient-to-br from-secondary/10 via-background to-background">
              <Lock className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <CardTitle className="font-serif text-3xl text-foreground">Client Gallery Access</CardTitle>
              <CardDescription className="pt-2 font-telugu text-muted-foreground">
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
                    aria-label="Email Address"
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
                     aria-label="Password or Access Code"
                  />
                  {/* Optional: Add a "Forgot Password?" link here */}
                   <div className="text-right text-xs">
                    <Link href="/forgot-password" className="text-muted-foreground hover:text-secondary transition-colors">Forgot Password?</Link>
                   </div>
                </div>
                <Button type="submit" className={cn(
                    "w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base py-3 rounded-lg shadow-md flex items-center justify-center gap-2",
                    isLoading && "opacity-75 cursor-not-allowed" // Style loading state
                    )}
                    disabled={isLoading}
                    aria-live="polite" // Announce loading state changes
                    >
                  {isLoading ? (
                    <>
                      <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-label="Loading"></span>
                      <span>Logging In...</span>
                    </>
                  ) : (
                     <>
                        <LogIn size={18}/> Login (లాగిన్)
                     </>
                  )}
                </Button>
                 <p className="text-xs text-center text-muted-foreground pt-3">
                  Having trouble? <Link href="/contact" className="text-secondary hover:underline font-medium">Contact Support</Link>. <span className="font-telugu">(సహాయం కావాలా? మమ్మల్ని సంప్రదించండి.)</span>
                </p>
              </form>
            </CardContent>
          </Card>
       </div>
    </div>
  );
}
