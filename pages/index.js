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
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#e5e5e5' }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- BRANDING BOX --- */}
            <header className="branding-box" style={{ backgroundColor: '#000000', textAlign: 'center', padding: '5rem 1rem' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-6xl md:text-8xl font-serif m-0 tracking-widest uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-30 mt-3 font-bold uppercase">Photography & Creative Direction</p>
                </motion.div>
                <div className="flex justify-content-center mt-4">
                    <Menubar model={items} className="border-none bg-transparent" />
                </div>
            </header>

            {/* --- HERO --- */}
            <section className="px-4 md:px-8 py-4" style={{ backgroundColor: '#000000' }}>
                <Image 
                    src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?fit=crop&w=1600&q=70" 
                    alt="Hero" width="100%" 
                    imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                />
            </section>

            {/* --- ABOUT --- */}
            <section id="about" className="py-8 px-4 md:px-8 max-w-screen-md mx-auto text-center">
                <h2 className="text-4xl font-serif italic mb-6">The Artist</h2>
                <p className="text-lg opacity-70 italic">Mumbai-based visual artist specializing in high-contrast urban narratives.</p>
            </section>

            {/* --- WORK --- */}
            <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid">
                    {categories.map((item, i) => (
                        <div key={i} className="col-12 md:col-4 p-4 text-center">
                            <div className="overflow-hidden border-1 border-white-alpha-10">
                                <Image src={item.src} alt={item.name} width="100%" preview 
                                       imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <h3 className="font-serif text-2xl mt-4 mb-1">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CONTACT --- */}
            <section id="contact" className="py-8 px-4 md:px-8 max-w-screen-sm mx-auto">
                <h2 className="text-4xl font-serif italic text-center mb-8">Inquire</h2>
                <div className="flex flex-column gap-5">
                    <InputText placeholder="Name" className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                    <InputText placeholder="Email" className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                    <InputTextarea placeholder="Message" rows={3} className="bg-transparent border-none border-bottom-1 border-white-alpha-20 border-round-none p-2 text-white outline-none" />
                    <Button label="Submit" className="p-button-outlined border-white text-white border-round-none py-3" />
                </div>
            </section>
        </div>
    );
}