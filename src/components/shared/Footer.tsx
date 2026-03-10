import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
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
                            />
                        </Link>
                        <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                            Smart Interactive Photobooth Software System. Elevate your photobooth
                            business with live mode, dual camera, and cloud dashboard management.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-heading font-medium text-white mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li>
                                <Link href="#features" className="hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#templates" className="hover:text-white transition-colors">
                                    Templates
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-medium text-white mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Amandya Tech. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* Extended Social links can go here */}
                        <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                            Instagram
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                            LinkedIn
                        </Link>
                        <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                            X (Twitter)
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
