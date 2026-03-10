import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { FeaturesBento } from '@/components/sections/FeaturesBento';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { AddonEcosystem } from '@/components/sections/AddonEcosystem';
import { PricingSection } from '@/components/sections/PricingSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQSection';
import { BottomCTA } from '@/components/sections/BottomCTA';
import { client } from '@/lib/sanity.client';
import { testimonialsQuery, faqsQuery } from '@/lib/sanity.queries';

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
