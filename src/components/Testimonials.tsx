import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const Testimonials = () => {
  const testimonials = [
    {
      text: "VoiceReach has completely transformed how we do outbound. The AI sounds incredibly natural, and our appointment rate has tripled. Best investment we've made this year.",
      name: "Jennifer Martinez",
      role: "Sales Director",
      company: "SunPower Solutions",
    },
    {
      text: "I was skeptical about AI calling, but VoiceReach proved me wrong. It handles objections better than most of my team, works 24/7, and never takes a sick day. Game changer.",
      name: "Robert Chang",
      role: "CEO",
      company: "Solar Dynamics",
    },
    {
      text: "The ROI is insane. We cut our calling costs by 75% and increased our pipeline by 300%. Plus, our sales team can now focus on closing instead of cold calling.",
      name: "Amanda Foster",
      role: "VP of Operations",
      company: "Bright Future Energy",
    },
    {
      text: "VoiceReach gave us instant scalability. From 50 to 500 calls a day in just one week — with zero hiring. That's the future of outbound.",
      name: "Liam Torres",
      role: "Operations Lead",
      company: "EcoVolt Solar",
    },
    {
      text: "Our clients constantly mention how professional our AI callers sound. The consistency and tone are unmatched — it feels human, but smarter.",
      name: "Sophia Patel",
      role: "Marketing Manager",
      company: "SolarOne",
    },
    {
      text: "I didn't expect results this fast. Within 10 days, we booked 40% more appointments while cutting our call budget in half.",
      name: "Ethan Brooks",
      role: "Founder",
      company: "BrightSky Renewables",
    },
    {
      text: "VoiceReach is like having a full-time SDR team that never sleeps. It's efficient, scalable, and genuinely impressive tech.",
      name: "Olivia Chen",
      role: "Head of Growth",
      company: "HelioWave Energy",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 5);
  const thirdColumn = testimonials.slice(5, 7);

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle relative">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16"
        >
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Loved by <span className="gradient-text">Solar Leaders Nationwide</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of solar companies scaling with VoiceReach
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;