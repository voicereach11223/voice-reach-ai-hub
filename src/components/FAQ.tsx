import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most clients are up and running within 24 hours. Our team handles the initial AI training and setup, so you can focus on reviewing and approving your first campaign. No technical expertise required.",
    },
    {
      question: "Is VoiceReach TCPA compliant?",
      answer: "Yes, 100%. VoiceReach is built with compliance at its core. We automatically manage DNC lists, record proper consent, and follow all TCPA regulations. Our legal team stays updated on all federal and state calling laws.",
    },
    {
      question: "What if leads don't want to talk to an AI?",
      answer: "Our AI is trained to sound natural and human-like. In blind tests, 87% of prospects couldn't tell they were speaking with AI. Plus, if a lead requests human contact, our system can instantly flag them for your team to follow up personally.",
    },
    {
      question: "Can we customize the AI voice and script?",
      answer: "Absolutely! You have full control over your AI agent's voice, tone, personality, and script. We work with you during onboarding to train your AI to match your brand voice perfectly. You can adjust scripts anytime through your dashboard.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4">
              Questions? We've Got You <span className="gradient-text">Covered</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about VoiceReach
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-2xl bg-card border border-border">
            <p className="text-lg font-semibold mb-2">Didn't find your answer?</p>
            <p className="text-muted-foreground">
              Chat with our AI rep or schedule a call with our team →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;