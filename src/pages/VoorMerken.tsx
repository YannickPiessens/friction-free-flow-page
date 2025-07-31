import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, User, Lock, TrendingUp, Users, Zap, Target, Clock, Shield } from "lucide-react";
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
        description: "Je account is aangemaakt. Je kunt nu campagnes starten!",
      });
      setIsLoading(false);
    }, 1500);
  };

  const benefits = [
    {
      number: "1",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Extra zichtbaarheid bij influencer marketing zonder extra kosten",
      description: "MillionStores biedt ondernemers een platform om hun producten te promoten via influencers, zonder dat ze extra kosten hoeven te maken voor extra langdurige zichtbaarheid in de storefronts. Betaal alleen een eenmalige promotie die jij zelf bepaalt, en profiteer van langdurige zichtbaarheid."
    },
    {
      number: "2", 
      icon: <Users className="w-6 h-6" />,
      title: "Bereik een nieuwe doelgroep",
      description: "MillionStores helpt je om je producten te promoten via influencers, waardoor je producten zichtbaar worden bij een breed publiek dat je anders misschien niet zou bereiken."
    },
    {
      number: "3",
      icon: <Zap className="w-6 h-6" />,
      title: "Een breed scala aan promotiekanalen", 
      description: "Je profiteert van de promoties van influencers die je producten via hun eigen platformen promoten, waardoor je verkoop stijgt."
    },
    {
      number: "4",
      icon: <Target className="w-6 h-6" />,
      title: "Verhoogde merkwaarde",
      description: "Door je producten op een professionele platform te presenteren in storefronts van influencers, kun je je merk versterken en een breder klantenbestand aantrekken."
    },
    {
      number: "5", 
      icon: <Clock className="w-6 h-6" />,
      title: "Bespaar tijd met het handmatig zoeken naar influencers",
      description: "Plaats je campagne en zie de aanmeldingen binnen stromen."
    },
    {
      number: "6",
      icon: <Shield className="w-6 h-6" />,
      title: "Geen discussie meer over deadlines of onduidelijkheden", 
      description: "MillionStores maakt het eenvoudig: jouw doelen en eisen zijn overzichtelijk opgenomen in de campagne. Zo weten beide partijen precies wat er wordt verwacht."
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
            🚀 Voor Ondernemers & Merken
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-luxury-light mb-6 leading-tight">
            Begin vandaag nog met het lanceren van
            <span className="bg-gradient-luxury bg-clip-text text-transparent block">
              UGC of influencer campagnes!
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-luxury-light/80 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Of je nu een startende ondernemer bent of al een gevestigd merk, ons platform is de perfecte plek om jouw producten langdurig in de spotlight te zetten via influencer marketing.
          </p>

          <p className="text-lg text-luxury-light/80 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Bij elke campagne word je direct gepromoot op social media en krijg je een verwijzing naar je website vanuit de influencer storefronts. Dit zorgt voor langdurige zichtbaarheid en sterke social proof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="luxury" size="lg" className="text-lg px-8 py-4 animate-glow">
              Start Je Eerste Campagne Nu
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Bekijk Voorbeelden
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-luxury-light/60 text-sm">
            <span>✓ Eenmalige betaling</span>
            <span>✓ Langdurige zichtbaarheid</span>
            <span>✓ Transparante campagnes</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-8">
            Laat jouw producten de aandacht krijgen die ze verdienen!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-luxury-dark/80 border border-luxury-gold/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-luxury-light mb-2">Social Media Promotie</h3>
              <p className="text-luxury-light/70 text-sm">Direct gepromoot op alle social media kanalen van influencers</p>
            </div>
            <div className="bg-luxury-dark/80 border border-luxury-gold/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-luxury-light mb-2">Website Verwijzingen</h3>
              <p className="text-luxury-light/70 text-sm">Directe links naar jouw website vanuit influencer storefronts</p>
            </div>
            <div className="bg-luxury-dark/80 border border-luxury-gold/20 rounded-lg p-6">
              <div className="w-12 h-12 bg-luxury-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-luxury-light mb-2">Langdurige Zichtbaarheid</h3>
              <p className="text-luxury-light/70 text-sm">Je producten blijven zichtbaar in influencer storefronts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-luxury-dark/80 border-luxury-gold/20 shadow-luxury">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-luxury-light mb-2">
                Registratie
              </CardTitle>
              <CardDescription className="text-luxury-light/70">
                Start vandaag nog met jouw eerste influencer campagne
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
                  {isLoading ? "Account Aanmaken..." : "Start Mijn Eerste Campagne"}
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="text-center text-xs text-luxury-light/60">
                  Gratis aanmelden • Geen verborgen kosten • Bepaal zelf je budget
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-luxury-dark/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-light mb-4">
              Waarom MillionStores een goede aanvulling is voor ondernemers
            </h2>
            <p className="text-luxury-light/80 text-lg max-w-2xl mx-auto">
              Ontdek waarom meer dan 500 ondernemers kiezen voor ons platform
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-luxury-dark/80 border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold font-bold text-lg flex-shrink-0">
                      {benefit.number}
                    </div>
                    <div className="w-10 h-10 bg-luxury-gold/20 rounded-lg flex items-center justify-center text-luxury-gold flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
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
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-luxury-light mb-4">
            Klaar om je merk te laten groeien?
          </h3>
          <p className="text-luxury-light/80 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij honderden ondernemers die al succesvol campagnes draaien via ons platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" className="text-lg px-12 py-4 animate-glow">
              Start Nu - 100% Gratis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark">
              Bekijk Succesverhalen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoorMerken;