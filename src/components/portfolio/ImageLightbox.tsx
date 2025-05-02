'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin, Share2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  altTelugu?: string;
  category: string;
  location: string;
  dataAiHint: string;
}

interface ImageLightboxProps {
  image: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ image, isOpen, onClose }: ImageLightboxProps) {
  if (!image) return null;

  const handleShare = (src: string, alt: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Dream Captures: ${alt}`,
          text: `Check out this photo captured by Dream Captures!`,
          url: window.location.href, // You might want to share the specific image URL if possible
        })
        .catch((error) => console.error('Error sharing:', error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() =>
          alert('Link copied to clipboard! Share functionality not available.')
        )
        .catch(() =>
          alert('Share functionality not available on this browser.')
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          'max-w-3xl w-11/12 p-0 border-border/50 shadow-2xl rounded-xl overflow-hidden',
          'bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60' // Frosted glass effect
        )}
        aria-labelledby={`lightbox-title-${image.id}`}
        aria-describedby={`lightbox-desc-${image.id}`}
      >
        <div className="relative aspect-video w-full bg-muted/30">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            quality={95}
            priority
          />
        </div>
        {/* Use muted background for description area */}
        <div className="p-4 sm:p-6 text-center bg-muted/50 rounded-b-lg">
          <DialogTitle
            id={`lightbox-title-${image.id}`}
            className="font-semibold font-serif text-xl sm:text-2xl mb-2 text-foreground"
          >
            {image.alt}
          </DialogTitle>
          <DialogDescription id={`lightbox-desc-${image.id}`} className="space-y-2">
            {image.altTelugu && (
              <p
                className="font-telugu text-base sm:text-lg text-muted-foreground"
                lang="te"
              >
                {image.altTelugu}
              </p>
            )}
            {image.location && (
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                {/* Use Primary (Mint) icon */}
                <MapPin
                  size={16}
                  className="mr-2 text-primary"
                  aria-hidden="true"
                />
                <span>{image.location}</span>
              </div>
            )}
          </DialogDescription>
          {/* Action Buttons - Use pastel variants */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
            <Button
              variant="outline" // Outline button
              size="sm"
              onClick={() => handleShare(image.src, image.alt)}
              className="text-primary border-primary hover:bg-primary/10 px-4" // Mint outline
              aria-label={`Share photo: ${image.alt}`}
            >
              <Share2 size={16} className="mr-2" aria-hidden="true" /> Share
            </Button>
            {/* Removed explicit close button; DialogContent provides one */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
