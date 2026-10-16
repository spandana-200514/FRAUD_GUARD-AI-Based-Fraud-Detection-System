import { Shield, Phone, Mail, CreditCard, Video, AlertTriangle, Lock, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      <ParticleBackground />
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/70 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <Shield className="h-8 w-8 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              ThreatDefender
            </span>
          </div>
          <Button 
            onClick={() => navigate('/auth')} 
            className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
            <Lock className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Advanced Multi-Domain Fraud Detection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
            Protect Your Digital
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Identity & Assets
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            Advanced AI-powered platform detecting and preventing fraud across spam calls, phishing, 
            financial fraud, and deepfake manipulation in real-time.
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-2">
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Threat Types */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Domain Protection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive defense against the most sophisticated fraud tactics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: "Spam Call Detection",
              description: "Real-time identification and blocking of fraudulent calls using AI pattern recognition"
            },
            {
              icon: Mail,
              title: "Phishing Prevention",
              description: "Advanced email and SMS analysis to detect and prevent phishing attempts"
            },
            {
              icon: CreditCard,
              title: "Financial Fraud",
              description: "Monitor credit card and UPI transactions for suspicious activity patterns"
            },
            {
              icon: Video,
              title: "Deepfake Detection",
              description: "AI-powered analysis to identify manipulated media and deepfake content"
            }
          ].map((threat, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-primary/50 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <threat.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{threat.title}</h3>
                <p className="text-muted-foreground">{threat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-destructive/5 border-y border-destructive/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-3xl md:text-4xl font-bold">The Challenge We Solve</h2>
            </div>
            
            <div className="space-y-4 text-lg">
              <p className="text-foreground/90">
                Fraudulent activities across multiple digital domains pose significant threats to individuals 
                and organizations. Existing systems typically focus on single fraud types, relying on static 
                rules or isolated ML models.
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                  <span>Limited scalability and insufficient adaptability to emerging threats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                  <span>Fragmented defense mechanisms unable to correlate cross-domain patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                  <span>Increased financial losses and compromised privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                  <span>Diminished user trust in digital platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Secure Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users protecting themselves from digital fraud
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-primary hover:bg-primary/90 text-lg px-12"
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">ThreatDefender</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ThreatDefender. Advanced Fraud Detection Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
