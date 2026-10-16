import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Mail, Lock, User, ArrowLeft, Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import ParticleBackground from "@/components/ParticleBackground";

// Dummy credentials for testing
const DEMO_CREDENTIALS = {
  email: "demo@threatdefender.com",
  password: "demo123",
  name: "Demo User",
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const { toast } = useToast();

  const fillDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    if (!isLogin) {
      setName(DEMO_CREDENTIALS.name);
    }
    toast({
      title: "Demo credentials filled",
      description: "You can now click Sign In to login",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isLogin) {
        await login(email, password);
        toast({
          title: "Welcome back!",
          description: "Successfully logged in",
        });
      } else {
        await signup(email, password, name);
        toast({
          title: "Account created!",
          description: "Welcome to ThreatDefender",
        });
      }
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Authentication failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4 relative overflow-hidden">
      <ParticleBackground />
      <div className="w-full max-w-md relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-2xl animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <Sparkles className="h-5 w-5 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground text-center mt-2">
              {isLogin
                ? "Sign in to access your fraud detection dashboard"
                : "Join ThreatDefender to protect your digital identity"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <Lock className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            {/* Demo Credentials Section */}
            <div className="border-t border-border pt-4">
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">Demo Credentials (for testing)</p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={fillDemoCredentials}
                    className="text-xs"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Fill Demo
                  </Button>
                </div>
                <div className="text-xs space-y-1 text-muted-foreground">
                  <p><strong>Email:</strong> {DEMO_CREDENTIALS.email}</p>
                  <p><strong>Password:</strong> {DEMO_CREDENTIALS.password}</p>
                  {!isLogin && <p><strong>Name:</strong> {DEMO_CREDENTIALS.name}</p>}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
