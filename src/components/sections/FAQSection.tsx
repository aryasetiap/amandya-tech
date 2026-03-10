'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
    {
        question: 'Does it work without internet?',
        answer: 'Yes! Amandya Tech features a robust offline mode. Guests can still take photos, sign consent forms, and enter details. Everything automatically syncs to the cloud and sends out emails once you reconnect to Wi-Fi.',
    },
    {
        question: 'Can I use both a DSLR and a Webcam at the same event?',
        answer: 'Absolutely. Our dual-camera architecture allows you to connect a DSLR for high-quality photos and a standard webcam for quick GIF/Boomerang captures simultaneously. The software handles switching seamlessly based on the selected template.',
    },
    {
        question: 'Is there a limit on how many events I can run?',
        answer: 'No limits on events! Our pricing is based on concurrent active devices. If you are on the Pro plan (3 devices), you can run 3 separate events at the exact same time, or use 3 booths at one massive event.',
    },
    {
        question: 'How does the Consent App add-on work?',
        answer: 'The Consent App is a separate interface you can load onto an iPad placed away from the printing station. Once a guest takes a photo, it appears on the iPad where they can privately review it, sign your liability/marketing waiver, and enter their email to receive the digital copy.',
    },
    {
        question: 'Do my clients get a live gallery link?',
        answer: 'Yes, every event automatically generates a beautiful, mobile-optimized live gallery. On the Pro and Enterprise plans, these galleries are completely white-labeled with your branding and custom domain.',
    },
];

export function FAQSection() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeUp className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Frequently Asked <span className="text-accent">Questions</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Got questions? We&apos;ve got answers. If you need more help, our support team is 24/7.
                    </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <div className="bg-[#0B111A] rounded-2xl border border-white/10 p-6 md:p-8 glass-card">
                        <Accordion className="w-full">
                            {FAQS.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                                    <AccordionTrigger className="text-left text-white hover:text-accent transition-colors font-medium text-lg py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/60 leading-relaxed text-base pb-6 pr-6">
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
