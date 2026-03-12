'use client';

import { useState } from 'react';
import { FadeUp } from '@/components/animations/FadeUp';
import { cn } from '@/lib/utils';
import { Camera, Image as ImageIcon, LayoutDashboard, Settings, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
    { id: 'gallery', label: 'Live Gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'devices', label: 'Device Manager', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analitik Real-time', icon: <LayoutDashboard className="w-4 h-4" /> },
];

export function DashboardPreview() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <FadeUp>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Pantau Semua Booth Lo <span className="text-accent text-gradient">dari Mana Aja</span>
                        </h2>
                        <p className="text-lg text-white/60">
                            Pantau banyak titik photobooth sekaligus. Update template, cek hardware status, sampe buka Live Gallery, semuanya serba instan dari satu Cloud Dashboard.
                        </p>
                    </FadeUp>
                </div>

                <FadeUp delay={0.2} className="max-w-5xl mx-auto">
                    <div className="rounded-2xl border border-white/10 bg-[#0B111A]/80 glass-card shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Top Bar Navigation */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-white/10 bg-white/5 gap-4">
                            <div className="flex items-center gap-2 px-2">
                                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <Settings className="w-4 h-4 text-accent" />
                                </div>
                                <span className="font-heading font-semibold text-white">Amandya Cloud</span>
                            </div>

                            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap',
                                            activeTab === tab.id
                                                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                                : 'text-white/60 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dashboard Content Area */}
                        <div className="p-6 md:p-8 min-h-[400px] relative bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent">
                            <AnimatePresence mode="wait">
                                {/* Gallery Tab */}
                                {activeTab === 'gallery' && (
                                    <motion.div
                                        key="gallery"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                            <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10 animate-pulse-slow relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="absolute bottom-2 left-2 right-2 h-1/3 bg-linear-to-t from-black/80 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="text-[10px] text-white/80">IMG_{8900 + i}.JPG</span>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Devices Tab */}
                                {activeTab === 'devices' && (
                                    <motion.div
                                        key="devices"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        {[
                                            { name: 'Wedding Booth A', status: 'Online', battery: '100%', type: 'DSLR' },
                                            { name: 'Corporate Event B', status: 'Online', battery: '85%', type: 'Webcam' },
                                            { name: 'Backup Unit C', status: 'Offline', battery: '0%', type: 'DSLR' },
                                        ].map((device, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", device.status === 'Online' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/40')}>
                                                        <Camera className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-medium">{device.name}</h4>
                                                        <div className="flex items-center gap-2 text-xs text-white/50">
                                                            <span className={cn("w-2 h-2 rounded-full", device.status === 'Online' ? 'bg-emerald-500' : 'bg-red-500')} />
                                                            {device.status} • {device.type}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right hidden sm:block">
                                                    <div className="text-sm text-white/80">Baterai</div>
                                                    <div className="text-xs text-white/50">{device.battery}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Analytics Tab */}
                                {activeTab === 'analytics' && (
                                    <motion.div
                                        key="analytics"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                    >
                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                            <div className="text-sm text-white/60 mb-2">Total Jepretan Hari Ini</div>
                                            <div className="text-4xl font-bold text-white mb-2">1,284</div>
                                            <div className="text-xs text-emerald-400 flex items-center gap-1">+12% vs kemarin</div>
                                        </div>
                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                            <div className="text-sm text-white/60 mb-2">Email yg Terkumpul</div>
                                            <div className="text-4xl font-bold text-white mb-2">842</div>
                                            <div className="text-xs text-emerald-400 flex items-center gap-1">+5% vs kemarin</div>
                                        </div>
                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 sm:col-span-2 md:col-span-1">
                                            <div className="text-sm text-white/60 mb-2">Event Aktif</div>
                                            <div className="text-4xl font-bold text-white mb-2">3</div>
                                            <div className="text-xs text-white/40 flex items-center gap-1">Di 2 kota berbeda</div>
                                        </div>
                                        <div className="col-span-1 sm:col-span-2 md:col-span-3 h-48 rounded-xl bg-white/5 border border-white/10 flex items-end gap-2 p-6">
                                            {/* Fake bar chart */}
                                            {[20, 40, 30, 70, 50, 90, 60, 100, 80, 40, 60, 50].map((h, i) => (
                                                <div key={i} className="flex-1 bg-accent/40 rounded-t hover:bg-accent transition-colors cursor-pointer" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
