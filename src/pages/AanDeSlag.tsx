import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InfluencerRegistrationForm } from "@/components/InfluencerRegistrationForm";
import { RegistrationForm } from "@/components/RegistrationForm";
import { ArrowRight, Users, Building, Instagram, Briefcase, Star, TrendingUp } from "lucide-react";

const AanDeSlag = () => {
  const [userType, setUserType] = useState<'creator' | 'merk' | null>(null);

  const resetChoice = () => {
    setUserType(null);
  };

  if (userType === 'creator') {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <div className="pt-20 pb-8">
          <div className="container mx-auto px-6 text-center">
            <Button 
              variant="ghost" 
              onClick={resetChoice}
              className="mb-6 text-muted-foreground hover:text-primary"
            >
              ← Terug naar keuze
            </Button>
          </div>
        </div>
        <InfluencerRegistrationForm />
      </div>
    );
  }

  if (userType === 'merk') {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navigation />
        <div className="pt-20 pb-8">
          <div className="container mx-auto px-6 text-center">
            <Button 
              variant="ghost" 
              onClick={resetChoice}
              className="mb-6 text-muted-foreground hover:text-primary"
            >
              ← Terug naar keuze
            </Button>
          </div>
        </div>
        <RegistrationForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-dark mb-6 leading-tight">
            Welkom bij 
            <span className="bg-gradient-luxury bg-clip-text text-transparent"> MillionStores</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Kies hieronder wat het beste bij jou past en start vandaag nog met verdienen of verkopen.
          </p>

          {/* Choice Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Creator Card */}
            <Card 
              className="group cursor-pointer border-2 border-border hover:border-luxury-gold transition-all duration-300 hover:shadow-luxury transform hover:scale-105"
              onClick={() => setUserType('creator')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-luxury transition-all duration-300">
                  <Instagram className="w-8 h-8 text-luxury-dark" />
                </div>
                <CardTitle className="text-2xl font-bold text-luxury-dark mb-2">
                  Ik ben Creator
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Content maker, influencer of social media persoonlijkheid
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Verdien €1.500-5.000 per maand</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Werk samen met topmerken</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Eigen storefront + link-in-bio</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Passief inkomen mogelijk</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                    <Star className="w-4 h-4 text-luxury-gold" />
                    <span>Gemiddeld €2.847/maand</span>
                  </div>
                  <Button 
                    variant="luxury" 
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserType('creator');
                    }}
                  >
                    Start als Creator
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Merk Card */}
            <Card 
              className="group cursor-pointer border-2 border-border hover:border-luxury-gold transition-all duration-300 hover:shadow-luxury transform hover:scale-105"
              onClick={() => setUserType('merk')}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-luxury transition-all duration-300">
                  <Building className="w-8 h-8 text-luxury-dark" />
                </div>
                <CardTitle className="text-2xl font-bold text-luxury-dark mb-2">
                  Ik ben Merk/Ondernemer
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Eigenaar van een product, service of bedrijf
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Toegang tot 500+ creators</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Realtime campagne tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Automatische campagnes</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span className="text-luxury-dark/80">Alleen betalen bij resultaat</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                    <TrendingUp className="w-4 h-4 text-luxury-gold" />
                    <span>3x meer conversies mogelijk</span>
                  </div>
                  <Button 
                    variant="luxury" 
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserType('merk');
                    }}
                  >
                    Start als Merk
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Help Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-card border border-luxury-gold/20 rounded-xl p-6 shadow-elegant">
              <h3 className="text-lg font-semibold text-luxury-dark mb-3">
                Niet zeker welke keuze bij jou past?
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong>Kies Creator</strong> als je content maakt en geld wilt verdienen met je volgers.<br/>
                <strong>Kies Merk</strong> als je een product hebt en meer verkopen wilt via influencers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" size="sm">
                  Bekijk Succesverhalen
                </Button>
                <Button variant="outline" size="sm">
                  Chat met Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AanDeSlag;