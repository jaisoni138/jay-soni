import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function JanaviSoniIndia() {
    // Optimized URLs with compression & specific dimensions for speed
    const indiaCollection = [
        { 
            src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0?q=80&w=1200&auto=format&fit=crop', 
            title: 'THE PINK PERSPECTIVE', 
            location: 'JAIPUR', 
            size: 'col-12 md:col-7' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=800&auto=format&fit=crop', 
            title: 'SACRED GHATS', 
            location: 'VARANASI', 
            size: 'col-12 md:col-5' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1598333105121-69632886f42c?q=80&w=800&auto=format&fit=crop', 
            title: 'SINDUR & SOUL', 
            location: 'KOLKATA', 
            size: 'col-12 md:col-4' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1590393952601-bfc276082987?q=80&w=1200&auto=format&fit=crop', 
            title: 'THE GOLDEN LIGHT', 
            location: 'AMRITSAR', 
            size: 'col-12 md:col-8' 
        }
    ];

    // Smooth Scroll Function
    const scrollToGallery = () => {
        const gallerySection = document.getElementById('series');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white text-900 min-h-screen">
            <Head>
                <title>Janavi Soni | India Series</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;1,400&family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- NAV --- */}
            <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-content-between align-items-center z-5 bg-white-alpha-60 backdrop-blur-sm border-bottom-1 border-100">
                <div className="text-xl font-serif tracking-tighter uppercase font-bold">
                    JANAVI <span className="font-light italic text-primary">SONI</span>
                </div>
                <div className="hidden md:flex gap-5 text-xs tracking-widest uppercase font-bold text-700">
                    <a href="#series" className="no-underline text-inherit hover:text-primary transition-colors">Series</a>
                    <a href="#about" className="no-underline text-inherit hover:text-primary transition-colors">About</a>
                    <a href="#contact" className="no-underline text-inherit hover:text-primary transition-colors">Contact</a>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="h-screen flex flex-column align-items-center justify-content-center px-4 overflow-hidden relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <span className="text-xs tracking-widest text-primary font-bold uppercase mb-4 block">Archive 2026 // Street</span>
                    <h1 className="text-8xl md:text-9xl font-serif m-0 italic leading-tight">India.</h1>
                    <div className="w-2rem h-1px bg-900 mx-auto my-5"></div>
                    <p className="max-w-20rem mx-auto font-light text-600 line-height-3 italic">
                        "Finding the extraordinary in the mundane rhythm of everyday life."
                    </p>
                </motion.div>
                
                {/* --- UPDATED: ICON SCROLL INDICATOR --- */}
                <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-5 flex flex-column align-items-center gap-2 cursor-pointer"
                    onClick={scrollToGallery}
                >
                    <i className="pi pi-mouse text-xl opacity-40"></i>
                    <i className="pi pi-chevron-down text-xs opacity-30"></i>
                </motion.div>
            </section>

            {/* --- GALLERY GRID --- */}
            <section id="series" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto pt-8">
                <div className="grid align-items-center">
                    {indiaCollection.map((img, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className={`${img.size} p-4 md:p-6 mb-8`}
                        >
                            <div className="relative group cursor-crosshair overflow-hidden shadow-1 hover:shadow-8 transition-all duration-500">
                                <Image 
                                    src={img.src} 
                                    alt={img.title} 
                                    width="100%" 
                                    preview 
                                    imageClassName="w-full h-full object-cover block grayscale-hover transition-all duration-1000"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black-alpha-60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold tracking-widest uppercase">
                                    {img.location} // 2026
                                </div>
                            </div>
                            <div className="mt-5 text-center md:text-left">
                                <h3 className="font-serif italic text-3xl m-0 text-900">{img.title}</h3>
                                <p className="text-xs text-400 mt-2 font-bold tracking-widest uppercase">{img.location}, INDIA</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-8 px-6 mt-8 flex flex-column align-items-center text-center border-top-1 border-100">
                <h2 className="text-4xl font-serif italic mb-4">JANAVI SONI</h2>
                <div className="flex gap-4 mb-6">
                    <Button icon="pi pi-instagram" className="p-button-rounded p-button-text p-button-plain" />
                    <Button icon="pi pi-twitter" className="p-button-rounded p-button-text p-button-plain" />
                    <Button icon="pi pi-envelope" className="p-button-rounded p-button-text p-button-plain" />
                </div>
                <div className="text-xs tracking-widest font-bold opacity-30">
                    &copy; 2026 ALL RIGHTS RESERVED
                </div>
            </footer>

            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #ffffff;
                    scroll-behavior: smooth;
                }
                .font-serif {
                    font-family: 'Bodoni Moda', serif;
                }
                .grayscale-hover {
                    filter: grayscale(100%);
                }
                .grayscale-hover:hover {
                    filter: grayscale(0%);
                }
                .border-100 { border-color: #f1f1f1 !important; }
                
                .p-image-preview-indicator {
                    background-color: rgba(255, 255, 255, 0.8) !important;
                    color: black !important;
                    backdrop-filter: blur(4px);
                }
            `}</style>
        </div>
    );
}