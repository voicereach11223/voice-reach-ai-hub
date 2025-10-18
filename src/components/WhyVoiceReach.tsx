import { DollarSign, Zap, TrendingUp, Clock, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyVoiceReach = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cut Costs",
      description: "Save up to 80% vs hiring human callers.",
    },
    {
      icon: Zap,
      title: "Scale Fast",
      description: "From 50 → 500+ daily calls instantly.",
    },
    {
      icon: TrendingUp,
      title: "Boost Appointments",
      description: "Up to 300% more bookings in 60 days.",
    },
    {
      icon: Clock,
      title: "Always Active",
      description: "AI never sleeps, never misses a follow-up.",
    },
    {
      icon: Brain,
      title: "Solar-Optimized AI",
      description: "Pre-trained to talk like a real solar rep.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-heading font-bold mb-6">
            Why the Smartest Solar Companies Choose{" "}
            <span className="gradient-text">VoiceReach</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-12">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Animated chart placeholder */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <h3 className="font-heading font-bold text-2xl mb-4">Before vs After Growth</h3>
            <p className="text-muted-foreground mb-6">
              See how VoiceReach transforms appointment volumes
            </p>
            <div className="h-48 flex items-end justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-24 bg-muted rounded-t-lg mb-2" style={{ height: "60px" }}></div>
                <span className="text-sm font-medium">Before</span>
                <span className="text-2xl font-bold text-muted-foreground">50</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 bg-gradient-primary rounded-t-lg mb-2" style={{ height: "180px" }}></div>
                <span className="text-sm font-medium">After</span>
                <span className="text-2xl font-bold gradient-text">200+</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="gradient" size="lg">
              See How It Works →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVoiceReach;