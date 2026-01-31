import React, { useState } from 'react';
import Head from 'next/head';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniPhotography() {
    const [images] = useState([
        { itemImageSrc: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02', title: 'ETERNAL PEAKS', category: 'NATURE', year: '2024' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167', title: 'URBAN SILENCE', category: 'PORTRAIT', year: '2023' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'FOREST VEIL', category: 'LANDSCAPE', year: '2024' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', title: 'THE OBSERVER', category: 'PORTRAIT', year: '2025' }
    ]);

    const galleriaItemTemplate = (item) => (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
                src={item.itemImageSrc} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 flex flex-column justify-content-end p-6 md:p-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white border-left-3 pl-4 border-primary"
                >
                    <span className="text-sm tracking-widest font-light opacity-60 mb-2 block">{item.category} — {item.year}</span>
                    <h2 className="text-7xl md:text-8xl font-serif m-0 leading-none">{item.title}</h2>
                </motion.div>
            </div>
        </div>
    );

    return (
        <div className="bg-black text-white min-h-screen selection:bg-primary-500">
            <Head>
                <title>JANAVI SONI | Visual Artist</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- MINIMALIST FLOATING NAV --- */}
            <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-content-between align-items-center z-5 mix-blend-difference">
                <div className="text-2xl font-serif tracking-tighter">
                    JANAVI <span className="font-light italic">SONI</span>
                </div>
                <div className="flex gap-4 align-items-center text-xs tracking-widest uppercase font-semibold">
                    <a href="#work" className="no-underline text-white hover:opacity-50 transition-all">Work</a>
                    <a href="#about" className="no-underline text-white hover:opacity-50 transition-all">About</a>
                    <a href="#contact" className="no-underline text-white hover:opacity-50 transition-all">Contact</a>
                </div>
            </nav>

            {/* --- HERO GALLERIA --- */}
            <section className="h-screen border-bottom-1 border-white-alpha-10">
                <Galleria 
                    value={images} 
                    circular 
                    autoPlay 
                    transitionInterval={6000} 
                    showThumbnails={false} 
                    showIndicators={true} 
                    item={galleriaItemTemplate} 
                />
            </section>

            {/* --- THE GALLERY GRID --- */}
            <section id="work" className="py-8 px-4 md:px-8 bg-white text-black">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex justify-content-between align-items-end mb-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Selected Works</span>
                            <h2 className="text-6xl font-serif m-0">Gallery</h2>
                        </div>
                        <p className="max-w-20rem text-sm text-600 italic">Exploring the intersection of light, shadow, and human emotion.</p>
                    </div>

                    <div className="grid">
                        {images.map((img, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`col-12 p-3 ${i % 3 === 0 ? 'md:col-8' : 'md:col-4'}`}
                            >
                                <div className="relative overflow-hidden cursor-crosshair group shadow-4">
                                    <Image 
                                        src={img.itemImageSrc} 
                                        alt={img.title} 
                                        width="100%" 
                                        preview 
                                        imageClassName="w-full h-30rem object-cover block filter grayscale-100 group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold tracking-widest">
                                        VIEW IMAGE
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-content-between align-items-center border-bottom-1 border-black-alpha-10 pb-2">
                                    <h4 className="m-0 font-serif text-lg tracking-tight uppercase">{img.title}</h4>
                                    <span className="text-xs opacity-50 tracking-widest font-bold uppercase">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SIGNATURE CONTACT --- */}
            <section id="contact" className="py-8 px-4 md:px-8 flex flex-column align-items-center justify-content-center bg-black">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="w-full max-w-40rem text-center"
                >
                    <h2 className="text-7xl font-serif mb-6 leading-tight">Begin a <br/><span className="italic text-primary">Conversation</span></h2>
                    
                    <div className="p-fluid">
                        <InputText placeholder="Full Name" className="editorial-input mb-5" />
                        <InputText placeholder="Email Address" className="editorial-input mb-5" />
                        <InputTextarea placeholder="How can we collaborate?" rows={3} className="editorial-input mb-6" />
                        <Button label="SEND INQUIRY" className="p-button-lg bg-white text-black border-none border-round-none py-4 font-bold tracking-widest hover:bg-primary hover:text-white transition-all" />
                    </div>
                </motion.div>
            </section>

            <footer className="py-6 px-4 md:px-8 border-top-1 border-white-alpha-10 text-center">
                <p className="text-xs tracking-widest opacity-40 uppercase m-0">
                    Janavi Soni Photography &copy; 2026 — All Visual Rights Reserved
                </p>
            </footer>

            <style jsx global>{`
                :root {
                    --primary-color: #C5A059; /* Champagne Gold */
                }
                body {
                    font-family: 'Montserrat', sans-serif;
                    background: #000;
                }
                .font-serif {
                    font-family: 'Playfair Display', serif;
                }
                .editorial-input {
                    background: transparent !important;
                    border: none !important;
                    border-bottom: 1px solid rgba(255,255,255,0.2) !important;
                    color: white !important;
                    padding: 1.5rem 0 !important;
                    font-size: 1.2rem !important;
                    border-radius: 0 !important;
                }
                .editorial-input:focus {
                    border-bottom-color: var(--primary-color) !important;
                    box-shadow: none !important;
                }
                /* Removing standard Galleria borders */
                .p-galleria .p-galleria-item-container {
                    background: #000;
                    border: none;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 2rem;
                    background: transparent;
                }
                .p-galleria .p-galleria-indicator button {
                    background: rgba(255,255,255,0.2);
                    width: 2rem;
                    height: 2px;
                    border-radius: 0;
                }
                .p-galleria .p-galleria-indicator.p-highlight button {
                    background: var(--primary-color);
                }
            `}</style>
        </div>
    );
}