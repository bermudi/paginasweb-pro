import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SalesmanAnalogy } from "@/components/SalesmanAnalogy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <SalesmanAnalogy />
      <Contact />
    </main>
  );
};

export default Index;