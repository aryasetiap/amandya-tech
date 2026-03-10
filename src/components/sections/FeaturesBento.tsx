'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Camera, Cloud, Share2, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// Reusable Bento wrapper
function BentoCard({
    className,
    title,
    description,
    icon,
    children,
}: {
    className?: string;
    title: string;
    description: string;
    icon: ReactNode;
    children?: ReactNode;
}) {
    return (
        <div
            className={cn(
                'group relative rounded-2xl border border-white/10 glass-card bg-white/[0.02] p-8 overflow-hidden hover:bg-white/[0.04] transition-colors',
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6 transition-transform group-hover:scale-110 duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                    {description}
                </p>
                {children && <div className="mt-auto pt-6 border-t border-white/10">{children}</div>}
            </div>
        </div>
    );
}

export function FeaturesBento() {
    return (
        <section id="features" className="py-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <FadeUp className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Everything you need in one <span className="text-accent">smart system</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Ditch the multiple subscriptions and disjointed software. Amandya Tech brings your entire workflow into a single, cohesive ecosystem.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
                    {/* Main big card */}
                    <FadeUp delay={0.1} className="md:col-span-2 md:row-span-2">
                        <BentoCard
                            title="Dual Camera & Video Support"
                            description="Seamlessly switch between DSLR for high-quality photos and Webcam for fun boomerangs or wide-angle shots. Record videos instantly without changing apps."
                            icon={<Camera className="w-6 h-6" />}
                            className="h-full flex flex-col"
                        >
                            <div className="flex-1 w-full bg-black/40 rounded-xl border border-white/5 overflow-hidden relative group-hover:border-accent/30 transition-colors">
                                {/* Decorative layout inside */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
                                    <div className="w-1/2 h-full bg-white/5 rounded flex items-center justify-center border border-white/10 relative overflow-hidden">
                                        <Camera className="w-8 h-8 text-white/20" />
                                        <div className="absolute bottom-2 left-2 text-xs text-white/40">DSLR PRO</div>
                                    </div>
                                    <div className="w-1/2 h-full bg-white/5 rounded flex items-center justify-center border border-white/10 relative overflow-hidden">
                                        <Smartphone className="w-8 h-8 text-white/20" />
                                        <div className="absolute bottom-2 left-2 text-xs text-white/40">WEBCAM / VIDEO</div>
                                    </div>
                                </div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Top right card */}
                    <FadeUp delay={0.2}>
                        <BentoCard
                            title="Instant Sharing"
                            description="Guests receive their captures via QR code, Email, or WhatsApp instantly via our edge-optimized network."
                            icon={<Share2 className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Middle right card */}
                    <FadeUp delay={0.3}>
                        <BentoCard
                            title="Cloud Gallery Sync"
                            description="Every photo is securely backed up and synced to your live galleries in real-time."
                            icon={<Cloud className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Bottom row span 2 */}
                    <FadeUp delay={0.4} className="md:col-span-2">
                        <BentoCard
                            title="Automated Data Collection"
                            description="Collect emails, phone numbers, and digital consent seamlessly during the flow. Export directly to your CRM."
                            icon={<ShieldCheck className="w-6 h-6" />}
                            className="h-full overflow-visible"
                        >
                            <div className="flex gap-2">
                                <div className="h-8 rounded-full bg-accent/20 px-4 text-xs flex items-center text-accent/80 border border-accent/20">Consent App</div>
                                <div className="h-8 rounded-full bg-white/5 px-4 text-xs flex items-center text-white/60 border border-white/10">CSV Export</div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Bottom right */}
                    <FadeUp delay={0.5}>
                        <BentoCard
                            title="Zero Latency"
                            description="Engineered in Rust & C++ for blazing fast rendering and processing."
                            icon={<Zap className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
