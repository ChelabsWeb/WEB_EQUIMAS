'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import Particles from '@/components/Particles';
import { ArrowRight, CheckCircle, Star } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Componente principal de la página de inicio
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Solutions Section - Modern Carousel */}
        <section className="py-16 md:py-24 overflow-hidden relative">
          <div className="container mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Nuestras <span className="text-primary">Soluciones</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Sistemas de exhibición versátiles diseñados para optimizar la
                visualización de productos y maximizar las ventas.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-6 relative">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full relative z-10"
            >
              <div className="flex justify-end gap-2 mb-6 hidden md:flex absolute -top-[100px] right-0">
                <CarouselPrevious className="relative inset-auto translate-y-0 h-12 w-12 bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary hover:text-white text-foreground" />
                <CarouselNext className="relative inset-auto translate-y-0 h-12 w-12 bg-background/50 backdrop-blur-md border-white/10 hover:bg-primary hover:text-white text-foreground" />
              </div>

              <CarouselContent className="-ml-4 md:-ml-6 py-4">
                {[
                  { id: 'equipamiento', title: 'Equipamiento', description: 'Arquitectura comercial y sistemas de exhibición.', image: '/images/equipamiento.jpg', href: '/equipamiento' },
                  { id: 'maniquies', title: 'Maniquíes', description: 'Selección premium para resaltar sus colecciones.', image: '/images/maniquies.jpg', href: '/maniquies' },
                  { id: 'puc', title: 'Sistemas PUC', description: 'Puntos de anclaje con tecnología ZAMAC.', image: '/images/systems/sistema-g/g1.jpg', href: '/sistemas' },
                  { id: 'mobiliario', title: 'Mobiliario', description: 'Muebles a medida con acabados tecnológicos.', image: '/images/mobiliario.jpg', href: '/mobiliario' },
                  { id: 'sistemas', title: 'Sistemas Técnicos', description: 'Línea de alto porte estructural en aluminio.', image: '/images/systems/sistema-d/d1.jpg', href: '/sistemas' },
                ].map((category) => (
                  <CarouselItem key={category.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <Link href={category.href} className="block group h-full">
                      <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] hover:-translate-y-2">
                        {/* Background Image with Premium Overlay */}
                        <div className="absolute inset-0 z-0">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-700" />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/95 via-primary/20 to-transparent transition-opacity duration-700" />
                        </div>
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                          <div className="transform transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                            <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                              {category.title}
                              <ArrowRight weight="bold" className="h-6 w-6 opacity-0 -translate-x-8 transition-all duration-500 ease-out text-primary group-hover:opacity-100 group-hover:translate-x-0" />
                            </h3>
                            <p className="text-white/70 line-clamp-2 text-lg font-light opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Top-right decorative accent */}
                        <div className="absolute top-6 right-6 h-10 w-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <ArrowRight weight="bold" className="h-5 w-5 text-white -rotate-45" />
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center gap-6 mt-10 md:hidden pb-4">
                <CarouselPrevious className="relative inset-auto translate-y-0 h-14 w-14 border border-black/10 bg-white/80 backdrop-blur-md hover:bg-primary shadow-apple text-foreground shadow-md hover:text-white transition-all [&_svg]:h-6 [&_svg]:w-6" />
                <CarouselNext className="relative inset-auto translate-y-0 h-14 w-14 border border-black/10 bg-white/80 backdrop-blur-md hover:bg-primary shadow-apple text-foreground shadow-md hover:text-white transition-all [&_svg]:h-6 [&_svg]:w-6" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-apple-bg py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 overflow-hidden rounded-md shadow-2xl h-[400px]">
                  <Image
                    src="/images/hero.jpg"
                    alt="Equimas Experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 hidden md:block rounded-md glass p-8 shadow-apple max-w-xs z-20">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Star weight="fill" size={20} />
                    <Star weight="fill" size={20} />
                    <Star weight="fill" size={20} />
                    <Star weight="fill" size={20} />
                    <Star weight="fill" size={20} />
                  </div>
                  <p className="text-sm font-medium italic text-apple-text leading-relaxed">
                    "La calidad de los sistemas de Equimas transformó por completo nuestra tienda insignia en Montevideo Shopping."
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                    CLIENTE SATISFECHO
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-block rounded-md bg-primary/10 px-4 py-1 text-sm font-bold tracking-wider text-primary uppercase">
                  NUESTRA EXPERIENCIA
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-apple-text">
                  Más de dos décadas creando espacios de éxito.
                </h2>
                <p className="text-lg text-apple-muted leading-relaxed">
                  EQUIMAS es una empresa con más de veinte años en plaza, adquiriendo una gran experiencia
                  en el desarrollo, creación y armado de mobiliario para equipamientos comerciales.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    "Servicio integral llave en mano",
                    "Diseños propios y personalizados",
                    "Tecnología de vanguardia",
                    "Respaldo y servicio post-venta"
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle className="text-primary" size={24} weight="fill" />
                      <span className="font-medium text-apple-text">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button asChild size="lg" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    <Link href="/que-hacemos">
                      Conocer Más Sobre Nosotros
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16 md:py-24 text-white">
          <div className="container relative z-30 mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              ¿Listo para renovar su espacio comercial?
            </h2>
            <p className="mt-8 text-xl text-white/80 max-w-xl mx-auto">
              Contáctenos hoy mismo para recibir asesoramiento personalizado de
              nuestro equipo de profesionales.
            </p>
            <div className="mt-12">
              <Button asChild size="lg" className="rounded-md bg-white px-10 py-8 text-lg font-bold text-primary transition-all hover:bg-black hover:text-white active:scale-[0.98] shadow-lg shadow-black/10">
                <Link href="/contacto">
                  Comenzar Proyecto
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
