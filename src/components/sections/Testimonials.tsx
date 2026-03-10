'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Owner, Snap&Smile Events",
        content: "Semenjak pindah ke Amandya Tech bulan lalu, bener-bener jadi game changer. Fitur dual kameranya doang udah hemat ribuan dolar buat beli iPad ekstra.",
        rating: 5,
    },
    {
        name: "Marcus Chen",
        role: "Director, Luxe Booths",
        content: "Offline mode-nya penyelamat banget. Pernah nge-job wedding di tempat antah berantah no sinyal, dan semuanya nge-sync mulus pas dapet Wi-Fi.",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Event Coordinator",
        content: "Klien pada suka banget sama fitur share WA instan. Kumpul consent secara digital juga bikin proses legalitas kita jauh lebih sat-set.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Founder, DK Photography",
        content: "Berkat editor template live, gue gak perlu buka Photoshop lagi di lokasi. Revisi typo atau ganti overlay gampang banget lewat hape doang.",
        rating: 4,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white/2 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <FadeUp>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Jadi favorit para <span className="text-accent">operator</span> di seluruh dunia
                    </h2>
                </FadeUp>
            </div>

            {/* Infinite Marquee effect using CSS */}
            <div className="relative flex overflow-x-hidden group">
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 hover:pause shrink-0 pl-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-[#0B111A] border border-white/10 shrink-0 whitespace-normal">
                            <div className="flex text-accent mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-6">&quot;{t.content}&quot;</p>
                            <div>
                                <h4 className="font-heading font-bold text-white">{t.name}</h4>
                                <p className="text-sm text-white/50">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless infinite scrolling */}
                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 hover:pause shrink-0 pl-6" aria-hidden="true">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-[#0B111A] border border-white/10 shrink-0 whitespace-normal">
                            <div className="flex text-accent mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'opacity-30'}`} />
                                ))}
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed mb-6">&quot;{t.content}&quot;</p>
                            <div>
                                <h4 className="font-heading font-bold text-white">{t.name}</h4>
                                <p className="text-sm text-white/50">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient fades for edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0B111A] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0B111A] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
