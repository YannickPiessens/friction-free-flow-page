import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VSLVideo } from "@/components/VSLVideo";
import { RegistrationForm } from "@/components/RegistrationForm";

const VoorMerken = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <VSLVideo 
        videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
        title="Van €0 naar €50k+ Omzet in 90 Dagen"
        description="Zie hoe ondernemers hun verkopen verdrievoudigen door influencers slim in te zetten. Echte cases, echte resultaten."
      />
      <RegistrationForm />
    </div>
  );
};

export default VoorMerken;