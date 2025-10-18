const Features = () => {
  const features = [
    {
      title: "Cut Costs",
      description: "Save up to 80% compared to hiring human callers for your solar outreach.",
    },
    {
      title: "Scale Fast",
      description: "Handle from 50 to 500+ solar lead calls daily — instantly and efficiently.",
    },
    {
      title: "Boost Appointments",
      description: "Increase booked solar consultations by up to 300% within 60 days.",
    },
    {
      title: "Always Active",
      description: "Your AI voice agent never sleeps — following up with every solar lead 24/7.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 2x2 Grid Layout - Following Reference Image */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-lg transition-all duration-300"
              >
                {/* Space for illustration - top portion */}
                <div className="mb-8 h-32 md:h-40 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="text-muted-foreground/20 text-sm">Illustration space</div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;