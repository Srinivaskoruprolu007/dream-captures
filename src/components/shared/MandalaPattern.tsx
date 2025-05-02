"use client";

export function MandalaPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        className="text-primary/5 dark:text-primary/10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Decorative Mandala Pattern - Inspired by Telugu Art */}
        <pattern
          id="mandala-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
            fill="currentColor"
          />
          <path
            d="M10 4C6.69 4 4 6.69 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 6.69 13.31 4 10 4ZM10 14C7.79 14 6 12.21 6 10C6 7.79 7.79 6 10 6C12.21 6 14 7.79 14 10C14 12.21 12.21 14 10 14Z"
            fill="currentColor"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          {/* Additional decorative elements */}
          <path
            d="M10 0L12 4L8 4L10 0Z M10 20L8 16L12 16L10 20Z M0 10L4 8L4 12L0 10Z M20 10L16 12L16 8L20 10Z"
            fill="currentColor"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
      </svg>
    </div>
  );
}
