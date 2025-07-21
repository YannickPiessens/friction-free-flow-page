import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Lock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      toast({
        title: "Welkom aan boord! 🎉",
        description: "Je account is succesvol aangemaakt. Laten we je eerste campagne starten!",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-luxury-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Benefits */}
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-dark mb-6">
                Begin Je Reis naar 
                <span className="bg-gradient-luxury bg-clip-text text-transparent"> Influencer Succes</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Sluit je aan bij duizenden merken die al groeien met ons platform. 
                Krijg je eerste campagne live in minder dan 5 minuten.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Toegang tot 500+ geverifieerde influencers in alle niches",
                  "Real-time campagne tracking en analytics",
                  "Geautomatiseerde betalingsverwerking en contracten",
                  "24/7 expertsupport en campagne optimalisatie",
                  "Geld-terug garantie op je eerste campagne"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <span className="text-luxury-dark/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-card border border-luxury-gold/20 rounded-lg p-6 shadow-elegant">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-luxury rounded-full border-2 border-background"></div>
                    ))}
                  </div>
                  <div className="text-luxury-gold text-2xl">★★★★★</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Ongelooflijke resultaten! We zagen een 300% toename in engagement binnen de eerste maand."
                </p>
                <p className="text-xs text-luxury-dark font-medium mt-2">
                  - Sarah Chen, Marketing Director bij LuxeFashion
                </p>
              </div>
            </div>

            {/* Right side - Registration Form */}
            <div className="animate-slide-up delay-200">
              <Card className="shadow-luxury border-luxury-gold/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-luxury-dark">
                    Maak Je Account Aan
                  </CardTitle>
                  <CardDescription className="text-base">
                    Start vandaag je gratis proefperiode. Geen creditcard vereist.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-luxury-dark font-medium">
                        Werk E-mail
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="jouw@bedrijf.nl"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-luxury-dark font-medium">
                        Wachtwoord
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Maak een sterk wachtwoord"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="w-full h-12 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Account Aanmaken..." : "Start Gratis Proefperiode"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="text-center space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Door je aan te melden, ga je akkoord met onze{" "}
                        <a href="#" className="text-luxury-gold hover:underline">Algemene Voorwaarden</a>
                        {" "}en{" "}
                        <a href="#" className="text-luxury-gold hover:underline">Privacybeleid</a>
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>SSL Beveiligd</span>
                        </div>
                        <span>•</span>
                        <span>AVG Conform</span>
                        <span>•</span>
                        <span>SOC 2 Gecertificeerd</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Trustpilot-style review */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-card border border-luxury-gold/20 rounded-lg px-4 py-2">
                  <div className="text-luxury-gold text-sm">★★★★★</div>
                  <span className="text-sm text-luxury-dark">4.9/5 van 2.847 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};