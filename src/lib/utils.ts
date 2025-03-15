import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const waitlistFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).optional(),
});

export type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export function generateWaitlistPosition() {
  // Generate a random number between 100 and 500
  return Math.floor(Math.random() * 400) + 100;
}