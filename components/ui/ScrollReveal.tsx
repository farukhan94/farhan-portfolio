import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    viewport?: UseInViewOptions;
}

export const ScrollReveal = ({
    children,
    width = 'fit-content',
    delay = 0,
    direction = 'up',
    className = '',
    viewport = { once: true, margin: '-50px' }
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: 20, x: 0 };
            case 'down': return { y: -20, x: 0 };
            case 'left': return { x: 20, y: 0 };
            case 'right': return { x: -20, y: 0 };
            default: return { y: 20, x: 0 };
        }
    };

    const initial = { opacity: 0, ...getDirectionOffset() };
    const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className}>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
                style={{
                    willChange: "transform, opacity",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
