import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight, Grid, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IslasPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Islas</span> de Exhibición
                            </h1>
                            <p className="text-xl text-apple-muted leading-relaxed">
                                Optimizamos el flujo de su local con módulos centrales de gran impacto visual. Las islas permiten una exhibición 360° y son ideales para destacar promociones o nuevas colecciones.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Isla Rectangular"
                                description="Módulo clásico con múltiples niveles de exhibición."
                                href="/contacto"
                                imageUrl="/images/systems/islas/ZH002.jpg"
                            />
                            <CategoryCard
                                title="Isla Circular"
                                description="Diseño dinámico que facilita la circulación."
                                href="/contacto"
                                imageUrl="/images/systems/islas/IST.jpg"
                            />
                            <CategoryCard
                                title="Módulos Acoplables"
                                description="Configure su espacio según la necesidad del momento."
                                href="/contacto"
                                imageUrl="/images/systems/islas/ZH009-A.jpg"
                            />
                        </div>

                        <div className="mt-20 glass rounded-apple-lg p-12 overflow-hidden relative border border-primary/10">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <Grid size={32} />
                                </div>
                                <h3 className="text-3xl font-bold">Máxima Flexibilidad</h3>
                            </div>
                            <p className="text-lg text-apple-muted mb-10 max-w-2xl">
                                Nuestras islas están diseñadas para ser movedizas o fijas, con acabados en madera, metal y cristal, integrándose perfectamente con nuestros sistemas verticales y horizontales.
                            </p>
                            <Link
                                href="/contacto"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-bold text-white transition-all hover:bg-primary-dark"
                            >
                                Consultar Planos
                                <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
