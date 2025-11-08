import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EmailVerified = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-glow animate-scale-in">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Email Confirmed! 🎉
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Your email has been successfully verified. You can now log in to access your VoiceReach dashboard and start using all features.
        </p>

        <Button
          variant="gradient"
          size="lg"
          className="w-full"
          onClick={() => window.location.href = "https://voicereach.pro/login"}
        >
          Back to Login
        </Button>
      </Card>
    </div>
  );
};

export default EmailVerified;
