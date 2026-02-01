import React, { useState } from 'react';
import Head from 'next/head';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniPureBrand() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'Philosophy', icon: 'pi pi-fw pi-eye', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Services', icon: 'pi pi-fw pi-briefcase', command: () => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Connect', icon: 'pi pi-fw pi-envelope', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    return (
        <div className="surface-ground min-h-screen">
            <Head>
                <title>JANAVI SONI | Visual Identity</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- CLEAN NAVIGATION --- */}
            <div className="fixed top-0 w-full z-50 flex justify-content-center pt-6 pb-4 bg-black-alpha-90">
                <TabMenu 
                    model={items} 
                    activeIndex={activeIndex} 
                    onTabChange={(e) => setActiveIndex(e.index)} 
                    className="modern-tabmenu"
                />
            </div>

            {/* --- CLEAN HERO BLOCK --- */}
            <section className="relative h-screen flex flex-column justify-content-center align-items-center text-center px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-7xl md:text-huge font-serif m-0 tracking-tighter uppercase text-white">
                        Janavi Soni
                    </h1>
                    <div className="flex align-items-center justify-content-center gap-4 mt-5">
                        <span className="text-xs tracking-widest opacity-40 font-bold uppercase text-white">Mumbai</span>
                        <div className="h-1px w-1rem bg-white-alpha-20"></div>
                        <span className="text-xs tracking-widest opacity-40 font-bold uppercase text-white">Visual Identity</span>
                        <div className="h-1px w-1rem bg-white-alpha-20"></div>
                        <span className="text-xs tracking-widest opacity-40 font-bold uppercase text-white">EST. 2026</span>
                    </div>
                </motion.div>
            </section>

            <main>
                {/* --- PHILOSOPHY --- */}
                <section id="about" className="py-8 px-6 max-w-screen-lg mx-auto">
                    <div className="grid align-items-center py-8">
                        <div className="col-12 md:col-6">
                            <h2 className="text-5xl font-serif italic m-0 text-white">The Philosophy</h2>
                        </div>
                        <div className="col-12 md:col-6 border-left-1 border-white-alpha-10 pl-6">
                            <p className="text-xl font-light line-height-4 opacity-70 italic text-white">
                                Design is the silent ambassador of your brand. I build visual languages 
                                that communicate intentionality and timelessness, stripping away the noise 
                                to find the essence of the narrative.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- SERVICES --- */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10">
                    <div className="max-w-screen-md mx-auto">
                        <h2 className="text-center text-xs tracking-widest font-bold uppercase mb-8 opacity-30 text-white">Service Framework</h2>
                        {[
                            { name: 'Creative Direction', price: 'Consultation' },
                            { name: 'Brand Storyboarding', price: 'Custom' },
                            { name: 'Visual Identity Consult', price: 'Standard' }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-content-between py-6 border-bottom-1 border-white-alpha-10 group cursor-default">
                                <span className="text-sm font-bold tracking-widest uppercase text-white group-hover:text-gold transition-colors">{item.name}</span>
                                <span className="text-xl font-serif text-white">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- CONTACT --- */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-5xl font-serif italic text-white m-0">Initiate</h2>
                        <p className="text-xs tracking-widest opacity-30 uppercase mt-3 text-white">Securing commissions for Q3 2026</p>
                    </div>
                    <div className="flex flex-column gap-6">
                        <InputText placeholder="NAME / BRAND" className="modern-input" />
                        <InputText placeholder="EMAIL" className="modern-input" />
                        <InputTextarea placeholder="THE VISION" rows={3} className="modern-input" />
                        <Button label="SEND INQUIRY" className="p-button-outlined border-white text-white p-4 font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center border-top-1 border-white-alpha-10">
                <p className="text-xs tracking-widest font-bold opacity-20 uppercase text-white">
                    JANAVI SONI &bull; ALL RIGHTS RESERVED &bull; 2026
                </p>
            </footer>

            <style jsx>{`
                :global(.text-huge) { font-size: clamp(3rem, 12vw, 9rem); }
                :global(.modern-input) { 
                    background: transparent !important; 
                    border: none !important; 
                    border-bottom: 1px solid rgba(255,255,255,0.1) !important; 
                    color: white !important; 
                    border-radius: 0 !important; 
                    padding: 1.5rem 0 !important;
                }
                :global(.modern-input:focus) { border-bottom-color: #d4af37 !important; outline: none !important; box-shadow: none !important; }
                
                :global(.modern-tabmenu) { background: transparent !important; border: none !important; }
                :global(.modern-tabmenu .p-tabmenu-nav) { background: transparent !important; border: none !important; gap: 2rem; }
                :global(.modern-tabmenu .p-tabmenuitem .p-menuitem-link) { background: transparent !important; border: none !important; color: rgba(255,255,255,0.3) !important; }
                :global(.modern-tabmenu .p-tabmenuitem.p-highlight .p-menuitem-link) { color: #d4af37 !important; border-bottom: 2px solid #d4af37 !important; }
                :global(.modern-tabmenu .p-menuitem-text) { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; }
            `}</style>
        </div>
    );
}