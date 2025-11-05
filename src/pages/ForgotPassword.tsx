import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration placeholder
    console.log("Password reset requested for:", email);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen flex animate-fade-in">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-muted-foreground">
              Enter your email to receive a password reset link.
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-800">
                  Password reset email sent successfully! Please check your inbox.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Reset Link
              </Button>
            </form>
          </Card>

          <p className="text-center text-sm text-muted-foreground">
            <Link to="/login" className="text-primary hover:underline font-medium">
              Back to Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent animate-pulse-slow" />
        <div className="relative z-10 text-white text-center max-w-lg space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Regain access to your VoiceReach account.
          </h2>
          <p className="text-lg text-white/90">
            We'll send a secure reset link to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
