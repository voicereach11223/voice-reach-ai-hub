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
    <section id="book-demo" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-subtle scroll-mt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Limited Demo Slots Available</span>
          </div>

          <h2 className="font-heading font-bold mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to <span className="gradient-text">3X Your Appointments?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join 500+ solar leaders scaling with VoiceReach. Get your AI fully set up within 24 hours.
          </p>

          {/* Book Demo Form */}
          <div className="max-w-md mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border shadow-lg">
              {!isSuccess ? (
                <>
                  <h3 className="font-heading font-bold text-lg sm:text-xl mb-4 sm:mb-6">Book Your Free Demo</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                <div className="text-left">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className="mt-1 text-sm sm:text-base h-10 sm:h-11"
                  />
                  {errors.name && (
                    <p className="text-xs sm:text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className="mt-1 text-sm sm:text-base h-10 sm:h-11"
                  />
                  {errors.email && (
                    <p className="text-xs sm:text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="country" className="text-sm sm:text-base">Country</Label>
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
                        <SelectTrigger id="country" className="mt-1 text-sm sm:text-base h-10 sm:h-11">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.code} className="text-sm sm:text-base">
                              <span className="flex items-center gap-2">
                                <span className="text-base sm:text-lg">{country.flag}</span>
                                <span className="truncate max-w-[120px] sm:max-w-[200px]">{country.name}</span>
                                <span className="text-muted-foreground text-xs sm:text-sm">{country.dialCode}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.country && (
                    <p className="text-xs sm:text-sm text-destructive mt-1">{errors.country.message}</p>
                  )}
                </div>

                <div className="text-left">
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder={selectedCountryCode ? `${selectedCountryCode} Your phone number` : "Select country first"}
                    className="mt-1 text-sm sm:text-base h-10 sm:h-11"
                  />
                  {errors.phone && (
                    <p className="text-xs sm:text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-sm sm:text-base h-11 sm:h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book My Demo"}
                </Button>
              </form>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                Your data is secure. No spam. No hassle.
              </p>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 mb-4 sm:mb-6">
                    <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent animate-scale-in" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2 sm:mb-3 gradient-text px-4">
                    Success! Your demo has been booked
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg px-4">
                    We'll be in touch shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSuccess(false);
                      reset();
                      setSelectedCountryCode("");
                    }}
                    className="hover-scale text-sm sm:text-base h-10 sm:h-11"
                  >
                    Book Another Demo
                  </Button>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 px-4">
            ⚡ Limited demo slots available this week. Risk-free. No credit card required.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border px-4">
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text mb-1">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Companies</div>
            </div>
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text mb-1">2M+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Calls Made</div>
            </div>
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text mb-1">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text mb-1">24hr</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;