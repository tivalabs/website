'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Orb from './Orb';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* Orb Background */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Orb
                    hue={0}
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    backgroundColor="#0B0C15"
                />
            </div>

            {/* Content Container - Bottom Left alignment like reference */}
            <div className="relative z-10 h-full container mx-auto px-6 md:px-12 pb-20 md:pb-32 flex flex-col justify-end items-start text-left pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl pointer-events-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron text-white mb-6 tracking-tight leading-[1.1] uppercase">
                        A Market <br />
                        For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future</span>
                    </h1>

                    <p className="text-base md:text-lg text-text/80 font-light max-w-xl mb-8 leading-relaxed font-exo">
                        The future already exists as distributed beliefs. <br className="hidden md:block" />
                        Markets compress them into signal.
                    </p>

                    <div className="flex flex-row gap-6">
                        <button className="px-8 py-4 bg-primary text-black font-orbitron font-bold text-sm tracking-wider uppercase rounded hover:bg-white transition-colors duration-300">
                            Enter The Market
                        </button>

                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded hover:bg-white/10 transition-colors duration-300">
                            How It Works
                        </button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
