'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeUpProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export function FadeUp({
    children,
    className,
    delay = 0,
    duration = 0.5,
    yOffset = 30,
    ...props
}: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
