import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DitherField from '@/components/DitherField';
import { systemsData } from '@/lib/data';

// min-h-svh y no min-h-screen: en iOS 100vh es la altura CON la barra de URL
// oculta, así que al cargar, el hero queda más alto que la pantalla y empuja la
// ficha técnica fuera de vista. svh además no cambia al colapsar la barra al
// scrollear, así que tampoco dispara resizes del canvas en pleno scroll.
export default function Hero() {
    return (
        <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#0A0A0A] text-white">
            {/* Degradado rojo de marca, dithered y en movimiento lento */}
            <div className="absolute inset-0 z-0">
                <DitherField />
            </div>

            {/* Grilla: hairlines que estructuran la sección */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 flex justify-between px-4 md:px-6"
            >
                {Array.from({ length: 6 }).map((_, i) => (
                    <span
                        key={i}
                        className={`w-px bg-white/[0.07] ${i % 2 === 1 ? 'hidden md:block' : ''}`}
                    />
                ))}
            </div>

            {/* Que el dither no compita con el texto ni corte seco contra la tira */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.55)_45%,transparent_75%)]"
            />

            <div className="relative z-20 flex flex-1 items-center">
                <div className="container mx-auto px-4 py-28 md:px-6 md:py-32">

                    {/* text-white explícito: el @layer base de globals.css fuerza
                        text-foreground en los h1 y le gana a la herencia del section */}
                    <h1 className="max-w-[16ch] text-[clamp(2.6rem,7.4vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-white hero-rise" style={{ animationDelay: "60ms" }}>
                        Mobiliario comercial fabricado a medida.
                    </h1>

                    <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg hero-rise" style={{ animationDelay: "160ms" }}>
                        Sistemas de exhibición en aluminio extruido, acero inoxidable y zamac.
                        Del relevamiento del local al montaje llave en mano, pronto para la apertura.
                    </p>

                    <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-start hero-rise" style={{ animationDelay: "280ms" }}>
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto group bg-primary text-primary-foreground hover:bg-primary-light hover:shadow-[0_0_20px_rgba(227,42,38,0.4)] rounded-md shadow-xl border border-primary-light/20 transition-all duration-300 active:scale-[0.98]"
                        >
                            <Link href="/contacto">Pedir presupuesto</Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto rounded-md border-white/20 bg-white/10 text-white hover:border-white/60 hover:bg-white/20 hover:text-white backdrop-blur-md shadow-lg transition-all duration-300 active:scale-[0.98]"
                        >
                            <Link href="/sistemas">Ver los sistemas</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* El hero cierra en ficha técnica: los sistemas reales, no relleno */}
            {/* fondo casi opaco: si no, sobre el núcleo rojo del dither la ficha no se lee */}
            <div className="relative z-20 overflow-x-auto border-t border-white/10 bg-[#0A0A0A]/88 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden hero-rise" style={{ animationDelay: "430ms" }}>
                <ul className="flex min-w-max">
                    {systemsData.map((s) => (
                        <li
                            key={s.id}
                            className="flex min-w-[230px] flex-col gap-1.5 border-r border-white/10 px-6 py-5 last:border-r-0"
                        >
                            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-primary-light">
                                {s.name}
                            </span>
                            <span className="text-sm font-medium leading-snug text-white/90">
                                {s.description}
                            </span>
                            <span className="font-mono text-[10px] leading-snug text-white/35">
                                {s.materials}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
