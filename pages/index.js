import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';

export default function JanaviSoniHome() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle header background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const items = [
        { label: 'HOME', command: () => window.scrollTo({top: 0, behavior: 'smooth'}) },
        { label: 'ABOUT', command: () => router.push('/about') },
        { label: 'SERVICES', command: () => router.push('/services') }, 
        { label: 'CONTACT', command: () => router.push('/contact') }
    ];

    const portfolio = [
        { id: '01', title: 'Product', category: 'Commercial', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', category: 'Fashion', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Business Portraits', category: 'Professional', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800' },
        { id: '04', title: 'Maternity', category: 'Editorial Life', src: 'https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?w=800&auto=format&fit=crop' },
        { id: '05', title: 'New Born', category: 'Minimalist Life', src: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?w=800&auto=format&fit=crop' },
        { id: '06', title: 'Archive', category: 'Personal', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>JANAVI SONI | Visual Artist</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- NAVIGATION --- */}
            <nav className={`fixed top-0 left-0 w-full z-5 px-6 py-4 flex align-items-center justify-content-between transition-all duration-500 ${scrolled ? 'bg-white shadow-2' : 'bg-transparent'}`}>
                {/* MODERN LOGO (Top Left) */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="cursor-pointer"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>J.</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.4em', marginLeft: '0.5rem' }} className="uppercase">Soni</span>
                </motion.div>

                {/* CENTERED MENU */}
                <div className="flex-grow-1 flex justify-content-center hidden md:flex">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-menu-minimal" />
                </div>

                {/* PLACEHOLDER FOR BALANCE (Right Side) */}
                <div className="hidden md:block w-4rem"></div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="h-full w-full">
                    <img 
                        src="/images/Newborn-Baby-HD-Background-Wallpaper-55635.jpg" 
                        alt="Hero" 
                        className="w-full h-full object-cover grayscale"
                        style={{ filter: 'contrast(1.05) brightness(0.95)' }} 
                    />
                    {/* Dark overlay for logo readability */}
                    <div className="absolute top-0 left-0 w-full h-10rem bg-gradient-to-b from-black-alpha-20 to-transparent"></div>
                    {/* Bottom blend to white */}
                    <div className="absolute bottom-0 left-0 w-full h-20rem bg-gradient-to-t from-white to-transparent"></div>
                </motion.div>
            </section>

            <main className="px-4 md:px-8 relative z-2 bg-white">
                <section id="work" className="py-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item, index) => (
                            <div key={item.id} className="col-12 md:col-4 p-3">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative overflow-hidden group"
                                >
                                    <Image 
                                        src={item.src} 
                                        alt={item.title} 
                                        width="100%" 
                                        preview
                                        imageClassName="w-full h-30rem object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 cursor-pointer" 
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-white-alpha-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="m-0 text-xs tracking-widest opacity-60 uppercase">{item.category}</p>
                                        <h3 className="m-0 text-2xl font-serif italic">{item.title}</h3>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="py-8 text-center">
                   <Divider className="max-w-screen-sm mx-auto mb-8" />
                   <h2 className="text-4xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Interested in a session?</h2>
                   <button 
                        onClick={() => router.push('/contact')}
                        className="bg-transparent border-1 border-black-alpha-90 py-3 px-8 text-xs tracking-widest uppercase font-bold hover:bg-black-alpha-90 hover:text-white transition-all duration-300 mb-8"
                    >
                        Get in Touch
                    </button>
                </section>
            </main>

            <footer className="py-8 text-center border-top-1 border-gray-100 bg-white">
                <p className="opacity-40 text-xs tracking-widest m-0">&copy; 2026 JANAVI SONI STUDIO</p>
            </footer>

            <style jsx global>{`
                .noir-menu-minimal.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; }
                .noir-menu-minimal.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none !important; color: #1a1a1a; font-size: 0.65rem; letter-spacing: 0.3em; font-weight: 600; }
                .noir-menu-minimal.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 2px solid #1a1a1a !important; }
                .p-tabmenu-ink-bar { display: none !important; }
            `}</style>
        </div>
    );
}