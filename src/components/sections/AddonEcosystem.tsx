'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Sparkles, Mail, Sticker, Camera, Zap } from 'lucide-react';

const ADDONS = [
    {
        title: 'Live Mode Integration',
        description: 'Tampilkan jepretan tamu secara real-time ke big screen atau TV di venue event. Bikin suasana makin hype!',
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        color: 'bg-yellow-500/10',
        border: 'border-yellow-500/20',
    },
    {
        title: 'Dual Camera Support',
        description: 'Switch antara DSLR untuk output jernih dan Webcam/Wide-angle untuk video atau boomerang yang seru.',
        icon: <Camera className="w-5 h-5 text-emerald-400" />,
        color: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    },
    {
        title: 'Email & Custom Link',
        description: 'Kirim soft-file otomatis via Email atau Link Sharing dengan branding lo sendiri (White-label experience).',
        icon: <Mail className="w-5 h-5 text-blue-400" />,
        color: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        title: 'Extra Print & Sticker',
        description: 'Tambah fitur cetak ekstra atau digital sticker lucu buat nambah value (dan cuan) di tiap event lo.',
        icon: <Sticker className="w-5 h-5 text-pink-400" />,
        color: 'bg-pink-500/10',
        border: 'border-pink-500/20',
    },
];

export function AddonEcosystem() {
    return (
        <section className="py-24 border-y border-border bg-foreground/1">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
                    <div className="flex-1">
                        <FadeUp>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border mb-6">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-foreground/80">Arsitektur Super Sat Set</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                                Makin Pro dengan <span className="text-accent text-gradient">Custom Add-ons</span>
                            </h2>
                            <p className="text-lg text-foreground/60 max-w-xl">
                                Mulai dari core software, dan tambah modul premium kapan pun bisnis lo butuh scale up. Amandya Tech siap tumbuh bareng lo.
                            </p>
                        </FadeUp>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ADDONS.map((addon, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="h-full group p-6 rounded-2xl bg-card border border-border glass-card hover:bg-foreground/4 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${addon.color} ${addon.border} border transition-transform group-hover:scale-110`}>
                                    {addon.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-accent transition-colors">
                                    {addon.title}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {addon.description}
                                </p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
