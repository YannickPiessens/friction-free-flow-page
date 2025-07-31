import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, User, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoorMerken = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Wachtwoorden komen niet overeen",
        description: "Controleer je wachtwoord en probeer opnieuw.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Welkom bij MillionStores! 🎉",
        description: "Je account is aangemaakt. Je kunt nu reageren op campagnes!",
      });
      setIsLoading(false);
    }, 1500);
  };

  const benefits = [
    {
      number: "1",
      title: "Reageer eenvoudig op betaalde campagnes",
      description: "Chat direct met merken en bedrijven, bouw langdurige samenwerkingen op en gebruik je storefront als extra waarde die je levert."
    },
    {
      number: "2", 
      title: "Ontvang samenwerkingsaanvragen via je persoonlijke collab-formulier (link-in-bio-tool)",
      description: "Activeer of deactiveer je privé collab-formulier in je storefront (je link-in-bio tool). Hiermee kunnen merken jou via een duidelijk aanvraagformulier benaderen. Deze aanvragen zijn alleen voor jou zichtbaar en privé. Zowel jij als de aanvrager ontvangen automatisch een bevestigingsmail met alle details, zodat je niet langer samenwerkingen via DM hoeft af te handelen."
    },
    {
      number: "3",
      title: "Verdien passief inkomen met afgewezen aanvragen", 
      description: "Pas wanneer jij op 'wijs aanvraag af' klikt, ontvangt de aanvrager een mail met een verwijzing naar ons platform. Daar kan de aanvrager de opdracht opnieuw plaatsen, waardoor deze zichtbaar wordt voor andere influencers. Als het merk, na jouw afwijzing, besluit met een andere influencer via ons platform samen te werken, ontvang jij 10% commissie van die samenwerking. Zo blijf je profiteren, ook als een aanvraag niet via jou loopt."
    },
    {
      number: "4",
      title: "Je volgers weten later altijd de gepromote producten terug te vinden",
      description: "Promoot je een product, maar zijn je volgers er niet direct klaar voor? Geen probleem – ze weten later altijd waar ze het terug kunnen vinden: in jouw storefront."
    },
    {
      number: "5", 
      title: "Voeg je eigen affiliate links toe aan je links-pagina",
      description: "Gebruik je al affiliate links op andere platforms? Voeg ze eenvoudig toe aan je 'links-pagina-tool'. Alle links worden automatisch weergegeven met afbeelding en titel."
    },
    {
      number: "6",
      title: "Inspireer je volgers met jouw stijl", 
      description: "Geef je community een aantrekkelijke plek om jouw smaak en creativiteit te ontdekken – en maak van je storefront een bron van inspiratie."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
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
            🚀 Voor Merken
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-luxury-light mb-6 leading-tight">
            Reageer vandaag nog op leuke
            <span className="bg-gradient-luxury bg-clip-text text-transparent block">
              campagnes van merken!
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-luxury-light/80 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Heb je een socialmedia-volgersgroep? Of je nu creator, merk, artiest of publieke figuur bent – meld je vandaag nog aan en start met betaalde promoties! Aanmelden is volledig gratis, zonder verplichtingen of verborgen kosten.
          </p>

          <p className="text-lg text-luxury-light/80 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Reageer eenvoudig op campagnes van bedrijven en bouw automatisch een professioneel portfolio op via je storefront. Laat je persoonlijke merk op z'n best zien en trek meer brand deals aan. Dankzij handige link-in-bio tools kun je zelfs passief inkomen opbouwen.
          </p>

          <div className="flex justify-center mb-16">
            <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
              Begin vandaag nog met betaalde samenwerkingen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-6 bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-luxury-dark/80 border-luxury-gold/20 shadow-luxury">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-luxury-light mb-2">
                Registratie
              </CardTitle>
              <CardDescription className="text-luxury-light/70">
                Meld je gratis aan en start vandaag nog met betaalde campagnes
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-luxury-light font-medium">
                    Email*
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold bg-luxury-dark/50 text-luxury-light"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-luxury-light font-medium">
                    Gebruikersnaam*
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold bg-luxury-dark/50 text-luxury-light"
                      required
                    />
                  </div>
                  <p className="text-xs text-luxury-light/60 mt-1">
                    https://millionstores.com/shop/{username || "[Gebruikersnaam]"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-luxury-light font-medium">
                    Wachtwoord*
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold bg-luxury-dark/50 text-luxury-light"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-luxury-light font-medium">
                    Bevestig wachtwoord*
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 h-12 border-luxury-gold/20 focus:border-luxury-gold focus:ring-luxury-gold bg-luxury-dark/50 text-luxury-light"
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
                  {isLoading ? "Account Aanmaken..." : "Registreren"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-4">
              Waarom MillionStores waardevol is voor creators en influencers
            </h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-luxury-dark/80 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold text-lg flex-shrink-0">
                      {benefit.number}
                    </div>
                    <div>
                      <CardTitle className="text-luxury-light text-xl mb-2">{benefit.title}</CardTitle>
                      <CardDescription className="text-luxury-light/70 text-base leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-luxury-light mb-4">
            Klaar om te starten met betaalde campagnes?
          </h3>
          <p className="text-luxury-light/80 mb-8 max-w-2xl mx-auto">
            Meld je vandaag nog gratis aan en begin met het verdienen van geld met je content.
          </p>
          <Button variant="luxury" size="lg" className="text-lg px-12 py-4 animate-glow">
            Start Nu - 100% Gratis
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default VoorMerken;