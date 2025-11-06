import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { countries } from "@/lib/countries";

const onboardingSchema = z.object({
  fullName: z.string()
    .trim()
    .min(1, "Full name is required")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Full name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().email(),
  companyName: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(200, "Company name must be less than 200 characters"),
  roleTitle: z.string()
    .trim()
    .min(1, "Role title is required")
    .max(100, "Role title must be less than 100 characters"),
  companySize: z.string().min(1, "Company size is required"),
  location: z.string().min(1, "Location is required"),
  useCase: z.string().min(1, "Use case is required"),
  useCaseOther: z.string().max(500, "Use case description must be less than 500 characters").optional(),
}).refine((data) => {
  if (data.useCase === "Other") {
    return data.useCaseOther && data.useCaseOther.trim().length > 0;
  }
  return true;
}, {
  message: "Please specify your use case",
  path: ["useCaseOther"],
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      roleTitle: "",
      companySize: "",
      location: "",
      useCase: "",
      useCaseOther: "",
    },
  });

  const watchedFields = watch();

  useEffect(() => {
    checkAuthAndProfile();
  }, []);

  const checkAuthAndProfile = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    // Check if already onboarded
    const { data: profile } = await supabase
      .from("profiles")
      .select("is_onboarded, email, full_name")
      .eq("id", session.user.id)
      .single();

    if (profile?.is_onboarded) {
      navigate("/dashboard");
      return;
    }

    // Pre-fill email and name
    setValue("email", profile?.email || session.user.email || "");
    setValue("fullName", profile?.full_name || "");
  };

  const handleNext = async () => {
    // Validate current step fields
    let fieldsToValidate: (keyof OnboardingFormData)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["fullName"];
    } else if (step === 2) {
      fieldsToValidate = ["companyName", "roleTitle", "companySize", "location"];
    }

    const isValid = await trigger(fieldsToValidate);
    
    if (isValid) {
      setStep(step + 1);
    }
  };

  const onSubmit = async (data: OnboardingFormData) => {
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error("No active session");
      }

      // Insert onboarding data
      const { error: onboardingError } = await supabase
        .from("onboarding_data")
        .insert({
          user_id: session.user.id,
          full_name: data.fullName,
          email: data.email,
          company_name: data.companyName,
          role_title: data.roleTitle,
          company_size: data.companySize,
          location: data.location,
          use_case: data.useCase,
          use_case_other: data.useCase === "Other" ? data.useCaseOther : null,
        });

      if (onboardingError) throw onboardingError;

      // Update profile to mark as onboarded
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ is_onboarded: true })
        .eq("id", session.user.id);

      if (profileError) throw profileError;

      setShowSuccess(true);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background animate-fade-in">
        <Card className="p-12 max-w-md text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">🎉 You're all set!</h2>
            <p className="text-muted-foreground">
              Redirecting you to your dashboard...
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background animate-fade-in">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to VoiceReach</h1>
          <p className="text-muted-foreground">
            Let's get your account set up in just a few steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  s === step
                    ? "bg-primary text-white"
                    : s < step
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 mx-2 transition-colors ${
                    s < step ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us a bit about yourself
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    disabled
                    className="bg-muted"
                  />
                </div>

                <Button type="button" onClick={handleNext} className="w-full" size="lg">
                  Next
                </Button>
              </div>
            )}

            {/* Step 2: Company Info */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Company Information</h2>
                  <p className="text-sm text-muted-foreground">
                    Help us understand your organization
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Acme Inc."
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-destructive">{errors.companyName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roleTitle">Role / Title</Label>
                  <Input
                    id="roleTitle"
                    type="text"
                    placeholder="Sales Manager"
                    {...register("roleTitle")}
                  />
                  {errors.roleTitle && (
                    <p className="text-sm text-destructive">{errors.roleTitle.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select
                    value={watchedFields.companySize}
                    onValueChange={(value) => setValue("companySize", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="10-50">10-50 employees</SelectItem>
                      <SelectItem value="50-200">50-200 employees</SelectItem>
                      <SelectItem value="200+">200+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.companySize && (
                    <p className="text-sm text-destructive">{errors.companySize.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location (Country)</Label>
                  <Select
                    value={watchedFields.location}
                    onValueChange={(value) => setValue("location", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.name}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.location && (
                    <p className="text-sm text-destructive">{errors.location.message}</p>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full"
                    size="lg"
                  >
                    Back
                  </Button>
                  <Button type="button" onClick={handleNext} className="w-full" size="lg">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Use Case */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-bold mb-2">How will you use VoiceReach?</h2>
                  <p className="text-sm text-muted-foreground">
                    Select your primary use case
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Use Case</Label>
                  <Select
                    value={watchedFields.useCase}
                    onValueChange={(value) => setValue("useCase", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary use case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Outreach & Lead Generation">
                        Outreach & Lead Generation
                      </SelectItem>
                      <SelectItem value="Sales Qualification">
                        Sales Qualification
                      </SelectItem>
                      <SelectItem value="Appointment Scheduling">
                        Appointment Scheduling
                      </SelectItem>
                      <SelectItem value="Customer Support Automation">
                        Customer Support Automation
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.useCase && (
                    <p className="text-sm text-destructive">{errors.useCase.message}</p>
                  )}
                </div>

                {watchedFields.useCase === "Other" && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="useCaseOther">Please specify</Label>
                    <Input
                      id="useCaseOther"
                      type="text"
                      placeholder="Describe your use case"
                      {...register("useCaseOther")}
                    />
                    {errors.useCaseOther && (
                      <p className="text-sm text-destructive">{errors.useCaseOther.message}</p>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="w-full"
                    size="lg"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Completing..." : "Complete Setup"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
