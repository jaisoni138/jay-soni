import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutMe() {
    const router = useRouter(); 
    const [activeIndex, setActiveIndex] = useState(1); // About is index 1

    const items = [
        { label: 'HOME', template: (item) => <Link href="/" className="p-menuitem-link">{item.label}</Link> },
        { label: 'ABOUT', template: (item) => <Link href="/about" className="p-menuitem-link">{item.label}</Link> },
        { label: 'SERVICES', template: (item) => <Link href="/services" className="p-menuitem-link">{item.label}</Link> },
        { label: 'CONTACT', template: (item) => <Link href="/#contact" className="p-menuitem-link">{item.label}</Link> }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>ABOUT | JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <header className="pt-8 pb-4 text-center sticky top-0 z-5 bg-white-alpha-90 backdrop-blur-md">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-7xl md:text-8xl m-0 cursor-pointer" 
                        style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}
                        onClick={() => router.push('/')}>
                        Janavi Soni
                    </h1>
                    <p style={{ letterSpacing: '0.8em', fontSize: '0.65rem', textIndent: '0.8em' }} className="mt-2 opacity-50 uppercase font-bold text-center">
                        Photography
                    </p>
                </motion.div>

                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} className="noir-menu" />
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
                                imageClassName="w-full grayscale border-round-sm shadow-1" 
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
                                Based in North Carolina, I’m Janavi Soni, a photographer specializing in event photography, newborn photography, family photography, portraits, and product photography. I’m drawn to capturing genuine moments and meaningful details that tell a story, whether it’s a quiet newborn moment, a family connection, or a carefully styled product. My approach is natural and thoughtful, focusing on creating timeless images that feel authentic, emotive, and true to the people and brands I work with.
                            </p>
                            
                            <div className="grid text-center md:text-left mt-4">
                                <div className="col-4">
                                    <h4 className="m-0 text-xl font-serif italic">6+</h4>
                                    <p className="text-xs uppercase opacity-40 mt-1">Years Exp.</p>
                                </div>
                                <div className="col-4">
                                    <h4 className="m-0 text-xl font-serif italic">50+</h4>
                                    <p className="text-xs uppercase opacity-40 mt-1">Events</p>
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
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none; color: #1a1a1a; font-size: 0.7rem; letter-spacing: 0.25em; text-decoration: none; display: flex; align-items: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 1px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
            `}</style>
        </div>
    );
}