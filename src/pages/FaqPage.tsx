import { FAQ } from "@/components/FAQ";
import { FAQHero } from "@/components/FAQHero";

const FaqPage = () => {
  return (
    <main className="overflow-hidden">
      <FAQHero />
      <FAQ />
    </main>
  );
};

export default FaqPage;
