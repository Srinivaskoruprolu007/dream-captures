import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  // Use cn to allow className merging
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 40" // Keep width
      fill="none"
      aria-label="Dream Captures Logo"
      {...props} // Spread props first
      className={cn("text-primary", props.className)} // Use Mint Green (primary) as default logo color
    >
       {/* Main Text - Using font-family from Tailwind config */}
      <text
        x="10"
        y="28"
        fontFamily="var(--font-playfair-display), serif"
        fontSize="22" // Slightly adjusted size
        fontWeight="bold"
        fill="currentColor" // Inherits color from parent SVG's text-primary
      >
        Dream Captures
      </text>

      {/* Removed the gold accent element for a cleaner pastel look */}
      {/*
       <g transform="translate(150, 18)" fill="hsl(var(--accent))">
           <path d="M 3 7 Q 5 3 7 7 T 11 7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
           <circle cx="7" cy="7" r="1.5" />
       </g>
       */}
    </svg>
  );
}
