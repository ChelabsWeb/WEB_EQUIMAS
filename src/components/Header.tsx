'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import Image from 'next/image';

const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Qué Hacemos', href: '/que-hacemos' },
    { name: 'Sistemas', href: '/sistemas' },
    { name: 'Maniquíes', href: '/maniquies' },
    { name: 'Mobiliario', href: '/mobiliario' },
    { name: 'Portfolio', href: '/portfolio' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                gsap.to('.mobile-menu', { x: 0, duration: 0.6, ease: 'power4.out' });
                gsap.from('.mobile-nav-item', {
                    x: 40,
                    opacity: 0,
                    stagger: 0.08,
                    delay: 0.2,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            } else {
                document.body.style.overflow = 'unset';
                gsap.to('.mobile-menu', { x: '100%', duration: 0.5, ease: 'power4.in' });
            }
        });
        return () => ctx.revert();
    }, [isOpen]);

    return (
        <header
            className={cn(
                'fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-500',
                scrolled ? 'top-4 scale-[0.98]' : 'top-6 scale-100'
            )}
        >
            <nav className="bg-white/90 backdrop-blur-md rounded-md px-8 py-2 flex items-center justify-between border border-white/20 shadow-sm">
                <div className="flex items-center">
                    <Link href="/" className="relative flex items-center">
                        <Image
                            src="/logo-equimas.png"
                            alt="Equimas Logo"
                            width={160}
                            height={45}
                            className="h-10 w-auto pt-2"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-black/80 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:flex rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-black/20">
                        <Link href="/contacto">
                            Contacto
                        </Link>
                    </Button>

                    <button
                        className="flex items-center justify-center rounded-md p-2 hover:bg-black/5 text-black md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'mobile-menu fixed inset-0 z-[60] flex flex-col bg-background/90 dark:bg-black/90 backdrop-blur-3xl p-8 md:hidden translate-x-full',
                )}
            >
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="p-2 rounded-md hover:bg-white/10 transition-colors">
                        <X size={32} className="text-white" />
                    </button>
                </div>
                <nav className="mt-16 flex flex-col gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="mobile-nav-item text-4xl font-black tracking-tighter uppercase text-white hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mobile-nav-item mt-8 pt-8 border-t border-white/10">
                        <Button
                            asChild
                            size="lg"
                            className="w-full justify-center rounded-md bg-primary px-10 py-8 text-xl font-black uppercase tracking-widest text-primary-foreground shadow-xl shadow-primary/30"
                        >
                            <Link href="/contacto" onClick={() => setIsOpen(false)}>
                                Contacto
                            </Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
