import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import sunIcon from "@/assets/sun-icon.png";
import brainIcon from "@/assets/brain-icon.png";
import lightningIcon from "@/assets/lightning-icon.png";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "SolarMax",
      industry: "Residential Solar",
      icon: sunIcon,
      metric: "+300% Appointments in 60 Days",
      savings: "$120K/year Saved",
      quote: "VoiceReach transformed our outreach. We went from 50 to 200+ qualified appointments per month.",
      name: "Mike Rodriguez",
      title: "VP of Sales",
    },
    {
      company: "GreenEnergy Pro",
      industry: "Commercial Solar",
      icon: lightningIcon,
      metric: "+250% Appointments in 45 Days",
      savings: "$90K/year Saved",
      quote: "ROI-positive in just 30 days. The AI handles objections better than some of our reps.",
      name: "Sarah Chen",
      title: "Head of Marketing",
    },
    {
      company: "Sunshine Solar",
      industry: "Solar Installation",
      icon: brainIcon,
      metric: "+400% Appointments in 90 Days",
      savings: "$180K/year Saved",
      quote: "Cut our calling costs by 80% while quadrupling our pipeline. Game-changing technology.",
      name: "David Thompson",
      title: "CEO",
    },
  ];

  return (
    <section id="results" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold mb-4">
              Real Results. <span className="gradient-text">Real Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              See how VoiceReach is transforming solar businesses nationwide
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-br from-primary/5 via-background to-background backdrop-blur-sm border border-primary/10 p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon at top */}
                <div className="mb-4 text-center flex justify-center">
                  <img 
                    src={study.icon} 
                    alt={`${study.company} icon`}
                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Company name and category */}
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-xl mb-1">
                    {study.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{study.industry}</p>
                </div>

                {/* Key metrics in one line */}
                <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="text-center">
                    <div className="font-heading font-bold text-lg gradient-text mb-2">
                      {study.metric}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {study.savings}
                    </div>
                  </div>
                </div>

                {/* Testimonial quote */}
                <blockquote className="mb-6">
                  <p className="text-muted-foreground italic text-center mb-4">
                    "{study.quote}"
                  </p>
                  <footer className="text-center">
                    <div className="font-semibold text-foreground">{study.name}</div>
                    <div className="text-sm text-muted-foreground">{study.title}</div>
                  </footer>
                </blockquote>

                {/* CTA button */}
                <Button 
                  variant="gradient" 
                  className="w-full rounded-2xl group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                >
                  View Full Case Study
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