import { ImageDescriptionGenerator } from '@/components/ai/ImageDescriptionGenerator';

export default function ImageDescriberPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          AI Image Describer Tool
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Leverage AI to automatically generate descriptive alt text and engaging social media captions for your images.
        </p>
         <p className="font-telugu text-muted-foreground mt-2" lang="te">
            మీ చిత్రాల కోసం AI సహాయంతో వివరణలు పొందండి.
          </p>
      </header>
      <ImageDescriptionGenerator />
    </div>
  );
}
