'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Wallet, Globe, Repeat } from 'lucide-react';

const products = [
    {
        id: 'otc',
        title: 'Tiva OTC',
        description: 'Secure, low-slippage over-the-counter trading for large volume execution.',
        icon: <ArrowRightLeft size={32} />,
        color: 'from-primary to-blue-500',
        href: 'https://otc.tiva.one'
    },
    {
        id: 'wallet',
        title: 'Tiva Wallet',
        description: 'Non-custodial, multi-chain wallet with built-in social recovery.',
        icon: <Wallet size={32} />,
        color: 'from-secondary to-purple-500',
        href: '#'
    },
    {
        id: 'bridge',
        title: 'Tiva Bridge',
        description: 'Seamlessly transfer assets across different blockchain networks.',
        icon: <Globe size={32} />,
        color: 'from-pink-500 to-rose-500',
        href: '#'
    },
    {
        id: 'swap',
        title: 'Tiva Swap',
        description: 'Instant token swaps with optimized routing and minimal fees.',
        icon: <Repeat size={32} />,
        color: 'from-cyan-400 to-teal-400',
        href: '#'
    }
];

const Products = () => {
    return (
        <section id="products" className="relative w-full py-20 md:py-32 bg-background z-10">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
                    </h2>
                    <p className="text-text max-w-2xl text-lg font-exo font-light leading-relaxed">
                        A comprehensive suite of decentralized financial tools designed for the next generation of digital assets.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product, index) => (
                        <motion.a
                            key={product.id}
                            href={product.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[250px] rounded-xl overflow-hidden glass hover:border-primary/30 transition-all duration-500 block"
                        >
                            {/* Gradient Background Effect on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${product.color} transition-opacity duration-500`} />

                            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                                <div>
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} bg-opacity-10 flex items-center justify-center text-white mb-4 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                                        {React.cloneElement(product.icon, { size: 20 })}
                                    </div>
                                    <h3 className="text-lg font-orbitron font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-text/70 font-exo text-sm leading-relaxed line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-white/40 text-xs font-orbitron tracking-wider group-hover:text-primary transition-colors mt-2">
                                    <span>LAUNCH</span>
                                    <ArrowRightLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
