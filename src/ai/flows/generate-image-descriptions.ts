'use server';
/**
 * @fileOverview Generates descriptive alt text and a social media caption for an image.
 *
 * - generateImageDescriptions - A function that takes an image data URI and returns alt text and a caption.
 * - GenerateImageDescriptionsInput - The input type for the generateImageDescriptions function.
 * - GenerateImageDescriptionsOutput - The return type for the generateImageDescriptions function.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';

const GenerateImageDescriptionsInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "An image, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateImageDescriptionsInput = z.infer<
  typeof GenerateImageDescriptionsInputSchema
>;

const GenerateImageDescriptionsOutputSchema = z.object({
  altText: z
    .string()
    .describe(
      'Concise, descriptive alt text for the image, suitable for SEO and accessibility. Focus on key elements, setting, and actions.'
    ),
  socialCaption: z
    .string()
    .describe(
      'An engaging social media caption for the image, highlighting the mood, story, or details. Include relevant hashtags related to Indian/Telugu weddings or photography.'
    ),
});
export type GenerateImageDescriptionsOutput = z.infer<
  typeof GenerateImageDescriptionsOutputSchema
>;

export async function generateImageDescriptions(
  input: GenerateImageDescriptionsInput
): Promise<GenerateImageDescriptionsOutput> {
  return generateImageDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateImageDescriptionsPrompt',
  input: {
    schema: GenerateImageDescriptionsInputSchema,
  },
  output: {
    schema: GenerateImageDescriptionsOutputSchema,
  },
  prompt: `Analyze the provided image carefully.

You are an expert content creator for a wedding photography brand called Dream Captures, specializing in Indian and particularly Telugu weddings based in Andhra Pradesh.

Based on the image:
1.  Generate concise and descriptive alt text. Focus on the main subjects, setting, key actions, and overall mood. Aim for SEO-friendliness and accessibility.
2.  Generate an engaging social media caption. Describe the moment, evoke emotion, highlight details relevant to Indian/Telugu culture if applicable, and include 3-5 relevant hashtags (e.g., #DreamCaptures, #TeluguWedding, #IndianBride, #AndhraWedding, #WeddingPhotography, #CandidMoments).

Image: {{media url=imageDataUri}}`,
});

const generateImageDescriptionsFlow = ai.defineFlow<
  typeof GenerateImageDescriptionsInputSchema,
  typeof GenerateImageDescriptionsOutputSchema
>(
  {
    name: 'generateImageDescriptionsFlow',
    inputSchema: GenerateImageDescriptionsInputSchema,
    outputSchema: GenerateImageDescriptionsOutputSchema,
  },
  async (input) => {
    // Use a model capable of multimodal input (like Gemini 1.5 Flash or Pro)
    // Override the default model if necessary, or ensure the default model supports vision.
    // Example using gemini-1.5-flash explicitly:
    const { output } = await prompt(input, { model: 'googleai/gemini-1.5-flash' });

    // If using the default model from ai-instance.ts and it supports vision:
    // const { output } = await prompt(input);

    if (!output) {
      throw new Error('Failed to generate image descriptions.');
    }
    return output;
  }
);