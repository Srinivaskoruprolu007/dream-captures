'use client';

import { useState } from 'react';
import Image from 'next/image';
import { generateImageDescriptions, GenerateImageDescriptionsOutput } from '@/ai/flows/generate-image-descriptions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Upload, Sparkles, FileText, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function ImageDescriptionGenerator() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<GenerateImageDescriptionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Basic validation: Check if it's an image
      if (!file.type.startsWith('image/')) {
        toast({
          variant: 'destructive',
          title: 'Invalid File Type',
          description: 'Please upload an image file (e.g., JPG, PNG, WEBP).',
        });
        setSelectedFile(null);
        setImageDataUri(null);
        event.target.value = ''; // Clear the input
        return;
      }

      // Limit file size (e.g., 4MB)
      const maxSizeInBytes = 4 * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
         toast({
           variant: 'destructive',
           title: 'File Too Large',
           description: `Please upload an image smaller than ${maxSizeInBytes / 1024 / 1024}MB.`,
         });
         setSelectedFile(null);
         setImageDataUri(null);
         event.target.value = ''; // Clear the input
         return;
      }

      setSelectedFile(file);
      setResult(null);
      setError(null);

      // Convert file to data URI for preview and AI processing
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDataUri(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImageDataUri(null);
    }
  };

  const handleGenerate = async () => {
    if (!imageDataUri) {
      toast({
        variant: 'destructive',
        title: 'No Image Selected',
        description: 'Please upload an image first.',
      });
      return;
    }

    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const aiResult = await generateImageDescriptions({ imageDataUri });
      setResult(aiResult);
    } catch (err) {
      console.error('AI Generation Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate descriptions: ${errorMessage}`);
      toast({
        variant: 'destructive',
        title: 'AI Generation Failed',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center bg-muted/30">
        <Sparkles className="h-10 w-10 mx-auto text-primary mb-2" />
        <CardTitle className="text-2xl font-serif text-foreground">AI Image Describer</CardTitle>
        <CardDescription className="font-telugu" lang="te">
          చిత్రానికి వివరణలు మరియు శీర్షికలను రూపొందించండి
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Image Upload Section */}
        <div className="space-y-2">
          <Label htmlFor="image-upload" className="text-base font-medium flex items-center gap-2">
            <Upload className="h-5 w-5" /> Upload Your Image
          </Label>
           <Input
            id="image-upload"
            type="file"
            accept="image/*" // Accept only image files
            onChange={handleFileChange}
            className="bg-input focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
            aria-describedby="image-upload-hint"
          />
          <p id="image-upload-hint" className="text-xs text-muted-foreground">
            Upload an image (JPG, PNG, WEBP, max 4MB) to generate alt text and a social media caption.
          </p>
        </div>

        {/* Image Preview */}
        {imageDataUri && (
          <div className="relative aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden border border-border/50 shadow-inner">
            <Image
              src={imageDataUri}
              alt={selectedFile?.name || 'Uploaded image preview'}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={!imageDataUri || isLoading}
          className={cn(
            "w-full text-base py-3 rounded-lg shadow-md",
            isLoading && "opacity-75 cursor-wait"
          )}
          aria-live="polite"
          aria-busy={isLoading}
        >
          {isLoading ? (
             <>
              <span className="animate-spin inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" role="status" aria-hidden="true"></span>
              Generating... (AI పని చేస్తోంది...)
            </>
          ) : (
            <>
              <Sparkles size={18} className="mr-2" /> Generate Descriptions (వివరణలను రూపొందించు)
            </>
          )}
        </Button>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="space-y-4">
             <div className="space-y-2">
                <Label className="flex items-center gap-2 text-muted-foreground"><FileText className="h-4 w-4"/> Alt Text</Label>
                <Skeleton className="h-10 w-full" />
             </div>
             <div className="space-y-2">
                <Label className="flex items-center gap-2 text-muted-foreground"><MessageSquare className="h-4 w-4"/> Social Caption</Label>
                <Skeleton className="h-20 w-full" />
             </div>
          </div>
        )}

        {/* Error Message */}
        {error && !isLoading && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Results Section */}
        {result && !isLoading && (
          <div className="space-y-4 border-t border-border/50 pt-6 mt-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Generated Content</h3>
             <div className="space-y-2">
               <Label htmlFor="alt-text-output" className="flex items-center gap-2 text-foreground"><FileText className="h-5 w-5 text-primary"/> Generated Alt Text</Label>
               <Textarea
                 id="alt-text-output"
                 readOnly
                 value={result.altText}
                 className="bg-muted text-sm h-auto min-h-[80px]"
                 aria-label="Generated Alt Text"
               />
             </div>
             <div className="space-y-2">
                <Label htmlFor="caption-output" className="flex items-center gap-2 text-foreground"><MessageSquare className="h-5 w-5 text-primary"/> Generated Social Caption</Label>
                <Textarea
                 id="caption-output"
                 readOnly
                 value={result.socialCaption}
                 className="bg-muted text-sm h-auto min-h-[120px]"
                 aria-label="Generated Social Media Caption"
               />
             </div>
          </div>
        )}
      </CardContent>
       <CardFooter className="text-xs text-muted-foreground p-4 bg-muted/30 border-t border-border/30 text-center">
        AI generations can sometimes be inaccurate. Please review the content before using it.
      </CardFooter>
    </Card>
  );
}
