import React from 'react';
import Head from 'next/head';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import { motion } from 'framer-motion';

export default function JanaviSoniMenubar() {
    // Define the menu structure
    const items = [
        { label: 'Work', command: () => document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Investment', command: () => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'About', url: '#about' },
        { label: 'Contact', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    const categories = [
        { name: 'PRODUCT', price: '₹15,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?fit=crop&w=800&q=60' },
        { name: 'EDITORIAL', price: '₹30,000', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800' },
        { name: 'ARCHIVE', price: '₹25,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?fit=crop&w=800&q=60' }
    ];

    return (
        <div className="min-h-screen surface-ground text-color">
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- BRANDING HEADER WITH MENUBAR --- */}
            <header className="branding-box">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-6xl md:text-8xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-30 mt-3 font-bold uppercase">Photography & Creative Direction</p>
                </motion.div>

                {/* PrimeReact Menubar Implementation */}
                <div className="flex justify-content-center mt-4">
                    <Menubar model={items} className="border-none bg-transparent" />
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main>
                {/* Hero section */}
                <section className="px-4 md:px-8 py-4">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=70" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                {/* Portfolio Grid */}
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

                {/* Investment Section */}
                <section id="rates" className="py-8 px-4 md:px-8 surface-section border-y-1 border-white-alpha-10">
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

            {/* Footer */}
            <footer id="contact" className="py-8 text-center surface-section">
                <p className="text-xs tracking-widest font-bold opacity-20 uppercase">
                    &copy; 2026 JANAVI SONI &bull; EST. MUMBAI
                </p>
            </footer>
        </div>
    );
}