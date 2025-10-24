import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { countries } from "@/lib/countries";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  phoneNumber: z.string().min(5, "Phone number must be at least 5 digits").regex(/^[0-9\s-]+$/, "Phone number must contain only digits, spaces, or dashes"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
});

type FormData = z.infer<typeof formSchema>;

const BookDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const countryValue = watch("country");

  const getCountryCode = (countryName: string) => {
    const country = countries.find((c) => c.name === countryName);
    return country?.code || "";
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    const countryCode = getCountryCode(data.country);
    const cleanPhone = data.phoneNumber.replace(/[\s-]/g, "");
    const fullPhone = `${countryCode}${cleanPhone}`;

    const payload = {
      name: data.name,
      email: data.email,
      country: data.country,
      country_code: countryCode,
      phone_number: cleanPhone,
      full_phone: fullPhone,
      company_name: data.companyName,
      page: "/book-demo",
      source: "book-demo-page",
      utm: {
        utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      },
      timestamp: new Date().toISOString(),
    };

    let attempts = 0;
    const maxAttempts = 3;

    const attemptSubmit = async (): Promise<boolean> => {
      try {
        const response = await fetch(
          "https://hook.us2.make.com/z2a1w6c2xlu9q3dch3poesibaapjr8is",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok || response.status === 201) {
          return true;
        }
        return false;
      } catch (err) {
        console.error("Submission attempt failed:", err);
        return false;
      }
    };

    while (attempts < maxAttempts) {
      attempts++;
      const success = await attemptSubmit();
      
      if (success) {
        setShowSuccess(true);
        setIsSubmitting(false);
        return;
      }

      if (attempts < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    setError("Something went wrong — please try again in a moment.");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header spacer for fixed nav */}
      <div className="h-20"></div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Book Your Free Demo
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Watch AI handle outbound calls, qualify leads, and book solar appointments automatically.
              </p>

              {/* Micro Benefits */}
              <div className="inline-block text-left space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Reduce calling costs by up to 80 percent</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Run 24/7 outbound calling without breaks</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Professional handling on every single call</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Smith"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@company.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={countryValue}
                    onValueChange={(value) => {
                      setValue("country", value, { shouldValidate: true });
                      setSelectedCountry(value);
                    }}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {countries.map((country) => (
                        <SelectItem key={country.name} value={country.name}>
                          <div className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                            <span className="text-muted-foreground text-sm">
                              {country.code}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="text-sm text-destructive mt-1">{errors.country.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <div className="flex gap-2 mt-2">
                    <div className="w-24 flex items-center justify-center px-3 py-2 bg-muted rounded-md border border-input text-sm font-medium">
                      {selectedCountry ? getCountryCode(selectedCountry) : "+__"}
                    </div>
                    <Input
                      id="phoneNumber"
                      {...register("phoneNumber")}
                      placeholder="3012345678"
                      className="flex-1"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    {...register("companyName")}
                    placeholder="Solar Solutions Inc."
                    className="mt-2"
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Book My Demo"
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Your data is secure. No spam. No hassle.
                </p>
              </form>
            </div>

            {/* Micro Visual Section */}
            <div className="mt-16 text-center">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8">
                What You Will See in the Demo
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-4xl mb-3">📞</div>
                  <h3 className="font-semibold mb-2">Real Outbound AI Examples</h3>
                  <p className="text-sm text-muted-foreground">
                    Listen to actual AI call recordings
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="font-semibold mb-2">Appointment Workflow</h3>
                  <p className="text-sm text-muted-foreground">
                    See how AI books qualified meetings
                  </p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="font-semibold mb-2">Dashboard Preview</h3>
                  <p className="text-sm text-muted-foreground">
                    Live reporting and call analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-accent" />
              </div>
              Your demo is booked!
            </DialogTitle>
            <DialogDescription className="text-center space-y-4">
              <p className="text-base">
                Thanks for scheduling a demo with VoiceReach!
              </p>
              <p className="text-sm text-muted-foreground">
                We'll contact you within 24 hours to schedule the 15-min walkthrough.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              variant="hero"
              className="w-full"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookDemo;
