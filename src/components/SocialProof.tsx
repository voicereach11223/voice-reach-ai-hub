const SocialProof = () => {
  const companies = [
    { name: "SolarMax", stat: "+300% Appointments in 60 Days", emoji: "🌞" },
    { name: "GreenEnergy Pro", stat: "ROI-Positive in 30 Days", emoji: "⚡" },
    { name: "Sunshine Solar", stat: "$180K Saved Annually", emoji: "☀" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-heading font-bold mb-4">
            Trusted by Leading Solar & Energy Companies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="text-5xl mb-4">{company.emoji}</div>
                <h3 className="font-heading font-bold text-xl mb-2">{company.name}</h3>
                <p className="text-accent font-semibold">{company.stat}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Featured in <span className="font-semibold text-foreground">Solar Power World</span>, 
            <span className="font-semibold text-foreground"> PV Magazine</span> & 
            <span className="font-semibold text-foreground"> CleanTech Today</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;