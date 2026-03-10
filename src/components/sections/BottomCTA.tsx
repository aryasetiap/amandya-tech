'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export function BottomCTA() {
    return (
        <section className="relative py-32 overflow-hidden border-t border-white/5">
            {/* Massive glow effect behind the CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/20 rounded-full blur-[150px] opacity-50 pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b111a_1px,transparent_1px),linear-gradient(to_bottom,#0b111a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <FadeUp>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-white/80">Siap buat level up?</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-8 tracking-tight max-w-4xl mx-auto">
                        Bangun kerajaan <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-blue-400 to-purple-500">
                            photobooth impian lo
                        </span>
                    </h2>

                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Gabung sama ribuan operator sukses yang udah ngotomatisin workflow dan ningkatin revenue booking mereka.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                        >
                            Mulai 14 Hari Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto rounded-full px-8 h-14 text-lg glass border-white/10 hover:bg-white/5 text-white"
                        >
                            Hubungi Sales
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>

                    <p className="mt-8 text-sm text-white/40">
                        Gak perlu kartu kredit. Lanjut atau cancel bebas kapan aja.
                    </p>
                </FadeUp>
            </div>
        </section>
    );
}
