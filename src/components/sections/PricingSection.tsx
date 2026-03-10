'use client';

import { useState } from 'react';
import { FadeUp } from '@/components/animations/FadeUp';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const TIERS = [
    {
        name: 'Lite',
        description: 'Pas banget buat independent operator yang baru mulai hustle.',
        priceMonthly: 49,
        priceYearly: 39,
        features: [
            '1 Active Device',
            'Watermarked Live Gallery',
            'Standard Email Sharing',
            'Basic Analytics',
            'Community Support',
        ],
        notIncluded: [
            'White-label Experience',
            'Dual Camera Support',
            'CRM Integration',
        ],
    },
    {
        name: 'Pro',
        description: 'Buat bisnis yang lagi running fast dan butuh 100% white-label plus fitur Pro.',
        priceMonthly: 99,
        priceYearly: 79,
        isPopular: true,
        features: [
            'Up to 3 Active Devices',
            '100% White-label Gallery',
            'SMS & WhatsApp Sharing',
            'Dual Camera (DSLR + Webcam)',
            'Advanced Analytics & Export',
            'Priority Email Support',
            'Custom Email Templates',
        ],
        notIncluded: [
            'Dedicated Account Manager',
        ],
    },
    {
        name: 'Enterprise',
        description: 'Unlimited scale-up buat agensi besar atau permanent installation.',
        priceMonthly: 249,
        priceYearly: 199,
        features: [
            'Unlimited Active Devices',
            'Everything in Pro',
            'Custom API Access',
            'SLA Guarantee',
            'Dedicated Account Manager',
            'Custom Feature Requests',
            'On-site Training',
        ],
        notIncluded: [],
    },
];

export function PricingSection() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <FadeUp>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Simple & Transparent Pricing
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            No hidden fees. Pilih plan yang paling pas buat scale bisnis lo sekarang.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={cn(
                                    'px-6 py-2 rounded-full text-sm font-medium transition-all',
                                    !isYearly ? 'bg-white/10 text-white shadow-sm' : 'text-white/50 hover:text-white'
                                )}
                            >
                                Bulanan
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={cn(
                                    'px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                                    isYearly ? 'bg-accent text-white shadow-sm' : 'text-white/50 hover:text-white'
                                )}
                            >
                                Tahunan
                                <span className={cn("text-[10px] px-2 py-0.5 rounded-full", isYearly ? "bg-white/20" : "bg-accent/20 text-accent")}>
                                    Hemat 20%
                                </span>
                            </button>
                        </div>
                    </FadeUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                    {TIERS.map((tier, i) => (
                        <FadeUp key={tier.name} delay={i * 0.1} className={cn("flex", tier.isPopular && "md:-mt-4 md:mb-4")}>
                            <div className={cn(
                                "flex flex-col w-full p-8 rounded-3xl border transition-colors glass-card relative overflow-hidden",
                                tier.isPopular ? "border-accent/50 bg-[#0B111A]" : "border-white/10 bg-white/2 hover:bg-white/4"
                            )}>
                                {/* Decorative popular glow */}
                                {tier.isPopular && (
                                    <>
                                        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
                                        <div className="absolute top-8 right-8 text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                                            Paling Laris
                                        </div>
                                    </>
                                )}

                                <h3 className="text-xl font-heading font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-sm text-white/60 mb-6 min-h-[40px]">{tier.description}</p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">
                                        ${isYearly ? tier.priceYearly : tier.priceMonthly}
                                    </span>
                                    <span className="text-white/50">/bln</span>
                                    {isYearly && (
                                        <div className="text-sm text-accent mt-1">
                                            Ditagih ${tier.priceYearly * 12} per tahun
                                        </div>
                                    )}
                                </div>

                                <Button
                                    variant={tier.isPopular ? 'default' : 'outline'}
                                    className={cn(
                                        "w-full rounded-full mb-8",
                                        tier.isPopular
                                            ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20"
                                            : "glass border-white/10 hover:bg-white/5 text-white"
                                    )}
                                >
                                    Mulai dengan {tier.name}
                                </Button>

                                <div className="flex-1 space-y-4">
                                    <p className="text-sm font-medium text-white/80 border-b border-white/10 pb-2 mb-4">
                                        Yang lo dapet:
                                    </p>

                                    <ul className="space-y-3">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                                                <span className="text-sm text-white/70">{feature}</span>
                                            </li>
                                        ))}
                                        {tier.notIncluded.map(feature => (
                                            <li key={feature} className="flex items-start gap-3 opacity-50">
                                                <X className="w-5 h-5 text-white/40 shrink-0" />
                                                <span className="text-sm text-white/40 line-through">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
