import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Dos familias en todo el sitio y nada más:
 *   Switzer     — sans única (--font-sans en globals.css)
 *   Chivo Mono  — acento técnico: eyebrows, códigos de sistema, materiales
 * Chivo Mono además tiene el cero sin barra de fábrica.
 */
const switzer = localFont({
  variable: "--font-switzer-local",
  display: "swap",
  src: [
    { path: "../fonts/Switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Switzer-700.woff2", weight: "700", style: "normal" },
  ],
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Equimas | Equipamiento Comercial Moderno y Mobiliario a Medida",
  description: "Diseño y fabricación de mobiliario comercial de alta gama. Especialistas en equipamiento moderno para tiendas, locales y oficinas. Estética minimalista y funcional.",
  keywords: ["mobiliario comercial", "equipamiento para tiendas", "diseño de interiores comerciales", "Equimas", "muebles a medida"],
  openGraph: {
    title: "Equimas | Equipamiento Comercial Moderno",
    description: "Diseño y fabricación de mobiliario comercial de alta gama con estética minimalista.",
    url: "https://www.equimas.com", // Ajustar URL real si existe
    siteName: "Equimas",
    locale: "es_UY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${switzer.variable} ${chivoMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <TooltipProvider>
          <ScrollProgress />
          <CustomCursor />
          <SmoothScroll>
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </SmoothScroll>
        </TooltipProvider>
      </body>
    </html>
  );
}
