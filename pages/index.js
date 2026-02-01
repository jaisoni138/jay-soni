import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniBrandIdentity() {
    const menuItems = [
        { label: 'Philosophy', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Services', command: () => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Connect', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    return (
        <div className="surface-ground min-h-screen">
            <Head>
                <title>JANAVI SONI | Visual Identity</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <Menubar model={menuItems} className="fixed top-0 w-full z-50" />

            {/* --- THE BRAND BLOCK (Full Screen Overlay Style) --- */}
            <section className="relative h-screen flex flex-column justify-content-center align-items-center text-center px-4 overflow-hidden">
                {/* Background Text Overlay (Decorative) */}
                <div className="absolute opacity-5 select-none pointer-events-none" style={{ fontSize: '25vw', whiteSpace: 'nowrap', fontWeight: 900 }}>
                    SONI STUDIO
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5 }}
                    className="z-10"
                >
                    <h1 className="text-7xl md:text-huge font-serif m-0 tracking-tighter uppercase leading-none">Janavi Soni</h1>
                    <div className="flex align-items-center justify-content-center gap-3 mt-4">
                        <div className="h-1px w-2rem bg-white-alpha-30"></div>
                        <p className="text-xs tracking-widest opacity-60 font-bold uppercase m-0">Creative Direction & Visual Identity</p>
                        <div className="h-1px w-2rem bg-white-alpha-30"></div>
                    </div>
                </motion.div>

                {/* Call to action arrow */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-0 mb-8 opacity-30"
                >
                    <i className="pi pi-arrow-down" style={{ fontSize: '1.5rem' }}></i>
                </motion.div>
            </section>

            <main>
                {/* --- PHILOSOPHY (REPLACES ABOUT) --- */}
                <section id="about" className="py-8 px-6 max-w-screen-lg mx-auto">
                    <div className="grid align-items-center">
                        <div className="col-12 md:col-6">
                            <h2 className="text-5xl font-serif italic m-0">The Philosophy</h2>
                        </div>
                        <div className="col-12 md:col-6">
                            <p className="text-xl font-light line-height-4 opacity-70 border-left-1 border-white-alpha-20 pl-4">
                                I don't just capture images; I build visual languages. Based in Mumbai, my work is a 
                                reaction to the digital noise—focusing on intentionality, shadow, and the 
                                timeless architecture of the human form.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- SERVICE INVESTMENT --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 surface-section">
                    <div className="max-w-screen-md mx-auto">
                        <h2 className="text-center text-3xl font-serif mb-8 italic">Service Framework</h2>
                        {[
                            { name: 'Creative Direction', price: 'Inquire' },
                            { name: 'Brand Storyboarding', price: '₹45,000+' },
                            { name: 'Visual Identity Consult', price: '₹25,000' }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10 hover:text-gold transition-colors cursor-default">
                                <span className="text-sm font-bold tracking-widest uppercase">{item.name}</span>
                                <span className="text-xl font-serif">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- MODERN CONTACT --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif italic text-center mb-8">Initiate</h2>
                    <div className="flex flex-column gap-5">
                        <InputText placeholder="NAME / BRAND" className="modern-input" />
                        <InputText placeholder="EMAIL" className="modern-input" />
                        <InputTextarea placeholder="THE VISION" rows={3} className="modern-input" />
                        <Button label="SEND INQUIRY" className="p-button-outlined border-white text-white p-3 font-bold text-xs tracking-widest mt-4" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs tracking-widest uppercase border-top-1 border-white-alpha-10">
                &copy; 2026 JANAVI SONI STUDIO &bull; MUMBAI &bull; INTERNATIONALLY AVAILABLE
            </footer>

            <style jsx>{`
                :global(.text-huge) { font-size: clamp(4rem, 12vw, 10rem); }
                :global(.modern-input) { border-radius: 0; background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.2); color: white; padding: 1rem 0; font-family: 'Inter', sans-serif; }
                :global(.modern-input:focus) { border-bottom-color: #d4af37; box-shadow: none; outline: none; }
            `}</style>
        </div>
    );
}