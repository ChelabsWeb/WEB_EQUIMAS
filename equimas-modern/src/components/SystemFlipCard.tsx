'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Info, X, CheckCircle2, ChevronRight, ArrowLeftRight } from 'lucide-react';
import { SystemDetail } from '@/lib/data';
import { cn } from '@/lib/utils';

interface SystemFlipCardProps {
    system: SystemDetail;
    className?: string;
}

export default function SystemFlipCard({ system, className }: SystemFlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<HTMLDivElement>(null);

    const handleFlip = () => {
        const nextState = !isFlipped;
        setIsFlipped(nextState);

        gsap.to(cardRef.current, {
            rotateY: nextState ? 180 : 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            transformStyle: "preserve-3d",
            perspective: 1000
        });
    };

    return (
        <div
            className={cn("group perspective-1000 h-[500px] w-full cursor-pointer", className)}
            onClick={handleFlip}
        >
            <div
                ref={cardRef}
                className="relative h-full w-full transition-all duration-500 preserve-3d"
            >
                {/* Front Side */}
                <div
                    ref={frontRef}
                    className="absolute inset-0 h-full w-full backface-hidden rounded-apple overflow-hidden shadow-apple bg-white"
                >
                    <img
                        src={system.image}
                        alt={system.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">{system.name}</h3>
                                <div className="flex items-center gap-2 text-primary">
                                    <Info size={18} />
                                    <span className="text-sm font-medium uppercase tracking-widest">Ver Detalles</span>
                                </div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary transition-all duration-300">
                                <ArrowLeftRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    ref={backRef}
                    className="absolute inset-0 h-full w-full backface-hidden rounded-apple overflow-hidden shadow-2xl bg-white p-8 [transform:rotateY(180deg)]"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase mb-2">
                                    {system.category}
                                </span>
                                <h3 className="text-2xl font-bold text-apple-text">{system.name}</h3>
                            </div>
                            <button className="h-10 w-10 rounded-full bg-apple-bg flex items-center justify-center text-apple-muted hover:bg-primary/10 hover:text-primary transition-all">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto space-y-6 pr-2 scrollbar-hide">
                            <p className="text-apple-muted leading-relaxed">
                                {system.longDescription}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2 text-apple-text">
                                    <CheckCircle2 size={18} className="text-primary" />
                                    Características
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                    {system.features.map(feature => (
                                        <li key={feature} className="text-sm flex items-center gap-2 text-apple-muted">
                                            <div className="h-1 w-1 rounded-full bg-primary/40" />
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
                            <button className="w-full flex items-center justify-center gap-2 rounded-full bg-primary py-4 text-white font-bold transition-all hover:bg-primary-dark hover:scale-[1.02]">
                                Cotizar Ahora
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
