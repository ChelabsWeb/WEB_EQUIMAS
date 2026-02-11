'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Qué Hacemos', href: '/que-hacemos' },
    { name: 'Sistemas', href: '/sistemas' },
    { name: 'Maniquíes', href: '/maniquies' },
    { name: 'Mobiliario', href: '/mobiliario' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contacto', href: '/contacto' },
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
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to('.mobile-menu', { x: 0, duration: 0.5, ease: 'power3.out' });
        } else {
            document.body.style.overflow = 'unset';
            gsap.to('.mobile-menu', { x: '100%', duration: 0.5, ease: 'power3.in' });
        }
    }, [isOpen]);

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300',
                scrolled ? 'py-3' : 'py-6'
            )}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div
                    className={cn(
                        'flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500',
                        scrolled ? 'glass shadow-apple' : 'bg-transparent'
                    )}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight text-primary">EQUIMAS</span>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-apple-text/80 transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all hover:bg-primary-dark hover:scale-105"
                        >
                            Presupuesto
                        </Link>
                    </nav>

                    <button
                        className="flex items-center justify-center rounded-full p-2 md:hidden hover:bg-black/5"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'mobile-menu fixed inset-0 z-[60] flex flex-col bg-white p-8 md:hidden translate-x-full',
                )}
            >
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="p-2">
                        <X size={32} />
                    </button>
                </div>
                <nav className="mt-12 flex flex-col gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-3xl font-semibold text-apple-text"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
