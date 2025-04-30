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
      className={cn("text-secondary", props.className)} // Apply default color and merge className
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

      {/* Optional Subtle Indian Motif: Simplified Paisley/Dot */}
       <g transform="translate(145, 18)">
          {/* Example: Simple dot with surrounding smaller dots */}
          <circle cx="5" cy="5" r="3" fill="hsl(var(--accent))" /> {/* Gold accent dot */}
         {/* <circle cx="0" cy="5" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="10" cy="5" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="5" cy="0" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="5" cy="10" r="1" fill="currentColor" opacity="0.7" /> */}
           {/* Simple line element */}
            <path d="M 0 5 H 10" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
            <path d="M 5 0 V 10" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
       </g>

      {/* Original Aperture Icon (kept for photography theme) - slightly modified */}
      {/*
      <circle cx="155" cy="20" r="4" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      <path d="M155 16 V 24 M151 20 H 159" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
      */}
    </svg>
  );
}
