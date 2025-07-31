import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VSLVideo } from "@/components/VSLVideo";
import { RegistrationForm } from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <VSLVideo 
        videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
        title="Lanceren Met Creators - Zonder Risico"
        description="Ontdek hoe succesvolle ondernemers hun omzet verdubbelen door samen te werken met creators die daadwerkelijk verkopen."
        className="py-16"
      />
      <RegistrationForm />
    </div>
  );
};

export default Index;
