'use client';
import React from 'react';
import { Twitter, Github, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-background border-t border-white/5 py-12 md:py-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-left">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center font-orbitron font-bold text-black text-xl group-hover:scale-110 transition-transform">
                                T
                            </div>
                            <span className="font-orbitron font-bold text-2xl tracking-wider text-white">TIVA</span>
                        </a>
                        <p className="text-text/60 font-exo text-sm leading-relaxed max-w-xs">
                            Markets compress beliefs into signal. <br />
                            A future-proof infrastructure for the decentralized economy.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-orbitron font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
                        <ul className="flex flex-col gap-4">
                            {['OTC', 'Wallet', 'Bridge', 'Swap'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-text/60 hover:text-primary font-exo text-sm transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-orbitron font-bold text-white mb-6 uppercase tracking-wider text-sm">Ecosystem</h4>
                        <ul className="flex flex-col gap-4">
                            {['Documentation', 'Governance', 'Bug Bounty'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-text/60 hover:text-primary font-exo text-sm transition-colors hover:translate-x-1 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className="font-orbitron font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <Twitter size={20} />, href: '#' },
                                { icon: <Github size={20} />, href: '#' },
                                { icon: <Globe size={20} />, href: '#' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text/60 hover:text-white hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-exo text-text/40">
                    <p>&copy; {new Date().getFullYear()} Tiva Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
