import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/voicereach-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-clip ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="VoiceReach Logo" className="w-10 h-10" />
            <span className="font-heading font-bold text-xl">VoiceReach</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#results" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Results
                </a>
                <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#case-studies" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
                <a href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Resources
                </a>
                <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </>
            ) : (
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            )}
            <Link to="/about" state={{ fromNavigation: true }} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                See Dashboard
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;