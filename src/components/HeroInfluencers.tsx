import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

export const HeroInfluencers = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Content creators en influencers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-light/10 backdrop-blur-sm border border-luxury-gold/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-luxury-gold" />
            <span className="text-luxury-light text-sm font-medium">
              Sluit je aan bij 10.000+ succesvolle creators
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-luxury-light mb-6 leading-tight">
            Verdien Meer Met Jouw Content —
            <span className="bg-gradient-luxury bg-clip-text text-transparent"> Echte Sales </span>
            In Plaats Van Alleen Likes
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-luxury-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Word onderdeel van het platform waar authentieke content échte resultaten oplevert.
            Werk samen met premium merken en verdien per verkoop — niet per post.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto animate-glow"
            >
              Start Als Creator
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Bekijk Verdienmogelijkheden
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-luxury-light/60 text-sm">
            <p className="mb-2">Gratis aanmelden • Geen minimumvereisten • Uitbetaling per verkoop</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs">
              <span>💰 Tot €5.000/maand mogelijk</span>
              <span>📈 Realtime verkoopdata</span>
              <span>🤝 Directe merksamenwerking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/10 rounded-full blur-xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl animate-glow delay-1000"></div>
    </section>
  );
};