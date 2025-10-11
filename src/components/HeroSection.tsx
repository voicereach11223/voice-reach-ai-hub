import { Button } from "@/components/ui/button";
import { Play, Check } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Trust badge */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-sm">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-medium">Trusted by 500+ Solar Leaders</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-center font-heading font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Scale Your Solar Business with{" "}
            <span className="gradient-text">AI Voice Calling</span> — 24/7, 80% Cheaper.
          </h1>

          {/* Subheadline */}
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            VoiceReach handles thousands of calls, books appointments instantly, and follows up automatically — 
            helping top solar companies grow faster while cutting costs by up to $180K/year.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg">
              Book Free Demo
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Watch 45s Demo
            </Button>
          </div>

          {/* Safety note */}
          <p className="text-center text-sm text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Safe. Fast. No credit card required.
          </p>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroDashboard}
                alt="AI Voice Calling Dashboard showing real-time call analytics and appointment booking"
                className="w-full h-auto"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-primary"></div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">TCPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Risk-Free Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;