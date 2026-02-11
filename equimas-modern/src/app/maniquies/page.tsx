import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight, Sparkles, User, Palette, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ManiquiesPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Maniquíes</span> de Alta Gama
                            </h1>
                            <div className="space-y-6 text-xl text-apple-muted leading-relaxed">
                                <p>
                                    Contamos con una importante y completa línea de maniquíes de alta gama, fabricados en resina polyester y fibra de vidrio, y en PVC reforzado, con terminaciones en blanco, negro o en tela en tonos marfil y madera natural.
                                </p>
                                <p>
                                    Los modelos realistas, disponibles en color piel o bronceados, cuentan con una gran variedad de pelucas que acompañan los distintos modelos para adaptarse a la personalidad de su marca.
                                </p>
                                <p>
                                    Se ofrecen con base de cristal templado o acero cromado, y vienen con doble soporte, ya sea para armar el maniquí con o sin calzado, garantizando máxima versatilidad en la vidriera.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                            <div className="glass p-8 rounded-apple">
                                <User className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Modelos Realistas</h3>
                                <p className="text-apple-muted text-sm">Acabados en color piel y bronceados con pelucas personalizables.</p>
                            </div>
                            <div className="glass p-8 rounded-apple">
                                <Palette className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Acabados Premium</h3>
                                <p className="text-apple-muted text-sm">Blanco, negro, tela marfil y madera natural para cada estilo.</p>
                            </div>
                            <div className="glass p-8 rounded-apple">
                                <Layers className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Doble Soporte</h3>
                                <p className="text-apple-muted text-sm">Base de cristal o acero para uso con o sin calzado.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Línea Realista"
                                description="Realismo extremo para indumentaria de moda."
                                href="/contacto"
                                imageUrl="/images/systems/maniquies/1.jpg"
                            />
                            <CategoryCard
                                title="Línea Abstracta"
                                description="Minimalismo y diseño para marcas vanguardistas."
                                href="/contacto"
                                imageUrl="/images/systems/maniquies/3.jpg"
                            />
                            <CategoryCard
                                title="Bustos y Medios"
                                description="Soportes específicos para destacar piezas clave."
                                href="/contacto"
                                imageUrl="/images/systems/maniquies/BM1.jpg"
                            />
                        </div>

                        <div className="mt-20 glass rounded-apple-lg p-12 text-center overflow-hidden relative border-primary/10">
                            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                                <Sparkles size={120} className="text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Realce su Vidriera</h3>
                            <p className="text-lg text-apple-muted mb-10 max-w-2xl mx-auto">
                                Nuestro equipo especializado le asesorará en la elección
                                de las mejores posturas y acabados para su colección.
                            </p>
                            <Link
                                href="/contacto"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-xl font-bold text-white transition-all hover:bg-primary-dark"
                            >
                                Solicitar Catálogo Digital
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
