import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'; // 1. Added missing import
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutMe() {
    const router = useRouter(); // 2. Added missing initialization
    const [activeIndex, setActiveIndex] = useState(1); 

    const items = [
        { label: 'WORK', template: (item) => <Link href="/" className="p-menuitem-link">{item.label}</Link> },
        { label: 'ABOUT', template: (item) => <Link href="/about" className="p-menuitem-link">{item.label}</Link> },
        { label: 'RATES', template: (item) => <Link href="/#rates" className="p-menuitem-link">{item.label}</Link> },
        { label: 'CONTACT', template: (item) => <Link href="/#contact" className="p-menuitem-link">{item.label}</Link> }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a' }}>
            <Head>
                <title>ABOUT | JANAVI SONI</title>
                {/* Ensure Bodoni Moda and Montserrat are loaded */}
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
            </Head>

            <header className="pt-8 pb-4 text-center">
                <h1 className="text-7xl md:text-8xl m-0" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}>
                    Janavi Soni
                </h1>
                <div className="mt-6 flex justify-content-center">
                    <TabMenu 
                        model={items} 
                        activeIndex={activeIndex} 
                        onTabChange={(e) => setActiveIndex(e.index)} 
                        className="noir-menu" 
                    />
                </div>
                <div className="max-w-screen-md mx-auto px-6"><Divider /></div>
            </header>

            <main className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
                <div className="grid align-items-center">
                    <div className="col-12 md:col-6 p-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                                alt="Janavi Soni Portrait" 
                                width="100%" 
                                imageClassName="w-full grayscale border-round-sm shadow-4" 
                            />
                        </motion.div>
                    </div>

                    <div className="col-12 md:col-6 p-4 md:pl-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <span className="text-xs uppercase tracking-widest opacity-40 font-bold">The Visionary</span>
                            <h2 className="text-5xl mt-2 mb-6" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>
                                A Perspective in Monochrome.
                            </h2>
                            
                            <p className="line-height-4 text-lg opacity-80 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Based in India, Janavi Soni is a Creative Director and Visual Artist specializing in high-contrast editorial and product photography. Her work explores the delicate balance between commercial precision and artistic vulnerability.
                            </p>
                            
                            <p className="line-height-4 text-lg opacity-80 mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                With over 6 years of experience, she has collaborated with luxury brands to redefine their visual identity, focusing on a "less is more" philosophy that allows the subject to breathe.
                            </p>

                            <div className="grid text-center md:text-left">
                                <div className="col-4">
                                    <h4 className="m-0 text-xl font-serif italic">6+</h4>
                                    <p className="text-xs uppercase opacity-40 mt-1">Years Exp.</p>
                                </div>
                                <div className="col-4">
                                    <h4 className="m-0 text-xl font-serif italic">50+</h4>
                                    <p className="text-xs uppercase opacity-40 mt-1">Brands</p>
                                </div>
                                <div className="col-4">
                                    <h4 className="m-0 text-xl font-serif italic">12</h4>
                                    <p className="text-xs uppercase opacity-40 mt-1">Exhibitions</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <section className="mt-8 py-8 border-top-1 border-gray-100">
                    <div className="text-center max-w-screen-sm mx-auto">
                        <h3 className="text-3xl font-serif italic mb-4">Philosophy</h3>
                        <p className="text-xl italic opacity-60 leading-relaxed">
                            "I don't just take pictures; I curate shadows to tell a story that light often misses."
                        </p>
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-40 text-xs tracking-widest">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none; color: #1a1a1a; font-size: 0.75rem; letter-spacing: 0.2em; text-decoration: none; display: flex; align-items: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 2px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
            `}</style>
        </div>
    );
}