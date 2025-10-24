import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Premium Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,100%,98%)] via-[hsl(215,100%,96%)] to-[hsl(220,90%,92%)] -z-10"></div>
      
      {/* Top-left light source effect */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[hsl(210,100%,95%)]/60 via-[hsl(215,100%,96%)]/30 to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Deep blue bottom-right fade */}
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-[hsl(220,80%,88%)]/50 via-[hsl(215,85%,92%)]/30 to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle accent glow orbs for depth */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[hsl(210,100%,90%)]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[hsl(215,95%,93%)]/15 rounded-full blur-3xl -z-10"></div>
      
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
            <Link to="/book-demo">
              <Button 
                variant="hero" 
                size="lg"
                className="min-w-[200px] shadow-lg hover:shadow-glow"
              >
                Book Free Demo
              </Button>
            </Link>
            <a href="#pricing">
              <Button 
                variant="outline" 
                size="lg"
                className="min-w-[200px] border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                See Pricing
              </Button>
            </a>
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