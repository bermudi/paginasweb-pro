import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { CarAnalogy } from "@/components/CarAnalogy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <CarAnalogy />
      <Contact />
    </main>
  );
};

export default Index;