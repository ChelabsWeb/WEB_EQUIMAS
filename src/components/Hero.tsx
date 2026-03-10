'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Alex_Brush } from 'next/font/google';

const alexBrush = Alex_Brush({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
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
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force video load
        video.load();

        // Ensure video is ready before starting animations
        const handleLoadedMetadata = () => {
            // Initial frame
            video.currentTime = 0;
        };
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        const ctx = gsap.context(() => {
            // Entrance Animations
            const tl = gsap.timeline({
                defaults: { ease: 'power4.out' },
                delay: 0.5
            });

            const titleSpans = titleRef.current?.querySelectorAll('span');
            if (titleSpans) {
                tl.fromTo(titleSpans,
                    { y: 150, opacity: 0, skewY: 10 },
                    { y: 0, opacity: 1, skewY: 0, duration: 2, stagger: 0.1 }
                );
            }

            tl.fromTo(textRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1 },
                '-=1.5'
            )
                .fromTo(btnRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=1.2'
                );

            // SCROLL VIDEO SYNC (Optimized for performance)
            if (video) {
                const videoState = { currentTime: 0 };

                ScrollTrigger.create({
                    trigger: scrollContainerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5, // Reduced scrub for responsiveness
                    onUpdate: (self) => {
                        if (!isNaN(video.duration)) {
                            videoState.currentTime = self.progress * video.duration;
                        }
                    }
                });

                // Use GSAP Ticker for frame-perfect updates to avoid "fighting"
                gsap.ticker.add(() => {
                    const currentVideo = videoRef.current;
                    if (currentVideo && !isNaN(currentVideo.duration) && isFinite(videoState.currentTime)) {
                        const diff = videoState.currentTime - currentVideo.currentTime;

                        if (Math.abs(diff) > 0.05) {
                            currentVideo.currentTime += diff * 0.1;
                        } else if (Math.abs(diff) > 0.001) {
                            currentVideo.currentTime = videoState.currentTime;
                        }
                    }
                });
            }
        }, scrollContainerRef);

        return () => {
            ctx.revert();
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className="relative h-[400vh] w-full bg-[#0A0A0A]">
            <section
                ref={heroRef}
                className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
            >
                {/* Direct Video Layer - No Canvas for better performance */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <video
                        ref={videoRef}
                        src="/videos/hero-cinematic.mp4"
                        className="h-full w-full object-cover"
                        style={{ willChange: 'transform' }}
                        muted
                        playsInline
                        preload="auto"
                    />
                </div>

                {/* Reference-style Gradients */}
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(227,42,38,0.15)_0%,rgba(10,10,10,1)_70%)]" />

                <div className="container relative z-30 mx-auto px-6 text-left flex flex-col items-start pt-[20vh] md:pt-[18vh] text-white">
                    {/* Massive Reference-style Heading */}
                    <div className="flex flex-col items-start select-none mb-10 w-full relative z-30">
                        <h1
                            ref={titleRef}
                            className="text-[9vw] md:text-[6rem] xl:text-[7.5rem] leading-[0.75] font-black uppercase tracking-normal text-white drop-shadow-2xl flex flex-col items-start"
                        >
                            <span className="block overflow-visible relative z-20">Elevando</span>
                            <span className={`block ${alexBrush.className} self-center text-[13vw] md:text-[10rem] xl:text-[12rem] text-primary overflow-visible normal-case leading-[0.5] z-30 relative drop-shadow-[0_0_15px_rgba(211,47,47,0.5)] my-0`} style={{ letterSpacing: '0em' }}>
                                el estándar
                            </span>
                            <div className="flex flex-wrap items-baseline justify-start gap-4 md:gap-6 overflow-visible relative z-20">
                                <span className="block">Comercial</span>
                            </div>
                        </h1>
                    </div>

                    <p
                        className="mt-4 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-zinc-300 drop-shadow-md text-justify relative z-30"
                        ref={textRef}
                    >
                        Fabricamos todo tipo de <span className="text-white font-bold drop-shadow-sm">mobiliario comercial a medida</span>, y acorde cada necesidad, con diseños propios o elegidos por el cliente y nuestro servicio es integral, con <span className="text-white font-bold italic drop-shadow-sm">entrega "llave en mano"</span> pronto para la apertura.
                    </p>

                    <div
                        className="mt-10 flex flex-col items-start justify-start gap-4 sm:flex-row relative z-30"
                        ref={btnRef}
                    >
                        <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-[0_0_20px_rgba(227,42,38,0.4)] rounded-md shadow-xl border border-primary-light/20 transition-all duration-300 active:scale-[0.98]">
                            <Link href="/sistemas" className="flex items-center gap-2">
                                Explorar Sistemas
                            </Link>
                        </Button>

                        <Button asChild size="lg" variant="outline" className="rounded-md border-white/20 bg-white/10 text-white hover:border-white/60 hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg transition-all duration-300 active:scale-[0.98]">
                            <Link href="/portfolio">
                                Catálogo
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Subtle Grain Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-20" />
            </section>
        </div>
    );
}
