'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// NOTE: This is a placeholder page.
// Actual authentication and private gallery functionality
// require backend integration (e.g., Firebase Auth, Firestore/Storage).

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
    // Simulate checking credentials
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you would verify credentials against Firebase Auth or your backend.
    // For this placeholder, we'll just show an error.
    toast({
      title: "Login Failed (Placeholder)",
      description: "Authentication is not yet implemented. Please contact us for access.",
      variant: "destructive",
    });
    setIsLoading(false);
    // --- End Placeholder Logic ---

    /* --- Example Real Logic (with Firebase Auth) ---
    try {
      // Assuming you have Firebase initialized and imported `auth`
      // await signInWithEmailAndPassword(auth, email, password);
      // Redirect to the client's specific gallery page, e.g., router.push(`/client-gallery/${user.uid}`);
      console.log("Login successful - redirecting..."); // Placeholder
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex items-center justify-center min-h-[calc(100vh-10rem)]"> {/* Adjust min-height as needed */}
      <Card className="w-full max-w-md border border-border shadow-lg">
        <CardHeader className="text-center">
          <Lock className="h-10 w-10 mx-auto mb-4 text-primary" />
          <CardTitle className="font-serif text-3xl">Client Gallery Access</CardTitle>
          <CardDescription className="pt-2">
            Enter your credentials to view your private photo gallery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password or Access Code</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background"
              />
              {/* Optional: Add a "Forgot Password?" link here */}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
             <p className="text-xs text-center text-muted-foreground pt-2">
              Having trouble? <a href="/contact" className="text-primary hover:underline">Contact Support</a>.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
