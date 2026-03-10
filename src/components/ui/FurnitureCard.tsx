"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FurnitureCardProps {
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  span?: string;     // Prop para el Bento Grid (ej: "md:col-span-2 md:row-span-2")
  className?: string; // Para clases extra si fueran necesarias
}

export function FurnitureCard({
  title,
  category,
  imageUrl,
  href,
  span = "col-span-1",
  className = "",
}: FurnitureCardProps) {
  return (
    <Link
      href={href}
      // 3. Bento Grid Ready: Permite inyectar la distribución asimétrica desde el padre
      className={`group relative block overflow-hidden rounded-2xl bg-[#050505] ${span} ${className}`}
    >
      <div className="relative h-full w-full min-h-[400px] overflow-hidden">
        
        {/* 
          1. Framer Motion: Escalado interno suave
          Usa físicas de resorte (spring) para una interacción orgánica y premium, 
          evitando animaciones lineales. La imagen tiene además un ligero fade-in.
        */}
        <motion.div
          className="absolute inset-0 h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center opacity-85 transition-opacity duration-700 ease-out group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradiente sutil para anclar la tarjeta inferior sin abusar de sombras */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        {/* 
          2. Premium Glassmorphism:
          La caja de contenido flota sobre la imagen con backdrop-blur-xl,
          fondo translúcido sutil (bg-black/40) y un borde que se ilumina lentamente en hover.
          No se usan deep box-shadows para mantener la estética limpia y arquitectónica.
        */}
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex items-end justify-between overflow-hidden rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl transition-colors duration-500 ease-out group-hover:border-white/20">
            
            <div className="flex flex-col gap-2 relative z-10">
              {/* 4. Tipografía: Jerarquía invertida - Categoría con mucho tracking */}
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                {category}
              </span>
              
              {/* 4. Tipografía: Título grande, ligero y con tracking ajustado */}
              <h3 className="text-2xl font-light tracking-tight text-white/95">
                {title}
              </h3>
            </div>

            {/* Icono ArrowUpRight con micro-interacción de movimiento direccional */}
            <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-500 group-hover:bg-white/10">
              <ArrowUpRight 
                strokeWidth={1.5} 
                className="h-5 w-5 text-white/80 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" 
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
