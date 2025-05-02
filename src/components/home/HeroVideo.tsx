"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower playback for more cinematic feel
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: "brightness(0.7)" }} // Slightly darker for better text contrast
      >
        {/* Replace these source URLs with actual wedding video clips */}
        <source src="/videos/wedding-highlights.mp4" type="video/mp4" />
        <source src="/videos/wedding-highlights.webm" type="video/webm" />
      </video>
      {/* Gradient overlays for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30" />
    </div>
  );
}
