import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(3); // Contact is index 3

    const items = [
        { label: 'HOME', template: (item) => <Link href="/" className="p-menuitem-link">{item.label}</Link> },
        { label: 'ABOUT', template: (item) => <Link href="/about" className="p-menuitem-link">{item.label}</Link> },
        { label: 'SERVICES', template: (item) => <Link href="/services" className="p-menuitem-link">{item.label}</Link> },
        { label: 'CONTACT', template: (item) => <Link href="/contact" className="p-menuitem-link">{item.label}</Link> }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>CONTACT | JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- HEADER --- */}
            <header className="pt-8 pb-4 text-center sticky top-0 z-5 bg-white-alpha-90 backdrop-blur-md">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-7xl md:text-8xl m-0 cursor-pointer" 
                        style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}
                        onClick={() => router.push('/')}>
                        Janavi Soni
                    </h1>
                    <p style={{ letterSpacing: '0.8em', fontSize: '0.65rem', textIndent: '0.8em' }} className="mt-2 opacity-50 uppercase font-bold text-center">
                        Photography
                    </p>
                </motion.div>

                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} className="noir-menu" />
                </div>
                <div className="max-w-screen-md mx-auto px-6"><Divider /></div>
            </header>

            <main className="max-w-screen-sm mx-auto px-6 py-8 md:py-12">
                <section className="text-center mb-8">
                    <span style={{ letterSpacing: '0.8em', fontSize: '0.65rem' }} className="opacity-40 uppercase font-light">
                        Connectivity
                    </span>
                    <h2 className="text-6xl mt-3" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Let's Create.</h2>
                    <p className="opacity-60 italic mt-4">Currently booking for 2026 sessions in North Carolina and beyond.</p>
                </section>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-column gap-6 mt-8"
                >
                    <div className="p-float-label">
                        <InputText id="name" className="w-full noir-input-light" />
                        <label htmlFor="name">FULL NAME</label>
                    </div>

                    <div className="p-float-label">
                        <InputText id="email" className="w-full noir-input-light" />
                        <label htmlFor="email">EMAIL ADDRESS</label>
                    </div>

                    <div className="p-float-label">
                        <InputText id="subject" className="w-full noir-input-light" />
                        <label htmlFor="subject">INTEREST (E.G. MATERNITY, BUSINESS)</label>
                    </div>

                    <div className="p-float-label">
                        <InputTextarea id="message" rows={5} className="w-full noir-input-light" autoResize />
                        <label htmlFor="message">TELL ME ABOUT YOUR VISION</label>
                    </div>

                    <Button 
                        label="SEND INQUIRY" 
                        className="p-4 bg-black-alpha-90 text-white border-none hover:bg-black-alpha-70 transition-all font-bold tracking-widest text-xs mt-4" 
                    />
                </motion.div>

                <div className="mt-8 pt-8 border-top-1 border-gray-100 grid text-center">
                    <div className="col-12 md:col-6">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">Location</h4>
                        <p className="m-0 font-light">High Point, North Carolina</p>
                    </div>
                    <div className="col-12 md:col-6 mt-4 md:mt-0">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">Email</h4>
                        <p className="m-0 font-light underline">studio@janavisoni.com</p>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center opacity-40 text-xs tracking-widest">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none; color: #1a1a1a; font-size: 0.7rem; letter-spacing: 0.25em; text-decoration: none; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 1px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }

                .noir-input-light { 
                    background: transparent; 
                    border: none; 
                    border-bottom: 1px solid #ddd; 
                    border-radius: 0; 
                    padding: 1.2rem 0; 
                    font-family: 'Montserrat', sans-serif; 
                    font-weight: 300;
                }
                .noir-input-light:focus { 
                    border-color: #1a1a1a; 
                    box-shadow: none; 
                    outline: none; 
                }
                .p-float-label label { 
                    left: 0px !important; 
                    font-size: 0.65rem; 
                    letter-spacing: 0.2em; 
                    opacity: 0.5; 
                    font-weight: 600;
                }
                .p-float-label input:focus ~ label,
                .p-float-label input.p-filled ~ label,
                .p-float-label textarea:focus ~ label,
                .p-float-label textarea.p-filled ~ label {
                    top: -0.75rem !important;
                    font-size: 0.55rem !important;
                    color: #1a1a1a !important;
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}