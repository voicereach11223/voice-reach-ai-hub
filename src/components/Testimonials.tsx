import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VoiceReach has completely transformed how we do outbound. The AI sounds incredibly natural, and our appointment rate has tripled. Best investment we've made this year.",
      author: "Jennifer Martinez",
      title: "Sales Director",
      company: "SunPower Solutions",
      rating: 5,
    },
    {
      quote: "I was skeptical about AI calling, but VoiceReach proved me wrong. It handles objections better than most of my team, works 24/7, and never takes a sick day. Game changer.",
      author: "Robert Chang",
      title: "CEO",
      company: "Solar Dynamics",
      rating: 5,
    },
    {
      quote: "The ROI is insane. We cut our calling costs by 75% and increased our pipeline by 300%. Plus, our sales team can now focus on closing instead of cold calling.",
      author: "Amanda Foster",
      title: "VP of Operations",
      company: "Bright Future Energy",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Loved by <span className="gradient-text">Solar Leaders Nationwide</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of solar companies scaling with VoiceReach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary"></div>
                  <div>
                    <div className="font-heading font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video testimonial placeholder */}
          <div className="rounded-2xl overflow-hidden bg-card border border-border">
            <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Watch Customer Success Stories</p>
                <p className="text-sm text-muted-foreground">3 min video testimonials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;