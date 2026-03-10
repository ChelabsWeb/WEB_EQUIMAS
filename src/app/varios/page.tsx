import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { CaretRight, Package, Handbag, Monitor } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VariosPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Accesorios</span> y Varios
                            </h1>
                            <p className="text-xl text-apple-muted leading-relaxed">
                                Los detalles hacen la diferencia. Nuestra línea de accesorios complementa su equipamiento con soluciones prácticas para la exhibición de calzado, bolsos, electrónica y comunicación visual.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            <div className="glass p-8 rounded-md">
                                <Package weight="bold" className="text-primary mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Exhibición de Calzado</h3>
                                <p className="text-apple-muted">Soportes individuales, espejos de piso y estantes específicos para calzado deportivo y casual.</p>
                            </div>
                            <div className="glass p-8 rounded-md">
                                <Handbag weight="bold" className="text-primary mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Marroquinería</h3>
                                <p className="text-apple-muted">Brazos reforzados y soportes de mesa para destacar carteras, bolsos y pequeña marroquinería.</p>
                            </div>
                            <div className="glass p-8 rounded-md">
                                <Monitor weight="bold" className="text-primary mb-6" size={40} />
                                <h3 className="text-2xl font-bold mb-4">Electrónica</h3>
                                <p className="text-apple-muted">Soportes con seguridad y carga integrada para smartphones, tablets y wearables.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Espejos para Calzado"
                                description="Inclinación regulable y base antideslizante."
                                href="/contacto"
                                imageUrl="/images/systems/varios/MVB.jpg"
                            />
                            <CategoryCard
                                title="Porta Precios"
                                description="Variedad de formatos para una comunicación clara."
                                href="/contacto"
                                imageUrl="/images/systems/varios/MDC.jpg"
                            />
                            <CategoryCard
                                title="Pufs y Taburetes"
                                description="Confort para el sector de calzado."
                                href="/contacto"
                                imageUrl="/images/systems/varios/CML.jpg"
                            />
                        </div>

                        <div className="mt-20 glass rounded-md p-12 text-center border-primary/10">
                            <h3 className="text-3xl font-bold mb-6">¿Busca un accesorio específico?</h3>
                            <p className="text-lg text-apple-muted mb-10 max-w-2xl mx-auto">
                                Si no encuentra el accesorio que necesita, podemos fabricarlo según sus especificaciones técnicas.
                            </p>
                            <Button asChild size="lg" className="group rounded-md bg-primary px-10 py-8 text-xl font-bold text-white transition-all hover:bg-black">
                                <Link href="/contacto">
                                    Consultar Disponibilidad
                                    <CaretRight weight="bold" size={24} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

