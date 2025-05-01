import type { Metadata } from 'next';
import { Playfair_Display, Lato, Noto_Sans_Telugu, Baloo_Tamma_2 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme/theme-provider"; // Import ThemeProvider


const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'], // Include weights needed
  display: 'swap',
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ['telugu'],
  variable: '--font-noto-sans-telugu',
  weight: ['400', '700'],
  display: 'swap',
});

// Use Baloo Tamma 2 for stylistic Telugu headings/taglines
const balooTamma2 = Baloo_Tamma_2({
  subsets: ['telugu'],
  variable: '--font-baloo-tamma-2',
  weight: ['400', '700'], // Include needed weights
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Dream Captures | Young Photographers in Andhra Pradesh',
  description: 'Team of passionate young photographers in Andhra Pradesh specializing in weddings, parties, model shoots, and outdoor photography.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add lang="en" for accessibility
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
           playfairDisplay.variable, // Serif for English Headings
           lato.variable, // Sans-serif for English Body
           notoSansTelugu.variable, // Default Telugu font
           balooTamma2.variable // Stylistic Telugu font
        )}
      >
        {/* Wrap with ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background"> {/* Use min-h-dvh and bg-background */}
            <Header />
            {/* Ensure main content area is focusable for keyboard navigation */}
            {/* Use flex-1 to push footer down */}
            <main className="flex-1 focus:outline-none" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
           <Toaster />
         </ThemeProvider>
      </body>
    </html>
  );
}
