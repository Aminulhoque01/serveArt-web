import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Solutions/>
       <Clients />
       <WhyUs />
    </main>
  );
}