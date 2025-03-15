import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { WaitlistFormValues, generateWaitlistPosition, waitlistFormSchema } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface WaitlistFormProps {
  onSuccess: (position: number) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate a random position
      const position = generateWaitlistPosition();
      
      // Show success message
      toast.success("You've been added to the waitlist!");
      
      // Reset form
      reset();
      
      // Call onSuccess callback with position
      onSuccess(position);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Your name (optional)"
            {...register("name")}
            error={errors.name?.message}
            disabled={isSubmitting}
            className="bg-secondary/50 border-secondary"
          />
        </div>
        <div>
          <Input
            placeholder="Your email address"
            type="email"
            {...register("email")}
            error={errors.email?.message}
            disabled={isSubmitting}
            className="bg-secondary/50 border-secondary"
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full font-medium"
        isLoading={isSubmitting}
      >
        Join the Waitlist
      </Button>
      <p className="text-xs text-center text-muted-foreground pt-2">
        We'll never share your information with third parties.
      </p>
    </form>
  );
}