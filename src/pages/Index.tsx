import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { SalesmanAnalogy } from "@/components/SalesmanAnalogy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Services />
      <TechStack />
      <SalesmanAnalogy />
      <Contact />
    </main>
  );
};

export default Index;