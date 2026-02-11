import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
    title: string;
    description: string;
    href: string;
    imageUrl: string;
    className?: string;
}

export default function CategoryCard({ title, description, href, imageUrl, className }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative block h-[380px] w-full overflow-hidden rounded-apple-lg shadow-apple transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                className
            )}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-white/80 transition-all duration-500 group-hover:text-white">
                    {description}
                </p>
                <div className="mt-6 flex items-center gap-2 font-medium overflow-hidden">
                    <span className="translate-y-0 transition-transform duration-500 group-hover:-translate-y-full flex flex-col">
                        <span>Explorar</span>
                        <span className="text-primary-light">Descubrir más</span>
                    </span>
                    <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
