import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Lock, Instagram, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const InfluencerRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      toast({
        title: "Welkom bij ons creator netwerk! 🎉",
        description: "Je profiel wordt beoordeeld. We nemen binnen 24 uur contact met je op!",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-subtle min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left side - Benefits */}
            <div className="lg:col-span-7 animate-slide-up order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-luxury-dark mb-4 lg:mb-6 leading-tight">
                Terwijl Jij Je 
                <span className="bg-gradient-luxury bg-clip-text text-transparent block"> Richt Op Je Merk</span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                Meer sales, meer zichtbaarheid, minder tijd kwijt. Krijg toegang tot premium creators die content maken, promoten én resultaten leveren — zonder gedoe.
              </p>

              <div className="space-y-3 mb-6 lg:mb-8">
                {[
                  "Toegang tot 150+ premium merken",
                  "Persoonlijke storefront + link-in-bio tool", 
                  "Automatische portfolio opbouw",
                  "Direct contact met brand managers",
                  "Doorverwijsbonussen voor referrals",
                  "24/7 creator support team"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-luxury-dark/80 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-card rounded-lg border border-luxury-gold/20">
                  <div className="text-lg font-bold text-luxury-gold">500+</div>
                  <div className="text-xs text-muted-foreground">Geverifieerde creators</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border border-luxury-gold/20">
                  <div className="text-lg font-bold text-luxury-gold">150+</div>
                  <div className="text-xs text-muted-foreground">Premium merken</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-luxury-gold text-sm">📊</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxury-dark">Live analytics & conversietracking</div>
                    <div className="text-xs text-muted-foreground">Realtime inzicht in prestaties</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-luxury-gold text-sm">🔄</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxury-dark">Automatische betalingen en duidelijke afspraken</div>
                    <div className="text-xs text-muted-foreground">Transparant en betrouwbaar</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-luxury-gold text-sm">💎</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxury-dark">Expert support & strategisch advies</div>
                    <div className="text-xs text-muted-foreground">Persoonlijke begeleiding</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                    <span className="text-luxury-gold text-sm">🔒</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-luxury-dark">Gegarandeerde eerste samenwerking</div>
                    <div className="text-xs text-muted-foreground">Of je geld terug</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Registration Form */}
            <div className="lg:col-span-5 animate-slide-up delay-200 order-1 lg:order-2">
              <Card className="shadow-luxury border-luxury-gold/20 bg-white">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-luxury-dark">
                    Maak Gratis Een Account Aan
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base">
                    Start zonder verplichtingen. Geen creditcard nodig. Meld je vandaag nog aan en ontdek je eerste influencer match.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-luxury-dark font-medium text-sm">
                        Werk E-mail
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="jouw@email.nl"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-10 lg:h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-luxury-dark font-medium text-sm">
                        Wachtwoord
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Maak een wachtwoord"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 h-10 lg:h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold text-sm"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="w-full h-10 lg:h-12 text-sm lg:text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? "Account Aanmaken..." : "Start Gratis - Plaats Je Eerste Opdracht"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Door je aan te melden ga je akkoord met de voorwaarden. Je zit nergens aan vast.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>SSL-beveiligd</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>AVG-conform</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-card border border-luxury-gold/20 rounded-lg px-3 py-2 text-sm">
                  <div className="flex text-luxury-gold">
                    {"★★★★★".split('').map((star, i) => (
                      <span key={i} className="text-xs">{star}</span>
                    ))}
                  </div>
                  <span className="text-luxury-dark font-medium">4.95</span>
                  <span className="text-muted-foreground">uit 2.847 reviews</span>
                </div>
                
                <div className="mt-2 text-center">
                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="text-luxury-gold">💸</span>
                    <span className="font-medium text-luxury-dark">100% risicoloos starten</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    "We zagen een 3x hogere conversie op onze webshop"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};