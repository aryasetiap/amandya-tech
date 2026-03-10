'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Sparkles, Video, Share, UploadCloud, Brush } from 'lucide-react';

const ADDONS = [
    {
        title: 'Flipbook Digital',
        description: 'Ubah jepretan burst mode jadi digital flipbook interaktif yang shareable banget.',
        icon: <Video className="w-5 h-5 text-purple-400" />,
        color: 'bg-purple-500/10',
        border: 'border-purple-500/20',
    },
    {
        title: 'Consent App Sharing',
        description: 'Dedicated iPad App biar tamu bisa liat foto, isi disclaimer, & input data diri secara super private di luar main booth.',
        icon: <Share className="w-5 h-5 text-emerald-400" />,
        color: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
    },
    {
        title: 'Cloud Print Queue',
        description: 'Kirim print job ke banyak printer sekaligus di seluruh venue dengan gampang via Local Network atau Cloud.',
        icon: <UploadCloud className="w-5 h-5 text-blue-400" />,
        color: 'bg-blue-500/10',
        border: 'border-blue-500/20',
    },
    {
        title: 'AI Remove Background',
        description: 'Ganti background instan pakai AI magic. Gak butuh green screen atau backdrop fisik yang ribet.',
        icon: <Brush className="w-5 h-5 text-pink-400" />,
        color: 'bg-pink-500/10',
        border: 'border-pink-500/20',
    },
];

export function AddonEcosystem() {
    return (
        <section className="py-24 border-y border-white/5 bg-white/1">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
                    <div className="flex-1">
                        <FadeUp>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-white/80">Super Flexible Architecture</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                Makin pro dengan <span className="text-accent text-gradient">Premium Add-ons</span>
                            </h2>
                            <p className="text-lg text-white/60 max-w-xl">
                                Mulai dari core software, dan tambah modul premium kapan pun bisnis lo butuh scale up. Amandya Tech siap tumbuh bareng lo.
                            </p>
                        </FadeUp>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ADDONS.map((addon, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className="h-full group p-6 rounded-2xl bg-white/5 border border-white/10 glass-card hover:bg-white/10 transition-colors">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${addon.color} ${addon.border} border`}>
                                    {addon.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-accent transition-colors">
                                    {addon.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed">
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
