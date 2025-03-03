import Benefits from "./Benefist";
import Cta from "./CTA";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
   <div>
    <Hero />
    <Benefits className={undefined} />
    <HowItWorks />
    <Testimonials />
    <Cta />
    <FAQ />
    <Footer />
   </div>
  );
}
