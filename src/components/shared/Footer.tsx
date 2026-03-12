import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#0B111A] pt-16 pb-8">
            <div className="container mx-auto px-4 lg:max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4 col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo-amandya-white.png"
                                alt="Amandya Tech Logo"
                                width={160}
                                height={45}
                                className="h-10 w-auto object-contain"
                                quality={90}
                            />
                        </Link>
                        <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-6">
                            Smart Interactive Photobooth Software System. Elevate your photobooth
                            business with live mode, dual camera, and cloud dashboard management.
                        </p>
                        
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/50 text-xs">
                                <MapPin className="w-3.5 h-3.5 text-accent" />
                                <span>Bandar Lampung, Lampung, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-xs">
                                <Mail className="w-3.5 h-3.5 text-accent" />
                                <span>hello@amandyatech.com</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-heading font-medium text-white mb-4">Produk</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li>
                                <Link href="#features" className="hover:text-white transition-colors">
                                    Fitur
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:text-white transition-colors">
                                    Paket Harga
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-white transition-colors">
                                    Dokumentasi
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-heading font-medium text-white mb-4">Hubungi Kami</h4>
                        <div className="flex flex-col gap-3">
                            <Link 
                                href="https://wa.me/6285669644533" 
                                target="_blank"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                            >
                                <MessageCircle className="w-4 h-4 text-emerald-400" />
                                <span>WhatsApp Official</span>
                            </Link>
                            <Link 
                                href="https://instagram.com/amandya.tech" 
                                target="_blank"
                                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-pink-500" />
                                <span>Instagram Official</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/30 uppercase tracking-widest">
                    <p>&copy; {currentYear} Amandya Tech. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privasi</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
