import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Phone, Mail, CreditCard, Video, LogOut, User, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [threats, setThreats] = useState({
    spam: 23,
    phishing: 15,
    financial: 8,
    deepfake: 4,
  });

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted relative">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-card/70 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate("/dashboard")}>
            <Shield className="h-7 w-7 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              ThreatDefender
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/profile")}
              className="hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <User className="h-5 w-5 mr-2" />
              {user.name}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="hover:bg-destructive/10 hover:border-destructive transition-all duration-300 hover:scale-105"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Security Dashboard
          </h1>
          <p className="text-muted-foreground">Monitor and manage fraud detection across all domains</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in-delay">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Spam Calls Blocked</CardTitle>
              <Phone className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">{threats.spam}</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in-delay">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Phishing Attempts</CardTitle>
              <Mail className="h-4 w-4 text-accent group-hover:scale-125 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold group-hover:text-accent transition-colors">{threats.phishing}</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-destructive/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in-delay">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Financial Fraud</CardTitle>
              <CreditCard className="h-4 w-4 text-destructive group-hover:scale-125 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold group-hover:text-destructive transition-colors">{threats.financial}</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
              <Progress value={30} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in-delay-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Deepfakes Detected</CardTitle>
              <Video className="h-4 w-4 text-primary group-hover:scale-125 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold group-hover:text-primary transition-colors">{threats.deepfake}</div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
              <Progress value={15} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different fraud types */}
        <Tabs defaultValue="overview" className="space-y-6 animate-fade-in-delay-2">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calls">Spam Calls</TabsTrigger>
            <TabsTrigger value="phishing">Phishing</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="deepfake">Deepfake</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Threat Activity
                </CardTitle>
                <CardDescription>Recent threats detected across all domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Spam Call", time: "2 minutes ago", severity: "Medium", description: "Blocked suspicious number +1-555-0123" },
                    { type: "Phishing Email", time: "15 minutes ago", severity: "High", description: "Detected fake banking email from suspicious domain" },
                    { type: "UPI Transaction", time: "1 hour ago", severity: "Low", description: "Unusual transaction pattern flagged for review" },
                    { type: "Deepfake Video", time: "3 hours ago", severity: "High", description: "Manipulated video content detected in upload" },
                  ].map((threat, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <AlertCircle className={`h-5 w-5 mt-0.5 group-hover:scale-125 transition-transform ${
                        threat.severity === "High" ? "text-destructive" : 
                        threat.severity === "Medium" ? "text-accent" : 
                        "text-muted-foreground"
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{threat.type}</h4>
                          <span className="text-xs text-muted-foreground">{threat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{threat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calls">
            <Card>
              <CardHeader>
                <CardTitle>Spam Call Detection</CardTitle>
                <CardDescription>Real-time monitoring of incoming calls</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Configure your spam call detection settings and view blocked numbers.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phishing">
            <Card>
              <CardHeader>
                <CardTitle>Phishing Prevention</CardTitle>
                <CardDescription>Email and SMS analysis for suspicious content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Review flagged emails and messages for phishing attempts.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial">
            <Card>
              <CardHeader>
                <CardTitle>Financial Fraud Monitoring</CardTitle>
                <CardDescription>Track suspicious transactions and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Monitor your financial accounts for unusual activity.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deepfake">
            <Card>
              <CardHeader>
                <CardTitle>Deepfake Detection</CardTitle>
                <CardDescription>AI-powered media analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Upload and analyze media content for manipulation detection.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
