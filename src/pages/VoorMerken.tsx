import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RegistrationForm } from "@/components/RegistrationForm";

const VoorMerken = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <RegistrationForm />
    </div>
  );
};

export default VoorMerken;