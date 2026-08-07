import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';

const ServiceAreas = dynamic(() => import('@/components/sections/ServiceAreas'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const ContactForm = dynamic(() => import('@/components/forms/ContactForm'));

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
