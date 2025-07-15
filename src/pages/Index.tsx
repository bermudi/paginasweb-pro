import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { CarAnalogy } from "@/components/CarAnalogy";
import { Contact } from "@/components/Contact";
import { BottomBar } from "@/components/BottomBar";
import { useState } from "react";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <Pricing selectedPackage={selectedPackage} onPackageSelect={setSelectedPackage} onAddonsChange={setSelectedAddons} />
      <CarAnalogy />
      <Contact selectedPackage={selectedPackage} selectedAddons={selectedAddons} />
      <BottomBar selectedPackage={selectedPackage} selectedAddons={selectedAddons} />
    </main>
  );
};

export default Index;