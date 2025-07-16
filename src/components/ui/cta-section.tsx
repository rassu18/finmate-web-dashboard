import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container px-4 mx-auto">
        <Card className="bg-primary-foreground/95 backdrop-blur-sm border-0 shadow-glow">
          <CardContent className="p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to Take Control of Your Finances?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of users who are already managing their expenses smarter with FinMate's automatic tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="group">
                  <Download className="mr-2 w-5 h-5" />
                  Download for Android
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  View Features
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-medium">4.8/5 Rating</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-border"></div>
                <div className="font-medium">10,000+ Downloads</div>
                <div className="hidden sm:block w-px h-6 bg-border"></div>
                <div className="font-medium">100% Private</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};