import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { motion } from 'framer-motion';

export default function JanaviSoniRoutedTabs() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // Custom Template for the Tab Items
    const itemTemplate = (item, options) => {
        return (
            <a 
                className={options.className} 
                target={item.target} 
                onClick={options.onClick}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
                <i className={`${item.icon} text-xs`} style={{ color: options.active ? '#d4af37' : 'inherit' }}></i>
                <span className="p-menuitem-text">{item.label}</span>
            </a>
        );
    };

    const items = [
        { 
            label: 'WORK', 
            icon: 'pi pi-th-large', 
            template: itemTemplate,
            command: () => router.push('/#work') 
        },
        { 
            label: 'ABOUT', 
            icon: 'pi pi-user', 
            template: itemTemplate,
            command: () => router.push('/#about') 
        },
        { 
            label: 'RATES', 
            icon: 'pi pi-wallet', 
            template: itemTemplate,
            command: () => router.push('/#rates') 
        },
        { 
            label: 'CONTACT', 
            icon: 'pi pi-envelope', 
            template: itemTemplate,
            command: () => router.push('/#contact') 
        }
    ];

    // Synchronize activeIndex with URL on load/change
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#about') setActiveIndex(1);
        else if (hash === '#rates') setActiveIndex(2);
        else if (hash === '#contact') setActiveIndex(3);
        else setActiveIndex(0);
    }, [router.asPath]);

    return (
        <div style={{ backgroundColor: '#000', color: '#e5e5e5', minHeight: '100vh' }}>
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- FIXED ROUTED TABMENU --- */}
            <nav className="sticky-nav">
                <TabMenu 
                    model={items} 
                    activeIndex={activeIndex} 
                    onTabChange={(e) => setActiveIndex(e.index)} 
                    className="noir-tabmenu"
                />
            </nav>

            <header className="pt-8 pb-4 text-center mt-8">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                    <h1 className="text-7xl md:text-8xl font-serif m-0 uppercase tracking-tighter">Janavi Soni</h1>
                    <p className="text-xs tracking-widest opacity-40 uppercase mt-2">Noir Visual Identity</p>
                </motion.div>
            </header>

            <main className="px-4 md:px-8">
                <section id="work" className="py-8 min-h-screen">
                    <div className="grid">
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800" width="100%" imageClassName="grayscale" />
                        </div>
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800" width="100%" imageClassName="grayscale" />
                        </div>
                    </div>
                </section>

                <section id="about" className="py-8 min-h-screen flex align-items-center justify-content-center">
                    <h2 className="text-5xl font-serif italic opacity-50">The Visionary</h2>
                </section>

                <section id="rates" className="py-8 min-h-screen flex align-items-center justify-content-center">
                    <h2 className="text-5xl font-serif italic opacity-50">Investment</h2>
                </section>

                <section id="contact" className="py-8 min-h-screen flex align-items-center justify-content-center">
                    <h2 className="text-5xl font-serif italic opacity-50">Inquire</h2>
                </section>
            </main>

            <style jsx>{`
                .sticky-nav {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(15px);
                    display: flex;
                    justify-content: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                :global(.noir-tabmenu) { background: transparent !important; border: none !important; }
                :global(.noir-tabmenu .p-tabmenu-nav) { background: transparent !important; border: none !important; }
                :global(.noir-tabmenu .p-tabmenuitem .p-menuitem-link) { 
                    background: transparent !important; 
                    border: none !important; 
                    color: #666 !important; 
                    padding: 1.5rem !important;
                    transition: color 0.4s ease;
                }
                :global(.noir-tabmenu .p-tabmenuitem.p-highlight .p-menuitem-link) { 
                    color: #d4af37 !important; 
                    border-bottom: 1px solid #d4af37 !important; 
                }
                :global(.noir-tabmenu .p-menuitem-text) { 
                    font-size: 0.7rem; 
                    letter-spacing: 3px; 
                    font-weight: 600; 
                }
            `}</style>
        </div>
    );
}