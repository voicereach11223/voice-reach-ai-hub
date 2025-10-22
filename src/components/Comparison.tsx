import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Comparison = () => {
  const comparisons = [
    {
      category: "Monthly Cost",
      ai: "Starts from $247/month",
      human: "$2,500 – $5,000/month (including salary & overhead)",
      aiWins: true,
    },
    {
      category: "Availability",
      ai: "24/7/365",
      human: "8 hours per day",
      aiWins: true,
    },
    {
      category: "Call volume",
      ai: "Scales infinitely",
      human: "50 – 80 calls/day max",
      aiWins: true,
    },
    {
      category: "Training time",
      ai: "Zero – ready to call instantly",
      human: "2 – 4 weeks average",
      aiWins: true,
    },
    {
      category: "Accuracy",
      ai: "100% script adherence",
      human: "Varies by rep performance",
      aiWins: true,
    },
    {
      category: "Follow-ups",
      ai: "Instant & automated",
      human: "Manual and delayed",
      aiWins: true,
    },
    {
      category: "Reporting & ROI",
      ai: "Real-time analytics dashboard",
      human: "Manual tracking",
      aiWins: true,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              VoiceReach vs Human Callers —{" "}
              <span className="gradient-text">The Numbers Don't Lie</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's why leading solar companies are switching to VoiceReach.
            </p>
          </div>

          {/* Comparison table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 border-b border-border">
              <div className="font-heading font-semibold">Metric</div>
              <div className="font-heading font-semibold text-center">
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm">
                  VoiceReach
                </span>
              </div>
              <div className="font-heading font-semibold text-center">Human Caller</div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <div className="font-medium">{item.category}</div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{item.ai}</span>
                  </div>
                </div>
                <div className="text-center text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-5 h-5 text-destructive" />
                    <span>{item.human}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-heading font-bold text-2xl mb-4">
              Calculate Your Potential Savings
            </h3>
            <p className="text-muted-foreground mb-6">
              See how much VoiceReach could save your business in the first year
            </p>
            <Button variant="gradient" size="lg">
              Calculate Your ROI →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;