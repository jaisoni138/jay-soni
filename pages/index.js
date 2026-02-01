import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniRestored() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // 1. Template: Customizes how each tab looks
    const itemTemplate = (item, options) => {
        return (
            <a 
                className={options.className} 
                onClick={options.onClick}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 1.5rem' }}
            >
                <i className={`${item.icon}`} style={{ color: options.active ? '#d4af37' : '#666' }}></i>
                <span className="p-menuitem-text" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>{item.label}</span>
            </a>
        );
    };

    // 2. Controlled Items: Using 'command' for routing
    const items = [
        { label: 'WORK', icon: 'pi pi-th-large', template: itemTemplate, command: () => router.push('#work') },
        { label: 'ABOUT', icon: 'pi pi-user', template: itemTemplate, command: () => router.push('#about') },
        { label: 'RATES', icon: 'pi pi-wallet', template: itemTemplate, command: () => router.push('#rates') },
        { label: 'CONTACT', icon: 'pi pi-envelope', template: itemTemplate, command: () => router.push('#contact') }
    ];

    // 3. Sync Logic: Ensures the gold underline moves when you navigate
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#about') setActiveIndex(1);
        else if (hash === '#rates') setActiveIndex(2);
        else if (hash === '#contact') setActiveIndex(3);
        else setActiveIndex(0);
    }, [router.asPath]);

    const portfolio = [
        { id: '01', title: 'Product', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Archive', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ backgroundColor: '#000', color: '#e5e5e5', minHeight: '100vh' }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- STICKY ROUTED MENU --- */}
            <nav className="sticky-nav">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-tabs" />
            </nav>

            <header className="pt-8 pb-4 text-center mt-8">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                    <h1 className="text-7xl md:text-huge font-serif m-0 uppercase tracking-tighter">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 uppercase mt-2">Noir Visual Identity</p>
                </motion.div>
            </header>

            <main>
                {/* --- WORK SECTION --- */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item) => (
                            <div key={item.id} className="col-12 md:col-4 p-4">
                                <div className="border-1 border-white-alpha-10 overflow-hidden">
                                    <Image src={item.src} alt={item.title} width="100%" imageClassName="w-full grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <h3 className="font-serif text-2xl mt-3">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- ABOUT SECTION --- */}
                <section id="about" className="py-8 px-6 max-w-screen-md mx-auto text-center border-top-1 border-white-alpha-10">
                    <h2 className="text-4xl font-serif italic mb-6">The Persona</h2>
                    <p className="text-xl font-light line-height-4 opacity-70 italic">
                        Stripping away the excess to find the architectural essence of shadow. 
                        Based in Mumbai, working worldwide.
                    </p>
                </section>

                {/* --- RATES SECTION --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="text-4xl font-serif italic mb-8">Investment</h2>
                    <div className="max-w-screen-md mx-auto">
                        <div className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                            <span className="text-xs font-bold tracking-widest opacity-40 uppercase">Day Rate</span>
                            <span className="text-2xl font-serif italic">₹45,000+</span>
                        </div>
                        <div className="flex justify-content-between py-5 border-bottom-1 border-white-alpha-10">
                            <span className="text-xs font-bold tracking-widest opacity-40 uppercase">Editorial</span>
                            <span className="text-2xl font-serif italic">₹25,000+</span>
                        </div>
                    </div>
                </section>

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl font-serif italic text-center mb-8">Inquire</h2>
                    <div className="flex flex-column gap-5">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputText placeholder="EMAIL" className="noir-input" />
                        <InputTextarea placeholder="VISION" rows={3} className="noir-input" />
                        <Button label="SEND MESSAGE" className="p-button-outlined border-white text-white p-3 font-bold text-xs" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-20 text-xs tracking-widest uppercase border-top-1 border-white-alpha-10">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>

            <style jsx>{`
                .sticky-nav {
                    position: fixed; top: 0; width: 100%; z-index: 1000;
                    background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(10px);
                    display: flex; justify-content: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
                :global(.text-huge) { font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9; }
                :global(.noir-tabs) { background: transparent !important; border: none !important; }
                :global(.noir-tabs .p-tabmenu-nav) { background: transparent !important; border: none !important; }
                :global(.noir-tabs .p-tabmenuitem.p-highlight .p-menuitem-link) { 
                    color: #d4af37 !important; border-bottom: 2px solid #d4af37 !important; 
                }
                :global(.noir-input) {
                    background: transparent !important; border: none !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
                    color: white !important; border-radius: 0 !important; padding: 1rem 0 !important;
                }
            `}</style>
        </div>
    );
}