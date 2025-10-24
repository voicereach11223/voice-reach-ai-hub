import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
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
            <Link to="/book-demo">
              <Button variant="hero" size="lg">
                Book Free Demo
              </Button>
            </Link>
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