"use client";

import { usePathname } from "next/navigation";

/**
 * Contenedor de página.
 *
 * Antes esto era una transición de framer-motion que arrancaba en
 * `opacity: 0; filter: blur(8px)`: si el rAF no corría (pestaña en segundo
 * plano, JS lento o caído) la página entera quedaba invisible. No vale la pena
 * arriesgar el contenido por un fade — el contenido se renderiza y punto.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="w-full flex-1 flex flex-col">
      {children}
    </div>
  );
}
