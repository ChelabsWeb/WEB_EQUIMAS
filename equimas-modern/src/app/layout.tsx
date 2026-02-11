import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${outfit.variable} font-sans antialiased text-apple-text cursor-none`}>
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
