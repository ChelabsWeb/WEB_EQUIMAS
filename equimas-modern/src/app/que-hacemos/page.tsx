'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function QueHacemosPage() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: '.features-grid',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header />
            <main className="flex-grow pt-32" ref={sectionRef}>
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl max-w-4xl">
                            Diseño, Fabricación e <span className="text-primary">Instalación</span> de Mobiliario Comercial.
                        </h1>
                        <p className="mt-8 text-xl text-apple-muted leading-relaxed max-w-3xl">
                            En Equimas transformamos la visión de nuestros clientes en realidades tangibles.
                            Nuestro enfoque integral nos permite controlar cada etapa del proceso, garantizando la máxima calidad.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-apple-bg py-24">
                    <div className="container mx-auto px-6">
                        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <Target size={32} />,
                                    title: "Diseño Estratégico",
                                    desc: "Analizamos cada espacio para optimizar el flujo de clientes y la exposición de productos."
                                },
                                {
                                    icon: <Zap size={32} />,
                                    title: "Fabricación Propia",
                                    desc: "Contamos con tecnología de punta para producir mobiliario robusto y de finos acabados."
                                },
                                {
                                    icon: <ShieldCheck size={32} />,
                                    title: "Calidad Premium",
                                    desc: "Utilizamos materiales seleccionados que aseguran la durabilidad de su inversión."
                                },
                                {
                                    icon: <Users size={32} />,
                                    title: "Servicio Integral",
                                    desc: "Desde el primer boceto hasta la entrega llave en mano, estamos a su lado."
                                }
                            ].map((item, i) => (
                                <div key={i} className="feature-card rounded-apple-lg bg-surface p-8 shadow-sm hover:shadow-apple transition-shadow">
                                    <div className="mb-6 text-primary">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-apple-text mb-4">{item.title}</h3>
                                    <p className="text-apple-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Manufacturing Section */}
                <section className="bg-white py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <img
                                    src="/images/nosotros/2.jpg"
                                    alt="Nuestra Planta"
                                    className="rounded-apple-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-apple-text md:text-5xl">Nuestra Tecnología</h2>
                                <p className="text-lg text-apple-muted leading-relaxed italic">
                                    "Combinamos la precisión de la maquinaria moderna con el cuidado del artesano."
                                </p>
                                <p className="text-lg text-apple-muted leading-relaxed">
                                    Contamos con un equipo de profesionales altamente calificados y tecnología en equipamientos
                                    que permite ofrecer la versatilidad necesaria para rotar espacios acorde a cada estación
                                    u oportunidad comercial.
                                </p>
                                <p className="text-lg text-apple-muted leading-relaxed">
                                    Miles de metros cuadrados equipados en el país y en el exterior avalan nuestra excelencia y
                                    respaldo post venta.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
