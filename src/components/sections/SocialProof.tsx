'use client';

import { FadeUp } from '@/components/animations/FadeUp';

const CLIENTS = [
    { name: 'Acme Corp', logo: 'https://ui.shadcn.com/logos/acme.svg' },
    { name: 'Vercel', logo: 'https://ui.shadcn.com/logos/vercel.svg' },
    { name: 'Next.js', logo: 'https://ui.shadcn.com/logos/nextjs.svg' },
    { name: 'Stripe', logo: 'https://ui.shadcn.com/logos/stripe.svg' },
    { name: 'Supabase', logo: 'https://ui.shadcn.com/logos/supabase.svg' },
];

export function SocialProof() {
    return (
        <section className="py-20 border-y border-white/5 bg-white/2">
            <div className="container mx-auto px-4 text-center">
                <FadeUp>
                    <p className="text-sm font-medium text-white/40 mb-10 uppercase tracking-widest">
                        Dipercaya sama operator photobooth paling inovatif se-dunia
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simulating logos for now - replace with actual svgs from client */}
                        <div className="text-xl font-bold font-heading">ACME Studios</div>
                        <div className="text-xl font-bold font-heading">Lens & Light</div>
                        <div className="text-xl font-bold font-heading">SnapBox Pro</div>
                        <div className="text-xl font-bold font-heading">Memoria Booth</div>
                        <div className="text-xl font-bold font-heading">Flash Events</div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
