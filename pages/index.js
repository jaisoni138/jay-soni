import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';

export default function JanaviSoniRestored() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // Safety function for smooth scrolling during Build/SSR
    const scrollToSection = (id, index) => {
        setActiveIndex(index);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const items = [
        { label: 'WORK', command: () => scrollToSection('work', 0) },
        { label: 'ABOUT', command: () => router.push('/about') },
        { label: 'RATES', command: () => scrollToSection('rates', 2) },
        { label: 'CONTACT', command: () => scrollToSection('contact', 3) }
    ];

    const portfolio = [
        { id: '01', title: 'Product', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Archive', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- HEADER & NAV BLOCK --- */}
            <header className="pt-8 pb-4 text-center">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-7xl md:text-8xl m-0" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}>
                        Janavi Soni
                    </h1>
                    <p style={{ letterSpacing: '0.6em', fontSize: '0.7rem' }} className="mt-2 opacity-50 uppercase font-bold">
                        Photography
                    </p>
                </motion.div>

                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-menu" />
                </div>
                <div className="max-w-screen-md mx-auto px-6"><Divider /></div>
            </header>

            <main className="px-4 md:px-8">
                {/* --- HERO IMAGE --- */}
                <section className="py-4">
                    <Image 
                        src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?auto=format&w=1800" 
                        alt="Hero" width="100%" 
                        imageClassName="w-full h-30rem md:h-screen object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                    />
                </section>

                <Divider className="max-w-screen-xl mx-auto" />

                {/* --- PORTFOLIO WORK --- */}
                <section id="work" className="py-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item) => (
                            <div key={item.id} className="col-12 md:col-4 p-4">
                                <div className="overflow-hidden border-1 border-gray-100">
                                    <Image src={item.src} alt={item.title} width="100%" preview imageClassName="grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
                                </div>
                                <h3 className="text-xl mt-4 opacity-80" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- RATES --- */}
                <section id="rates" className="py-8 border-y-1 border-gray-200">
                    <div className="max-w-screen-sm mx-auto">
                        <h2 className="text-4xl text-center mb-8" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Packages</h2>
                        <div className="flex justify-content-between py-4 border-bottom-1 border-gray-100">
                            <span className="font-semibold tracking-tight">Full Day Session</span>
                            <span className="italic">₹45,000+</span>
                        </div>
                        <div className="flex justify-content-between py-4 border-bottom-1 border-gray-100">
                            <span className="font-semibold tracking-tight">Half Day Session</span>
                            <span className="italic">₹25,000+</span>
                        </div>
                    </div>
                </section>

                {/* --- CONTACT FORM --- */}
                <section id="contact" className="py-8 max-w-screen-sm mx-auto">
                    <h2 className="text-5xl text-center mb-8" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Inquire</h2>
                    <div className="flex flex-column gap-5">
                        <div className="p-float-label">
                            <InputText id="name" className="w-full noir-input-light" />
                            <label htmlFor="name">NAME</label>
                        </div>
                        <div className="p-float-label">
                            <InputTextarea id="msg" rows={4} className="w-full noir-input-light" />
                            <label htmlFor="msg">MESSAGE</label>
                        </div>
                        <Button label="SEND MESSAGE" className="p-3 bg-black-alpha-90 text-white border-none hover:bg-black-alpha-70 transition-all" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-40 text-xs tracking-widest">
                &copy; 2026 JANAVI SONI STUDIO — ALL RIGHTS RESERVED
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent; border: none; color: #1a1a1a; font-size: 0.75rem; letter-spacing: 0.2em; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 2px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
                .noir-input-light { background: transparent; border: none; border-bottom: 1px solid #ddd; border-radius: 0; padding: 1rem 0; font-family: 'Montserrat', sans-serif; }
                .noir-input-light:focus { border-color: #000; box-shadow: none; outline: none; }
                .p-float-label label { left: 0px !important; }
            `}</style>
        </div>
    );
}