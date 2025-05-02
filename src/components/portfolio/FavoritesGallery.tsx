"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Share2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FavoriteImage {
  id: number;
  src: string;
  alt: string;
  altTelugu?: string;
  category: string;
  location: string;
  dataAiHint: string;
}

export function FavoritesGallery() {
  // Use local storage to persist favorites
  const [favorites, setFavorites] = React.useState<FavoriteImage[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dreamCaptures.favorites");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Update local storage when favorites change
  React.useEffect(() => {
    localStorage.setItem("dreamCaptures.favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (image: FavoriteImage) => {
    setFavorites((current) => {
      const exists = current.find((fav) => fav.id === image.id);
      if (exists) {
        return current.filter((fav) => fav.id !== image.id);
      }
      return [...current, image];
    });
  };

  const handleShare = (image: FavoriteImage) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Dream Captures: ${image.alt}`,
          text: `Check out this photo from Dream Captures!`,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() =>
          alert("Link copied to clipboard! Share functionality not available.")
        )
        .catch(() =>
          alert("Share functionality not available on this browser.")
        );
    }
  };

  return (
    <section className="w-full py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
          Your Favorites
        </h2>
        <p className="font-telugu text-muted-foreground" lang="te">
          మీ ఇష్టమైన ఫోటోలు
        </p>
      </div>

      {favorites.length === 0 ? (
        <Card className="text-center p-8 border border-border/50">
          <CardContent>
            <Heart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-lg text-muted-foreground mb-2">
              No favorites yet
            </p>
            <p className="font-telugu text-muted-foreground" lang="te">
              ఇంకా ఎటువంటి ఇష్టమైన ఫోటోలు లేవు
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={image.dataAiHint}
                />
                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
                      onClick={() => handleShare(image)}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
                      onClick={() => toggleFavorite(image)}
                    >
                      <Heart
                        className={cn(
                          "h-4 w-4",
                          favorites.some((fav) => fav.id === image.id) &&
                            "fill-current text-red-500"
                        )}
                      />
                    </Button>
                  </div>
                  <div className="text-white">
                    <h3 className="font-medium mb-1">{image.alt}</h3>
                    {image.altTelugu && (
                      <p className="text-sm font-telugu mb-2" lang="te">
                        {image.altTelugu}
                      </p>
                    )}
                    <div className="flex items-center text-sm opacity-80">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
