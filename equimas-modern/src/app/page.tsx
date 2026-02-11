import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import Particles from '@/components/Particles';
import HorizontalSlider from '@/components/HorizontalSlider';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Solutions Section - Modern Horizontal Slider */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6 mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-apple-text md:text-5xl">
              Nuestras <span className="text-primary">Soluciones</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-apple-muted">
              Sistemas de exhibición versátiles diseñados para optimizar la
              visualización de productos y maximizar las ventas.
            </p>
          </div>

          <HorizontalSlider categories={[
            { id: 'equipamiento', title: 'Equipamiento', description: 'Arquitectura comercial y sistemas de exhibición.', image: '/images/equipamiento.jpg', href: '/equipamiento' },
            { id: 'maniquies', title: 'Maniquíes', description: 'Selección premium para resaltar sus colecciones.', image: '/images/maniquies.jpg', href: '/maniquies' },
            { id: 'puc', title: 'Sistemas PUC', description: 'Puntos de anclaje con tecnología ZAMAC.', image: '/images/maniquies.jpg', href: '/sistemas' },
            { id: 'mobiliario', title: 'Mobiliario', description: 'Muebles a medida con acabados tecnológicos.', image: '/images/mobiliario.jpg', href: '/mobiliario' },
            { id: 'sistemas', title: 'Sistemas Técnicos', description: 'Línea de alto porte estructural en aluminio.', image: '/images/hero.jpg', href: '/sistemas' },
          ]} />
        </section>

        {/* Experience Section */}
        <section className="bg-apple-bg py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 overflow-hidden rounded-apple-lg shadow-2xl">
                  <img
                    src="/images/hero.jpg"
                    alt="Equimas Experience"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 hidden md:block rounded-apple-lg bg-surface p-8 shadow-apple max-w-xs z-20">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
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
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold tracking-wider text-primary uppercase">
                  NUESTRA EXPERIENCIA
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-apple-text md:text-5xl">
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
                      <CheckCircle2 className="text-primary" size={24} />
                      <span className="font-medium text-apple-text">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link
                    href="/que-hacemos"
                    className="btn-modern btn-modern-outline"
                  >
                    Conocer Más Sobre Nosotros
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-24 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl max-w-3xl mx-auto">
              ¿Listo para renovar su espacio comercial?
            </h2>
            <p className="mt-8 text-xl text-white/80 max-w-xl mx-auto">
              Contáctenos hoy mismo para recibir asesoramiento personalizado de
              nuestro equipo de profesionales.
            </p>
            <div className="mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-primary transition-all hover:bg-apple-bg hover:scale-105"
              >
                Comenzar Proyecto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
