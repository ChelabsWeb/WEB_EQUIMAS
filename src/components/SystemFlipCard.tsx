'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Info, X, CheckCircle, CaretRight, ArrowsLeftRight } from '@phosphor-icons/react';
import { SystemDetail } from '@/lib/data';
import { cn } from '@/lib/utils';

interface SystemFlipCardProps {
    system: SystemDetail;
    className?: string;
}

export default function SystemFlipCard({ system, className }: SystemFlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    const handleFlip = () => {
        const nextState = !isFlipped;
        setIsFlipped(nextState);

        if (!nextState) {
            setIsExpanded(false);
        }

        const ctx = gsap.context(() => {
            gsap.to(cardRef.current, {
                rotateY: nextState ? 180 : 0,
                duration: 0.8,
                ease: "back.out(1.2)"
            });
        }, cardRef);
    };

    return (
        <div
            className={cn("group perspective-1000 w-full cursor-pointer min-h-[500px]", className)}
            onClick={handleFlip}
        >
            <div
                ref={cardRef}
                className="relative w-full transition-[height] duration-500 preserve-3d"
            >
                {/* Front Side */}
                <div
                    ref={frontRef}
                    className="absolute top-0 left-0 w-full h-[500px] z-10 backface-hidden rounded-md overflow-hidden shadow-apple bg-white [transform:rotateY(0deg)]"
                >
                    <Image
                        src={system.image}
                        alt={system.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">{system.name}</h3>
                                <div className="flex items-center gap-2 text-primary">
                                    <Info weight="bold" size={18} />
                                    <span className="text-sm font-medium uppercase tracking-widest">Ver Detalles</span>
                                </div>
                            </div>
                            <div className="h-12 w-12 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary transition-all duration-300">
                                <ArrowsLeftRight weight="bold" size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    ref={backRef}
                    className="relative w-full min-h-[500px] backface-hidden rounded-md shadow-2xl bg-white p-8 [transform:rotateY(180deg)]"
                >
                    <div className="flex flex-col h-full min-h-[calc(500px-4rem)]">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase mb-2">
                                    {system.category}
                                </span>
                                <h3 className="text-2xl font-bold text-apple-text">{system.name}</h3>
                            </div>
                            <button className="h-10 w-10 rounded-md bg-apple-bg flex items-center justify-center text-apple-muted hover:bg-primary/10 hover:text-primary transition-all">
                                <X weight="bold" size={20} />
                            </button>
                        </div>

                        <div className="flex-grow space-y-6 flex flex-col pt-1">
                            <div className="space-y-2 flex flex-col items-start w-full">
                                <div 
                                    className={cn(
                                        "relative w-full overflow-hidden transition-[max-height] duration-500 ease-in-out",
                                        isExpanded ? "max-h-[1000px]" : "max-h-[104px]"
                                    )}
                                >
                                    <p className="text-apple-muted leading-relaxed">
                                        {system.longDescription}
                                    </p>
                                    <div className={cn(
                                        "absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent transition-opacity duration-300 pointer-events-none",
                                        isExpanded ? "opacity-0" : "opacity-100"
                                    )} />
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(!isExpanded);
                                    }}
                                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider mt-1 relative z-10"
                                >
                                    {isExpanded ? "Leer menos" : "Leer más"}
                                </button>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2 text-apple-text">
                                    <CheckCircle weight="fill" size={18} className="text-primary" />
                                    Características
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {system.features.map(feature => (
                                        <li key={feature} className="text-sm flex items-center gap-2 text-apple-muted">
                                            <div className="h-1 w-1 rounded-md bg-primary/40" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-apple-bg">
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-bold text-apple-text uppercase tracking-widest text-xs">Materiales:</span>
                                    <span className="text-apple-muted">{system.materials}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 mt-auto">
                            <button className="w-full flex items-center justify-center gap-2 rounded-md bg-primary py-4 text-white font-bold transition-all hover:bg-black hover:scale-[1.02]">
                                Cotizar Ahora
                                <CaretRight weight="bold" size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
