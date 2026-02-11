'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const projects = [
    { id: 1, title: "Menpi", location: "Las Piedras Shopping", category: "Retail" },
    { id: 2, title: "Premium Outlet", location: "Punta del Este", category: "Retail" },
    { id: 3, title: "Free Shop Decatlón", location: "Rivera", category: "Deportes" },
    { id: 4, title: "Chic Parisien", location: "Montevideo Shopping", category: "Moda" },
    { id: 5, title: "Global Sports", location: "Varios", category: "Deportes" },
    { id: 6, title: "Panda Free Shop", location: "Rivera", category: "Retail" },
    { id: 7, title: "Philosophy", location: "Punta Carretas Shopping", category: "Moda" },
    { id: 8, title: "Super Billy", location: "Las Piedras Shopping", category: "Niños" },
    { id: 9, title: "Philosophy", location: "Punta Carretas Shopping", category: "Moda" },
    { id: 10, title: "La Isla", location: "Punta Carretas Shopping", category: "Deportes" },
    { id: 11, title: "Reebok", location: "Varios", category: "Deportes" },
    { id: 12, title: "Zooko", location: "Las Piedras Shopping", category: "Moda" }
];

export default function PortfolioPage() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.portfolio-item', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl">
                                Portfolio de <span className="text-primary">Proyectos</span>
                            </h1>
                            <p className="mt-8 text-xl text-apple-muted leading-relaxed">
                                Nuestros trabajos son el testimonio de nuestro compromiso con la excelencia.
                                Hemos equipado los espacios comerciales más icónicos de la región.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white pb-32">
                    <div className="container mx-auto px-6">
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="portfolio-item group relative overflow-hidden rounded-apple-lg shadow-apple bg-apple-bg aspect-[4/5]"
                                >
                                    <Image
                                        src={`/images/portfolio/${project.id}.jpg`}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <p className="mt-1 text-sm text-white/70 italic">
                                            {project.location}
                                        </p>
                                        <div className="mt-6">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                                                <ExternalLink size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="bg-apple-bg py-24 border-t border-apple-bg">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-apple-text tracking-tight mb-4">Empresas que <span className="text-primary">confían</span> en nosotros</h2>
                            <p className="text-apple-muted max-w-2xl mx-auto">Más de 20 años acompañando el crecimiento de las marcas líderes en el mercado.</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "babolat"].map((id) => (
                                <div key={id} className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={`/images/clientes/${id}.jpg`}
                                        alt="Cliente Equimas"
                                        fill
                                        className="object-contain hover:scale-110 transition-transform cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
