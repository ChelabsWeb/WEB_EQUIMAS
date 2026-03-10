"use client";

import React, { useRef, use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Download, 
  Ruler, 
  Maximize, 
  RulerIcon, 
  Package, 
  Layers, 
  Check, 
  ChevronRight 
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  // Resolve params for Next.js 15+ App Router compatibility
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "35vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Reusable spring animation for entry elements
  const springUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 1 }
  };

  return (
    <main className="bg-[#050505] min-h-screen text-neutral-200 overflow-hidden font-sans pb-32 md:pb-0">
      
      {/* 1. HERO SECTION INMERSIVO */}
      <section ref={heroRef} className="relative h-[85vh] w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 origin-top"
          style={{ y, opacity, scale }}
        >
          {/* Black gradient overlays for extreme contrast and text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/20 z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt={`Product atmosphere ${id}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Floating Title & Call to Action */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end pb-12 px-6 md:p-16 lg:p-24 max-w-screen-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full flex justify-end"
          >
            {/* Glassmorphism Panel positioned bottom-right on Desktop */}
            <div className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl inline-block max-w-xl">
              <h4 className="text-neutral-400 tracking-widest uppercase text-xs font-semibold mb-3">Serie Signature</h4>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Lumina <br/>
                <span className="text-neutral-500">Edition.</span>
              </h1>
              <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed mb-10">
                Un manifiesto de diseño corporativo. Redefiniendo el espacio de trabajo moderno con líneas perfectas y materiales absolutos.
              </p>
              
              {/* Desktop CTA */}
              <button className="group relative hidden md:inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span>Solicitar Cotización</span>
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black text-black group-hover:text-white transition-colors duration-300">
                  <Check className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BENTO GRID - ESPECIFICACIONES TÉCNICAS */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div 
          {...springUp}
          className="mb-14 md:mb-24 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
            Ingeniería detrás de <br/> la estética.
          </h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed">
            No sacrificamos el rendimiento por el diseño. Cada milímetro ha sido calculado para maximizar la durabilidad en entornos B2B de alto tráfico.
          </p>
        </motion.div>

        {/* CSS Grid / Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 lg:gap-8 auto-rows-[280px]">
          
          {/* Card 1: Acabados y Materialidad (Gran Card) */}
          <motion.div 
            {...springUp} transition={{ ...springUp.transition, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/5 group"
          >
            <div className="absolute inset-0">
               <img 
                 src="https://images.unsplash.com/photo-1628177142898-93e46e6d60ed?q=80&w=2070&auto=format&fit=crop" 
                 alt="Texture detail" 
                 className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                 <Layers className="w-5 h-5 text-neutral-300" />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Materialidad Absoluta</h3>
              <p className="text-neutral-400 font-light max-w-lg text-lg leading-relaxed">
                Acero inoxidable cepillado con recubrimiento PVD antihuellas, combinado con superficies de roble macizo curado durante 5 años.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#18181A] border border-[#2A2A2A] shadow-inner"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Carbón Dark</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4CFC5] border border-white/20 shadow-inner"></div>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Arena Natural</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Descargar Ficha Técnica */}
          <motion.div 
            {...springUp} transition={{ ...springUp.transition, delay: 0.2 }}
            className="rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between hover:bg-[#111] transition-colors duration-500 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Download className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">Ficha Técnica</h3>
              <p className="text-neutral-500 text-sm font-light">Documentación completa en formato PDF con especificaciones ISO 9001.</p>
            </div>
          </motion.div>

          {/* Card 3: Métricas y Dimensiones */}
          <motion.div 
            {...springUp} transition={{ ...springUp.transition, delay: 0.3 }}
            className="rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between overflow-hidden relative"
          >
             <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
               <RulerIcon className="w-64 h-64" />
             </div>
             <div>
               <h3 className="text-2xl font-medium text-white mb-8 tracking-tight">Dimensiones</h3>
               
               <div className="space-y-5">
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                   <div className="flex items-center gap-3 text-neutral-400">
                     <Maximize className="w-[18px] h-[18px]" />
                     <span className="text-sm font-light">Longitud Total</span>
                   </div>
                   <span className="text-white font-medium">240 cm</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                   <div className="flex items-center gap-3 text-neutral-400">
                     <Ruler className="w-[18px] h-[18px]" />
                     <span className="text-sm font-light">Altura Estándar</span>
                   </div>
                   <span className="text-white font-medium">75 cm</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3 text-neutral-400">
                     <Package className="w-[18px] h-[18px]" />
                     <span className="text-sm font-light">Peso Estructural</span>
                   </div>
                   <span className="text-white font-medium">85 kg</span>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* 3. MOBILE STICKY CTA ("Ghost Sticky CTA") */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50 pointer-events-none flex justify-center">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
          className="pointer-events-auto w-full max-w-sm"
        >
          <button className="w-full relative overflow-hidden rounded-full backdrop-blur-2xl bg-[#111111]/80 border border-white/10 shadow-2xl p-4 flex items-center justify-between px-6 transition-all active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
            <span className="relative z-10 text-white font-medium tracking-wide text-sm">Solicitar Cotización</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </motion.div>
      </div>

    </main>
  );
}
