import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JanaviSoniHome() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about' },
        { label: 'SERVICES', path: '/services' },
        { label: 'CONTACT', path: '/contact' }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>JANAVI SONI | Visual Artist</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- NAVIGATION --- */}
            <nav className={`fixed top-0 left-0 w-full z-5 transition-all duration-500 ${scrolled ? 'bg-white py-3 shadow-1' : 'bg-transparent py-5'}`}>
                <div className="flex align-items-center justify-content-between px-6 md:px-8">
                    
                    {/* LOGO */}
                    <div className="cursor-pointer flex align-items-center" onClick={() => router.push('/')}>
                        <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: '1.8rem' }}>J.</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.4em', marginLeft: '0.6rem', marginTop: '0.4rem' }}>SONI</span>
                    </div>

                    {/* CENTER MENU (Manual mapping to avoid TabMenu breaks) */}
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.path} style={{ textDecoration: 'none' }}>
                                <span className={`text-xs font-bold tracking-widest cursor-pointer hover:opacity-100 transition-opacity ${router.pathname === item.path ? 'opacity-100 border-bottom-1 border-black-alpha-90' : 'opacity-40'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* EMPTY DIV FOR FLEX BALANCE */}
                    <div className="hidden md:block w-8rem"></div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen w-full">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="h-full w-full">
                    <img 
                        src="/images/Newborn-Baby-HD-Background-Wallpaper-55635.jpg" 
                        alt="Hero" 
                        className="w-full h-full object-cover grayscale"
                    />
                    {/* Top Gradient for Logo Visibility */}
                    <div className="absolute top-0 left-0 w-full h-15rem bg-gradient-to-b from-black-alpha-30 to-transparent"></div>
                    {/* Bottom Blend */}
                    <div className="absolute bottom-0 left-0 w-full h-25rem bg-gradient-to-t from-white to-transparent"></div>
                </motion.div>
            </section>

            <main className="relative z-2 bg-white px-4 md:px-8">
                <section className="max-w-screen-xl mx-auto py-8">
                    <div className="grid">
                        {portfolioData.map((item, index) => (
                            <div key={item.id} className="col-12 md:col-4 p-3">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative overflow-hidden group border-1 border-gray-100"
                                >
                                    <Image 
                                        src={item.src} 
                                        alt={item.title} 
                                        width="100%" 
                                        preview
                                        imageClassName="w-full h-30rem object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-white-alpha-80 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                        <p className="m-0 text-xs tracking-widest opacity-60 uppercase">{item.category}</p>
                                        <h3 className="m-0 text-xl font-serif italic">{item.title}</h3>
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
        </div>
    );
}

// Data moved outside component to prevent re-renders
const portfolioData = [
    { id: '01', title: 'Product', category: 'Commercial', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
    { id: '02', title: 'Editorial', category: 'Fashion', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
    { id: '03', title: 'Portraits', category: 'Professional', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800' },
    { id: '04', title: 'Maternity', category: 'Editorial Life', src: 'https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?w=800&auto=format&fit=crop' },
    { id: '05', title: 'New Born', category: 'Minimalist Life', src: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?w=800&auto=format&fit=crop' },
    { id: '06', title: 'Archive', category: 'Personal', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
];