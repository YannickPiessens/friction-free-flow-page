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
        title="Zie Hoe Succesvolle Merken Het Doen"
        description="Ontdek in deze exclusieve demo hoe toonaangevende bedrijven hun omzet verdubbelen via authentieke influencer partnerships"
      />
      <RegistrationForm />
    </div>
  );
};

export default VoorMerken;