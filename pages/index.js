import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniLysseStyle() {
    const categories = [
        { name: 'PRODUCT', price: '₹15,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?fit=fill&auto=format' },
        { name: 'EDITORIAL', price: '₹30,000', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=1200' },
        { name: 'ARCHIVE', price: '₹25,000', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?fit=fill&auto=format' }
    ];

    return (
        <div className="min-h-screen">
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- JESSICA LYSSE STYLE HEADER --- */}
            <header className="centered-logo">
                <h1 className="text-5xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                <p className="text-xs tracking-widest opacity-40 mt-2 font-bold uppercase">Photography & Creative Direction</p>
                
                <nav className="flex justify-content-center gap-5 mt-5">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#rates" className="nav-link">Investment</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </header>

            {/* --- HERO IMAGE (Full Width Clean) --- */}
            <section className="px-4 md:px-8 py-6">
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 2}}>
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=fill&auto=format" 
                        alt="Hero" 
                        width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover block grayscale" 
                    />
                </motion.div>
            </section>

            {/* --- CLEAN GRID (Masonry Style) --- */}
            <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid">
                    {categories.map((item, i) => (
                        <div key={i} className="col-12 md:col-4 p-3">
                            <div className="overflow-hidden bg-white-alpha-5 relative group cursor-crosshair">
                                <Image src={item.src} alt={item.name} width="100%" preview loading="lazy" 
                                       imageClassName="w-full h-30rem object-cover block transition-all duration-1000 group-hover:scale-105" />
                                <div className="absolute top-0 left-0 p-4 w-full h-full flex align-items-end justify-content-center bg-black-alpha-40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs tracking-widest font-bold uppercase pb-4">View Series</span>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="font-serif text-2xl mb-1">{item.name}</h3>
                                <div className="w-1rem h-1px bg-white-alpha-20 mx-auto my-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING / INVESTMENT --- */}
            <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                <h2 className="text-4xl font-serif italic mb-6">Investment</h2>
                <div className="max-w-screen-md mx-auto">
                    {categories.map((item, i) => (
                        <div key={i} className="flex justify-content-between align-items-center py-4 border-bottom-1 border-white-alpha-5">
                            <span className="text-xs tracking-widest font-bold uppercase">{item.name} SESSIONS</span>
                            <span className="text-xl font-serif italic text-primary">{item.price}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-xs italic opacity-40">All sessions include professional retouching and private gallery access.</p>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-8 text-center bg-black text-white">
                <div className="flex justify-content-center gap-4 mb-6">
                    <Button icon="pi pi-instagram" className="p-button-text p-button-rounded text-white" />
                    <Button icon="pi pi-envelope" className="p-button-text p-button-rounded text-white" />
                </div>
                <p className="text-xs tracking-widest font-bold opacity-30 uppercase">
                    &copy; 2026 JANAVI SONI &bull; EST. IN MUMBAI
                </p>
            </footer>

            <style jsx>{`
                .p-image-preview-indicator {
                    background: rgba(0,0,0,0.8) !important;
                    color: white !important;
                }
            `}</style>
        </div>
    );
}