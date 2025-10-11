import { Sun, Home, Shield, Wrench, Laptop } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Sun,
      name: "Solar",
      description: "Pre-trained solar scripts included",
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Property listings & viewings",
    },
    {
      icon: Shield,
      name: "Insurance",
      description: "Policy renewals & quotes",
    },
    {
      icon: Wrench,
      name: "Home Services",
      description: "HVAC, plumbing, roofing",
    },
    {
      icon: Laptop,
      name: "SaaS & Tech",
      description: "Demo bookings & trials",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Built for Solar.{" "}
              <span className="gradient-text">Scalable to Any Industry</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI adapts to your industry's unique needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              💬 Don't see your industry listed?
            </p>
            <p className="font-semibold">
              Ask about your industry →{" "}
              <a href="#" className="text-primary hover:underline">
                Talk to our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;