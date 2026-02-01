import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniNoir() {
    const categories = [
        { name: 'PRODUCT', price: '₹15,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?fit=crop&w=800&q=60' },
        { name: 'EDITORIAL', price: '₹30,000', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800' },
        { name: 'ARCHIVE', price: '₹25,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?fit=crop&w=800&q=60' }
    ];

    return (
        <div className="min-h-screen surface-ground text-color">
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- DARK BRANDING HEADER --- */}
            <header className="branding-box">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-7xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 mt-3 font-bold uppercase">Photography & Creative Direction</p>
                </motion.div>
                
                <nav className="flex justify-content-center gap-5 mt-6">
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#rates" className="nav-link">Investment</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="surface-ground">
                <section className="px-4 md:px-8 py-6">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=75" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale border-round-none" 
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
                                <span className="text-xs tracking-widest opacity-30 uppercase">Series 0{i+1}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="rates" className="py-8 px-4 md:px-8 surface-section border-y-1 border-white-alpha-10">
                    <div className="max-w-screen-md mx-auto text-center">
                        <h2 className="text-4xl font-serif italic mb-8">Service Investment</h2>
                        {categories.map((item, i) => (
                            <div key={i} className="flex justify-content-between align-items-center py-5 border-bottom-1 border-white-alpha-10">
                                <span className="text-xs tracking-widest font-bold opacity-60 uppercase">{item.name}</span>
                                <span className="text-2xl font-serif italic text-primary">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center surface-section border-top-1 border-white-alpha-10">
                <p className="text-xs tracking-widest font-bold opacity-30 uppercase">
                    &copy; 2026 JANAVI SONI &bull; MUMBAI
                </p>
            </footer>
        </div>
    );
}