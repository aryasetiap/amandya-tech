'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Camera, RefreshCw, CreditCard, Layout, BarChart3, Zap, Smartphone } from 'lucide-react';
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
                'group relative rounded-2xl border border-border glass-card bg-card/50 p-8 overflow-hidden hover:bg-foreground/4 transition-all duration-300 shadow-sm hover:shadow-md',
                className
            )}
        >
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 transition-transform group-hover:scale-110 duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-1">
                    {description}
                </p>
                {children && <div className="mt-auto pt-6 border-t border-border">{children}</div>}
            </div>
        </div>
    );
}

export function FeaturesBento() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-accent/20 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <FadeUp className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Semua yang Lo Butuhin di <span className="text-accent">Satu Sistem Pintar</span>
                    </h2>
                    <p className="text-lg text-foreground/60">
                        Tinggalin subscription mahal & software jadul yang ribet. Amandya Tech gabungin semua workflow lo ke satu ekosistem yang effortless.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {/* Main big card: Cam Shutter Mode */}
                    <FadeUp delay={0.1} className="md:col-span-2 ">
                        <BentoCard
                            title="Cam Shutter & Dual Mode"
                            description="Satu software buat semua kebutuhan. Switch instan antara DSLR untuk hasil studio-quality, atau Webcam untuk wide-angle & video seru-seruan tanpa restart aplikasi."
                            icon={<Camera className="w-6 h-6" />}
                            className="h-full flex flex-col"
                        >
                            <div className="flex-1 w-full bg-foreground/2 rounded-xl border border-border overflow-hidden relative group-hover:border-accent/30 transition-all duration-500 min-h-[160px]">
                                <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
                                    <div className="w-1/2 h-full bg-background rounded-lg flex flex-col items-center justify-center border border-border relative overflow-hidden group/sub shadow-sm">
                                        <Camera className="w-8 h-8 text-accent animate-pulse" />
                                        <div className="mt-2 text-[10px] text-foreground/40 font-mono">DSLR_ACTIVE</div>
                                        <div className="absolute top-2 right-2 flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-full bg-background/50 rounded-lg flex flex-col items-center justify-center border border-border relative overflow-hidden opacity-50">
                                        <Smartphone className="w-8 h-8 text-foreground/20" />
                                        <div className="mt-2 text-[10px] text-foreground/40 font-mono">WEBCAM_IDLE</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    <div className="px-3 py-1 rounded-full bg-accent/20 text-[10px] text-accent font-bold border border-accent/20 shadow-sm">Auto Shutter</div>
                                    <div className="px-3 py-1 rounded-full bg-foreground/5 text-[10px] text-foreground/60 font-medium border border-border">Mirror Mode</div>
                                </div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Payment System */}
                    <FadeUp delay={0.2}>
                        <BentoCard
                            title="Payment System Sat-Set"
                            description="Sat-set pake QRIS atau cash. Pantau cuan lo real-time, laporannya udah otomatis rapi gak pake ribet."
                            icon={<CreditCard className="w-6 h-6" />}
                            className="h-full"
                        >
                            <div className="flex items-center justify-between p-3 rounded-xl bg-foreground/3 border border-border shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                                        <Camera className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] text-foreground/60 font-mono">Transaction_OK</span>
                                </div>
                                <span className="text-xs font-bold text-accent">QRIS Active</span>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Cloud Sync */}
                    <FadeUp delay={0.3}>
                        <BentoCard
                            title="Real-time Cloud Sync"
                            description="Gak perlu fomo takut file ilang. Tiap jepretan langsung auto-sync ke cloud. Gallery tamu lo bakal update instan, no delay!"
                            icon={<RefreshCw className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Card: Custom Branding */}
                    <FadeUp delay={0.4} className="md:col-span-2">
                        <BentoCard
                            title="Full Visual Branding"
                            description="Lo bebas custom vibes-nya! Dari UI screen, tombol, sampe frame fotonya bisa disesuaiin sama tema event klien. Branding lo jadi makin stand out."
                            icon={<Layout className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Card: Analytics (Wide) */}
                    <FadeUp delay={0.5} className="md:col-span-2">
                        <BentoCard
                            title="Business Intelligence & Dashboard"
                            description="Kepoin tren bisnis lo di sini. Liat frame mana yang paling hype, jam rame event, sampe data customer buat narik mereka balik lagi."
                            icon={<BarChart3 className="w-6 h-6" />}
                            className="h-full"
                        >
                            <div className="flex gap-3">
                                <div className="flex-1 h-3 rounded-full bg-foreground/5 overflow-hidden border border-border/50">
                                    <div className="h-full w-[70%] bg-accent rounded-full" />
                                </div>
                                <div className="flex-1 h-3 rounded-full bg-foreground/5 overflow-hidden border border-border/50">
                                    <div className="h-full w-[40%] bg-purple-500 rounded-full" />
                                </div>
                                <div className="flex-1 h-3 rounded-full bg-foreground/5 overflow-hidden border border-border/50">
                                    <div className="h-full w-[90%] bg-emerald-500 rounded-full" />
                                </div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Auto Update */}
                    <FadeUp delay={0.6}>
                        <BentoCard
                            title="Auto Update System"
                            description="Gak perlu repot update manual. Software lo bakal dapet fitur baru secara otomatis. One-click magic, sat-sat-set! ✨"
                            icon={<Zap className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>
                </div>

            </div>
        </section>
    );
}
