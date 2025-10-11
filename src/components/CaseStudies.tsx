import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "SolarMax",
      industry: "Residential Solar",
      emoji: "🌞",
      results: {
        appointments: "+300%",
        timeframe: "60 Days",
        savings: "$120K/year",
      },
      quote: "VoiceReach transformed our outreach. We went from 50 to 200+ qualified appointments per month.",
      name: "Mike Rodriguez",
      title: "VP of Sales",
    },
    {
      company: "GreenEnergy Pro",
      industry: "Commercial Solar",
      emoji: "⚡",
      results: {
        appointments: "+250%",
        timeframe: "45 Days",
        savings: "$90K/year",
      },
      quote: "ROI-positive in just 30 days. The AI handles objections better than some of our reps.",
      name: "Sarah Chen",
      title: "Head of Marketing",
    },
    {
      company: "Sunshine Solar",
      industry: "Solar Installation",
      emoji: "☀",
      results: {
        appointments: "+400%",
        timeframe: "90 Days",
        savings: "$180K/year",
      },
      quote: "Cut our calling costs by 80% while quadrupling our pipeline. Game-changing technology.",
      name: "David Thompson",
      title: "CEO",
    },
  ];

  return (
    <section id="results" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Real Companies. <span className="gradient-text">Real Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how VoiceReach is transforming solar businesses nationwide
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card border border-border p-8 hover-lift"
              >
                {/* Company header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{study.emoji}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-gradient-primary/5">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div className="font-heading font-bold text-2xl gradient-text">
                      {study.results.appointments}
                    </div>
                    <div className="text-xs text-muted-foreground">Appointments</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div className="font-heading font-bold text-2xl gradient-text">
                      {study.results.timeframe}
                    </div>
                    <div className="text-xs text-muted-foreground">Timeframe</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <div className="font-heading font-bold text-2xl gradient-text">
                      {study.results.savings}
                    </div>
                    <div className="text-xs text-muted-foreground">Saved</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-muted-foreground italic mb-4">"{study.quote}"</p>
                  <footer>
                    <div className="font-semibold">{study.name}</div>
                    <div className="text-sm text-muted-foreground">{study.title}</div>
                  </footer>
                </blockquote>

                <Button variant="outline" className="w-full">
                  Download Full Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;