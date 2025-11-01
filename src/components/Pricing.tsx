import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "197" : "247",
      period: "month",
      description: "Perfect for testing AI voice calling",
      features: [
        "1,200 included minutes, then $0.20/extra minute",
        "Basic appointment scheduling",
        "Email follow-ups",
        "Standard support",
        "1 AI voice agent",
        "Basic analytics dashboard",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: isAnnual ? "497" : "597",
      period: "month",
      description: "For growing solar companies",
      features: [
        "2,700 included minutes, then $0.16/extra minute",
        "Advanced appointment scheduling",
        "Multi-channel follow-ups",
        "Priority support",
        "3 AI voice agents",
        "Advanced analytics & reporting",
        "CRM integrations",
        "Custom AI training",
      ],
      cta: "Book Free Demo",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established solar leaders",
      features: [
        "Unlimited AI calls",
        "White-label solution",
        "Dedicated account manager",
        "24/7 premium support",
        "Unlimited AI agents",
        "Custom integrations",
        "API access",
        "Advanced compliance features",
        "Custom contract terms",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Simple, Transparent Pricing —{" "}
              <span className="gradient-text">Pay Only for What You Need</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              No hidden fees. No setup costs. Cancel anytime.
            </p>

            {/* Pricing toggle */}
            <div className="inline-flex items-center gap-4 p-1 rounded-full bg-muted">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  !isAnnual
                    ? "bg-gradient-primary text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  isAnnual
                    ? "bg-gradient-primary text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-accent/20 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-xl scale-105"
                    : "border-border bg-card"
                } hover-lift`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === "Custom" ? (
                      <div className="font-heading font-bold text-4xl">Custom</div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-2xl font-semibold">$</span>
                          <span className="font-heading font-bold text-5xl">{plan.price}</span>
                          {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                        </div>
                        {isAnnual && (
                          <p className="text-sm text-accent mt-2">Billed annually</p>
                        )}
                      </>
                    )}
                  </div>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      if (plan.cta === "Book Free Demo" || plan.cta === "Start Free Trial") {
                        document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-semibold mb-4">
              Ready to scale your appointments?
            </p>
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => {
                document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Free Demo → Start Scaling Today
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Limited demo slots available this week. Risk-free. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;