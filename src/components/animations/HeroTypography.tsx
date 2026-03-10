'use client';

import { motion, Variants } from 'framer-motion';

interface HeroTypographyProps {
    text: string;
    highlightedWord?: string;
    className?: string;
}

export function HeroTypography({
    text,
    highlightedWord,
    className = 'text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6',
}: HeroTypographyProps) {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => {
                // Simple case-insensitive match for the highlighted word
                const isHighlighted =
                    highlightedWord && word.toLowerCase().includes(highlightedWord.toLowerCase());

                return (
                    <motion.span
                        variants={child}
                        style={{ display: 'inline-block', marginRight: '0.25em' }}
                        key={index}
                        className={isHighlighted ? 'text-gradient' : 'text-white'}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </motion.h1>
    );
}
