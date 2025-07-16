import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PrivacySection } from "@/components/ui/privacy-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { CTASection } from "@/components/ui/cta-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="privacy">
          <PrivacySection />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="download">
          <CTASection />
        </section>
      </main>
      
      <footer className="py-8 bg-background border-t border-border">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 FinMate. All rights reserved. Made with ❤️ for smarter expense tracking.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
