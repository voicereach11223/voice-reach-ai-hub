import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thank you! We'll contact you within 24 hours.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-demo" className="py-20 md:py-32 bg-gradient-subtle scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Limited Demo Slots Available</span>
          </div>

          <h2 className="font-heading font-bold mb-6">
            Ready to <span className="gradient-text">3X Your Appointments?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join 500+ solar leaders scaling with VoiceReach. Get your AI fully set up within 24 hours.
          </p>

          {/* Book Demo Form */}
          <div className="max-w-md mx-auto mb-10">
            <div className="glass-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="font-heading font-bold text-xl mb-6">Book Your Free Demo</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="text-left">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="Your phone number"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book My Demo"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                Your data is secure. No spam. No hassle.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            ⚡ Limited demo slots available this week. Risk-free. No credit card required.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl gradient-text mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Companies</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl gradient-text mb-1">2M+</div>
              <div className="text-sm text-muted-foreground">Calls Made</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl gradient-text mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl gradient-text mb-1">24hr</div>
              <div className="text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;