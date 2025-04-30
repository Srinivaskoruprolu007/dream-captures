import type { Metadata } from 'next';
import { Playfair_Display, Lato, Noto_Sans_Telugu, Baloo_Tamma_2 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"


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

const balooTamma2 = Baloo_Tamma_2({
  subsets: ['telugu'],
  variable: '--font-baloo-tamma-2',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dream Captures | Telugu Wedding Photography',
  description: 'Capturing the vibrant stories of Telugu weddings with elegance and artistry. Based in Andhra Pradesh.',
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
          playfairDisplay.variable,
          lato.variable,
          notoSansTelugu.variable,
          balooTamma2.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
         <Toaster />
      </body>
    </html>
  );
}
