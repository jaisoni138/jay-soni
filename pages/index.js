import React, { useState } from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { motion } from 'framer-motion';

export default function JanaviSoniProfessional() {
    const [visible, setVisible] = useState(false);

    const categories = [
        { type: 'Street', price: '₹15,000', icon: 'pi-camera', src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0?q=60&w=800' },
        { type: 'Editorial', price: '₹30,000', icon: 'pi-palette', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800' },
        { type: 'Events', price: '₹50,000', icon: 'pi-users', src: 'https://images.unsplash.com/photo-1590393952601-bfc276082987?q=60&w=800' }
    ];

    return (
        <div className="flex flex-column md:flex-row">
            <Head>
                <title>JANAVI SONI | Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- MOBILE MENU --- */}
            <div className="md:hidden fixed top-0 w-full p-4 z-5 flex justify-content-between bg-black">
                <span className="font-serif italic text-xl">JS</span>
                <i className="pi pi-bars text-xl" onClick={() => setVisible(true)}></i>
            </div>

            {/* --- SIDEBAR MENU (Modern Sidebar) --- */}
            <aside className="hidden md:flex flex-column w-20rem h-screen sticky top-0 p-6 sidebar-menu">
                <div className="mb-8">
                    <h1 className="text-3xl font-serif italic m-0">Janavi Soni</h1>
                    <p className="text-xs opacity-40 uppercase tracking-widest mt-2">Visual Artist</p>
                </div>
                
                <nav className="flex flex-column gap-4 text-sm font-bold tracking-widest uppercase">
                    <a href="#home" className="no-underline text-white hover:text-primary transition-colors">Home</a>
                    <a href="#portfolio" className="no-underline text-white hover:text-primary transition-colors">Portfolio</a>
                    <a href="#rates" className="no-underline text-white hover:text-primary transition-colors">Rates</a>
                    <a href="#contact" className="no-underline text-white hover:text-primary transition-colors">Inquire</a>
                </nav>

                <div className="mt-auto opacity-30 text-xs">
                    &copy; 2026 Mumbai, India
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1">
                {/* HERO */}
                <section id="home" className="h-screen flex align-items-center justify-content-center border-bottom-1 border-white-alpha-10">
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="text-center">
                        <h2 className="text-8xl md:text-9xl font-serif italic m-0 tracking-tighter">Artistry.</h2>
                        <Button label="View Work" className="p-button-outlined mt-6 text-white border-white-alpha-20" onClick={() => document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})} />
                    </motion.div>
                </section>

                {/* PORTFOLIO GRID */}
                <section id="portfolio" className="py-8 px-4 md:px-8 max-w-screen-xl">
                    <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-6">Latest Series</h3>
                    <div className="grid">
                        {categories.map((item, i) => (
                            <div key={i} className="col-12 md:col-6 p-3">
                                <div className="overflow-hidden bg-white-alpha-5 group cursor-crosshair">
                                    <Image src={item.src} alt={item.type} width="100%" preview loading="lazy"
                                           imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                                <div className="mt-4 flex justify-content-between align-items-baseline border-bottom-1 border-white-alpha-10 pb-2">
                                    <span className="text-2xl font-serif italic">{item.type}</span>
                                    <span className="text-xs opacity-40">0{i+1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RATES SECTION */}
                <section id="rates" className="py-8 px-4 md:px-8 bg-black-alpha-40">
                    <div className="grid align-items-center">
                        <div className="col-12 md:col-4 mb-6 md:mb-0">
                            <h2 className="text-5xl font-serif italic m-0">Service <br/> Investment</h2>
                            <p className="text-500 mt-4 max-w-15rem">Pricing covers curation, retouching, and commercial licensing.</p>
                        </div>
                        <div className="col-12 md:col-8">
                            <div className="flex flex-column gap-4">
                                {categories.map((item, i) => (
                                    <div key={i} className="flex justify-content-between align-items-center p-5 border-1 border-white-alpha-10 hover:border-white-alpha-30 transition-all">
                                        <div>
                                            <h4 className="m-0 text-xl uppercase tracking-widest font-bold">{item.type}</h4>
                                            <p className="text-xs opacity-40 mt-1">Full Day Session // Unlimited Edits</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-serif">{item.price}</span>
                                            <i className="pi pi-arrow-up-right ml-3 opacity-30"></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="py-8 px-4 text-center">
                    <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Have a project in mind?</p>
                    <a href="mailto:hello@janavisoni.com" className="text-4xl md:text-6xl font-serif italic text-white no-underline hover:text-primary transition-colors">hello@janavisoni.com</a>
                </section>
            </main>

            {/* MOBILE SIDEBAR COMPONENT */}
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-menu">
                <div className="flex flex-column gap-6 mt-6 p-4 text-2xl font-serif italic">
                    <a href="#home" className="no-underline text-white" onClick={() => setVisible(false)}>Home</a>
                    <a href="#portfolio" className="no-underline text-white" onClick={() => setVisible(false)}>Portfolio</a>
                    <a href="#rates" className="no-underline text-white" onClick={() => setVisible(false)}>Rates</a>
                </div>
            </Sidebar>
        </div>
    );
}