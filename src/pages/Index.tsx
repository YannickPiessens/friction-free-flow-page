import { Navigation } from "@/components/Navigation";
import { HeroInfluencers } from "@/components/HeroInfluencers";
import { InfluencerRegistrationForm } from "@/components/InfluencerRegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroInfluencers />
      <InfluencerRegistrationForm />
    </div>
  );
};

export default Index;
