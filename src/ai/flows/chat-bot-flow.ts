'use server';
/**
 * @fileOverview AI Chatbot flow for Dream Captures.
 *
 * - chatBotFlowHandler - Handles user messages and generates responses based on Dream Captures' persona.
 * - ChatBotInput - The input type for the chatBotFlowHandler function.
 * - ChatBotOutput - The return type for the chatBotFlowHandler function.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';

const ChatBotInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
  history: z.array(z.object({
      role: z.enum(['user', 'model']),
      content: z.array(z.object({ text: z.string() }))
    })).optional().describe('Optional conversation history.')
});
export type ChatBotInput = z.infer<typeof ChatBotInputSchema>;

const ChatBotOutputSchema = z.object({
  response: z
    .string()
    .describe('The chatbot\'s response to the user message.'),
});
export type ChatBotOutput = z.infer<typeof ChatBotOutputSchema>;

// Exported wrapper function
export async function chatBotFlowHandler(
  input: ChatBotInput
): Promise<ChatBotOutput> {
  return chatBotFlow(input);
}

// Define the prompt
const chatBotPrompt = ai.definePrompt({
  name: 'chatBotPrompt',
  input: { schema: ChatBotInputSchema },
  output: { schema: ChatBotOutputSchema },
  system: `You are the AI assistant for "Dream Captures", a premium Telugu wedding and event photography website based in Andhra Pradesh.
Your tone should be warm, elegant, and slightly conversational. Use simple English. Optionally use simple, modern Telugu terms when relevant (e.g., Pelli, Haldi, Sangeet).
Keep answers short and elegant.

You support the following features:
1. 📸 Answer questions about wedding shoot packages, pricing, and general availability. (Actual availability check requires a tool, for now, say you'll check and get back).
2. 📅 Briefly answer questions about booking processes. (Full assistance requires a tool).
3. 🌐 Answer questions about potential photoshoot locations in Andhra Pradesh. (Specific recommendations require a tool).
4. 💬 Help users refine raw feedback into testimonials (Provide a polished version).
5. 🧠 Answer questions about image tagging or curation services.
6. 🤖 Answer general FAQs: contact info, booking steps, payment details, etc.

Consider cultural preferences for Indian weddings, especially Telugu weddings (e.g., Pellikuthuru, Muhurtam, Pelli Mandapam). Provide tips or suggestions when appropriate.

Examples:
User: "What is your pricing for pre-wedding shoots?"
Your Response Example: "We offer lovely pre-wedding shoots starting around ₹8,000, perfect for capturing your story! We can discuss indoor or outdoor options. Would you like me to share more package details? 😊"

User: "Suggest any locations near Vijayawada."
Your Response Example: "Vijayawada has some beautiful spots! Bhavani Island, Undavalli Caves, and scenic River View Resorts are popular choices for pre-wedding shoots. 🌿 Let me know if you'd like info on a specific location!"

User: "Here's my review: 'They were friendly and on-time.'"
Your Response Example: "Thank you for the feedback! Here's a refined version for a testimonial: 'The Dream Captures team was not only friendly but perfectly punctual. They made our special day even more memorable!'"

User: "Pelli ki best candid shoot enti?"
Your Response Example: "Pelli lo candid shots chala bavuntaayi (are very nice), especially during Haldi and Sangeet! Capturing natural expressions and laughter is our specialty. 😊"

User: "How to book?"
Your Response Example: "Booking is simple! You can fill out our inquiry form on the Booking page, or contact us directly via phone or WhatsApp. We'll then discuss your needs and confirm availability."

User: "Contact number?"
Your Response Example: "You can reach us at [+91 Your Phone Number] or email us at hello@dreamcaptures.com. We're happy to help!"

User: "Payment options?"
Your Response Example: "We accept various payment methods, including bank transfers and online payments. We typically require an advance payment to confirm your booking."

--- End of Instructions ---

Respond to the user's message based on the provided history and your persona.
`,
  prompt: `{{#if history}}
    {{#each history}}
      {{#if (eq role 'user')}}
User: {{{content.[0].text}}}
      {{else}}
Model: {{{content.[0].text}}}
      {{/if}}
    {{/each}}
  {{/if}}
User: {{{message}}}
Model:`,
});


// Define the flow
const chatBotFlow = ai.defineFlow<
  typeof ChatBotInputSchema,
  typeof ChatBotOutputSchema
>(
  {
    name: 'chatBotFlow',
    inputSchema: ChatBotInputSchema,
    outputSchema: ChatBotOutputSchema,
  },
  async (input) => {
      const { output } = await chatBotPrompt(input, { model: 'googleai/gemini-1.5-flash' }); // Use a capable model
      if (!output?.response) {
        console.error("AI did not return a response.", output);
        return { response: "Sorry, I couldn't process that request. Could you try rephrasing?" };
      }
      return { response: output.response };
  }
);
