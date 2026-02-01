import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniOriginalRestored() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // TabMenu Items with Routing
    const items = [
        { label: 'Work', icon: 'pi pi-fw pi-th-large', command: () => router.push('#work') },
        { label: 'About', icon: 'pi pi-fw pi-user', command: () => router.push('#about') },
        { label: 'Investment', icon: 'pi pi-fw pi-wallet', command: () => router.push('#rates') },
        { label: 'Inquire', icon: 'pi pi-fw pi-envelope', command: () => router.push('#contact') }
    ];

    const portfolio = [
        { id: '01', title: 'Product', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Archive', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#about') setActiveIndex(1);
        else if (hash === '#rates') setActiveIndex(2);
        else if (hash === '#contact') setActiveIndex(3);
        else setActiveIndex(0);
    }, [router.asPath]);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <Head>
                <title>JANAVI SONI | MODERN VISUALS</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- STICKY TABMENU --- */}
            <nav className="sticky-nav">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </nav>

            <header className="pt-8 pb-4 text-center mt-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h1 className="text-7xl md:text-8xl font-serif m-0 tracking-tighter uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 font-bold uppercase mt-2">Visual Storyteller & Creative Director</p>
                </motion.div>
            </header>

            <main>
                {/* --- HERO IMAGE --- */}
                <section className="px-4 md:px-8 py-4">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?auto=format&w=1800&q=80" 
                        alt="Main Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                {/* --- ABOUT --- */}
                <section id="about" className="py-8 px-6 max-w-screen-md mx-auto text-center">
                    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
                    <p className="text-lg font-light line-height-4 italic opacity-80">
                        Navigating the intersection of shadow and light in Mumbai. Every frame is a study of 
                        minimalist geometry and raw human emotion.
                    </p>
                </section>

                {/* --- WORK GRID --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item, i) => (
                            <div key={item.id} className="col-12 md:col-4 p-4">
                                <div className="border-1 border-white-alpha-10 overflow-hidden">
                                    <Image src={item.src} alt={item.title} width="100%" 
                                           imageClassName="w-full h-30rem object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <div className="mt-4 flex justify-content-between">
                                    <h3 className="font-serif text-2xl m-0">{item.title}</h3>
                                    <span className="text-xs opacity-30 font-bold uppercase tracking-widest">{item.id}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- INVESTMENT --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                    <div className="max-w-screen-md mx-auto">
                        <div className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                            <span className="text-xs font-bold tracking-widest opacity-40 uppercase">Commercial Series</span>
                            <span className="text-2xl font-serif italic">₹20,000+</span>
                        </div>
                    </div>
                </section>

                {/* --- INQUIRY --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif italic text-center mb-6">Inquire</h2>
                    <div className="flex flex-column gap-4">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputTextarea placeholder="TELL ME ABOUT YOUR PROJECT" rows={3} className="noir-input" />
                        <Button label="SEND INQUIRY" className="p-button-outlined border-white p-3 font-bold text-xs" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs tracking-widest uppercase border-top-1 border-white-alpha-10">
                &copy; 2026 JANAVI SONI STUDIO &bull; MUMBAI
            </footer>
        </div>
    );
}