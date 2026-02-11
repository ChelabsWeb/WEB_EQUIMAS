'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Particles from './Particles';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-transparent pt-20"
            ref={containerRef}
        >
            <Particles />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-[10%] top-[20%] h-[30vw] w-[30vw] rounded-full bg-primary blur-[120px]" />
                <div className="absolute right-[10%] bottom-[20%] h-[25vw] w-[25vw] rounded-full bg-primary-light blur-[100px]" />
            </div>

            <div className="container relative z-30 mx-auto px-6 text-center">
                <h1
                    className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-8xl"
                    ref={titleRef}
                >
                    Elevando el Estándar del <span className="text-primary">Equipamiento</span> Comercial
                </h1>
                <p
                    className="mx-auto mt-8 max-w-2xl text-xl text-apple-muted md:text-2xl"
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
                        className="rounded-full border-2 border-primary/20 bg-transparent px-8 py-4 text-lg font-medium text-text-main transition-all hover:bg-primary/5"
                    >
                        Ver Proyectos
                    </Link>
                </div>
            </div>
        </section>
    );
}
