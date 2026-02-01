import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniToolbox() {
    const categories = [
        { name: 'PRODUCT', price: '₹15,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?fit=crop&w=800&q=60' },
        { name: 'EDITORIAL', price: '₹30,000', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800' },
        { name: 'ARCHIVE', price: '₹25,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?fit=crop&w=800&q=60' }
    ];

    return (
        <div className="min-h-screen surface-ground text-color pb-8">
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- FLOATING TOOLBOX MENU --- */}
            <motion.nav 
                className="toolbox-container"
                initial={{ y: 100, x: "-50%" }}
                animate={{ y: 0, x: "-50%" }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
                <a href="#work" className="toolbox-link">Work</a>
                <div className="toolbox-divider"></div>
                <a href="#rates" className="toolbox-link">Investment</a>
                <div className="toolbox-divider"></div>
                <a href="#contact" className="toolbox-link">Contact</a>
            </motion.nav>

            {/* --- DARK BRANDING HEADER (Clean Version) --- */}
            <header className="branding-box">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-6xl md:text-8xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-30 mt-3 font-bold uppercase">Photography & Creative Direction</p>
                </motion.div>
            </header>

            {/* --- MAIN STAGE --- */}
            <main className="surface-ground">
                <section className="px-4 md:px-8 py-6">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=70" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {categories.map((item, i) => (
                            <div key={i} className="col-12 md:col-4 p-4 text-center">
                                <div className="overflow-hidden border-1 border-white-alpha-10 group">
                                    <Image src={item.src} alt={item.name} width="100%" preview loading="lazy" 
                                           imageClassName="w-full h-30rem object-cover block grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <h3 className="font-serif text-2xl mt-4 mb-1">{item.name}</h3>
                                <span className="text-xs tracking-widest opacity-20 uppercase font-bold">Series 0{i+1}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="rates" className="py-8 px-4 md:px-8 surface-section border-y-1 border-white-alpha-10 mb-8">
                    <div className="max-w-screen-md mx-auto text-center">
                        <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                        {categories.map((item, i) => (
                            <div key={i} className="flex justify-content-between align-items-center py-5 border-bottom-1 border-white-alpha-10">
                                <span className="text-xs tracking-widest font-bold opacity-40 uppercase">{item.name}</span>
                                <span className="text-2xl font-serif italic">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer id="contact" className="py-8 text-center surface-section border-top-1 border-white-alpha-10">
                <p className="text-xs tracking-widest font-bold opacity-20 uppercase">
                    &copy; 2026 JANAVI SONI &bull; EST. MUMBAI
                </p>
            </footer>
        </div>
    );
}