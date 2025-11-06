import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    // Check if user is onboarded
    const { data: profile } = await supabase
      .from("profiles")
      .select("is_onboarded")
      .eq("id", session.user.id)
      .single();

    if (!profile?.is_onboarded) {
      navigate("/onboarding");
      return;
    }

    setUser(session.user);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">VoiceReach Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h2>
            <p className="text-muted-foreground">
              Your AI-powered voice automation platform is ready to go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Total Calls</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Active Campaigns</h3>
              <p className="text-3xl font-bold text-primary">0</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-primary">0%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
