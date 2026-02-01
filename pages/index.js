import React from 'react';
import Head from 'next/head';
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniNoir() {
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
        <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- BRANDING --- */}
            <header className="py-8 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-6xl md:text-8xl font-serif m-0 tracking-widest uppercase text-white">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 mt-3 font-bold uppercase text-white">Visual Storyteller & Artist</p>
                </motion.div>
                <div className="flex justify-content-center mt-5">
                    <Menubar model={items} />
                </div>
            </header>

            <main className="pb-8">
                {/* --- HERO --- */}
                <section className="px-4 md:px-8 py-6">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=80" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                {/* --- ABOUT --- */}
                <section id="about" className="py-8 px-4 md:px-8 max-w-screen-md mx-auto text-center">
                    <h2 className="text-4xl font-serif italic mb-6 text-white">The Artist</h2>
                    <p className="text-lg opacity-60 line-height-4 font-light italic text-white">
                        Based in Mumbai, Janavi Soni explores the quiet intersection of raw urban reality and cinematic art.
                    </p>
                </section>

                {/* --- WORK --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {categories.map((item, i) => (
                            <div key={i} className="col-12 md:col-4 p-4 text-center">
                                <div className="border-1 border-white-alpha-10 overflow-hidden">
                                    <Image src={item.src} alt={item.name} width="100%" preview loading="lazy" 
                                           imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <h3 className="font-serif text-2xl mt-4 mb-1 text-white">{item.name}</h3>
                                <span className="text-xs tracking-widest opacity-20 uppercase font-bold text-white">0{i+1}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- RATES --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 mb-8">
                    <div className="max-w-screen-md mx-auto text-center">
                        <h2 className="text-4xl font-serif italic mb-8 text-white">Investment</h2>
                        {categories.map((item, i) => (
                            <div key={i} className="flex justify-content-between align-items-center py-5 border-bottom-1 border-white-alpha-10">
                                <span className="text-xs tracking-widest font-bold opacity-40 uppercase text-white">{item.name}</span>
                                <span className="text-2xl font-serif italic text-white">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- CONTACT --- */}
                <section id="contact" className="py-8 px-4 md:px-8 max-w-screen-sm mx-auto">
                    <h2 className="text-4xl font-serif italic text-center mb-8 text-white">Inquire</h2>
                    <div className="flex flex-column gap-5">
                        <InputText placeholder="Full Name" className="p-3" />
                        <InputText placeholder="Email Address" className="p-3" />
                        <InputTextarea placeholder="How can I help you?" rows={3} className="p-3" />
                        <Button label="Submit Inquiry" className="p-button-outlined border-white text-white py-3 font-bold tracking-widest text-xs" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center border-top-1 border-white-alpha-10">
                <p className="text-xs tracking-widest font-bold opacity-20 uppercase text-white">
                    &copy; 2026 JANAVI SONI &bull; EST. MUMBAI
                </p>
            </footer>
        </div>
    );
}