'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CategoryCard from './CategoryCard';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalSliderProps {
    categories: {
        id: string;
        title: string;
        description: string;
        image: string;
        href: string;
    }[];
}

export default function HorizontalSlider({ categories }: HorizontalSliderProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const trigger = triggerRef.current;

            if (!section || !trigger) return;

            gsap.fromTo(
                section,
                { x: 0 },
                {
                    x: '-300vw',
                    ease: 'none',
                    duration: 1,
                    scrollTrigger: {
                        trigger: trigger,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${section.offsetWidth}`,
                        invalidateOnRefresh: true,
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="overflow-hidden bg-transparent py-10">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="flex h-[60vh] w-[300vw] items-center gap-8 px-10 md:gap-12 md:px-20">
                    {categories.map((cat) => (
                        <div key={cat.id} className="h-full w-[350px] flex-shrink-0 flex items-center">
                            <CategoryCard
                                title={cat.title}
                                description={cat.description}
                                imageUrl={cat.image}
                                href={cat.href}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
