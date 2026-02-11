import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import { ChevronRight, ShoppingBag, ArrowRight, Layout } from 'lucide-react';
import Link from 'next/link';

export default function MobiliarioPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mb-16">
                            <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl mb-8">
                                <span className="text-primary">Mobiliario</span> de Piso
                            </h1>
                            <p className="text-xl text-apple-muted leading-relaxed">
                                El mobiliario de piso es un elemento muy importante a la hora de equipar una tienda, por ello ofrecemos una amplia variedad de productos, todos muy prácticos y de esmerado diseño.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            <CategoryCard
                                title="Percheros de Pie"
                                description="Diseños versátiles para destacar prendas en áreas centrales."
                                href="/percheros"
                                imageUrl="/images/systems/percheros/1.jpg"
                            />
                            <CategoryCard
                                title="Islas de Exhibición"
                                description="Módulos centrales que optimizan el flujo de la tienda."
                                href="/islas"
                                imageUrl="/images/systems/islas/1.jpg"
                            />
                            <CategoryCard
                                title="Mostradores"
                                description="Puntos de venta funcionales con estética profesional."
                                href="/contacto"
                                imageUrl="/images/systems/mobiliario-piso/1.jpg"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                            <div className="glass p-6 rounded-apple text-center">
                                <h4 className="font-bold mb-2">Espejos</h4>
                                <p className="text-sm text-apple-muted">Para calzado y probadores.</p>
                            </div>
                            <div className="glass p-6 rounded-apple text-center">
                                <h4 className="font-bold mb-2">Pufs</h4>
                                <p className="text-sm text-apple-muted">Confort y estilo para sus clientes.</p>
                            </div>
                            <div className="glass p-6 rounded-apple text-center">
                                <h4 className="font-bold mb-2">Porta Precios</h4>
                                <p className="text-sm text-apple-muted">Detalles que informan y venden.</p>
                            </div>
                            <div className="glass p-6 rounded-apple text-center">
                                <h4 className="font-bold mb-2">Soportes</h4>
                                <p className="text-sm text-apple-muted">Para carteras, calzados y vidrieras.</p>
                            </div>
                        </div>

                        <div className="bg-apple-bg/50 rounded-apple-lg p-12 overflow-hidden relative border border-primary/5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Diseño y Funcionalidad</h3>
                                    <p className="text-lg text-apple-muted mb-8">
                                        Nuestra línea de mobiliario se caracteriza por su practicidad y esmerado diseño,
                                        buscando siempre la armonía entre la estética de la marca y la funcionalidad
                                        del espacio de venta.
                                    </p>
                                    <Link
                                        href="/contacto"
                                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary-dark"
                                    >
                                        Proyectar mi Espacio
                                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <img src="/images/systems/mobiliario-piso/2.jpg" alt="Mobiliario 1" className="rounded- apple shadow-lg" />
                                    <img src="/images/systems/mobiliario-piso/3.jpg" alt="Mobiliario 2" className="rounded-apple shadow-lg translate-y-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
