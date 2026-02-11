'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SystemCarouselProps {
    images: string[];
    className?: string;
}

export default function SystemCarousel({ images, className }: SystemCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current) return;

            gsap.to(containerRef.current, {
                x: `-${currentIndex * 100}%`,
                duration: 0.8,
                ease: 'expo.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, [currentIndex]);

    if (!images || images.length === 0) return null;

    return (
        <div className={cn("relative overflow-hidden group rounded-apple-lg", className)}>
            <div
                ref={containerRef}
                className="flex h-full transition-transform duration-500 will-change-transform"
                style={{ width: `${images.length * 100}%` }}
            >
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="w-full h-full flex-shrink-0 relative"
                        ref={el => { imagesRef.current[idx] = el; }}
                    >
                        <Image
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    </div>
                ))}
            </div>

            {/* Controls */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-95"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40 active:scale-95"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={cn(
                                    "h-1.5 transition-all duration-300 rounded-full",
                                    currentIndex === idx ? "w-8 bg-white" : "w-1.5 bg-white/40"
                                )}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
