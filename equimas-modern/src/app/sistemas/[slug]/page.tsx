import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Download, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { systemsData } from '@/lib/data';
import SystemCarousel from '@/components/SystemCarousel';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const system = systemsData.find(s => s.id === slug);

    if (!system) notFound();

    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white/50 backdrop-blur-sm py-12">
                    <div className="container mx-auto px-6">
                        <Link
                            href="/sistemas"
                            className="inline-flex items-center gap-2 text-apple-muted hover:text-primary mb-8 transition-colors group"
                        >
                            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                            Volver a Sistemas
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8 animate-in">
                                <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold tracking-wider text-primary uppercase">
                                    Sistemas {system.category}
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-6xl">
                                    {system.name}
                                </h1>
                                <p className="text-xl text-apple-muted leading-relaxed">
                                    {system.longDescription}
                                </p>

                                <div className="space-y-6 pt-6">
                                    <div className="glass rounded-apple p-6 border-primary/10">
                                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                            <Info size={20} className="text-primary" />
                                            Características Destacadas
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {system.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3">
                                                    <CheckCircle2 className="text-primary/60" size={18} />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="font-bold text-apple-text uppercase tracking-widest">Materiales:</span>
                                        <span className="text-apple-muted">{system.materials}</span>
                                    </div>
                                </div>

                                <div className="pt-8 flex flex-wrap gap-4">
                                    <Link
                                        href="/contacto"
                                        className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary-dark hover:scale-105"
                                    >
                                        Cotizar Proyecto
                                        <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <button
                                        className="flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white/50 px-8 py-4 text-lg font-medium text-text-main transition-all hover:bg-primary/5"
                                    >
                                        <Download size={20} />
                                        Ficha Técnica (PDF)
                                    </button>
                                </div>
                            </div>

                            <div className="animate-in delay-200">
                                <SystemCarousel
                                    images={system.images || [system.image]}
                                    className="aspect-[4/3] shadow-2xl"
                                />
                                <div className="mt-8 glass rounded-apple p-6 text-center">
                                    <p className="text-sm text-apple-muted italic">
                                        "La precisión técnica del {system.name} permite terminaciones de alto nivel para marcas de lujo."
                                    </p>
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
