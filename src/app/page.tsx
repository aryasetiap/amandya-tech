import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { FeaturesBento } from '@/components/sections/FeaturesBento';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { AddonEcosystem } from '@/components/sections/AddonEcosystem';
import { PricingSection } from '@/components/sections/PricingSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQSection';
import { BottomCTA } from '@/components/sections/BottomCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <FeaturesBento />
      <DashboardPreview />
      <AddonEcosystem />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <BottomCTA />
    </div>
  );
}
