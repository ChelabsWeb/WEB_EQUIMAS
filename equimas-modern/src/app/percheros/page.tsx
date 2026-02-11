import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight, Ruler, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PercherosPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Percheros</span> de Pie
                            </h1>
                            <p className="text-xl text-apple-muted leading-relaxed">
                                Nuestra línea de percheros de pie combina elegancia y resistencia. Disponibles en una amplia gama de acabados y diseñados para optimizar la exhibición de prendas de colgar en cualquier sector de su local.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Perchero Regulable"
                                description="Ajuste de altura para distintos tipos de prendas."
                                href="/contacto"
                                imageUrl="/images/systems/percheros/FZD-G.jpg"
                            />
                            <CategoryCard
                                title="Perchero con Ruedas"
                                description="Máxima movilidad para reorganizar su tienda rápidamente."
                                href="/contacto"
                                imageUrl="/images/systems/percheros/ZH003.jpg"
                            />
                            <CategoryCard
                                title="Perchero Doble Barra"
                                description="Duplique su capacidad de exhibición en el mismo espacio."
                                href="/contacto"
                                imageUrl="/images/systems/percheros/PEC.jpg"
                            />
                        </div>

                        <div className="mt-20 glass rounded-apple-lg p-12 border border-primary/10">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Ruler size={32} />
                                </div>
                                <h3 className="text-3xl font-bold">Acabados y Medidas</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-lg text-apple-muted mb-6">
                                        Fabricados en acero con terminaciones cromadas, satinadas o pintura epoxi de alta resistencia. Contamos con modelos fijos y regulables que se adaptan a prendas de niños hasta vestidos de gala.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                            <span className="font-medium">Opciones con porta precios integrado</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                            <span className="font-medium">Bases reforzadas para mayor estabilidad</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rounded-apple overflow-hidden shadow-2xl">
                                    <img src="/images/systems/percheros/PCP.jpg" alt="Perchero Técnico" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 text-center">
                            <Link
                                href="/contacto"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-bold text-white transition-all hover:bg-primary-dark"
                            >
                                Solicitar Presupuesto
                                <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
