import React from 'react';
import Head from 'next/head';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniCinematic() {
    const categories = [
        { name: 'STREET / DOCU', price: '₹15,000', detail: 'Authentic human narratives' },
        { name: 'EDITORIAL', price: '₹30,000', detail: 'Conceptual high-fashion' },
        { name: 'ARCHITECTURAL', price: '₹25,000', detail: 'Structure and light play' }
    ];

    return (
        <div className="min-h-screen font-main">
            <Head>
                <title>JANAVI SONI | Visual Artist</title>
                {/* Modern Editorial Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
            </Head>

            {/* --- TOP NAV --- */}
            <nav className="fixed top-0 w-full z-5 glass-nav px-4 py-3 md:px-8 flex justify-content-between align-items-center">
                <div className="text-2xl font-serif">JS</div>
                <div className="flex gap-4 text-xs font-bold tracking-widest uppercase">
                    <a href="#services" className="no-underline text-white opacity-60 hover:opacity-100 transition-all">Rates</a>
                    <a href="#contact" className="no-underline text-white opacity-60 hover:opacity-100 transition-all">Contact</a>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="h-screen flex flex-column justify-content-center px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2 }}
                >
                    <span className="text-xs font-bold tracking-widest text-white-alpha-40 mb-3 block">MUMBAI // INDIA</span>
                    <h1 className="text-7xl md:text-9xl font-serif m-0 leading-tight">
                        Janavi <br/> <span className="italic">Soni.</span>
                    </h1>
                    <div className="h-1px w-4rem bg-white my-5"></div>
                    <p className="max-w-25rem text-sm md:text-base font-light tracking-wide leading-relaxed opacity-70">
                        Professional visual artist specializing in high-contrast street photography and editorial storytelling. 
                        Transforming unscripted reality into cinematic frames.
                    </p>
                </motion.div>
            </section>

            {/* --- SERVICES SECTION --- */}
            <section id="services" className="py-8 px-4 md:px-8 bg-black-alpha-60 backdrop-blur-sm border-top-1 border-white-alpha-10">
                <div className="grid max-w-screen-xl mx-auto">
                    <div className="col-12 md:col-5 mb-6">
                        <h2 className="text-5xl font-serif">Services</h2>
                        <p className="text-xs tracking-widest uppercase opacity-40 font-bold mt-3">Investment Guide 2026</p>
                    </div>
                    <div className="col-12 md:col-7">
                        {categories.map((item, i) => (
                            <div key={i} className="flex justify-content-between align-items-center py-5 border-bottom-1 border-white-alpha-10 group hover:border-white transition-all">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold m-0 tracking-tighter">{item.name}</h3>
                                    <span className="text-xs opacity-40 font-bold uppercase tracking-widest mt-1 block">{item.detail}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-serif">{item.price}</span>
                                    <i className="pi pi-arrow-up-right ml-3 text-xs opacity-30 group-hover:opacity-100 transition-opacity"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER / CONTACT --- */}
            <section id="contact" className="py-8 px-4 md:px-8 text-center border-top-1 border-white-alpha-10">
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Let's collaborate.</h2>
                    <div className="flex flex-column md:flex-row justify-content-center gap-4">
                        <Button label="EMAIL ME" className="p-button-lg bg-white text-black border-none px-6 py-4 font-bold text-xs tracking-widest" />
                        <Button label="INSTAGRAM" className="p-button-lg p-button-outlined border-white text-white px-6 py-4 font-bold text-xs tracking-widest" />
                    </div>
                </motion.div>
                <div className="mt-8 pt-8 opacity-20 text-xs tracking-widest font-bold uppercase">
                    &copy; 2026 Janavi Soni &bull; All Visual Rights Reserved
                </div>
            </section>
        </div>
    );
}