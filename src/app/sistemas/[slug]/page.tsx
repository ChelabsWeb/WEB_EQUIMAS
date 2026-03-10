import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, DownloadSimple, Info, CheckCircle, CaretRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { systemsData } from '@/lib/data';
import SystemCarousel from '@/components/SystemCarousel';
import { MagneticCTA } from '@/components/ui/magnetic-cta';
import { Button } from '@/components/ui/button';

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
                            <ArrowLeft weight="bold" size={18} className="transition-transform group-hover:-translate-x-1" />
                            Volver a Sistemas
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
                            {/* Media Section - Scrolls */}
                            <div className="animate-in delay-200 lg:order-1 order-2 space-y-8">
                                <SystemCarousel
                                    images={system.images || [system.image]}
                                    className="aspect-[4/3] shadow-2xl rounded-md overflow-hidden"
                                />
                                <div className="glass-premium rounded-md p-8 text-center bg-white/5 dark:bg-black/20 backdrop-blur-xl">
                                    <p className="text-lg text-muted-foreground italic font-body">
                                        "La precisión técnica del {system.name} permite terminaciones de alto nivel para marcas de lujo."
                                    </p>
                                </div>
                                <div className="aspect-video w-full rounded-md glass-premium flex items-center justify-center relative overflow-hidden group">
                                    {/* Placeholder for 3D Viewer or Video */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-0 group-hover:scale-105 transition-transform duration-700"></div>
                                    <span className="relative z-10 text-muted-foreground font-medium flex items-center gap-2">
                                        <Info weight="bold" size={18} /> Explorador 3D / Video Layout
                                    </span>
                                </div>
                            </div>

                            {/* Sticky Buy Box (Product Info) */}
                            <div className="space-y-8 lg:order-2 order-1 lg:sticky lg:top-32 h-fit">
                                <div className="inline-block rounded-md bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
                                    Sistemas {system.category}
                                </div>
                                <h1 className="text-5xl font-bold tracking-tight md:text-6xl text-foreground font-sans uppercase">
                                    {system.name}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed font-body">
                                    {system.longDescription}
                                </p>

                                <div className="space-y-6 pt-6">
                                    <div className="glass-premium rounded-md p-6 border-primary/10 bg-white/5 dark:bg-black/20">
                                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                            <Info weight="bold" size={20} className="text-primary" />
                                            Características Destacadas
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {system.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3">
                                                    <CheckCircle weight="fill" className="text-primary" size={18} />
                                                    <span className="text-sm font-medium text-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm glass-premium rounded-md p-4 bg-white/5 dark:bg-black/20">
                                        <span className="font-bold text-foreground uppercase tracking-widest text-xs">Materiales:</span>
                                        <span className="text-muted-foreground">{system.materials}</span>
                                    </div>
                                </div>

                                <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center">
                                    <MagneticCTA className="w-full sm:w-auto">
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto h-14 rounded-md text-lg px-8 shadow-xl shadow-primary/20"
                                        >
                                            Cotizar Proyecto
                                        </Button>
                                    </MagneticCTA>
                                    <MagneticCTA className="w-full sm:w-auto">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full sm:w-auto h-14 rounded-md text-lg px-8 border-2"
                                        >
                                            <DownloadSimple weight="bold" size={20} className="mr-2" />
                                            Ficha Técnica (PDF)
                                        </Button>
                                    </MagneticCTA>
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
