import React from 'react';
import Head from 'next/head';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniFinal() {
    const items = [
        { label: 'Work', command: () => document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'About', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Investment', command: () => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }) },
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
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- HEADER --- */}
            <header className="branding-box">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-6xl md:text-8xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-30 mt-3 font-bold uppercase">Photography & Creative Direction</p>
                </motion.div>
                <div className="flex justify-content-center mt-4">
                    <Menubar model={items} className="border-none bg-transparent" />
                </div>
            </header>

            <main>
                {/* --- HERO --- */}
                <section className="px-4 md:px-8 py-4">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=70" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                {/* --- ABOUT SECTION --- */}
                <section id="about" className="py-8 px-4 md:px-8 max-w-screen-md mx-auto text-center">
                    <h2 className="text-4xl font-serif italic mb-6">The Artist</h2>
                    <p className="about-text text-lg opacity-80">
                        Based in the vibrant chaos of Mumbai, Janavi Soni is a visual storyteller who finds beauty in the unscripted. 
                        With a focus on high-contrast street photography and conceptual editorial work, her lens seeks to 
                        bridge the gap between raw reality and cinematic art.
                    </p>
                    <p className="about-text text-lg opacity-80 mt-4">
                        Every frame is a curated memory, emphasizing the interplay of shadow, light, and the human spirit.
                    </p>
                </section>

                {/* --- WORK GRID --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {categories.map((item, i) => (
                            <div key={i} className="col-12 md:col-4 p-4 text-center">
                                <div className="overflow-hidden border-1 border-white-alpha-10">
                                    <Image src={item.src} alt={item.name} width="100%" preview loading="lazy" 
                                           imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <h3 className="font-serif text-2xl mt-4 mb-1">{item.name}</h3>
                                <span className="text-xs tracking-widest opacity-20 uppercase font-bold">Series 0{i+1}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- INVESTMENT --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10">
                    <div className="max-w-screen-md mx-auto text-center">
                        <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                        {categories.map((item, i) => (
                            <div key={i} className="flex justify-content-between align-items-center py-5 border-bottom-1 border-white-alpha-10">
                                <span className="text-xs tracking-widest font-bold opacity-40 uppercase">{item.name} SESSIONS</span>
                                <span className="text-2xl font-serif italic">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="py-8 px-4 md:px-8 max-w-screen-sm mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-serif italic">Inquire</h2>
                        <p className="text-xs tracking-widest opacity-40 uppercase mt-2">Available for worldwide commissions</p>
                    </div>
                    <div className="flex flex-column gap-4">
                        <div className="flex flex-column gap-2">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-50">Name</label>
                            <InputText id="name" className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                        </div>
                        <div className="flex flex-column gap-2">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-50">Email</label>
                            <InputText id="email" className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                        </div>
                        <div className="flex flex-column gap-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-50">Project Details</label>
                            <InputTextarea id="message" rows={3} className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                        </div>
                        <Button label="SEND MESSAGE" className="mt-4 p-button-outlined border-white text-white border-round-none font-bold tracking-widest text-xs" />
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="py-8 text-center border-top-1 border-white-alpha-10">
                <div className="flex justify-content-center gap-4 mb-4">
                    <i className="pi pi-instagram cursor-pointer hover:text-gold transition-colors"></i>
                    <i className="pi pi-twitter cursor-pointer hover:text-gold transition-colors"></i>
                </div>
                <p className="text-xs tracking-widest font-bold opacity-20 uppercase">
                    &copy; 2026 JANAVI SONI &bull; ALL VISUALS RESERVED
                </p>
            </footer>
        </div>
    );
}