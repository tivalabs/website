'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false); // Mobile toggle for products

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const productLinks = [
        { name: 'OTC Desktop', href: '#products' },
        { name: 'Tiva Wallet', href: '#products' },
        { name: 'Bridge', href: '#products' },
        { name: 'Swap', href: '#products' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center font-orbitron font-bold text-black text-xl group-hover:scale-110 transition-transform">
                        T
                    </div>
                    <span className="font-orbitron font-bold text-2xl tracking-wider text-white">TIVA</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Products Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-exo uppercase tracking-wide text-text hover:text-primary transition-colors font-medium">
                            Products
                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <div className="w-48 bg-[#0B0C15]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl shadow-black/50 overflow-hidden">
                                {productLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-3 text-sm font-exo text-text/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a href="#ecosystem" className="text-sm font-exo uppercase tracking-wide text-text hover:text-primary transition-colors hover:text-glow font-medium">
                        Ecosystem
                    </a>
                    <a href="#about" className="text-sm font-exo uppercase tracking-wide text-text hover:text-primary transition-colors hover:text-glow font-medium">
                        About
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-6">
                            {/* Mobile Products Submenu */}
                            <div>
                                <button
                                    onClick={() => setProductsOpen(!productsOpen)}
                                    className="flex items-center justify-between w-full font-orbitron text-lg text-white hover:text-primary mb-4"
                                >
                                    Products
                                    <ChevronDown size={16} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {productsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden flex flex-col gap-3 pl-4 border-l border-white/10 ml-2"
                                        >
                                            {productLinks.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-sm font-exo text-text/70 hover:text-white py-1 block"
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a
                                href="#ecosystem"
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-orbitron text-lg text-white hover:text-primary"
                            >
                                Ecosystem
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-orbitron text-lg text-white hover:text-primary"
                            >
                                About
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
