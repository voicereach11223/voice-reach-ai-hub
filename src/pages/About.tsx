import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Eye, Lightbulb, Zap, Users, TrendingUp, Award, Calendar, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  const technologies = [
    {
      icon: Zap,
      title: "AI-Powered Calls",
      description: "Natural, human-like conversations that convert"
    },
    {
      icon: TrendingUp,
      title: "CRM Integration",
      description: "Seamlessly syncs with your existing tools"
    },
    {
      icon: Users,
      title: "Natural Interactions",
      description: "Adaptive AI that responds intelligently"
    },
    {
      icon: Rocket,
      title: "24/7 Performance",
      description: "Never miss an opportunity, day or night"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "VoiceReach Founded",
      description: "Born from the need to scale human connection"
    },
    {
      year: "2024",
      title: "10,000+ Calls",
      description: "Reached major milestone in AI conversations"
    },
    {
      year: "2024",
      title: "Enterprise Partnerships",
      description: "Trusted by industry-leading companies"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Serving businesses worldwide"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "VP of Sales",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">About VoiceReach</span>
          </div>
          
          <GradientHeading size="xl" className="mb-6 animate-fade-in">
            Giving voice to the future of sales
          </GradientHeading>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            We're on a mission to transform how businesses connect with their customers through intelligent AI voice technology
          </p>
          
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => navigate('/#book-demo')}
            className="animate-fade-in"
          >
            Explore Our Story
          </Button>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Mission</span>
              </div>
              <GradientHeading size="lg" className="mb-6">
                Scale your outreach without losing the human touch
              </GradientHeading>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VoiceReach empowers businesses to scale their voice outreach through cutting-edge AI automation. We eliminate the bottleneck of manual calling while maintaining natural, meaningful conversations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform handles thousands of calls simultaneously, allowing your team to focus on high-value interactions while AI manages the rest.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10 hover-lift">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">10x Productivity</h4>
                    <p className="text-sm text-muted-foreground">Automate repetitive outreach at scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Human-Like Quality</h4>
                    <p className="text-sm text-muted-foreground">Natural conversations that build trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Better Results</h4>
                    <p className="text-sm text-muted-foreground">Higher conversion rates, lower costs</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Eye className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Vision</span>
          </div>
          <GradientHeading size="lg" className="mb-6">
            Balancing human connection with AI scale
          </GradientHeading>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We envision a future where technology amplifies human capability rather than replacing it. Where businesses can reach thousands while maintaining the warmth and authenticity of personal connection.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            VoiceReach is building the bridge between AI efficiency and human empathy, creating conversations that feel genuine because they're powered by intelligence that truly understands.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <GradientHeading size="lg" className="mb-8">
            From frustration to innovation
          </GradientHeading>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              VoiceReach was born from a simple observation: sales teams were spending hours on repetitive calls, leaving no time for the conversations that truly mattered. Manual dialing, voicemails, and disconnected numbers consumed valuable time that could be spent closing deals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our founders saw an opportunity to leverage AI technology not to replace salespeople, but to empower them. What if intelligent voice agents could handle the first touchpoints, qualify leads, and schedule meetings—all while sounding natural and professional?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, VoiceReach helps businesses across industries transform their outreach strategy. We've built a platform that doesn't just make calls—it creates conversations, builds relationships, and drives real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Rocket className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Technology</span>
            </div>
            <GradientHeading size="lg" className="mb-4">
              Powered by cutting-edge AI
            </GradientHeading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced technology that makes every conversation feel natural and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-lift bg-background/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <GradientHeading size="lg" className="mb-4">
              Meet the minds behind VoiceReach
            </GradientHeading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate team dedicated to revolutionizing voice communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-lift"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Journey</span>
            </div>
            <GradientHeading size="lg" className="mb-4">
              Milestones & Impact
            </GradientHeading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key moments that shaped our path to innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-5 rounded-bl-full"></div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                </div>
                <h3 className="font-semibold mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/10">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <GradientHeading size="lg" className="mb-6">
              Join us in shaping the future
            </GradientHeading>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the AI voice revolution. Let's transform how your business connects with customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => navigate('/#book-demo')}
              >
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/')}
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
