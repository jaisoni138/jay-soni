import React, { useState } from 'react';
import Head from 'next/head';
import { TabMenu } from 'primereact/tabmenu';
import { motion } from 'framer-motion';
import { Divider } from 'primereact/divider';

export default function JanaviSoniRestored() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'WORK', command: () => document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'ABOUT', command: () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'RATES', command: () => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'CONTACT', command: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    return (
        <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#fff', color: '#000' }}>
            <Head>
                <title>JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
            </Head>

            {/* INTEGRATED HEADER BLOCK */}
            <header className="pt-8 pb-4 text-center">
                {/* Branding */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 
                        className="text-7xl md:text-8xl m-0"
                        style={{ 
                            fontFamily: "'Bodoni Moda', serif", 
                            fontStyle: 'italic', 
                            fontWeight: 400,
                            letterSpacing: '-1px',
                            color: '#1a1a1a'
                        }}
                    >
                        Janavi Soni
                    </h1>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.6em', fontSize: '0.7rem' }} className="mt-2 opacity-60 uppercase">
                        Creative Director & Photographer
                    </p>
                </motion.div>

                {/* Integrated Navigation */}
                <div className="mt-6 flex justify-content-center">
                    <TabMenu 
                        model={items} 
                        activeIndex={activeIndex} 
                        onTabChange={(e) => setActiveIndex(e.index)}
                        style={{ background: 'transparent', border: 'none' }}
                        className="noir-menu"
                    />
                </div>
                
                <div className="max-w-screen-md mx-auto px-6">
                    <Divider style={{ height: '1px', opacity: 0.1 }} />
                </div>
            </header>

            <main>
                {/* Rest of your sections go here... */}
            </main>

            <style jsx global>{`
                /* Removing PrimeReact default styling for that clean look */
                .noir-menu.p-tabmenu .p-tabmenu-nav {
                    background: transparent;
                    border: none;
                    justify-content: center;
                }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    background: transparent;
                    border: none;
                    color: #000;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.8rem;
                    letter-spacing: 0.2em;
                    transition: opacity 0.3s;
                }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
                    color: #000;
                    font-weight: 600;
                    border-bottom: 1px solid #000;
                }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight) .p-menuitem-link:hover {
                    opacity: 0.5;
                }
                .p-tabmenu-ink-bar {
                    display: none !important; /* Removes the thick PrimeReact underline */
                }
            `}</style>
        </div>
    );
}