import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Version 1: Deep Electric Blue Gradient - Tech & Trust */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,15%)] via-[hsl(220,60%,25%)] to-[hsl(220,50%,35%)] -z-10"></div>
      
      {/* Electric blue glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[hsl(220,100%,50%)]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(200,100%,50%)]/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(210,100%,45%)]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Trust badge */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-primary/10">
              <span className="text-xl">⭐</span>
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Solar Businesses Worldwide</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-center font-heading font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            Turn More Solar Leads Into Sales — <br className="hidden md:block" />
            With <span className="gradient-text">AI Voice Calling</span> That Works 24/7.
          </h1>

          {/* Subheadline */}
          <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Let VoiceReach handle your outreach. Our AI agents call, qualify, and follow up with leads instantly — cutting your calling costs by up to 80%.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[200px] shadow-lg hover:shadow-glow"
            >
              Book Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[200px] border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              See Pricing
            </Button>
          </div>

          {/* Hero Visual - Dashboard with glow effect */}
          <div className="relative max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-primary/10">
              <img
                src={heroDashboard}
                alt="VoiceReach AI Dashboard - Modern interface showing real-time voice call analytics, lead qualification, and automated follow-ups"
                className="w-full h-auto"
              />
              {/* Blue glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating glow effect behind */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;