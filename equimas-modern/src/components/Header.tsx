'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
                'fixed top-0 z-50 w-full transition-all duration-300',
                scrolled ? 'py-3' : 'py-6'
            )}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div
                    className={cn(
                        'flex items-center justify-between rounded-full px-8 py-3 transition-all duration-500',
                        scrolled ? 'glass shadow-apple border border-white/20' : 'bg-transparent'
                    )}
                >
                    {/* Column 1: Logo */}
                    <div className="flex flex-1 items-center justify-start">
                        <Link href="/" className="flex items-center transition-transform hover:scale-105 active:scale-95">
                            <Image
                                src="/logo.png"
                                alt="Equimas Logo"
                                width={140}
                                height={35}
                                className="h-7 w-auto md:h-9 mix-blend-multiply"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Column 2: Navigation (Centered) */}
                    <nav className="hidden items-center gap-10 lg:flex">
                        {navItems.slice(0, -1).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-[13px] font-bold tracking-tight text-apple-text/70 transition-all hover:text-primary group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Column 3: CTA & Actions */}
                    <div className="hidden flex-1 items-center justify-end md:flex">
                        <Link
                            href="/contacto"
                            className="rounded-full bg-primary px-6 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:scale-105 active:scale-95"
                        >
                            Contacto
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex flex-1 justify-end lg:hidden">
                        <button
                            className="flex items-center justify-center rounded-full p-2 hover:bg-black/5"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'mobile-menu fixed inset-0 z-[60] flex flex-col bg-white/95 backdrop-blur-2xl p-8 md:hidden translate-x-full',
                )}
            >
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-black/5 transition-colors">
                        <X size={32} />
                    </button>
                </div>
                <nav className="mt-16 flex flex-col gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="mobile-nav-item text-4xl font-bold tracking-tighter text-apple-text hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mobile-nav-item mt-8 pt-8 border-t border-apple-bg">
                        <Link
                            href="/contacto"
                            className="inline-block rounded-full bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-primary/30"
                            onClick={() => setIsOpen(false)}
                        >
                            Contacto
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
