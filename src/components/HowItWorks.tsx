import { Upload, Settings, Rocket, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Upload Leads",
      description: "Import from CSV or CRM",
      detail: "Connect your existing lead sources in seconds. Support for all major CRMs and custom integrations.",
    },
    {
      number: "2",
      icon: Settings,
      title: "Train AI Voice",
      description: "Pick tone, script & personality",
      detail: "Customize how your AI sounds. Choose from friendly, professional, or energetic personas.",
    },
    {
      number: "3",
      icon: Rocket,
      title: "Launch Campaign",
      description: "AI calls, handles objections & books meetings",
      detail: "Your AI agent starts calling immediately. Handles common questions and schedules qualified prospects.",
    },
    {
      number: "4",
      icon: LineChart,
      title: "Track Results",
      description: "See conversions in dashboard",
      detail: "Real-time insights into every call. Optimize your campaigns based on data, not guesswork.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              From Lead to Appointment in{" "}
              <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple setup, powerful results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step number */}
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <p className="text-xs text-muted-foreground">{step.detail}</p>
                </div>
                
                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Video CTA */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">
              See the entire process in action
            </h3>
            <Button variant="gradient" size="lg">
              Watch 45s Process Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;