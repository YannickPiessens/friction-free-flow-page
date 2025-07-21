import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RegistrationForm } from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <RegistrationForm />
    </div>
  );
};

export default Index;
