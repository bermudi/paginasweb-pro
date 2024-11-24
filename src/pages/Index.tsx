import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;