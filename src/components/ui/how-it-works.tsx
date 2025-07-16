import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Brain, BarChart3, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download & Setup",
    description: "Install FinMate and grant SMS permissions for automatic transaction tracking.",
    step: "01"
  },
  {
    icon: MessageSquare,
    title: "SMS Reading",
    description: "App reads only bank transaction SMS (UPI, cards, deposits) - never personal messages.",
    step: "02"
  },
  {
    icon: Brain,
    title: "Smart Processing",
    description: "AI automatically categorizes your expenses into relevant categories like food, transport, etc.",
    step: "03"
  },
  {
    icon: BarChart3,
    title: "Insights & Analytics",
    description: "Get beautiful visualizations, spending insights, and track your financial health.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How FinMate Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, automated, and privacy-first approach to expense tracking in just 4 easy steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.step} 
              className="group relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="container px-4 mx-auto h-full">
            <div className="flex items-center justify-center h-full">
              <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};