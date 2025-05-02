'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Send, Bot, User, X } from 'lucide-react'; // Import X icon
import { chatBotFlowHandler, ChatBotInput, ChatBotOutput } from '@/ai/flows/chat-bot-flow';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollAreaRef.current) {
        const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollViewport) {
          scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }
      }
    }, 100); // Delay slightly to ensure DOM updates
  };

  // Add initial greeting message when chat opens
  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: 'greet-1', role: 'model', text: 'Hello! How can I help you capture your dreams today? ✨' },
      ]);
      scrollToBottom();
    }
  }, [isOpen, messages.length]);

   // Scroll to bottom when new messages are added
  React.useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const userMessage = currentMessage.trim();
    if (!userMessage || isLoading) return;

    const newUserMessage: Message = { id: Date.now().toString(), role: 'user', text: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setCurrentMessage('');
    setIsLoading(true);
    scrollToBottom(); // Scroll after adding user message

    try {
       // Prepare history for the AI
      const historyForAI = messages.map(msg => ({
        role: msg.role,
        content: [{ text: msg.text }]
      }));

      const aiInput: ChatBotInput = { message: userMessage, history: historyForAI };
      const result: ChatBotOutput = await chatBotFlowHandler(aiInput);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'model', text: result.response };
      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong.';
      toast({
        variant: 'destructive',
        title: 'AI Error',
        description: `Failed to get response: ${errorMessage}`,
      });
       // Add an error message to the chat
       const errorMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: "Sorry, I encountered an issue. Please try again later." };
       setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      scrollToBottom(); // Scroll after adding AI message or error
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="primary" // Use primary pastel color
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg w-14 h-14 z-50 hover:scale-110 transition-transform duration-200"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[90vw] max-w-md flex flex-col p-0 border-l border-border/50 bg-card shadow-2xl" // Use card background
        aria-label="Chatbot Panel"
      >
        <SheetHeader className="p-4 border-b border-border/50 flex flex-row justify-between items-center bg-muted/30">
          <div className="flex items-center gap-2">
             <Avatar className="h-8 w-8 border-2 border-primary">
                <AvatarImage src="/placeholder-bot.png" alt="Dream Captures Bot" /> {/* Placeholder image */}
                <AvatarFallback><Bot size={16} /></AvatarFallback>
            </Avatar>
            <SheetTitle className="text-lg font-semibold text-foreground">Dream Captures AI</SheetTitle>
          </div>
           {/* Removed the redundant SheetClose button here. The SheetContent component provides one by default. */}
        </SheetHeader>

        {/* Chat Area */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex items-start gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'model' && (
                  <Avatar className="h-7 w-7 border border-border/50">
                     <AvatarImage src="/placeholder-bot.png" alt="Bot" />
                     <AvatarFallback><Bot size={14} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-xl px-4 py-2.5 text-sm shadow-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none' // Mint for user
                      : 'bg-muted text-foreground rounded-bl-none' // Muted bg for bot
                  )}
                >
                  {message.text}
                </div>
                 {message.role === 'user' && (
                    <Avatar className="h-7 w-7 border border-border/50">
                     {/* Optionally add user avatar later */}
                     <AvatarFallback><User size={14} /></AvatarFallback>
                    </Avatar>
                )}
              </div>
            ))}
             {/* Loading indicator */}
            {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                     <Avatar className="h-7 w-7 border border-border/50">
                        <AvatarImage src="/placeholder-bot.png" alt="Bot" />
                        <AvatarFallback><Bot size={14} /></AvatarFallback>
                     </Avatar>
                    <Skeleton className="h-10 w-24 rounded-xl px-4 py-2.5 bg-muted" />
                </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <SheetFooter className="p-4 border-t border-border/50 bg-muted/30">
          <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
            <Input
              type="text"
              placeholder="Ask about packages, locations..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="flex-1 bg-background focus:border-primary" // Use background, focus with primary
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button
              type="submit"
              size="icon"
              variant="primary" // Use primary pastel color
              disabled={isLoading || !currentMessage.trim()}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
