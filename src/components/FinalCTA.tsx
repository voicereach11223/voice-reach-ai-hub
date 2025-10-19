import { useState } from "react";
import { PopoverForm, PopoverFormButton, PopoverFormCutOutLeftIcon, PopoverFormCutOutRightIcon, PopoverFormSeparator, PopoverFormSuccess } from "@/components/ui/popover-form";
import { useToast } from "@/hooks/use-toast";

type FormState = "idle" | "loading" | "success";

const FinalCTA = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  async function submit() {
    setFormState("loading");
    
    try {
      const response = await fetch("https://hook.us2.make.com/z2a1w6c2xlu9q3dch3poesibaapjr8is", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setFormState("success");
        setTimeout(() => {
          setOpen(false);
          setFormState("idle");
          setFullName("");
          setPhone("");
          setEmail("");
        }, 3300);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
      setFormState("idle");
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <PopoverForm
              title="Book Free Demo"
              open={open}
              setOpen={setOpen}
              width="380px"
              height="420px"
              showCloseButton={formState !== "success"}
              showSuccess={formState === "success"}
              openChild={
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!fullName || !phone || !email) return;
                    submit();
                  }}
                  className="space-y-4"
                >
                  <div className="px-4 pt-4">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground"
                      required
                    />
                  </div>
                  <div className="px-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground"
                      required
                    />
                  </div>
                  <div className="px-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-background text-foreground"
                      required
                    />
                  </div>
                  <div className="relative flex h-12 items-center px-[10px]">
                    <PopoverFormSeparator />
                    <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                      <PopoverFormCutOutLeftIcon />
                    </div>
                    <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                      <PopoverFormCutOutRightIcon />
                    </div>
                    <PopoverFormButton
                      loading={formState === "loading"}
                      text="Submit"
                    />
                  </div>
                </form>
              }
              successChild={
                <PopoverFormSuccess
                  title="Demo Booked Successfully!"
                  description="Thank you! We'll contact you shortly to schedule your personalized demo."
                />
              }
            />
          </div>

          <p className="text-sm text-muted-foreground">
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