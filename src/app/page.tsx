import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Solutions/>
       <Clients />
    </main>
  );
}