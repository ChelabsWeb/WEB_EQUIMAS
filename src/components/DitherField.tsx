'use client';

import { useEffect, useRef } from 'react';

/**
 * Degradado rojo de marca resuelto con dither ordenado (Bayer 8x8).
 *
 * Se dibuja en un canvas a 1/PIXEL de la resolución real y se escala con
 * image-rendering:pixelated — de ahí salen los puntos chunky, y de paso el
 * costo por frame es ~1/9 del de un canvas full-res.
 */

// Matriz Bayer 8x8 clásica, normalizada a 0..1
const BAYER = [
     0, 32,  8, 40,  2, 34, 10, 42,
    48, 16, 56, 24, 50, 18, 58, 26,
    12, 44,  4, 36, 14, 46,  6, 38,
    60, 28, 52, 20, 62, 30, 54, 22,
     3, 35, 11, 43,  1, 33,  9, 41,
    51, 19, 59, 27, 49, 17, 57, 25,
    15, 47,  7, 39, 13, 45,  5, 37,
    63, 31, 55, 23, 61, 29, 53, 21,
].map((v) => (v + 0.5) / 64);

// Rampa del near-black del sitio al rojo de marca (#d32f2f → #ff6659)
const PALETTE = [
    [10, 10, 10],
    [38, 12, 11],
    [82, 18, 16],
    [138, 24, 21],
    [186, 36, 33],
    [211, 47, 47],
    [255, 102, 89],
];
const LAST = PALETTE.length - 1;

const PIXEL = 3;      // tamaño del "pixel" de dither, en px de pantalla
const FPS = 24;       // el dither no necesita 60fps y así respira mejor
const FRAME_MS = 1000 / FPS;

export default function DitherField({ className = '' }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let w = 0;
        let h = 0;
        let image: ImageData | null = null;
        let raf = 0;
        let lastFrame = 0;
        let clock = 0;          // tiempo propio: no avanza mientras está pausado
        let lastTick = 0;
        let visible = true;
        let onScreen = true;

        const draw = (t: number) => {
            if (!image) return;
            const data = image.data;

            // Dos fuentes de luz que derivan lento (Lissajous) y respiran
            const maxDim = Math.max(w, h);
            const cx1 = w * (0.74 + 0.07 * Math.sin(t * 0.000130));
            const cy1 = h * (0.46 + 0.11 * Math.cos(t * 0.000091));
            const r1 = maxDim * (0.50 + 0.05 * Math.sin(t * 0.000170));
            const cx2 = w * (0.24 + 0.10 * Math.cos(t * 0.000070));
            const cy2 = h * (0.94 + 0.07 * Math.sin(t * 0.000110));
            const r2 = maxDim * 0.52;

            const inv1 = 1 / (r1 * r1);
            const inv2 = 1 / (r2 * r2);

            let p = 0;
            for (let y = 0; y < h; y++) {
                const dy1 = y - cy1;
                const dy2 = y - cy2;
                const dy1s = dy1 * dy1;
                const dy2s = dy2 * dy2;
                const bayerRow = (y & 7) << 3;

                for (let x = 0; x < w; x++) {
                    const dx1 = x - cx1;
                    const dx2 = x - cx2;

                    // caída cuadrática: núcleo suave, borde definido
                    let v = 1 - (dx1 * dx1 + dy1s) * inv1;
                    if (v < 0) v = 0;
                    let v2 = 1 - (dx2 * dx2 + dy2s) * inv2;
                    if (v2 < 0) v2 = 0;

                    v = (v + v2 * 0.45) * 0.92;
                    v = v * v;               // concentra el rojo en el núcleo
                    if (v > 1) v = 1;

                    // dither ordenado entre los dos pasos de paleta más cercanos
                    const scaled = v * LAST;
                    let idx = scaled | 0;
                    if (scaled - idx > BAYER[bayerRow + (x & 7)]) idx++;
                    if (idx > LAST) idx = LAST;

                    const c = PALETTE[idx];
                    data[p++] = c[0];
                    data[p++] = c[1];
                    data[p++] = c[2];
                    data[p++] = 255;
                }
            }
            ctx.putImageData(image, 0, 0);
        };

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            w = Math.max(1, Math.ceil(rect.width / PIXEL));
            h = Math.max(1, Math.ceil(rect.height / PIXEL));
            canvas.width = w;
            canvas.height = h;
            image = ctx.createImageData(w, h);
            draw(clock);
        };

        const loop = (now: number) => {
            raf = requestAnimationFrame(loop);
            if (lastTick) clock += now - lastTick;
            lastTick = now;
            if (now - lastFrame < FRAME_MS) return;
            lastFrame = now;
            draw(clock);
        };

        const start = () => {
            if (reduced || raf) return;
            lastTick = 0;
            raf = requestAnimationFrame(loop);
        };
        const stop = () => {
            if (!raf) return;
            cancelAnimationFrame(raf);
            raf = 0;
        };
        const sync = () => (visible && onScreen ? start() : stop());

        resize();

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        const io = new IntersectionObserver(
            ([entry]) => {
                onScreen = entry.isIntersecting;
                sync();
            },
            { threshold: 0 }
        );
        io.observe(canvas);

        const onVisibility = () => {
            visible = document.visibilityState === 'visible';
            sync();
        };
        document.addEventListener('visibilitychange', onVisibility);

        sync();

        return () => {
            stop();
            ro.disconnect();
            io.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={className}
            style={{ imageRendering: 'pixelated', width: '100%', height: '100%', display: 'block' }}
        />
    );
}
