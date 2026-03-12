'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { HeroTypography } from '@/components/animations/HeroTypography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, LayoutDashboard, Image as ImageIcon, Users, BarChart3, Settings, Zap, Camera, Smartphone } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
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
                            <span className="text-sm font-medium text-white/80">Amandya Tech V1.1 Udah Launching 🎉</span>
                        </div>
                    </FadeUp>

                    <HeroTypography
                        text="Level Up Bisnis Photobooth Lo Pakai Smart Automation 🚀"
                        highlightedWord="Smart Automation"
                    />

                    {/* Subheadline */}
                    <FadeUp delay={0.3}>
                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Ekosistem software all-in-one yang di-desain khusus buat operator photobooth zaman now. Nikmatin seamless workflow dengan Live Gallery, Dual Camera, dan Digital Consent yang otomatis jalan sendiri.
                        </p>
                    </FadeUp>

                    {/* CTA Buttons */}
                    <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="#pricing" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20"
                            >
                                Mulai Level Up Sekarang
                            </Button>
                        </Link>
                        <Link href="#features" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full rounded-full px-8 h-12 text-base glass border-white/10 hover:bg-white/5"
                            >
                                Lihat Fitur Kece
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </FadeUp>
                </div>

                {/* Dashboard Mockup / Isometric View */}
                <FadeUp delay={0.6} duration={1} className="my-20 relative mx-auto max-w-5xl perspective-[2000px]">
                    <div
                        className="relative rounded-2xl border border-white/10 bg-[#0A1018] shadow-2xl overflow-hidden glass-card"
                        style={{
                            transform: 'rotateX(8deg) rotateY(0deg) scale(1)', // Slight 3D effect tilting back
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Top Bar Fake Window */}
                        <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Amandya_Cloud_OS_v1.1</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Dashboard content wrapper */}
                        <div className="flex h-[450px] opacity-80 hover:opacity-100 transition-opacity duration-700 relative">
                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                                <div className="w-full h-[2px] bg-linear-to-r from-transparent via-accent/50 to-transparent absolute top-0 left-0 animate-scan" style={{ textShadow: '0 0 10px var(--accent)' }} />
                            </div>

                            {/* Sidebar Mockup */}
                            <div className="w-16 md:w-20 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-white/2">
                                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20">
                                    <LayoutDashboard size={20} />
                                </div>
                                <div className="flex flex-col gap-4 text-white/30">
                                    <ImageIcon size={20} />
                                    <BarChart3 size={20} />
                                    <Users size={20} />
                                    <div className="mt-20">
                                        <Settings size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Main Viewport Mockup */}
                            <div className="flex-1 flex flex-col p-6 overflow-hidden">
                                {/* Header / Stats Row */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group/card">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Live Captures</div>
                                        <div className="text-xl font-bold text-white mb-1">1,284</div>
                                        <div className="text-[10px] text-emerald-400 font-medium">+12.5%</div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5">
                                            <Camera size={48} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group/card">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Active Booths</div>
                                        <div className="text-xl font-bold text-white mb-1">03</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] text-emerald-500 font-medium">All Online</span>
                                        </div>
                                        <div className="absolute -right-2 -bottom-2 opacity-5">
                                            <Smartphone size={48} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden hidden lg:block">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Bandwidth</div>
                                        <div className="text-xl font-bold text-white mb-1">4.2 GB</div>
                                        <div className="text-[10px] text-blue-400 font-medium">Synced</div>
                                        <Zap className="absolute -right-2 -bottom-2 opacity-5" size={48} />
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden hidden lg:block">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Avg Rendering</div>
                                        <div className="text-xl font-bold text-white mb-1">0.8s</div>
                                        <div className="text-[10px] text-purple-400 font-medium">Accelerated</div>
                                        <Sparkles className="absolute -right-2 -bottom-2 opacity-5" size={48} />
                                    </div>
                                </div>

                                {/* Content Grid Area */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                                    {/* Large Graph Area */}
                                    <div className="lg:col-span-2 rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col relative group/graph overflow-hidden">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-xs text-white/60 font-medium">Hourly Engagement</div>
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-accent/50" />
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-end gap-2 md:gap-3">
                                            {[30, 45, 25, 60, 40, 75, 55, 90, 65, 85, 45, 100].map((h, i) => (
                                                <div key={i} className="flex-1 bg-linear-to-t from-accent/40 via-accent/20 to-transparent rounded-t-sm relative group/bar transition-all hover:scale-x-110" style={{ height: `${h}%` }}>
                                                    <div className="absolute inset-0 bg-accent opacity-0 group-hover/bar:opacity-30 transition-opacity" />
                                                </div>
                                            ))}
                                        </div>
                                        {/* Overlay Glow */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Sidebar feed mockup */}
                                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex flex-col gap-3 min-h-0">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-mono">Recent_Activity.LOG</div>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/2 border border-white/5">
                                                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                                                    <ImageIcon size={12} className="text-white/40" />
                                                </div>
                                                <div className="flex-1 space-y-1.5 overflow-hidden">
                                                    <div className="w-full h-1.5 rounded bg-white/20" />
                                                    <div className="w-2/3 h-1 rounded bg-white/10" />
                                                </div>
                                                <div className="text-[8px] text-emerald-400 font-mono">OK</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
