'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import SystemFlipCard from '@/components/SystemFlipCard';
import { ChevronRight, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { systemsData } from '@/lib/data';

const categories = [
    { id: 'vertical', name: 'Sistemas Verticales', description: 'Columnas y cremalleras de alto porte estructural.' },
    { id: 'horizontal', name: 'Sistemas Horizontales', description: 'Líneas continuas para una exhibición elegante.' },
    { id: 'puc', name: 'Sistemas PUC', description: 'Puntos de anclaje individuales con tecnología ZAMAC.' },
    { id: 'platina', name: 'Sistemas de Platina', description: 'Soportes continuos de gran versatilidad.' },
    { id: 'iluminado', name: 'Sistemas Iluminados', description: 'Soluciones con electrificación LED integrada.' },
    { id: 'especial', name: 'Líneas Especiales', description: 'Complementos esenciales como perchas de alta gama.' }
];

export default function SistemasPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                {/* Page Header */}
                <section className="bg-white/50 backdrop-blur-sm py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl">
                            Catálogo de <span className="text-primary">Sistemas</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-xl text-apple-muted leading-relaxed">
                            Ingeniería aplicada al retail. Explore nuestra gama completa de sistemas
                            para transformar su local comercial. Toque cada tarjeta para ver detalles técnicos.
                        </p>
                    </div>
                </section>

                {/* Categories Section */}
                {categories.map((cat, idx) => {
                    const catSystems = systemsData.filter(s => s.category === cat.id);
                    if (catSystems.length === 0) return null;

                    return (
                        <section key={cat.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white/30' : 'bg-apple-bg/30'}`}>
                            <div className="container mx-auto px-6">
                                <div className="mb-12">
                                    <h2 className="text-3xl font-bold text-apple-text md:text-4xl">{cat.name}</h2>
                                    <p className="mt-4 text-lg text-apple-muted max-w-2xl">{cat.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {catSystems.map((system) => (
                                        <SystemFlipCard key={system.id} system={system} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* Custom Solution CTA */}
                <section className="bg-primary py-24 text-white overflow-hidden relative">
                    <div className="absolute right-0 top-0 h-full w-1/4 bg-white/10 -skew-x-12 translate-x-1/2" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl font-bold tracking-tight md:text-6xl max-w-3xl mx-auto">
                            ¿No encuentra el sistema ideal?
                        </h2>
                        <p className="mt-8 text-xl text-white/80 max-w-xl mx-auto">
                            Diseñamos soluciones a medida según los requerimientos estéticos y técnicos de su marca.
                        </p>
                        <div className="mt-12">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-primary transition-all hover:bg-apple-bg hover:scale-105"
                            >
                                Solicitar Asesoramiento
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
