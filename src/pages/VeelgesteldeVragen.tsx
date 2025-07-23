import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Mail } from "lucide-react";

const VeelgesteldeVragen = () => {
  const faqs = [
    {
      question: "Hoe werkt Millionstores voor ondernemers?",
      answer: "Als ondernemer meld je je aan op ons platform en upload je je producten. Ons algoritme matcht automatisch jouw producten met relevante content creators die passen bij jouw doelgroep. Je betaalt alleen wanneer er daadwerkelijk verkopen plaatsvinden via de creators, met volledige transparantie in realtime analytics."
    },
    {
      question: "Hoe werkt het platform voor content creators?",
      answer: "Content creators krijgen toegang tot een uitgebreid merkenportfolio en kunnen kiezen welke producten bij hun content en audience passen. Je krijgt je eigen storefront en link-in-bio tool, en verdient commissie op elke verkoop die via jouw unieke links plaatsvindt. Daarnaast kun je passief inkomen verdienen door andere creators door te verwijzen."
    },
    {
      question: "Wat gebeurt er na mijn registratie?",
      answer: "Na registratie wordt je profiel binnen 24 uur beoordeeld en goedgekeurd. Je ontvangt een welkomstmail met inloggegevens voor je dashboard. Voor creators worden er direct passende merkdeals voorgesteld, voor ondernemers wordt er een onboarding gesprek ingepland om je producten optimaal te presenteren."
    },
    {
      question: "Wat moet ik doen als creator?",
      answer: "Als creator hoef je alleen authentieke content te maken over producten die je echt leuk vindt. Je kiest zelf welke merken en producten je promoot, gebruikt je unieke tracking links, en houdt je verdiensten bij via het dashboard. Het platform zorgt voor alle administratie, betalingen en rapportages."
    },
    {
      question: "Hoe lang blijft mijn product of merk zichtbaar in de storefront?",
      answer: "Producten blijven permanent zichtbaar in creator storefronts zolang de samenwerking actief is. Voor ondernemers betekent dit dat je product maanden of zelfs jaren na een campagne nog steeds verkopen kan genereren via de creator netwerken die je hebt opgebouwd."
    },
    {
      question: "Hoe kan ik me registreren?",
      answer: "Registreren is eenvoudig: ga naar onze 'Aan de Slag' pagina, kies of je creator of ondernemer bent, en vul het registratieformulier in. Je hebt alleen een geldig e-mailadres nodig. Voor creators vragen we ook om je social media handles, voor ondernemers om bedrijfsgegevens."
    },
    {
      question: "Hoe verdien ik geld als creator?",
      answer: "Je verdient 5-20% commissie op elke verkoop via jouw unieke links. Daarnaast kun je 10% commissie verdienen op doorverwezen creators (affiliate programma). Uitbetalingen gebeuren wekelijks en je kunt al je verdiensten realtime volgen in je dashboard."
    },
    {
      question: "Hoe kan ik mijn verdiensten bijhouden?",
      answer: "Je persoonlijke dashboard toont realtime alle clicks, conversies en verdiensten. Je ziet precies welke producten het beste presteren, hoeveel je hebt verdiend per periode, en wanneer uitbetalingen plaatsvinden. Ook ontvang je maandelijkse rapportages met inzichten om je verdiensten te optimaliseren."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-luxury-gold" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-dark">
              Veelgestelde Vragen
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Heb je vragen over onze diensten of producten? Bekijk hieronder de meest gestelde vragen en hun antwoorden. 
            Staat jouw vraag er niet tussen? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-luxury-gold/20 rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-luxury-dark pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-luxury-dark/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-luxury-dark mb-4">
              Heb je nog andere vragen?
            </h2>
            <p className="text-muted-foreground mb-8">
              Ons team staat klaar om je te helpen. Neem gerust contact met ons op via onderstaande kanalen.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
                <CardHeader className="text-center pb-3">
                  <MessageCircle className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">Live Chat</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Direct antwoord op je vragen
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors duration-300">
                <CardHeader className="text-center pb-3">
                  <Mail className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                  <CardTitle className="text-lg">E-mail Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Antwoord binnen 24 uur
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Mail Ons
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeelgesteldeVragen;