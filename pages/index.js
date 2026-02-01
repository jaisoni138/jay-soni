import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniModernNoir() {
    const op = useRef(null);
    const [activeDetails, setActiveDetails] = useState(null);

    const menuItems = [
        { label: 'Work', command: () => document.getElementById('work').scrollIntoView() },
        { label: 'About', command: () => document.getElementById('about').scrollIntoView() },
        { label: 'Investment', command: () => document.getElementById('rates').scrollIntoView() },
        { label: 'Inquire', command: () => document.getElementById('contact').scrollIntoView() }
    ];

    const portfolio = [
        { id: '01', title: 'Product', gear: 'Sony A7R IV', loc: 'Studio Mumbai', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', gear: 'Leica Q2', loc: 'South Mumbai', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Archive', gear: 'Fujifilm X100V', loc: 'Bandra', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div className="surface-ground">
            <Head>
                <title>JANAVI SONI | MODERN VISUALS</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- STICKY NAVIGATION --- */}
            <Menubar model={menuItems} className="fixed top-0 w-full z-50" />

            {/* --- HERO BRANDING --- */}
            <header className="pt-8 pb-4 text-center mt-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h1 className="text-7xl md:text-huge font-serif m-0 tracking-tighter uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 font-bold uppercase mt-2">Visual Storyteller & Creative Director</p>
                </motion.div>
            </header>

            <main>
                {/* --- HERO IMAGE --- */}
                <section className="px-4 md:px-8 py-4">
                    <motion.div initial={{ scale: 1.05, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }}>
                        <Image 
                            src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?auto=format&w=1800&q=80" 
                            alt="Main Hero" width="100%" 
                            imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                        />
                    </motion.div>
                </section>

                {/* --- ABOUT --- */}
                <section id="about" className="py-8 px-6 max-w-screen-md mx-auto text-center">
                    <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
                        <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
                        <p className="text-lg font-light line-height-4 italic opacity-80">
                            Navigating the intersection of shadow and light in Mumbai. Every frame is a study of 
                            minimalist geometry and raw human emotion.
                        </p>
                    </motion.div>
                </section>

                {/* --- MODERN STAGGERED GRID --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item, i) => (
                            <motion.div 
                                key={item.id} 
                                className={`col-12 md:col-4 p-4 ${i % 2 !== 0 ? 'md:mt-8' : ''}`}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <div 
                                    className="modern-card cursor-pointer"
                                    onClick={(e) => { setActiveDetails(item); op.current.toggle(e); }}
                                >
                                    <Image src={item.src} alt={item.title} width="100%" 
                                           imageClassName="w-full h-30rem object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <div className="mt-4 flex justify-content-between align-items-center">
                                    <h3 className="font-serif text-2xl m-0">{item.title}</h3>
                                    <span className="text-xs opacity-30 font-bold uppercase tracking-widest">{item.id}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- METADATA OVERLAY --- */}
                <OverlayPanel ref={op} style={{ width: '220px' }}>
                    {activeDetails && (
                        <div className="flex flex-column gap-3 py-2">
                            <div>
                                <span className="text-gold text-xs font-bold uppercase tracking-widest">Location</span>
                                <p className="m-0 text-sm mt-1">{activeDetails.loc}</p>
                            </div>
                            <div className="border-bottom-1 border-white-alpha-10"></div>
                            <div>
                                <span className="text-gold text-xs font-bold uppercase tracking-widest">Gear</span>
                                <p className="m-0 text-sm mt-1">{activeDetails.gear}</p>
                            </div>
                        </div>
                    )}
                </OverlayPanel>

                {/* --- INVESTMENT --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                    <div className="max-w-screen-md mx-auto">
                        {portfolio.map((item, i) => (
                            <div key={i} className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                                <span className="text-xs font-bold tracking-widest opacity-40 uppercase">{item.title} SERIES</span>
                                <span className="text-2xl font-serif italic">{item.price || '₹20,000+'}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- MODERN INQUIRY --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-5xl font-serif italic m-0">Inquire</h2>
                        <p className="text-xs tracking-widest opacity-30 uppercase mt-2">Worldwide availability 2026</p>
                    </div>
                    <div className="flex flex-column gap-4">
                        <InputText placeholder="NAME" className="modern-input" />
                        <InputText placeholder="EMAIL" className="modern-input" />
                        <InputTextarea placeholder="TELL ME ABOUT YOUR PROJECT" rows={3} className="modern-input" />
                        <Button label="SEND INQUIRY" className="p-button-outlined border-white text-white p-3 font-bold text-xs tracking-widest mt-4 hover:bg-white hover:text-black transition-all" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs tracking-widest uppercase border-top-1 border-white-alpha-10">
                &copy; 2026 JANAVI SONI STUDIO &bull; MUMBAI
            </footer>

            <style jsx>{`
                :global(.text-huge) { font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9; }
                :global(.p-button.p-button-outlined:hover) { background-color: white !important; color: black !important; }
            `}</style>
        </div>
    );
}