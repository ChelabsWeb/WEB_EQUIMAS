import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function EquipamientoPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Equipamiento</span> Comercial
                            </h1>
                            <p className="text-xl text-apple-muted leading-relaxed">
                                Soluciones integrales para la arquitectura comercial. Diseñamos
                                y fabricamos mobiliario técnico que potencia la identidad de su marca.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Góndolas"
                                description="Sistemas de exhibición central y perimetral."
                                href="/sistemas"
                                imageUrl="/images/equipamiento.jpg"
                            />
                            <CategoryCard
                                title="Mostradores"
                                description="Puntos de venta funcionales y de alto diseño."
                                href="/sistemas"
                                imageUrl="/images/hero.jpg"
                            />
                            <CategoryCard
                                title="Probadores"
                                description="Módulos de privacidad con acabados premium."
                                href="/sistemas"
                                imageUrl="/images/maniquies.jpg"
                            />
                        </div>

                        <div className="mt-20 glass rounded-apple-lg p-12 text-center">
                            <h3 className="text-3xl font-bold mb-6">¿Necesita un proyecto a medida?</h3>
                            <p className="text-lg text-apple-muted mb-10 max-w-2xl mx-auto">
                                Nuestro equipo técnico lo asesorará en el desarrollo de
                                equipamiento exclusivo para su cadena de locales.
                            </p>
                            <Link
                                href="/contacto"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-bold text-white transition-all hover:bg-primary-dark"
                            >
                                Iniciar Consultoría Técnica
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
