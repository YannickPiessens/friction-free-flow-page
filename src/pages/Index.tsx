import { Navigation } from "@/components/Navigation";
import { HeroInfluencers } from "@/components/HeroInfluencers";
import { VSLVideo } from "@/components/VSLVideo";
import { InfluencerRegistrationForm } from "@/components/InfluencerRegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <VSLVideo 
        videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
        title="Van 0 Followers naar €3k per Maand"
        description="Leer hoe creators zonder grote following alsnog succesvol worden. De geheimen van topverdieners onthuld."
        className="pt-16"
      />
      <HeroInfluencers />
      <InfluencerRegistrationForm />
    </div>
  );
};

export default Index;
