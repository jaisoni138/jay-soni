import React from 'react';
import Head from 'next/head';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniMinimal() {
    
    const services = [
        { type: 'STREET & DOCUMENTARY', price: 'FROM ₹15K', duration: '4 HOURS' },
        { type: 'EDITORIAL PORTRAITS', price: 'FROM ₹25K', duration: '6 HOURS' },
        { type: 'COMMERCIAL & BRAND', price: 'UPON REQUEST', duration: 'FLEXIBLE' }
    ];

    return (
        <div className="min-h-screen flex flex-column">
            <Head>
                <title>JANAVI SONI | Visual Artist</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- TOP NAV --- */}
            <nav className="p-4 md:p-6 flex justify-content-between align-items-center">
                <div className="text-xl font-serif italic tracking-tighter">JS.</div>
                <div className="flex gap-4 md:gap-6 text-xs tracking-widest uppercase font-bold">
                    <a href="#services" className="menu-link">Services</a>
                    <a href="#contact" className="menu-link">Inquiry</a>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <main className="flex-grow-1 flex flex-column justify-content-center px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-7xl md:text-9xl font-serif italic m-0 line-height-1">
                        Janavi Soni.
                    </h1>
                    <p className="text-sm md:text-base font-light tracking-widest text-500 mt-4 max-w-30rem line-height-3 uppercase">
                        Capturing the unscripted narrative of human existence through light and shadow. Based in Mumbai, working worldwide.
                    </p>
                </motion.div>
            </main>

            {/* --- SERVICES / RATES SECTION --- */}
            <section id="services" className="py-8 px-4 md:px-8 border-top-1 border-white-alpha-10 bg-black-alpha-20">
                <div className="grid">
                    <div className="col-12 md:col-4 mb-6">
                        <span className="text-xs font-bold tracking-widest opacity-30 uppercase">01 / Rates & Services</span>
                        <h2 className="text-4xl font-serif italic mt-3">The Investment</h2>
                    </div>
                    <div className="col-12 md:col-8">
                        {services.map((s, i) => (
                            <div key={i} className="flex flex-column md:flex-row justify-content-between md:align-items-center py-5 border-bottom-1 border-white-alpha-10 group">
                                <div className="mb-3 md:mb-0">
                                    <h3 className="m-0 text-xl md:text-2xl font-bold tracking-tight">{s.type}</h3>
                                    <span className="text-xs opacity-40 font-mono mt-1 block">{s.duration} SESSION</span>
                                </div>
                                <div className="text-left md:text-right">
                                    <span className="text-2xl font-serif italic text-primary">{s.price}</span>
                                    <p className="text-xs opacity-30 m-0 mt-1 uppercase font-bold tracking-tighter">Retouching Included</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CONTACT / FINAL DIRECTIVE --- */}
            <section id="contact" className="py-8 px-4 md:px-8 text-center bg-white text-black">
                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }} 
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif italic mb-5">Start a project.</h2>
                    <div className="flex flex-column md:flex-row justify-content-center gap-4">
                        <Button label="SEND EMAIL" className="p-button-lg bg-black text-white border-none border-round-none px-6 py-3 font-bold text-xs" />
                        <Button label="INSTAGRAM" className="p-button-lg p-button-outlined border-black text-black border-round-none px-6 py-3 font-bold text-xs" />
                    </div>
                    <p className="mt-6 text-xs font-bold tracking-widest opacity-40 uppercase">Replies typically within 24 hours.</p>
                </motion.div>
            </section>

            {/* --- MINIMAL FOOTER --- */}
            <footer className="p-6 flex justify-content-between align-items-center border-top-1 border-white-alpha-10 text-xs tracking-tighter opacity-30">
                <span>&copy; 2026 JANAVI SONI</span>
                <span>MUMBAI, IN</span>
            </footer>

            <style jsx>{`
                .line-height-1 { line-height: 0.9; }
                .text-500 { color: #888 !important; }
            `}</style>
        </div>
    );
}