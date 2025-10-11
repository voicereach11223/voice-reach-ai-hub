import { Clock, Calendar, Mail, BarChart3, Shield, Sun } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 AI Voice Outreach",
      description: "Never miss a lead. AI agents work around the clock, making calls while your team sleeps.",
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Instantly sync with calendars. AI handles scheduling, confirmations, and reminders automatically.",
    },
    {
      icon: Mail,
      title: "Automated Email Follow-Ups",
      description: "Multi-channel nurturing. Send personalized follow-up emails based on call outcomes.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Track every metric that matters. See conversions, call duration, and ROI in real-time.",
    },
    {
      icon: Shield,
      title: "Compliance-Ready",
      description: "TCPA compliant out of the box. Built-in DNC list management and call recording consent.",
    },
    {
      icon: Sun,
      title: "Pre-Trained Solar Scripts",
      description: "Industry-optimized conversations. AI understands solar terminology, incentives, and objections.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Everything You Need to Run{" "}
              <span className="gradient-text">High-Performing Outbound Campaigns</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All-in-one platform designed specifically for solar companies who want to scale fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Demo video placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden bg-card border border-border">
            <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Watch Platform Demo</p>
                <p className="text-sm text-muted-foreground">2 min overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;