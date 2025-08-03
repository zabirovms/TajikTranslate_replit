import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Rates } from "@/components/rates";
import { Tools } from "@/components/tools";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { ProfessionalProfiles } from "@/components/professional-profiles";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main className="space-y-0">
        <About />
        <Services />
        <Rates />
        <Tools />
        <Portfolio />
        <Testimonials />
        <ProfessionalProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
