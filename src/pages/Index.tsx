import { Navigation } from "@/components/Navigation";
import { HeroInfluencers } from "@/components/HeroInfluencers";
import { VSLVideo } from "@/components/VSLVideo";
import { InfluencerRegistrationForm } from "@/components/InfluencerRegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroInfluencers />
      <VSLVideo 
        videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
        title="Zie Hoe Succesvolle Creators Verdienen"
        description="Leer van topverdieners hoe zij consistent €2k-5k per maand verdienen via product partnerships"
      />
      <InfluencerRegistrationForm />
    </div>
  );
};

export default Index;
