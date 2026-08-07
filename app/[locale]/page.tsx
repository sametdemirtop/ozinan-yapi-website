import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CTASection from '@/components/sections/CTASection';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/forms/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Features />
      <Services />
      <ServiceAreas />
      <CTASection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
