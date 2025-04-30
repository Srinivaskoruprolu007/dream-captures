import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Updated styles: Softer shadow, slightly rounded corners, theme-based border
      "rounded-xl border border-border/50 bg-card text-card-foreground shadow-lg transition-shadow duration-300 hover:shadow-xl", // Use rounded-xl for softer corners, more prominent shadow on hover
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Adjusted padding, potentially add border-bottom if needed for separation
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    // Changed from div to h3 for semantic meaning
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 // Use h3 for card titles
        ref={ref}
        // Use font-serif for titles, adjust size and weight
        className={cn(
            "text-xl font-serif font-semibold leading-none tracking-tight", // Adjusted size and font
            className
        )}
        {...props} />
));
CardTitle.displayName = "CardTitle"


const CardDescription = React.forwardRef<
    // Changed from div to p for semantic meaning
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p // Use p for descriptions
        ref={ref}
        // Ensure consistent text styling
        className={cn("text-sm text-muted-foreground", className)}
        {...props} />
));
CardDescription.displayName = "CardDescription"


const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  // Ensure padding consistency
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  // Ensure padding consistency, potentially add border-top for separation
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
