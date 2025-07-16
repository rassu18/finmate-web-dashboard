import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Check, X, Smartphone } from "lucide-react";

export const PrivacySection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                Your Data Stays Private
              </h2>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              All data processing happens locally on your device. We don't upload, share, or store your messages anywhere.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-primary-foreground">
                <Check className="w-5 h-5 text-green-400" />
                <span>Only reads transaction SMS</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <X className="w-5 h-5 text-red-400" />
                <span>Never accesses personal chats or OTPs</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <Lock className="w-5 h-5 text-primary-foreground" />
                <span>All processing done on your device</span>
              </div>
            </div>
            
            <Button size="lg" variant="secondary">
              Learn About Our Privacy
            </Button>
          </div>
          
          <div className="relative">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    SMS Access Explanation
                  </h3>
                  <p className="text-primary-foreground/80">
                    FinMate needs SMS access to help you track spending automatically.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-primary-foreground/90">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">Only reads transaction SMS</p>
                      <p className="text-sm text-primary-foreground/70">UPI, cards, and bank notifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-primary-foreground/90">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mt-1">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="font-medium">Never accesses personal chats</p>
                      <p className="text-sm text-primary-foreground/70">Your personal messages stay private</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-primary-foreground/90">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center mt-1">
                      <Lock className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">All processing on your device</p>
                      <p className="text-sm text-primary-foreground/70">No data sent to external servers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};