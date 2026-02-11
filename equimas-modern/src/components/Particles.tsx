'use client';

import React, { useEffect, useRef } from 'react';

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 140;
        const connectionRadius = 120;
        const hollowRadius = 100; // The "bubble" around the cursor
        const interactionRadius = 400; // Range of attraction

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            originX: number;
            originY: number;
            color: string;
            friction: number;
            ease: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.originX = this.x;
                this.originY = this.y;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.size = Math.random() * 2 + 0.5;
                this.color = 'rgba(211, 47, 47, 0.5)';
                this.friction = 0.95;
                this.ease = 0.05;
            }

            update() {
                // Natural drift towards "home" or random swim
                const dxOrig = this.originX - this.x;
                const dyOrig = this.originY - this.y;
                this.vx += dxOrig * 0.0001;
                this.vy += dyOrig * 0.0001;

                if (mouseRef.current.active) {
                    const dx = mouseRef.current.x - this.x;
                    const dy = mouseRef.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < interactionRadius) {
                        // Attraction force
                        const force = (interactionRadius - distance) / interactionRadius;

                        if (distance > hollowRadius) {
                            // Smoothly follow the cursor
                            this.vx += (dx / distance) * force * 0.5;
                            this.vy += (dy / distance) * force * 0.5;
                        } else {
                            // Repulsion force to create the "hollow" look
                            const pushForce = (hollowRadius - distance) / hollowRadius;
                            this.vx -= (dx / distance) * pushForce * 3;
                            this.vy -= (dy / distance) * pushForce * 3;
                        }
                    }
                }

                this.vx *= this.friction;
                this.vy *= this.friction;
                this.x += this.vx;
                this.y += this.vy;

                // Bounce or wrap
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                // Connect particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionRadius) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(211, 47, 47, ${0.1 * (1 - distance / connectionRadius)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
            mouseRef.current.active = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        init();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
        />
    );
}
