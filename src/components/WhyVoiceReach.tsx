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

          {/* Asymmetric Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 mb-12">
            {/* Row 1 - Small text box + Large image placeholder */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading font-bold text-xl mb-3">{benefits[0].title}</h3>
              <p className="text-muted-foreground">{benefits[0].description}</p>
            </div>
            <div className="md:row-span-2 rounded-2xl bg-muted/30 border border-border flex items-center justify-center min-h-[300px]">
              <div className="text-center text-muted-foreground/50">
                <DollarSign className="w-16 h-16 mx-auto mb-2" />
              </div>
            </div>

            {/* Row 2 - Large image placeholder + Text box */}
            <div className="md:row-span-2 rounded-2xl bg-muted/30 border border-border flex items-center justify-center min-h-[300px]">
              <div className="text-center text-muted-foreground/50">
                <Zap className="w-16 h-16 mx-auto mb-2" />
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading font-bold text-xl mb-3">{benefits[1].title}</h3>
              <p className="text-muted-foreground">{benefits[1].description}</p>
            </div>

            {/* Row 3 - Small text box + Large image placeholder */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading font-bold text-xl mb-3">{benefits[2].title}</h3>
              <p className="text-muted-foreground">{benefits[2].description}</p>
            </div>
            <div className="md:row-span-2 rounded-2xl bg-muted/30 border border-border flex items-center justify-center min-h-[300px]">
              <div className="text-center text-muted-foreground/50">
                <TrendingUp className="w-16 h-16 mx-auto mb-2" />
              </div>
            </div>

            {/* Row 4 - Large image placeholder + Text box */}
            <div className="md:row-span-2 rounded-2xl bg-muted/30 border border-border flex items-center justify-center min-h-[300px]">
              <div className="text-center text-muted-foreground/50">
                <Clock className="w-16 h-16 mx-auto mb-2" />
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading font-bold text-xl mb-3">{benefits[3].title}</h3>
              <p className="text-muted-foreground">{benefits[3].description}</p>
            </div>

            {/* Row 5 - Small text box + Large image placeholder */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-heading font-bold text-xl mb-3">{benefits[4].title}</h3>
              <p className="text-muted-foreground">{benefits[4].description}</p>
            </div>
            <div className="rounded-2xl bg-muted/30 border border-border flex items-center justify-center min-h-[200px]">
              <div className="text-center text-muted-foreground/50">
                <Brain className="w-16 h-16 mx-auto mb-2" />
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