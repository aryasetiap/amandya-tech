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
                'group relative rounded-2xl border border-white/10 glass-card bg-white/2 p-8 overflow-hidden hover:bg-white/4 transition-colors',
                className
            )}
        >
            <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        All You Need in <span className="text-accent">Satu Sistem Pintar</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Tinggalin subscription mahal & software jadul yang ribet. Amandya Tech gabungin semua workflow lo ke satu ekosistem yang effortless.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Main big card: Cam Shutter Mode */}
                    <FadeUp delay={0.1} className="md:col-span-2 md:row-span-2">
                        <BentoCard
                            title="Cam Shutter & Dual Mode"
                            description="Satu software buat semua kebutuhan. Switch instan antara DSLR untuk hasil studio-quality, atau Webcam untuk wide-angle & video seru-seruan tanpa restart aplikasi."
                            icon={<Camera className="w-6 h-6" />}
                            className="h-full flex flex-col"
                        >
                            <div className="flex-1 w-full bg-black/40 rounded-xl border border-white/5 overflow-hidden relative group-hover:border-accent/30 transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
                                    <div className="w-1/2 h-full bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10 relative overflow-hidden group/sub">
                                        <Camera className="w-8 h-8 text-accent animate-pulse" />
                                        <div className="mt-2 text-[10px] text-white/40 font-mono">DSLR_ACTIVE</div>
                                        <div className="absolute top-2 right-2 flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                    </div>
                                    <div className="w-1/2 h-full bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10 relative overflow-hidden opacity-50">
                                        <Smartphone className="w-8 h-8 text-white/20" />
                                        <div className="mt-2 text-[10px] text-white/40 font-mono">WEBCAM_IDLE</div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                     <div className="px-3 py-1 rounded-full bg-accent/20 text-[10px] text-accent font-bold border border-accent/20">Auto Shutter</div>
                                     <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] text-white/60 font-medium">Mirror Mode</div>
                                </div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Payment System */}
                    <FadeUp delay={0.2}>
                        <BentoCard
                            title="Smart Payment System"
                            description="Terintegrasi dengan QRIS dan sistem pembayaran tunai. Monitoring transaksi jadi gampang, transparan, dan otomatis masuk laporan."
                            icon={<CreditCard className="w-6 h-6" />}
                            className="h-full"
                        >
                             <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                                 <div className="flex items-center gap-2">
                                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                     <span className="text-[10px] text-white/60 font-mono">Transaction_OK</span>
                                 </div>
                                 <span className="text-xs font-bold text-accent">QRIS Active</span>
                             </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Cloud Sync */}
                    <FadeUp delay={0.3}>
                        <BentoCard
                            title="Real-time Cloud Sync"
                            description="Gak usah takut file hilang. Tiap jepretan langsung kedorong ke cloud dan sinkron ke Live Gallery tamu secara instan."
                            icon={<RefreshCw className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Card: Custom Branding */}
                    <FadeUp delay={0.4}>
                        <BentoCard
                            title="Full Visual Branding"
                            description="Custom semuanya! Mulai dari UI Screen, Start Button, sampai Frame Photo yang bisa lo ganti-ganti sesuai tema event klien."
                            icon={<Layout className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>

                    {/* Card: Analytics (Wide) */}
                    <FadeUp delay={0.5} className="md:col-span-2">
                        <BentoCard
                            title="Business Intelligence & Analytics"
                            description="Pantau performa bisnis lo. Liat frame mana yang paling laku, jam sibuk event, sampai kumpulin data customer otomatis buat retargeting."
                            icon={<BarChart3 className="w-6 h-6" />}
                            className="h-full"
                        >
                            <div className="flex gap-3">
                                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                                     <div className="h-full w-[70%] bg-accent rounded-full" />
                                </div>
                                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                                     <div className="h-full w-[40%] bg-purple-500 rounded-full" />
                                </div>
                                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                                     <div className="h-full w-[90%] bg-emerald-500 rounded-full" />
                                </div>
                            </div>
                        </BentoCard>
                    </FadeUp>

                    {/* Card: Auto Update */}
                    <FadeUp delay={0.6}>
                        <BentoCard
                            title="Auto Update System"
                            description="Software lo bakal selalu paling update dengan fitur baru tanpa harus install ulang manual. One-click magic! ✨"
                            icon={<Zap className="w-6 h-6" />}
                            className="h-full"
                        />
                    </FadeUp>
                </div>

            </div>
        </section>
    );
}
