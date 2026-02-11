'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(ring, { xPercent: -50, yPercent: -50, opacity: 0 });

            const moveCursor = (e: MouseEvent) => {
                gsap.to(ring, { opacity: 1, duration: 0.3 });
                gsap.to(ring, {
                    duration: 0.4,
                    x: e.clientX,
                    y: e.clientY,
                    ease: 'expo.out',
                });
            };

            const handleMouseDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2 });
            const handleMouseUp = () => gsap.to(ring, { scale: 1, duration: 0.2 });

            const handleMouseOver = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const interactive = target.closest('a, button, select, input, .interactive');

                if (interactive) {
                    gsap.to(ring, {
                        scale: 1.8,
                        backgroundColor: 'rgba(211, 47, 47, 0.1)',
                        borderColor: 'rgba(211, 47, 47, 1)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            const handleMouseOut = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const interactive = target.closest('a, button, select, input, .interactive');

                if (interactive) {
                    gsap.to(ring, {
                        scale: 1,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(211, 47, 47, 0.5)',
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            };

            window.addEventListener('mousemove', moveCursor);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={ringRef}
            className="pointer-events-none fixed left-0 top-0 z-[10000] h-9 w-9 rounded-full border border-primary/50 bg-transparent transition-opacity"
        />
    );
}

