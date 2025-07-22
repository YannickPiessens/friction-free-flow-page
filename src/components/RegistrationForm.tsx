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
                Laat Influencers Voor Je Werken — Terwijl Jij Je 
                <span className="bg-gradient-luxury bg-clip-text text-transparent"> Richt Op Je Merk</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Meer sales, meer zichtbaarheid, minder tijd kwijt.
                Krijg toegang tot premium creators die content maken, promoten én resultaten leveren — zonder gedoe.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "🎯 Meer dan 500+ geverifieerde creators in alle niches",
                  "📊 Live analytics & conversietracking",
                  "🔁 Automatische betalingen en duidelijke afspraken",
                  "🤝 Expert support & strategisch advies",
                  "🛡️ Gegarandeerde eerste samenwerking — of je geld terug"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
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
                  "We zagen een 3x hogere conversie op onze productpagina's binnen 10 dagen. Dit is precies wat we nodig hadden."
                </p>
                <p className="text-xs text-luxury-dark font-medium mt-2">
                  — Marloes van Dijk, Oprichter van PureEarth Skincare
                </p>
              </div>
            </div>

            {/* Right side - Registration Form */}
            <div className="animate-slide-up delay-200">
              <Card className="shadow-luxury border-luxury-gold/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-luxury-dark">
                    Maak Gratis Een Account Aan
                  </CardTitle>
                  <CardDescription className="text-base">
                    Start zonder verplichtingen. Geen creditcard nodig. Meld je vandaag nog aan en ontdek je eerste influencer match.
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
                      {isLoading ? "Account Aanmaken..." : (
                        <>
                          <span className="hidden sm:inline">Start Gratis – Plaats Je Eerste Opdracht</span>
                          <span className="sm:hidden">Start Gratis</span>
                        </>
                      )}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="text-center space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Door je aan te melden ga je akkoord met de voorwaarden. Je zit nergens aan vast.
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>SSL-beveiligd</span>
                        </div>
                        <span>•</span>
                        <span>AVG-conform</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Trustpilot-style review */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-card border border-luxury-gold/20 rounded-lg px-4 py-2">
                  <div className="text-luxury-gold text-sm">★★★★★</div>
                  <span className="text-sm text-luxury-dark">4.95 uit 2.847 reviews</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">🛡️ 100% risicoloos starten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};