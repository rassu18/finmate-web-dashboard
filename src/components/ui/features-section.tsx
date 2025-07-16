import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, PieChart, Shield, Smartphone, DollarSign } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Auto SMS Tracking",
    description: "Automatically reads bank transaction SMS to track your expenses. No manual entry needed.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Brain,
    title: "Smart Categorization",
    description: "AI-powered categorization of your expenses into relevant categories like food, transport, and more.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: PieChart,
    title: "Visual Insights",
    description: "Beautiful charts and graphs to understand your spending patterns and financial health.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens locally on your device. We never upload or store your messages.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Designed specifically for mobile usage with an intuitive and clean interface.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: DollarSign,
    title: "Multi-Currency",
    description: "Support for multiple currencies including INR, USD, EUR and more.",
    gradient: "from-pink-500 to-pink-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose FinMate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of expense tracking with intelligent automation and privacy-first approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};