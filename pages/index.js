import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';
import { Divider } from 'primereact/divider';

export default function JanaviSoniRestored() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // FIX: Functional TabMenu Items
    const items = [
        { label: 'Work', icon: 'pi pi-fw pi-th-large', command: () => { document.getElementById('work').scrollIntoView({ behavior: 'smooth' }); setActiveIndex(0); }},
        { label: 'About', icon: 'pi pi-fw pi-user', command: () => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); setActiveIndex(1); }},
        { label: 'Rates', icon: 'pi pi-fw pi-wallet', command: () => { document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }); setActiveIndex(2); }},
        { label: 'Contact', icon: 'pi pi-fw pi-envelope', command: () => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); setActiveIndex(3); }}
    ];

    // Original Portfolio Data
    const portfolio = [
        { id: '01', title: 'Product', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Archive', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* Background Layer */}
            <div className="modern-bg"><div className="glow-overlay"></div></div>

            {/* Sticky Nav */}
            <nav className="sticky-nav">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </nav>

            <header className="pt-8 pb-4 text-center mt-8">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-7xl md:text-8xl font-serif m-0 uppercase">
                    Janavi Soni
                </motion.h1>
                <p className="text-xs tracking-widest opacity-40 uppercase font-bold">Creative Director</p>
            </header>

            <main className="relative z-10">
                {/* Hero */}
                <section className="px-4 md:px-8 py-4">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?auto=format&w=1800" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale" 
                    />
                </section>

                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
    <p className="text-lg font-light opacity-80 italic">Navigating the intersection of shadow and light.</p>
</section>

{/* ADD THE DIVIDER HERE */}
<div className="px-8 max-w-screen-xl mx-auto">
    <Divider style={{ background: 'rgba(255,255,255,0.1)' }} />
</div>

                {/* About */}
                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
                    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
                    <p className="text-lg font-light opacity-80 italic">Navigating the intersection of shadow and light.</p>
                </section>
                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
    <p className="text-lg font-light opacity-80 italic">Navigating the intersection of shadow and light.</p>
</section>

{/* ADD THE DIVIDER HERE */}
<div className="px-8 max-w-screen-xl mx-auto">
    <Divider style={{ background: 'rgba(255,255,255,0.1)' }} />
</div>
                {/* Work */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item) => (
                            <div key={item.id} className="col-12 md:col-4 p-4">
                                <Image src={item.src} alt={item.title} width="100%" imageClassName="grayscale hover:grayscale-0 transition-all duration-1000 border-1 border-white-alpha-10" />
                                <h3 className="font-serif text-2xl mt-4">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
    <p className="text-lg font-light opacity-80 italic">Navigating the intersection of shadow and light.</p>
</section>

{/* ADD THE DIVIDER HERE */}
<div className="px-8 max-w-screen-xl mx-auto">
    <Divider style={{ background: 'rgba(255,255,255,0.1)' }} />
</div>

                {/* Rates */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                    <div className="max-w-screen-sm mx-auto flex justify-content-between py-4 border-bottom-1 border-white-alpha-10">
                        <span>Photography Session</span>
                        <span className="font-serif italic">₹20,000+</span>
                    </div>
                </section>

                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
    <h2 className="text-3xl font-serif italic mb-4">The Persona</h2>
    <p className="text-lg font-light opacity-80 italic">Navigating the intersection of shadow and light.</p>
</section>

{/* ADD THE DIVIDER HERE */}
<div className="px-8 max-w-screen-xl mx-auto">
    <Divider style={{ background: 'rgba(255,255,255,0.1)' }} />
</div>
                {/* Contact */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif text-center mb-8">Inquire</h2>
                    <div className="flex flex-column gap-4">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputTextarea placeholder="MESSAGE" rows={3} className="noir-input" />
                        <Button label="SEND MESSAGE" className="p-button-outlined border-white p-3 font-bold" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-30 text-xs">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>
        </div>
    );
}