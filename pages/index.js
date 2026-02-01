import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniStudio() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // Custom Template for the TabMenu Items
    const itemTemplate = (item, options) => (
        <a 
            className={options.className} 
            onClick={options.onClick} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
            <i className={item.icon} style={{ fontSize: '0.9rem' }}></i>
            <span className="p-menuitem-text" style={{ fontWeight: '600', letterSpacing: '2px' }}>
                {item.label}
            </span>
        </a>
    );

    const items = [
        { label: 'WORK', icon: 'pi pi-th-large', template: itemTemplate, command: () => router.push('#work') },
        { label: 'ABOUT', icon: 'pi pi-user', template: itemTemplate, command: () => router.push('#about') },
        { label: 'RATES', icon: 'pi pi-wallet', template: itemTemplate, command: () => router.push('#rates') },
        { label: 'CONTACT', icon: 'pi pi-envelope', template: itemTemplate, command: () => router.push('#contact') }
    ];

    // Synchronize Menu Active State with URL Hash
    useEffect(() => {
        const hash = window.location.hash;
        const indexMap = { '#work': 0, '#about': 1, '#rates': 2, '#contact': 3 };
        setActiveIndex(indexMap[hash] || 0);
    }, [router.asPath]);

    const portfolio = [
        { id: '01', title: 'Product Architecture', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial Noir', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Urban Archive', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <Head>
                <title>JANAVI SONI | Visual Identity</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- FIXED NAVIGATION --- */}
            <nav className="sticky-nav">
                <TabMenu 
                    model={items} 
                    activeIndex={activeIndex} 
                    onTabChange={(e) => setActiveIndex(e.index)} 
                    className="noir-tabs" 
                />
            </nav>

            <header className="pt-8 pb-4 text-center mt-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <h1 className="text-7xl md:text-huge font-serif m-0 tracking-tighter uppercase">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 font-bold uppercase mt-2">Visual Storyteller & Creative Director</p>
                </motion.div>
            </header>

            <main>
                {/* --- WORK SECTION --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item) => (
                            <div key={item.id} className="col-12 md:col-4 p-4">
                                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.5 }}>
                                    <div className="border-1 border-white-alpha-10 overflow-hidden">
                                        <Image src={item.src} alt={item.title} width="100%" preview imageClassName="w-full h-30rem object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                    </div>
                                    <div className="mt-4 flex justify-content-between align-items-center">
                                        <h3 className="font-serif text-2xl m-0">{item.title}</h3>
                                        <span className="text-xs opacity-30 font-bold uppercase tracking-widest">{item.id}</span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- ABOUT SECTION --- */}
                <section id="about" className="py-8 px-6 max-w-screen-md mx-auto text-center border-top-1 border-white-alpha-10">
                    <h2 className="text-4xl font-serif italic mb-6">Philosophy</h2>
                    <p className="text-xl font-light line-height-4 italic opacity-70">
                        Stripping away the excess to find the architectural essence of shadow. 
                        Navigating the intersection of light and emotion in Mumbai.
                    </p>
                </section>

                {/* --- RATES SECTION --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                    <div className="max-w-screen-md mx-auto">
                        <div className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                            <span className="text-xs font-bold tracking-widest opacity-40 uppercase">Commercial Session</span>
                            <span className="text-2xl font-serif">₹45,000+</span>
                        </div>
                        <div className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                            <span className="text-xs font-bold tracking-widest opacity-40 uppercase">Brand Strategy</span>
                            <span className="text-2xl font-serif">₹25,000</span>
                        </div>
                    </div>
                </section>

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif italic text-center mb-8">Initiate</h2>
                    <div className="flex flex-column gap-5">
                        <InputText placeholder="NAME / BRAND" className="noir-input" />
                        <InputText placeholder="EMAIL ADDRESS" className="noir-input" />
                        <InputTextarea placeholder="DESCRIBE YOUR VISION" rows={3} className="noir-input" />
                        <Button label="SEND INQUIRY" className="p-button-outlined border-white p-4 font-bold text-xs tracking-widest mt-4" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs tracking-widest uppercase border-top-1 border-white-alpha-10">
                &copy; 2026 JANAVI SONI STUDIO &bull; ALL RIGHTS RESERVED
            </footer>

            <style jsx>{`
                :global(.text-huge) { font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9; }
                :global(.p-image-preview-indicator) { background: rgba(0,0,0,0.5) !important; }
            `}</style>
        </div>
    );
}