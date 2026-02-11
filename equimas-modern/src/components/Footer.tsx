'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const [year, setYear] = useState<number>(2025);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-white border-t border-apple-bg pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="Equimas Logo"
                                width={120}
                                height={30}
                                className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                            />
                        </Link>
                        <p className="text-sm text-apple-muted leading-relaxed">
                            Líderes en equipamiento comercial con más de 20 años de experiencia.
                            Diseñamos espacios que inspiran y venden.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-apple-bg transition-colors"
                                aria-label="Instagram de Equimas"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-apple-bg transition-colors"
                                aria-label="Facebook de Equimas"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-apple-bg transition-colors"
                                aria-label="LinkedIn de Equimas"
                            >
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Productos</h4>
                        <ul className="space-y-4 text-sm text-apple-muted">
                            <li><Link href="/sistemas" className="hover:text-primary transition-colors">Sistemas de Exhibición</Link></li>
                            <li><Link href="/mobiliario" className="hover:text-primary transition-colors">Mobiliario a Medida</Link></li>
                            <li><Link href="/maniquies" className="hover:text-primary transition-colors">Maniquíes</Link></li>
                            <li><Link href="/accesorios" className="hover:text-primary transition-colors">Accesorios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Compañía</h4>
                        <ul className="space-y-4 text-sm text-apple-muted">
                            <li><Link href="/que-hacemos" className="hover:text-primary transition-colors">Qué hacemos</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Ubicaciones</h4>
                        <ul className="space-y-4 text-sm text-apple-muted">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-apple-text text-xs uppercase tracking-wider mb-1">Showroom</p>
                                    <p>Sarandí 675, Piso 2, MVD</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <div>
                                    <p className="font-bold text-apple-text text-xs uppercase tracking-wider mb-1">Fábrica</p>
                                    <p>Yapeyú 460, MVD</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>2914 62 78</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-apple-bg text-center">
                    <p className="text-xs text-apple-muted">
                        © {year} Equimas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
