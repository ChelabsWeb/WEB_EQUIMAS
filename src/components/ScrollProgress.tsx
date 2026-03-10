'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const bar = barRef.current;
            if (!bar) return;

            gsap.to(bar, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.3,
                },
            });
        }, barRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-primary/20">
            <div
                ref={barRef}
                className="h-full w-full scale-x-0 origin-left bg-primary shadow-[0_0_10px_rgba(211,47,47,0.5)]"
            />
        </div>
    );
}
