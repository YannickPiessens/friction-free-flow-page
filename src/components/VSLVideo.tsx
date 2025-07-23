import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface VSLVideoProps {
  videoUrl: string;
  title?: string;
  description?: string;
  className?: string;
}

export const VSLVideo = ({ 
  videoUrl, 
  title = "Bekijk Hoe Het Werkt", 
  description = "Ontdek in deze korte video hoe je kunt profiteren van onze platforms",
  className = ""
}: VSLVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
              <video
                className="w-full h-full object-cover"
                controls
                poster="/lovable-uploads/d7d1bd47-118b-422f-8313-e76ff9444b2c.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Je browser ondersteunt geen HTML5 video.
              </video>

              {/* Custom Play Button Overlay (only when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-luxury-dark/30 flex items-center justify-center group cursor-pointer">
                  <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center shadow-luxury transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <Play className="w-8 h-8 text-luxury-dark ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/80 to-transparent p-6">
              <div className="text-luxury-light">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Exclusieve presentatie</span>
                </div>
                <h3 className="text-lg font-semibold">Millionstores Platform Demo</h3>
              </div>
            </div>
          </div>

          {/* CTA Below Video */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              🎯 Bekijk de volledige demo en ontdek alle mogelijkheden
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};