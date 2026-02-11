'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

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
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        // Force video load
        video.load();

        const gsapCtx = gsap.context(() => {
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

            // CANVAS RENDERING ENGINE
            let rafId: number;
            const render = () => {
                if (video.readyState >= 2) {
                    // Constant draw loop for better consistency than event-based
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                }
                rafId = requestAnimationFrame(render);
            };
            rafId = requestAnimationFrame(render);

            // SCROLL SYNCHRONIZATION (Rockstar/GTA VI Style)
            // We use a virtual target to decouple scroll speed from hardware seek speed
            const scrollData = { currentTime: 0 };

            ScrollTrigger.create({
                trigger: scrollContainerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.2, // Momentum smoothing
                onUpdate: (self) => {
                    if (video.duration) {
                        const targetTime = self.progress * video.duration;
                        // Smoothly tween the video currentTime via the proxy object
                        gsap.to(scrollData, {
                            currentTime: targetTime,
                            duration: 0.1,
                            ease: "none",
                            onUpdate: () => {
                                // Only update video if it's not currently busy seeking
                                if (!video.seeking) {
                                    video.currentTime = scrollData.currentTime;
                                }
                            }
                        });
                    }
                }
            });

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', handleResize);
            handleResize();

            return () => {
                cancelAnimationFrame(rafId);
                window.removeEventListener('resize', handleResize);
            };
        }, scrollContainerRef);

        return () => {
            gsapCtx.revert();
        };
    }, []);

    return (
        <div ref={scrollContainerRef} className="relative h-[400vh] w-full bg-[#0A0A0A]">
            <section
                ref={heroRef}
                className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
            >
                {/* Advanced Canvas Video Layer */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <canvas
                        ref={canvasRef}
                        className="h-full w-full object-cover"
                        style={{ willChange: 'transform' }}
                    />
                    {/* Hidden video source for the canvas engine */}
                    <video
                        ref={videoRef}
                        src="/videos/hero-cinematic.mp4"
                        className="hidden"
                        muted
                        playsInline
                        preload="auto"
                    />
                </div>

                {/* Reference-style Gradients */}
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(227,42,38,0.15)_0%,rgba(10,10,10,1)_70%)]" />

                <div className="container relative z-30 mx-auto px-6 text-left flex flex-col items-start pt-[28vh] md:pt-[25vh] text-white">
                    {/* Massive Reference-style Heading */}
                    <div className="flex flex-col items-start select-none mb-10">
                        <h1
                            ref={titleRef}
                            className="text-[10vw] md:text-[7rem] xl:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter"
                            style={{ letterSpacing: '-0.06em' }}
                        >
                            <span className="block overflow-hidden">Elevando el</span>
                            <span className="block font-signature text-[13vw] md:text-[9.5rem] xl:text-[11.5rem] font-normal text-[#E32A26] -my-2 md:-my-5 xl:-my-8 overflow-visible normal-case leading-[0.5] z-10 relative" style={{ letterSpacing: '-0.02em', fontStyle: 'italic' }}>
                                estándar
                            </span>
                            <div className="flex flex-wrap items-baseline justify-start gap-4 md:gap-6 overflow-hidden">
                                <span className="block">Comercial</span>
                            </div>
                        </h1>
                    </div>

                    <p
                        className="mt-4 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-zinc-400 drop-shadow-md text-justify"
                        ref={textRef}
                    >
                        Fabricamos todo tipo de <span className="text-white font-bold">mobiliario comercial a medida</span>, y acorde cada necesidad, con diseños propios o elegidos por el cliente y nuestro servicio es integral, con <span className="text-white font-bold italic">entrega "llave en mano"</span> pronto para la apertura.
                    </p>

                    <div
                        className="mt-10 flex flex-col items-start justify-start gap-4 sm:flex-row"
                        ref={btnRef}
                    >
                        <Link
                            href="/sistemas"
                            className="group bg-white text-black px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#E32A26] hover:text-white transition-all duration-300 shadow-xl"
                        >
                            Explorar Sistemas
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="px-8 py-3 rounded-full font-bold text-sm text-white border border-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                        >
                            Catálogo
                        </Link>
                    </div>
                </div>

                {/* Subtle Grain Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-20" />
            </section>
        </div>
    );
}
