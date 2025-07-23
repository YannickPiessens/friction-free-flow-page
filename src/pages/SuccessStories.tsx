import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Euro, Quote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import generated images
import creatorSophie from "@/assets/creator-sophie.jpg";
import creatorMark from "@/assets/creator-mark.jpg";
import creatorLisa from "@/assets/creator-lisa.jpg";
import creatorDavid from "@/assets/creator-david.jpg";

const SuccessStories = () => {
  const stats = [
    { label: "Gemiddelde ROI", value: "312%", icon: TrendingUp },
    { label: "Actieve Partnerships", value: "15.000+", icon: Users },
    { label: "Uitgekeerd aan Creators", value: "€2.4M", icon: Euro },
    { label: "Tevredenheidsscore", value: "4.9/5", icon: Star },
  ];

  const successStories = [
    {
      name: "Sophie van der Berg",
      handle: "@sophiestyle_nl",
      category: "Lifestyle & Mode",
      followers: "127K",
      image: creatorSophie,
      results: {
        campaigns: 23,
        earnings: "€18.500",
        growth: "+45%"
      },
      quote: "Door InfluencerHub heb ik mijn passie voor mode kunnen omzetten in een volwaardige carrière. De kwaliteit van de merken en de transparante betalingen zijn fantastisch.",
      highlight: "Van hobbyist naar full-time creator in 8 maanden"
    },
    {
      name: "Mark Jansen",
      handle: "@techreview_mark",
      category: "Technologie",
      followers: "89K",
      image: creatorMark,
      results: {
        campaigns: 31,
        earnings: "€24.200",
        growth: "+67%"
      },
      quote: "Als tech-reviewer is authenticiteit cruciaal. InfluencerHub heeft me geholpen om alleen met merken samen te werken die echt bij mijn content passen.",
      highlight: "Verdubbeling van inkomsten binnen 6 maanden"
    },
    {
      name: "Lisa Chen",
      handle: "@healthylisa",
      category: "Fitness & Welzijn",
      followers: "156K",
      image: creatorLisa,
      results: {
        campaigns: 19,
        earnings: "€31.800",
        growth: "+89%"
      },
      quote: "De mogelijkheid om langetermijnpartnerships aan te gaan heeft mijn business completely getransformeerd. Ik werk nu met 3 vaste merken die perfect aansluiten bij mijn waarden.",
      highlight: "Opbouw van stabiele inkomstenstroom"
    },
    {
      name: "David Müller",
      handle: "@foodie_david",
      category: "Food & Lifestyle",
      followers: "78K",
      image: creatorDavid,
      results: {
        campaigns: 27,
        earnings: "€16.900",
        growth: "+52%"
      },
      quote: "Van lokale restaurants tot internationale foodmerken - InfluencerHub heeft deuren geopend die ik nooit had kunnen bereiken. De community support is ongeëvenaard.",
      highlight: "Uitbreiding naar internationale merken"
    }
  ];

  const brandStories = [
    {
      company: "Pure Beauty Co.",
      industry: "Cosmetica",
      results: {
        reach: "2.1M",
        conversion: "8.4%",
        roi: "425%"
      },
      quote: "InfluencerHub heeft ons geholpen om authentieke verhalen te vertellen. De ROI van onze influencer campagnes overtreft alle andere marketing kanalen.",
      representative: "Emma Janssen, Marketing Director"
    },
    {
      company: "TechFlow Solutions",
      industry: "B2B Software",
      results: {
        reach: "847K",
        conversion: "12.1%",
        roi: "380%"
      },
      quote: "We hadden nooit gedacht dat influencer marketing zou werken voor B2B, maar de resultaten spreken voor zich. Kwaliteitsgenereerde leads en merkvertrouwen zijn enorm toegenomen.",
      representative: "Michael de Vries, CEO"
    },
    {
      company: "Green Lifestyle",
      industry: "Duurzaamheid",
      results: {
        reach: "1.5M",
        conversion: "6.8%",
        roi: "295%"
      },
      quote: "De creators op dit platform begrijpen echt waar duurzaamheid om draait. De authenticiteit in hun content heeft onze merkperceptie compleet veranderd.",
      representative: "Sarah Bakker, Brand Manager"
    }
  ];

  const platformReviews = [
    {
      text: "Ik had niet veel te besteden, maar heb toch goede resultaten gehaald. Vooral de storefront zorgt ervoor dat ik ook later nog mensen bereik. Dat miste ik bij andere platformen wel.",
      timeAgo: "3 weken geleden",
      isNew: true
    },
    {
      name: "Deb Van M",
      reviewCount: "3 reviews",
      text: "Eerder geprobeerd via een bureau, maar het was allemaal duur en traag. Nu regel ik het zelf via het platform, wat veel makkelijker is.",
      timeAgo: "een week geleden",
      isNew: true
    },
    {
      name: "Liek Lieke", 
      reviewCount: "3 reviews",
      text: "Goed platform, ook heel handig voor UGC aanvragen. UGC op locatie is ook makkelijk te regelen, ik had een aanvraag gedaan en had binnen 3 dagen een creator naar mijn zaak laten komen. 10 outfits in een keer gefilmd met volledige rechten op de content! Top deal",
      timeAgo: "4 weken geleden",
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-secondary/20">{/* ... keep existing code */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" />
              Terug naar home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Succesverhalen die 
              <span className="text-gradient ml-3">inspireren</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek hoe creators en merken hun doelen hebben overtroffen door samen te werken op ons platform. Echte resultaten, echte verhalen.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-scale bg-card/80 backdrop-blur-sm border border-border/50 shadow-elegant">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Creator Succesverhalen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van bijverdienste tot volledige carrière - zie hoe onze creators hun dromen hebben gerealiseerd
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-8 hover-scale bg-card border border-border shadow-elegant hover:shadow-luxury transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 shadow-md"
                  />
                  <div className="flex-1">{/* ... keep existing code (user details) */}
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{story.name}</h3>
                      <Badge variant="secondary" className="text-xs">{story.followers}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{story.handle}</p>
                    <p className="text-sm text-primary">{story.category}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-muted/50 to-secondary/30 rounded-xl p-5 mb-6 border border-border/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-semibold text-foreground">{story.results.campaigns}</div>
                      <div className="text-xs text-muted-foreground">Campagnes</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">{story.results.earnings}</div>
                      <div className="text-xs text-muted-foreground">Verdiend</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{story.results.growth}</div>
                      <div className="text-xs text-muted-foreground">Groei</div>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/40" />
                  <p className="text-muted-foreground italic mb-4 pl-4 text-base leading-relaxed">"{story.quote}"</p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-medium text-primary">✨ {story.highlight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Success Stories */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-secondary/10 to-background">{/* ... keep existing code */}
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Merkresultaten</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Merken die hun marketingdoelen hebben overstegen door strategische creator partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brandStories.map((brand, index) => (
              <Card key={index} className="p-8 hover-scale bg-card/90 backdrop-blur-sm border border-border shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardHeader className="p-0 mb-6">{/* ... keep existing code */}
                  <CardTitle className="text-xl mb-2">{brand.company}</CardTitle>
                  <CardDescription className="text-primary font-medium">{brand.industry}</CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-gradient-to-b from-muted/60 to-muted/40 rounded-xl p-4 border border-border/50">
                      <div className="font-bold text-foreground text-lg">{brand.results.reach}</div>{/* ... keep existing code */}
                      <div className="text-xs text-muted-foreground">Bereik</div>
                    </div>
                    <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-xl p-4 border border-green-200/50 dark:border-green-700/50">
                      <div className="font-bold text-green-600 dark:text-green-400 text-lg">{brand.results.conversion}</div>
                      <div className="text-xs text-muted-foreground">Conversie</div>{/* ... keep existing code */}
                    </div>
                    <div className="bg-gradient-to-b from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                      <div className="font-bold text-primary text-lg">{brand.results.roi}</div>
                      <div className="text-xs text-muted-foreground">ROI</div>{/* ... keep existing code */}
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-5 h-5 text-primary/30" />
                    <p className="text-muted-foreground italic pl-3 mb-3">"{brand.quote}"</p>
                  </div>

                  <p className="text-sm font-medium text-foreground">— {brand.representative}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Wat gebruikers zeggen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Echte ervaringen van merken en creators die het platform gebruiken
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platformReviews.map((review, index) => (
              <Card key={index} className="p-6 hover-scale bg-card/90 backdrop-blur-sm border border-border shadow-elegant hover:shadow-luxury transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm text-muted-foreground">{review.timeAgo}</div>
                  {review.isNew && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
                      Nieuw
                    </Badge>
                  )}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-5 h-5 text-primary/40" />
                  <p className="text-foreground leading-relaxed pl-3 text-base">{review.text}</p>
                </div>

                {review.name && (
                  <div className="pt-4 border-t border-border/50">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    {review.reviewCount && (
                      <div className="text-sm text-muted-foreground">{review.reviewCount}</div>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    👍 Like
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    📤 Delen
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">{/* ... keep existing code */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Klaar om jouw succesverhaal te schrijven?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sluit je aan bij duizenden creators en merken die al hun doelen hebben overtroffen. 
              Start vandaag nog gratis en ontdek wat mogelijk is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="luxury" className="text-lg px-8">
                Start als Creator
              </Button>
              <Button size="lg" variant="premium" className="text-lg px-8">
                Ik ben een Merk
              </Button>
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