'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { HeroTypography } from '@/components/animations/HeroTypography';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[120px] opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b111a_1px,transparent_1px),linear-gradient(to_bottom,#0b111a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <FadeUp delay={0.1} yOffset={20}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 glass mb-8 animate-pulse-slow">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-white/80">Amandya Tech V1.1 Udah Live 🎉</span>
                        </div>
                    </FadeUp>

                    {/* Headline Typography */}
                    <HeroTypography
                        text="Upgrade Bisnis Photobooth Kamu Pakai Automasi Pintar"
                        highlightedWord="Pintar"
                    />

                    {/* Subheadline */}
                    <FadeUp delay={0.3}>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Ekosistem software all-in-one yang didesain khusus buat operator photobooth zaman now. Nikmatin fitur live gallery, support dual-kamera, dan flow consent yang otomatis banget.
                        </p>
                    </FadeUp>

                    {/* CTA Buttons */}
                    <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20"
                        >
                            Mulai Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto rounded-full px-8 h-12 text-base glass border-white/10 hover:bg-white/5"
                        >
                            Jadwalin Demo
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </FadeUp>
                </div>

                {/* Dashboard Mockup / Isometric View */}
                <FadeUp delay={0.6} duration={1} className="mt-20 relative mx-auto max-w-5xl perspective-[2000px]">
                    <div
                        className="relative rounded-2xl border border-white/10 bg-[#0A1018] shadow-2xl overflow-hidden glass-card"
                        style={{
                            transform: 'rotateX(8deg) rotateY(0deg) scale(1)', // Slight 3D effect tilting back
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Top Bar Fake Window */}
                        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>

                        {/* Dashboard content wrapper */}
                        <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700">
                            {/* Mockup blocks mapping out fake stats */}
                            <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center p-6 gap-2">
                                <div className="w-8 h-8 rounded-lg bg-accent/20 mb-2" />
                                <div className="w-1/2 h-2 rounded bg-white/20" />
                                <div className="w-3/4 h-4 rounded bg-white/40" />
                            </div>
                            <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center p-6 gap-2">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mb-2" />
                                <div className="w-1/2 h-2 rounded bg-white/20" />
                                <div className="w-3/4 h-4 rounded bg-white/40" />
                            </div>
                            <div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center p-6 gap-2">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 mb-2" />
                                <div className="w-1/2 h-2 rounded bg-white/20" />
                                <div className="w-3/4 h-4 rounded bg-white/40" />
                            </div>

                            {/* Main Graph Area */}
                            <div className="md:col-span-2 h-64 rounded-xl bg-white/5 border border-white/10 p-6 flex items-end gap-3 opacity-80">
                                {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                                    <div key={i} className="flex-1 bg-accent/40 rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>

                            {/* Side list */}
                            <div className="h-64 rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-2 rounded bg-white/20" />
                                            <div className="w-2/3 h-2 rounded bg-white/10" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Glow projection from bottom of mockup */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/40 blur-[50px] pointer-events-none" />
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
