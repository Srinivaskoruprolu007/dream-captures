import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 40"
      fill="none"
      aria-label="Dream Captures Logo"
      {...props}
    >
      <text
        x="10"
        y="28"
        fontFamily="var(--font-playfair-display), serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor" // Use current text color from parent
      >
        Dream Captures
      </text>
      {/* Optional: Add a subtle camera aperture icon */}
      <circle cx="135" cy="20" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M135 16 V 24 M131 20 H 139" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
