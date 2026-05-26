import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import QuoteCalculator from "@/components/QuoteCalculator";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <QuoteCalculator />
      <ContactForm />
    </>
  );
}
