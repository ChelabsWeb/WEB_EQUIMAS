'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, PaperPlaneRight, CheckCircle } from '@phosphor-icons/react';
import { useState } from 'react';

export default function ContactoPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'Sistemas Verticales',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error al enviar el mensaje');
            }

            setFormStatus('success');
            setFormData({ name: '', email: '', interest: 'Sistemas Verticales', message: '' });
        } catch (error) {
            console.error('Submit error:', error);
            setFormStatus('error');
        }
    };

    return (
        <>
            <Header />
            <main className="flex-grow pt-32">
                <section className="bg-white/50 backdrop-blur-sm py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl font-bold tracking-tight text-apple-text md:text-7xl">
                            Hablemos de su <span className="text-primary">Proyecto</span>
                        </h1>
                        <p className="mt-8 text-xl text-apple-muted leading-relaxed max-w-2xl">
                            Estamos listos para ayudarle a transformar su espacio comercial.
                            Visítenos en nuestro showroom o fábrica.
                        </p>
                    </div>
                </section>

                <section className="bg-white/30 py-12 pb-32">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Info Column */}
                            <div className="space-y-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="glass rounded-md p-8 shadow-sm group hover:shadow-apple transition-all">
                                        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                            <MapPin weight="fill" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-apple-text">Showroom</h3>
                                        <p className="mt-4 text-apple-muted leading-relaxed">
                                            Sarandí 675, Piso 2<br />
                                            Montevideo, Uruguay
                                        </p>
                                    </div>
                                    <div className="glass rounded-md p-8 shadow-sm group hover:shadow-apple transition-all">
                                        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                            <MapPin weight="fill" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-apple-text">Fábrica</h3>
                                        <p className="mt-4 text-apple-muted leading-relaxed">
                                            Yapeyú 460<br />
                                            Montevideo, Uruguay
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-md border border-apple-bg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-[350px] shadow-apple relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8668885!2d-56.19845!3d-34.90556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802d8f4e3e3b%3A0x1234567890abcdef!2sSarand%C3%AD%20675%2C%20Montevideo%2C%20Uruguay!5e0!3m2!1ses-419!2suy!4v1635423357724!5m2!1ses-419!2suy"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 glass px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest text-primary">
                                        Ubicación Showroom
                                    </div>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="glass rounded-md p-8 md:p-12 shadow-apple">
                                {formStatus === 'success' ? (
                                    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                                        <div className="h-20 w-20 rounded-md bg-green-100 flex items-center justify-center text-green-600 mb-6">
                                            <CheckCircle weight="fill" size={40} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-apple-text">¡Mensaje Enviado!</h2>
                                        <p className="mt-4 text-apple-muted max-w-sm">
                                            Gracias por contactarnos. Un especialista de Equimas te responderá en las próximas 24 horas.
                                        </p>
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="mt-8 font-bold text-primary hover:underline"
                                        >
                                            Enviar otro mensaje
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {formStatus === 'error' && (
                                            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                                                <span className="font-medium">¡Error!</span> Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-apple-text">Nombre</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Juan Pérez"
                                                    className="w-full rounded-md border border-apple-bg bg-white/50 px-5 py-3 outline-none focus:border-primary transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-apple-text">Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="juan@ejemplo.com"
                                                    className="w-full rounded-md border border-apple-bg bg-white/50 px-5 py-3 outline-none focus:border-primary transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-apple-text">Interés</label>
                                            <select 
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full rounded-md border border-apple-bg bg-white/50 px-5 py-3 outline-none focus:border-primary transition-all"
                                            >
                                                <option>Sistemas Verticales</option>
                                                <option>Sistemas Horizontales</option>
                                                <option>Sistemas PUC / Platina</option>
                                                <option>Mobiliario a Medida</option>
                                                <option>Maniquíes</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-apple-text">Mensaje</label>
                                            <textarea
                                                required
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Cuéntanos un poco sobre tu proyecto..."
                                                className="w-full rounded-md border border-apple-bg bg-white/50 px-5 py-3 outline-none focus:border-primary transition-all resize-none"
                                            />
                                        </div>
                                        <button
                                            disabled={formStatus === 'submitting'}
                                            className="group flex w-full items-center justify-center gap-2 rounded-md bg-primary py-4 text-lg font-bold text-white transition-all hover:bg-black disabled:opacity-50"
                                        >
                                            {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                                            <PaperPlaneRight weight="fill" size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
