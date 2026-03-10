'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'glass py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo-amandya-white.png"
                        alt="Amandya Tech Logo"
                        width={140}
                        height={40}
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="#features"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Pricing
                    </Link>
                    <Button
                        variant="default"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass-card absolute top-full left-4 right-4 mt-2 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
                        <Link
                            href="#features"
                            className="text-base font-medium text-white/70 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-base font-medium text-white/70 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-base font-medium text-white/70 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Button
                            variant="default"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                        >
                            Get Started
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}
