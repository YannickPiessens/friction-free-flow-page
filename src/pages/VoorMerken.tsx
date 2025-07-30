import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VSLVideo } from "@/components/VSLVideo";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Users, TrendingUp, Zap } from "lucide-react";

const VoorMerken = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <VSLVideo 
        videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
        title="Van €0 naar €50k+ Omzet in 90 Dagen"
        description="Zie hoe ondernemers hun verkopen verdrievoudigen door influencers slim in te zetten. Echte cases, echte resultaten."
        className="py-16"
      />
      
      {/* Storefront Explanation Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-dark mb-6">
                Hoe Werken 
                <span className="bg-gradient-luxury bg-clip-text text-transparent"> Creator Storefronts?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Elke creator krijgt een gepersonaliseerde storefront waar jouw producten centraal staan. 
                Hun volgers kunnen direct bestellen, terwijl jij alle data en controle behoudt.
              </p>
            </div>

            {/* How it works steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-8 border-luxury-gold/20 hover:shadow-luxury transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store className="w-8 h-8 text-luxury-dark" />
                  </div>
                  <CardTitle className="text-xl text-luxury-dark">1. Automatische Storefront</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Elke creator krijgt een persoonlijke webshop met jouw producten. 
                    Volledig in hun stijl, maar met jouw merkinformatie en betalingsgegevens.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-8 border-luxury-gold/20 hover:shadow-luxury transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-luxury-dark" />
                  </div>
                  <CardTitle className="text-xl text-luxury-dark">2. Content & Promotie</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    De creator maakt authentieke content en stuurt hun volgers naar hun storefront. 
                    Geen afleiding naar andere producten - focus op jouw merk.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center p-8 border-luxury-gold/20 hover:shadow-luxury transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-luxury-dark" />
                  </div>
                  <CardTitle className="text-xl text-luxury-dark">3. Directe Verkopen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Klanten bestellen direct bij jou. Jij houdt alle klantgegevens, 
                    krijgt realtime verkoopdashboard en betaalt de creator per campagne.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Benefits for brands */}
            <div className="bg-card border border-luxury-gold/20 rounded-xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-luxury-dark mb-6 text-center">
                Waarom Storefronts Beter Werken Dan Traditionele Influencer Marketing
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    "🎯 Geen afleiding naar concurrenten",
                    "📊 Volledige controle over klantdata",
                    "💰 Directe verkopen, geen omwegen",
                    "🔄 Herhaalaankopen via creator relatie"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-luxury-dark/80">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {[
                    "⚡ Snellere conversies door vertrouwen",
                    "🎨 Gepersonaliseerde merkbeleving", 
                    "📈 Trackbare prestaties per creator",
                    "🤝 Langetermijn partnerships mogelijk"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-luxury-dark/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-luxury-gold/20">
                <Button variant="luxury" size="lg" className="text-lg px-8">
                  Bekijk Voorbeeld Storefront
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <RegistrationForm />
    </div>
  );
};

export default VoorMerken;