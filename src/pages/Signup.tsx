import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Info, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms and Conditions",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (error) throw error;

      setShowSuccess(true);
      toast({
        title: "Success!",
        description: "Account created! Redirecting to onboarding...",
      });

      // Redirect to onboarding after 1.5 seconds
      setTimeout(() => {
        navigate("/onboarding");
      }, 1500);
    } catch (error: any) {
      toast({
        title: "Signup Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex animate-fade-in">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Create an Account</h1>
            <p className="text-muted-foreground">
              Join VoiceReach to power your outreach with AI voice automation.
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-800">
                  ✅ Verification email sent! Please check your inbox.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                >
                  I agree to the Terms and Conditions
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Info className="h-3.5 w-3.5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  Google
                </Button>
                <Button variant="outline" type="button">
                  Apple
                </Button>
              </div>
            </div>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent animate-pulse-slow" />
        <div className="relative z-10 text-white text-center max-w-lg space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Scale outreach with AI voice agents.
          </h2>
          <p className="text-lg text-white/90">
            Automate calls, qualify leads, and grow smarter.
          </p>
          
          {/* Dashboard Preview Placeholder */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20">
            <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
              <p className="text-white/60 text-sm">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
