import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniModern() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'Work', command: () => router.push('#work') },
        { label: 'About', command: () => router.push('#about') },
        { label: 'Rates', command: () => router.push('#rates') },
        { label: 'Contact', command: () => router.push('#contact') }
    ];

    return (
        <div className="relative min-h-screen">
            <Head>
                <title>JANAVI SONI | MODERN VISUALS</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- ANIMATED BACKGROUND LAYER --- */}
            <div className="modern-bg-container">
                <motion.div 
                    animate={{ 
                        x: [0, 50, -50, 0], 
                        y: [0, -30, 30, 0] 
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="glow-sphere" 
                    style={{ top: '10%', left: '20%' }}
                />
                <motion.div 
                    animate={{ 
                        x: [0, -40, 40, 0], 
                        y: [0, 50, -50, 0] 
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="glow-sphere" 
                    style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(0,0,0,0) 70%)' }}
                />
            </div>

            <nav className="sticky-nav">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{ background: 'transparent' }} />
            </nav>

            <main className="relative z-10">
                <header className="pt-8 pb-4 text-center mt-8">
                    <motion.h1 
                        initial={{ opacity: 0, letterSpacing: "10px" }}
                        animate={{ opacity: 1, letterSpacing: "2px" }}
                        transition={{ duration: 1.5 }}
                        className="text-7xl md:text-8xl font-serif m-0 uppercase"
                    >
                        Janavi Soni
                    </motion.h1>
                    <p className="text-xs tracking-widest opacity-40 uppercase">Photography & Creative Direction</p>
                </header>

                {/* --- SECTIONS (Work, About, etc. - keep your existing content here) --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                        </div>
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif italic text-center mb-8">Inquire</h2>
                    <div className="flex flex-column gap-6">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputTextarea placeholder="MESSAGE" rows={3} className="noir-input" />
                        <Button label="SEND MESSAGE" className="p-button-outlined border-white p-3 font-bold" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>
        </div>
    );
}