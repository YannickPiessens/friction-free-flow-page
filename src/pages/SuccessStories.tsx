import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  const realReviews = [
    {
      name: "Jason Van De Laarschot",
      country: "NL",
      reviewCount: "12 reviews",
      date: "14 jul 2025",
      rating: 5,
      title: "Ik vind het handig dat ik de promotie…",
      text: "Ik vind het handig dat ik de promotie video's ook op mijn eigen social mocht gebruiken, dit maakt het veel waardevoller voor mij. De storefront plaatsing levert al weken meer traffic op, ik ga dus nooit meer betalen voor een losse story van 1 dag.",
      experienceDate: "13 juli 2025"
    },
    {
      name: "J.",
      country: "NL", 
      reviewCount: "23 reviews",
      date: "23 jun 2025",
      rating: 5,
      title: "Bij andere campagnes ging het soms mis…",
      text: "Bij andere campagnes ging het soms mis omdat influencers niet deden wat ze zouden doen. Op millionstores was alles helder en wordt goed bijgehouden wat er gebeurt. Dat voorkomt veel gedoe en misverstanden. Deze samenwerking verliep vlekkeloos.",
      experienceDate: "23 juni 2025"
    },
    {
      name: "Lamarche Hetharia",
      country: "NL",
      reviewCount: "19 reviews", 
      date: "13 jun 2025",
      rating: 5,
      title: "Ik had geen tijd meer om tientallen…",
      text: "Ik had geen tijd meer om tientallen influencers te benaderen via DM, en dan lang te wachten op antwoord. Hier plaatste ik een campagne en kreeg ik binnen 2 dagen iets van 20 aanmeldingen. Spijt dat ik zoveel tijd heb verspild met DM's sturen naar influencers.",
      experienceDate: "10 april 2025"
    },
    {
      name: "Dylan",
      country: "NL",
      reviewCount: "27 reviews",
      date: "7 jun 2025", 
      rating: 5,
      title: "Goede website waar je makkelijk…",
      text: "Goede website waar je makkelijk campanges kan lanceren, snel reacties krijgt en in de storefronts zichtbaar blijft als extra service! Top idee, leuk en ik zie meer sales vergeleken met eerdere promoties zonder in een storefront te staan. Het is een leuk concept en het werkt voor mij. Dit is gewoon de investering waard. Je krijgt ook echt meer dan als je zelf direct met een influencer zou samenwerken.",
      experienceDate: "06 juni 2025"
    },
    {
      name: "Familie Hartogs",
      country: "NL",
      reviewCount: "37 reviews",
      date: "Geüpdatet op 7 jun 2025",
      rating: 5,
      title: "Tevreden samenwerking",
      text: "Ik had een aanvraag voor een samenwerking online gezet op Millionstores. Binnen 2 dagen kreeg ik al hele goede aanbiedingen van influencers die precies passen bij mijn merk imago. De promoties zijn vlekkeloos verlopen. We zijn gewoon helemaal tevreden!",
      experienceDate: "15 mei 2025"
    },
    {
      name: "Sanne Smith",
      country: "NL",
      reviewCount: "26 reviews",
      date: "23 mei 2025",
      rating: 5,
      title: "Ik heb zojuist een zeer succesvolle…",
      text: "Ik heb zojuist een zeer succesvolle samenwerking gehad via jullie platform. Mijn complimenten voor jullie aanpak met storefronts voor langere zichtbaarheid. Met een link vanaf jullie website naar mijn product heb ik gelijk ook een sterkere SEO positie in google.",
      experienceDate: "23 april 2025"
    },
    {
      name: "D. Willems",
      country: "NL",
      reviewCount: "18 reviews",
      date: "20 mei 2025",
      rating: 5,
      title: "Ik heb al een aantal goede…",
      text: "Ik heb al een aantal goede samenwerkingen opgezet via millionstores, het ging heel makkelijk. Verder ook een duidelijk platform en snelle klantenservice.",
      experienceDate: "01 mei 2025"
    },
    {
      name: "Xílín",
      country: "NL",
      reviewCount: "51 reviews",
      date: "16 mei 2025",
      rating: 5,
      title: "Effectief!",
      text: "Eenvoudig en effectief. Geweldige manier om zonder gedoe samen te werken met influencers. Het mooie is dat je langer zichtbaar blijft in de storefront met een link naar je eigen website. En het werkt, ik krijg nog steeds meer bezoekers weken na de promotie.",
      experienceDate: "16 mei 2025"
    },
    {
      name: "Ahmad Alrimi",
      country: "NL",
      reviewCount: "22 reviews",
      date: "14 mei 2025",
      rating: 5,
      title: "Top samenwerking",
      text: "Top samenwerking! Onze producten zijn goed in de spotlight gezet bij de juiste doelgroep. De influencers zijn professioneel en communicatief. Het gebruik is ook super simpel en gemakkelijk, wat tijd bespaard.",
      experienceDate: "13 mei 2025"
    },
    {
      name: "Lisa",
      country: "NL",
      reviewCount: "1 review",
      date: "30 apr 2025",
      rating: 5,
      title: "Ik werd benaderd door Millionstores",
      text: "Ik werd benaderd door Millionstores of ik interesse had om mijn volgers iets leuks te bieden en tegelijk een stabielere inkomstenbron op wilde bouwen. Als influencer heb je nu eenmaal een sterk schommeled inkomen doordat je afhankelijk bent van betaalde promoties. Na een gesprek en een video demo heb ik me aangesloten, het gebruik is heel gemakkelijk. Iedereen kan dit, en het werkt! Het is een hobby om een etalage/storefront samen te stellen en gratis kleding te ontvangen en het gewoon te dragen. Het voelt niet als promoten, maar meer als iets van mijzelf. Ik draag de kleding en mijn volgers weten het altijd te vinden. En zoveel leuke reacties tot nu toe. Leuke ervaring zeker een aanrader!",
      experienceDate: "23 april 2025"
    },
    {
      name: "Tristan M",
      country: "NL",
      reviewCount: "67 reviews",
      date: "Geüpdatet op 23 apr 2025",
      rating: 5,
      title: "Sinds ik mijn eigen shop heb op MillionStores",
      text: "Sinds ik mijn eigen shop heb op MillionStores, merk ik dat mijn volgers veel sneller iets kopen. Ze blijven gewoon in mijn shop en hoeven niet doorverwezen te worden naar andere websites. Super simpel om producten toe te voegen en ik verdien nu veel makkelijker aan promoties. Echt een aanrader voor iedere content creator!",
      experienceDate: "14 april 2025"
    },
    {
      name: "Sharon Badal",
      country: "NL",
      reviewCount: "34 reviews",
      date: "21 apr 2025",
      rating: 5,
      title: "Als influencer zonder eigen producten…",
      text: "Als influencer zonder eigen producten was het altijd gedoe met affiliate links. Met MillionStores is dat opgelost: ik bouw nu aan mijn eigen merk, heb een professioneel ogende winkel, en verdien commissie op elke verkoop zonder iets te hoeven versturen. Top service, snel opgezet en echt passief inkomen.",
      experienceDate: "18 april 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" />
              Terug naar home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Echte Succesverhalen van
              <span className="text-gradient ml-3">Onze Gebruikers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek wat ondernemers en creators zeggen over hun ervaringen met MillionStores. 
              Echte reviews, echte resultaten.
            </p>
          </div>

          {/* Overall rating */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-2xl font-bold">4.9/5</div>
            <div className="text-muted-foreground">uit 12 reviews</div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realReviews.map((review, index) => (
                <Card key={index} className="p-6 hover-scale bg-card border border-border shadow-elegant hover:shadow-luxury transition-all duration-300">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-foreground">{review.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>{review.country}</span>
                          <span>•</span>
                          <span>{review.reviewCount}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {review.date}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground">Beoordeeld met {review.rating} van de 5 sterren</span>
                    </div>

                    <CardTitle className="text-base font-semibold text-foreground mb-3">
                      {review.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 w-5 h-5 text-primary/40" />
                      <p className="text-foreground leading-relaxed pl-3 text-sm">{review.text}</p>
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">
                      Datum van ervaring: {review.experienceDate}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary text-xs">
                        👍 Nuttig
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary text-xs">
                        📤 Delen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Klaar om jouw succesverhaal te schrijven?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sluit je aan bij ondernemers en creators die al hun doelen hebben overtroffen. 
              Start vandaag nog gratis en ontdek wat mogelijk is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/voor-creators">
                <Button size="lg" variant="luxury" className="text-lg px-8">
                  Start als Creator
                </Button>
              </Link>
              <Link to="/voor-merken">
                <Button size="lg" variant="premium" className="text-lg px-8">
                  Ik ben een Merk
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Geen setup kosten • Geen maandelijkse fees • Alleen betalen bij succes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;