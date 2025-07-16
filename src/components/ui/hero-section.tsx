import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Shield, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Smart Expense Tracking
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
                FinMate
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your personal finance assistant. Track expenses, insights, and smart summaries — automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="group">
                Download App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>Auto SMS Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% Private</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-card p-8 rounded-3xl shadow-glow">
              <img 
                src="/lovable-uploads/99831b15-a665-4cfb-9d91-4cc7cac18d9f.png" 
                alt="FinMate App Interface"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg animate-bounce">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};