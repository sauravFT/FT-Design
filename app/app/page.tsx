import Hero from '../components/website/Hero';
import { LogoStrip, Features, ProductSplit, Stats, Pricing, Testimonial, FinalCTA, Footer } from '../components/website/Sections';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Features />
      <ProductSplit />
      <Stats />
      <Pricing />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </>
  );
}
