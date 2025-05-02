import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/googleai";

console.log("GEMINI_API_KEY at runtime:", process.env.GEMINI_API_KEY);

export const ai = genkit({
  promptDir: "./prompts",
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  // Use a model that supports multimodal input by default
  model: "googleai/gemini-2.0-flash",
});
