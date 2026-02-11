import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-apple-bg pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">EQUIMAS</h3>
                        <p className="text-sm text-apple-muted leading-relaxed">
                            Líderes en equipamiento comercial con más de 20 años de experiencia.
                            Diseñamos espacios que inspiran y venden.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full hover:bg-apple-bg transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full hover:bg-apple-bg transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full hover:bg-apple-bg transition-colors">
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
                        © {new Date().getFullYear()} Equimas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
