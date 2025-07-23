import { useState } from "react";
import { Play, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VSLVideoProps {
  videoUrl: string;
  title?: string;
  description?: string;
  className?: string;
}

export const VSLVideo = ({ 
  videoUrl, 
  title = "Bekijk Hoe Het Werkt", 
  description = "Ontdek in deze korte video hoe je kunt profiteren van ons platform",
  className = ""
}: VSLVideoProps) => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoError = () => {
    setVideoError(true);
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const openVideoInNewTab = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className={`py-24 bg-gradient-subtle ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-luxury bg-luxury-dark">
            <div className="aspect-video relative">
              {videoError ? (
                // Fallback when video fails to load
                <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                  <div className="text-center text-luxury-light p-8">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-luxury-gold" />
                    <h3 className="text-xl font-semibold mb-4">Video Demo Beschikbaar</h3>
                    <p className="text-luxury-light/80 mb-6 max-w-md mx-auto">
                      Bekijk onze exclusieve demo video om te zien hoe het platform werkt en welke resultaten mogelijk zijn.
                    </p>
                    <Button 
                      onClick={openVideoInNewTab}
                      variant="luxury"
                      size="lg"
                      className="gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Bekijk Demo Video
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title="Platform Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onError={handleVideoError}
                    onLoad={handleVideoLoad}
                  />
                  
                  {isLoading && (
                    <div className="absolute inset-0 bg-luxury-dark flex items-center justify-center">
                      <div className="text-center text-luxury-light">
                        <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p>Video wordt geladen...</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* CTA Below Video */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              💡 Deze demo toont echte resultaten van bestaande gebruikers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};