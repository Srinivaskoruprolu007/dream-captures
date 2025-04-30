import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: SVGProps<SVGSVGElement>) {
  // Use cn to allow className merging
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 40" // Increased width slightly for potential motif
      fill="none"
      aria-label="Dream Captures Logo"
      {...props} // Spread props first
      className={cn("text-secondary", props.className)} // Use Maroon (secondary) as default logo color
    >
       {/* Main Text - Using font-family from Tailwind config */}
      <text
        x="10"
        y="28"
        fontFamily="var(--font-playfair-display), serif"
        fontSize="22" // Slightly adjusted size
        fontWeight="bold"
        fill="currentColor" // Inherits color from parent SVG's text-secondary
      >
        Dream Captures
      </text>

      {/* Optional Subtle Indian Motif: Simplified Gold Dot/Element */}
       <g transform="translate(150, 18)" fill="hsl(var(--accent))"> {/* Use Gold accent */}
          {/* Example: Simple stylized dot/element */}
          {/* <circle cx="5" cy="5" r="3" /> */}
           {/* Simple curve or leaf-like shape */}
           <path d="M 3 7 Q 5 3 7 7 T 11 7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
           <circle cx="7" cy="7" r="1.5" />

       </g>

      {/* Original Aperture Icon (kept for photography theme) - slightly modified */}
      {/*
      <circle cx="155" cy="20" r="4" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      <path d="M155 16 V 24 M151 20 H 159" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      */}
    </svg>
  );
}
