import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { FeaturesBento } from '@/components/sections/FeaturesBento';
import { client } from '@/lib/sanity.client';
import { testimonialsQuery, faqsQuery } from '@/lib/sanity.queries';
import dynamic from 'next/dynamic';

const DashboardPreview = dynamic(() => import('@/components/sections/DashboardPreview').then(mod => mod.DashboardPreview), { ssr: true });
const AddonEcosystem = dynamic(() => import('@/components/sections/AddonEcosystem').then(mod => mod.AddonEcosystem), { ssr: true });
const PricingSection = dynamic(() => import('@/components/sections/PricingSection').then(mod => mod.PricingSection), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => mod.Testimonials), { ssr: true });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(mod => mod.FAQSection), { ssr: true });
const BottomCTA = dynamic(() => import('@/components/sections/BottomCTA').then(mod => mod.BottomCTA), { ssr: true });

export default async function Home() {
  const [testimonials, faqs] = await Promise.all([
    client.fetch(testimonialsQuery),
    client.fetch(faqsQuery)
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <FeaturesBento />
      <DashboardPreview />
      <AddonEcosystem />
      <PricingSection />
      <Testimonials initialTestimonials={testimonials} />
      <FAQSection initialFaqs={faqs} />
      <BottomCTA />
    </div>
  );
}
