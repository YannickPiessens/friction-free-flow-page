import { Navigation } from "@/components/Navigation";
import { HeroInfluencers } from "@/components/HeroInfluencers";
import { VSLVideo } from "@/components/VSLVideo";
import { InfluencerRegistrationForm } from "@/components/InfluencerRegistrationForm";

const Index = () => {
  console.log('Index page rendering...');
  
  try {
    return (
      <div className="min-h-screen overflow-x-hidden bg-white text-black">
        <h1 className="text-4xl p-8 text-black bg-gray-100">Test - App is working!</h1>
        <Navigation />
        {/* Temporarily disabled HeroInfluencers to test */}
        {/* <HeroInfluencers /> */}
        <div className="p-8 bg-blue-100 text-black">
          <h2 className="text-2xl">Navigation should be above this</h2>
        </div>
        {/* Temporarily disabled other components */}
        {/*
        <VSLVideo 
          videoUrl="https://millionstores.com/wp-content/uploads/2025/07/Millionstores-voor-ondernemers.mp4"
          title="Van 0 Followers naar €3k per Maand"
          description="Leer hoe creators zonder grote following alsnog succesvol worden. De geheimen van topverdieners onthuld."
          className="py-16"
        />
        <InfluencerRegistrationForm />
        */}
      </div>
    );
  } catch (error) {
    console.error('Error in Index component:', error);
    return <div className="p-8 bg-red-100">Error: {String(error)}</div>;
  }
};

export default Index;
