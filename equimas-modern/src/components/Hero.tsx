'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamic import for ScrollyVideo React component to avoid SSR issues
const ScrollyVideo = dynamic(() => import('scrolly-video/dist/ScrollyVideo.esm.jsx'), {
    ssr: false,
});

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const scrollyVideoRef = useRef<any>(null);

    useEffect(() => {
        // Original GSAP Entrance Animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                delay: 0.2
            });

            tl.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 }
            )
                .fromTo(textRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.8'
                )
                .fromTo(btnRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    '-=0.4'
                );

            // Manual scroll control for the video via Progress
            // We use ScrollTrigger on the container to define the "scrubbing area"
            ScrollTrigger.create({
                trigger: scrollContainerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    // Update video progress imperatively
                    if (scrollyVideoRef.current && scrollyVideoRef.current.setVideoPercentage) {
                        scrollyVideoRef.current.setVideoPercentage(self.progress);
                    }
                }
            });
        }, scrollContainerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        /* The outer div defines the total scroll length (300% of viewport) */
        <div ref={scrollContainerRef} className="relative h-[300vh] w-full bg-black">
            {/* The section is sticky, so it stays in view while we scroll the parent */}
            <section
                ref={heroRef}
                className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
            >
                {/* ScrollyVideo background component */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <ScrollyVideo
                        ref={scrollyVideoRef}
                        src="/videos/hero-cinematic.mp4"
                        cover={true}
                        sticky={false} // Positioning is handled by our CSS sticky
                        full={true}
                        useWebCodecs={true}
                        trackScroll={false} // Disable internal scroll listeners to prevent conflicts
                    />
                </div>

                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

                <div className="container relative z-30 mx-auto px-6 text-center text-white">
                    <h1
                        className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-8xl drop-shadow-2xl"
                        ref={titleRef}
                    >
                        Elevando el Estándar del <span className="text-primary">Equipamiento</span> Comercial
                    </h1>
                    <p
                        className="mx-auto mt-8 max-w-2xl text-xl text-white/80 md:text-2xl drop-shadow-lg"
                        ref={textRef}
                    >
                        Creamos soluciones innovadoras y vanguardistas para espacios de retail
                        que combinan diseño excepcional con funcionalidad superior.
                    </p>
                    <div
                        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                        ref={btnRef}
                    >
                        <Link
                            href="/sistemas"
                            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary-dark hover:scale-105"
                        >
                            Explorar Sistemas
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="rounded-full border-2 border-primary/20 bg-transparent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary/5"
                        >
                            Ver Proyectos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
