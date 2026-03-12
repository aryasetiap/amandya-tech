'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
    _id?: string;
    question: string;
    answer: string;
}

const STATIC_FAQS: FAQItem[] = [
    {
        question: 'Bisa jalan tanpa internet gak nih?',
        answer: 'Bisa dong! Amandya Tech punya offline mode yang super tangguh. Tamu tetep bisa foto, ttd consent, dan masukin data. Semuanya bakal otomatis nge-sync ke cloud dan ngirim email pas udah dapet Wi-Fi lagi.',
    },
    {
        question: 'Bisa pake DSLR sama Webcam barengan di satu event?',
        answer: 'Bisa banget. Arsitektur dual-camera kita mungkinkan lo colok DSLR buat hasil foto mantap dan webcam biasa buat jepret GIF/Boomerang seketika. Software otomatis nge-switch kameranya mulus banget sesuai template yang tamu pilih.',
    },
    {
        question: 'Ada limit berapa banyak event yang bisa jalan barengan?',
        answer: 'Gak ada limit event! Harga langganan kita berdasarkan jumlah device aktif. Kalo lo pake plan Pro (3 device), lo bisa jalanin 3 event beda secara bersamaan, atau pasang 3 booth sekaligus di satu event raksasa.',
    },
    {
        question: 'Gimana sih cara kerja add-on Consent App?',
        answer: 'Consent App itu interface terpisah yang bisa lo buka di iPad, ditaruh agak jauh dari booth utama. Habis tamu foto, hasilnya muncul di iPad itu biar mereka bisa review secara private, ttd waiver marketing/liabilitas lo, terus masukin email buat dapetin copy digitalnya.',
    },
    {
        question: 'Klien gue dapet link live gallery gak?',
        answer: 'Pasti dapet! Tiap event otomatis nge-generate live gallery keren yang udah dioptimasi buat mobile. Kalo lo langganan plan Pro atau Enterprise, gallery ini full white-label pake branding dan custom domain lo sendiri.',
    },
];

export function FAQSection({ initialFaqs = [] }: { initialFaqs?: FAQItem[] }) {
    const displayFaqs = initialFaqs.length > 0 ? initialFaqs : STATIC_FAQS;

    return (
        <section id="faq" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeUp className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                        Yang Sering <span className="text-accent">Ditanyain (FAQ)</span>
                    </h2>
                    <p className="text-lg text-foreground/60">
                        Ada pertanyaan? Kita punya jawabannya. Butuh bantuan lebih? Tim support kita standby 24/7.
                    </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 glass-card shadow-sm">
                        <Accordion className="w-full">
                            {displayFaqs.map((faq, i) => (
                                <AccordionItem key={faq._id || i} value={`item-${i}`} className="border-border">
                                    <AccordionTrigger className="text-left text-foreground hover:text-accent transition-colors font-medium text-lg py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-foreground/60 leading-relaxed text-base pb-6 pr-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
