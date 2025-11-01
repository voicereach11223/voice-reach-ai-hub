import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { countries } from "@/lib/countries";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type FormData = z.infer<typeof formSchema>;

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
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
              {!isSuccess ? (
                <>
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
                  <Label htmlFor="country">Country</Label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <Select 
                        onValueChange={(value) => {
                          field.onChange(value);
                          const country = countries.find(c => c.code === value);
                          if (country) {
                            setSelectedCountryCode(country.dialCode);
                            setValue("phone", country.dialCode + " ");
                          }
                        }} 
                        value={field.value}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                                <span className="text-muted-foreground">{country.dialCode}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.country && (
                    <p className="text-sm text-destructive mt-1">{errors.country.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder={selectedCountryCode ? `${selectedCountryCode} Your phone number` : "Select country first"}
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
                </>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                    <CheckCircle2 className="w-12 h-12 text-accent animate-scale-in" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3 gradient-text">
                    Success! Your demo has been booked
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    We'll be in touch shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSuccess(false);
                      reset();
                      setSelectedCountryCode("");
                    }}
                    className="hover-scale"
                  >
                    Book Another Demo
                  </Button>
                </div>
              )}
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