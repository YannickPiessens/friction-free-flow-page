
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, TrendingUp, DollarSign, Users, Zap, Gift, Heart } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";

const VoorCreators = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Reageer direct op betaalde campagnes",
      description: "Chat rechtstreeks met topmerken en sluit lucratieve deals af. Bouw langdurige partnerships op die je inkomen blijvend verhogen."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Persoonlijk collab-formulier",
      description: "Laat merken jou vinden via je eigen link-in-bio tool. Geen gedoe meer met DM's - alles professioneel geregeld met automatische bevestigingsmails."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Passief inkomen bij afwijzingen",
      description: "Verdien 10% commissie wanneer een afgewezen aanvraag via een andere creator wordt uitgevoerd. Zelfs 'nee' zeggen verdient geld!"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Permanente productshowcase",
      description: "Je volgers vinden alle gepromote producten terug in jouw storefront. Verhoog je conversie doordat niets meer verloren gaat."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Affiliate links integratie",
      description: "Voeg al je bestaande affiliate links toe aan één centrale plek. Automatische thumbnails en titels voor maximum conversie."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inspireer je community",
      description: "Transformeer je storefront in een lifestyle destination waar fans jouw smaak en creativiteit kunnen ontdekken en kopen."
    }
  ];

  const stats = [
    { number: "€2.847", label: "Gemiddeld maandinkomen", highlight: true },
    { number: "150+", label: "Actieve merken", highlight: false },
    { number: "24u", label: "Gemiddelde responstijd", highlight: false },
    { number: "94%", label: "Tevreden creators", highlight: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <Navigation />
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30 text-sm font-medium px-4 py-2">
            🚀 Verdien tot €5.000+ per maand
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-luxury-light mb-6 leading-tight">
            Transform je passie in
            <span className="bg-gradient-luxury bg-clip-text text-transparent block">
              Passief Inkomen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-luxury-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sluit je aan bij 10.000+ creators die al <strong className="text-luxury-gold">€2.847 per maand</strong> verdienen. 
            Geen gedoe, geen kosten, geen verplichtingen - alleen lucratieve brand deals die bij jou passen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
              Start Nu - 100% Gratis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark">
              Bekijk Succesverhalen
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-4 rounded-lg ${stat.highlight ? 'bg-luxury-gold/20 border border-luxury-gold/30' : 'bg-luxury-dark/30'}`}>
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.highlight ? 'text-luxury-gold' : 'text-luxury-light'}`}>
                  {stat.number}
                </div>
                <div className="text-luxury-light/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-4">
              Waarom kiezen creators voor MillionStores?
            </h2>
            <p className="text-luxury-light/80 text-lg max-w-2xl mx-auto">
              We maken het makkelijker dan ooit om geld te verdienen met je content. Bekijk hoe we jouw creator journey revolutioneren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-luxury-dark/80 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-lg flex items-center justify-center text-luxury-gold mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-luxury-light text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-luxury-light/70 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-4">
              Wat andere creators zeggen
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-luxury-gold fill-luxury-gold" />
              ))}
              <span className="text-luxury-light/80 text-lg ml-2">4.9/5 (2.847 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie van der Berg",
                handle: "@sophiestyle",
                followers: "85K",
                earnings: "€4.200/maand",
                quote: "In 3 maanden tijd ging ik van €200 naar €4.200 per maand. De automatische brand matches zijn geweldig!"
              },
              {
                name: "David Rodriguez",
                handle: "@davidfitness",
                followers: "120K",
                earnings: "€6.800/maand",
                quote: "Eindelijk een platform dat snapt wat creators nodig hebben. De passieve inkomsten zijn fantastisch."
              },
              {
                name: "Emma Janssen",
                handle: "@emmafood",
                followers: "45K",
                earnings: "€2.100/maand",
                quote: "Zelfs met een kleinere following verdien ik nu meer dan bij mijn vorige baan. Ongelofelijk!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-luxury-dark/80 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-luxury-light font-semibold">{testimonial.name}</div>
                      <div className="text-luxury-light/60 text-sm">{testimonial.handle} • {testimonial.followers}</div>
                    </div>
                  </div>
                  <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30 w-fit">
                    {testimonial.earnings}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-light/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-6 bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-4">
              Klaar om je inkomen te verdubbelen?
            </h2>
            <p className="text-luxury-light/80 text-lg">
              Meld je vandaag nog aan en ontvang binnen 24 uur je eerste brand deal voorstel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-luxury-light mb-6">Wat krijg je direct?</h3>
              <div className="space-y-4">
                {[
                  "Toegang tot 150+ premium merken",
                  "Persoonlijke storefront + link-in-bio tool",
                  "Automatische portfolio opbouw",
                  "Direct contact met brand managers",
                  "10% commissie op doorverwezen deals",
                  "24/7 creator support team"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-luxury-gold" />
                    <span className="text-luxury-light/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-luxury-light mb-4">
            Wacht niet langer. Je volgende brand deal wacht op je.
          </h3>
          <p className="text-luxury-light/80 mb-8 max-w-2xl mx-auto">
            Over 30 dagen kun je terugkijken als het moment dat je je creator carrière naar het volgende niveau tilde.
          </p>
          <Button variant="luxury" size="lg" className="text-lg px-12 py-4 animate-glow">
            Start Nu - 100% Gratis & Zonder Risico
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VoorCreators;
