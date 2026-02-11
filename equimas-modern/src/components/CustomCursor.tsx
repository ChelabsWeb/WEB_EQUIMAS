'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ring = ringRef.current;

        if (!ring) return;

        // Set initial state
        gsap.set(ring, { xPercent: -50, yPercent: -50, opacity: 0 });

        const moveCursor = (e: MouseEvent) => {
            // Show cursor on first move
            gsap.to(ring, { opacity: 1, duration: 0.3 });

            // Lagging move for the ring
            gsap.to(ring, {
                duration: 0.4,
                x: e.clientX,
                y: e.clientY,
                ease: 'expo.out',
            });
        };

        const handleMouseEnterWindow = () => {
            gsap.to(ring, { opacity: 1, duration: 0.3 });
        };

        const handleMouseLeaveWindow = () => {
            gsap.to(ring, { opacity: 0, duration: 0.3 });
        };

        const handleMouseDown = () => {
            gsap.to(ring, { scale: 0.8, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to(ring, { scale: 1, duration: 0.2 });
        };

        // Hover effects logic
        const handleMouseEnterInteractive = () => {
            gsap.to(ring, {
                scale: 1.8,
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                borderColor: 'rgba(211, 47, 47, 1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeaveInteractive = () => {
            gsap.to(ring, {
                scale: 1,
                backgroundColor: 'transparent',
                borderColor: 'rgba(211, 47, 47, 0.5)',
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseenter', handleMouseEnterWindow);
        document.addEventListener('mouseleave', handleMouseLeaveWindow);

        const addListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, select, input, .interactive');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnterInteractive);
                el.addEventListener('mouseleave', handleMouseLeaveInteractive);
            });
        };

        addListeners();

        const observer = new MutationObserver(() => {
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseenter', handleMouseEnterWindow);
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ringRef}
            className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-primary/50 bg-transparent"
        />
    );
}
