import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cardClasses = {
  bg: cn(
    "bg-[rgb(255_255_255)]",
    "bg-[rgb(0_0_0)]"
  ),
  text: cn(
    "text-[rgb(0_0_0)]",
    "text-[rgb(255_255_255)]"
  )
};

export const iconClasses = {
  bg: cn(
    "bg-[rgb(255_255_255)]",
    "bg-[rgb(0_0_0)]"
  ),
  text: cn(
    "text-[rgb(0_0_0)]",
    "text-[rgb(255_255_255)]"
  )
};

export const buttonClasses = {
  bg: cn(
    "bg-[rgb(255_255_255)]",
    "bg-[rgb(0_0_0)]"
  ),
  text: cn(
    "text-[rgb(0_0_0)]",
    "text-[rgb(255_255_255)]"
  )
};
