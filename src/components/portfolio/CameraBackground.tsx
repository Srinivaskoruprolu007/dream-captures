"use client";

export function CameraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-5">
      {/* Camera Lens Pattern */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <defs>
          {/* Lens Circle Pattern */}
          <pattern
            id="lensPattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="60"
              cy="60"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="60"
              cy="60"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="60"
              cy="60"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>

          {/* Shutter Pattern */}
          <pattern
            id="shutterPattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40,0 L80,40 L40,80 L0,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M40,10 L70,40 L40,70 L10,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Camera Icon Pattern */}
          <pattern
            id="cameraPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60,40 h80 a10,10 0 0 1 10,10 v60 a10,10 0 0 1 -10,10 h-100 a10,10 0 0 1 -10,-10 v-60 a10,10 0 0 1 10,-10 h20 l10,-10 h20 l10,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="80"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="80"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>

        {/* Background Layers */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#lensPattern)" />
        <rect
          x="40"
          y="40"
          width="100%"
          height="100%"
          fill="url(#shutterPattern)"
          opacity="0.7"
        />
        <rect
          x="-100"
          y="-100"
          width="200%"
          height="200%"
          fill="url(#cameraPattern)"
          opacity="0.8"
        />

        {/* Decorative Elements */}
        <g className="text-accent" opacity="0.6">
          <circle cx="10%" cy="20%" r="5" fill="currentColor" />
          <circle cx="90%" cy="80%" r="5" fill="currentColor" />
          <circle cx="85%" cy="15%" r="5" fill="currentColor" />
          <circle cx="15%" cy="85%" r="5" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
