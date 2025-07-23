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
    <section className="py-24 bg-luxury-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Benefits */}
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-dark mb-6">
                Van Follower Naar 
                <span className="bg-gradient-luxury bg-clip-text text-transparent"> Omzet-Generator</span>
                — Verdien Wat Je Waard Bent
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Stop met gratis promoten. Start met verdienen aan elke verkoop.
                Krijg toegang tot premium merken die investeren in jouw bereik en authenticiteit.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "💰 Verdien 5-20% commissie per verkoop (geen vaste vergoeding)",
                  "🎯 Krijg producten die perfect bij jouw niche passen",
                  "📊 Realtime dashboard met al jouw verdiensten",
                  "🚀 Persoonlijke support om je omzet te maximaliseren",
                  "⚡ Wekelijkse uitbetalingen — geen wachttijden"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-luxury-dark/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Creator Success Story */}
              <div className="bg-card border border-luxury-gold/20 rounded-lg p-6 shadow-elegant">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-luxury-dark" />
                  </div>
                  <div>
                    <div className="text-luxury-gold text-lg font-semibold">€3.247</div>
                    <div className="text-xs text-muted-foreground">verdiend vorige maand</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Ik ben gestopt met gratis posts. Nu verdien ik consistent €2k-4k per maand door te focussen op wat mijn audience echt koopt."
                </p>
                <p className="text-xs text-luxury-dark font-medium mt-2">
                  — Emma (@emmastyle), Lifestyle Creator
                </p>
              </div>
            </div>

            {/* Right side - Registration Form */}
            <div className="animate-slide-up delay-200">
              <Card className="shadow-luxury border-luxury-gold/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-luxury-dark">
                    Word Onderdeel Van Ons Creator Netwerk
                  </CardTitle>
                  <CardDescription className="text-base">
                    Meld je gratis aan en start binnen 24 uur met verdienen. Geen minimumvereisten — alleen authentieke creators.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-luxury-dark font-medium">
                        E-mail
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="jouw@email.nl"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-luxury-dark font-medium">
                        Instagram Handle
                      </Label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="instagram"
                          type="text"
                          placeholder="@jouwhandle"
                          value={instagramHandle}
                          onChange={(e) => setInstagramHandle(e.target.value)}
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
                          placeholder="Maak een veilig wachtwoord"
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
                          <span className="hidden sm:inline">Aanmelden — Start Met Verdienen</span>
                          <span className="sm:hidden">Aanmelden</span>
                        </>
                      )}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <div className="text-center space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Door je aan te melden ga je akkoord met onze voorwaarden. Geen verplichtingen — alleen kansen.
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Veilig platform</span>
                        </div>
                        <span>•</span>
                        <span>Wekelijkse uitbetaling</span>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Earning Potential */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-card border border-luxury-gold/20 rounded-lg px-4 py-2">
                  <div className="text-luxury-gold text-sm">💰</div>
                  <span className="text-sm text-luxury-dark">Gemiddeld €1.500/maand verdiend</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">🚀 Gebaseerd op actieve creators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};