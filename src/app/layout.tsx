import type { Metadata } from 'next';
import { Playfair_Display, Lato, Noto_Sans_Telugu, Baloo_Tamma_2 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme/theme-provider"; // Import ThemeProvider
import { AiChatBot } from '@/components/ai/AiChatBot'; // Import the AI Chatbot component

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
  metadataBase: new URL('http://localhost:9002'), // Replace with your actual domain
  title: {
    default: 'Dream Captures | Telugu Wedding Photography, Andhra Pradesh',
    template: '%s | Dream Captures',
  },
  description: 'Dream Captures: Passionate young photographers in Andhra Pradesh specializing in Telugu weddings, parties, model shoots, and outdoor photography. Capturing moments, creating memories.',
  icons: { // Added favicon link pointing to public/logo.png
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
      title: 'Dream Captures | Telugu Wedding Photography, Andhra Pradesh',
      description: 'Capturing the vibrant moments of Telugu weddings and events across Andhra Pradesh.',
      // url: 'https://your-domain.com', // Add your deployed URL
      siteName: 'Dream Captures',
      // images: [ // Add a specific OG image if available
      //   {
      //     url: 'https://your-domain.com/og-image.jpg',
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dream Captures | Telugu Wedding Photography',
      description: 'Specializing in Telugu weddings, parties, and photoshoots in Andhra Pradesh.',
      // siteId: 'Your Twitter Site ID',
      // creator: '@YourTwitterHandle',
      // creatorId: 'Your Twitter Creator ID',
      // images: ['https://your-domain.com/twitter-image.jpg'], // Add a specific Twitter image
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
          defaultTheme="light" // Default to light theme as requested
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            {/* Ensure main content area is focusable for keyboard navigation */}
            {/* Use flex-1 to push footer down */}
            <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
           <Toaster />
           <AiChatBot /> {/* Add the AI Chatbot component here */}
         </ThemeProvider>
      </body>
    </html>
  );
}
