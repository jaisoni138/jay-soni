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

export default function JanaviSoniHome() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSection = (id, index) => {
        setActiveIndex(index);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If we are on a different page, go home first
            router.push('/' + (id ? `#${id}` : ''));
        }
    };

    const items = [
        { label: 'HOME', command: () => window.scrollTo({top: 0, behavior: 'smooth'}) },
        { label: 'ABOUT', command: () => router.push('/about') },
        { label: 'SERVICES', command: () => router.push('/services') }, 
        { label: 'CONTACT', command: () => scrollToSection('contact', 3) }
    ];

    const portfolio = [
        { id: '01', title: 'Product', category: 'Commercial', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', category: 'Fashion', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Business Portraits', category: 'Professional', src: 'https://r.jina.ai/i/655f448c66e24b088e50529d6389f417' },
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

            {/* --- HEADER --- */}
            <header className="pt-8 pb-4 text-center sticky top-0 z-5 bg-white-alpha-90 backdrop-blur-md">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-7xl md:text-8xl m-0 cursor-pointer" 
                        style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        Janavi Soni
                    </h1>
                    <p style={{ letterSpacing: '0.8em', fontSize: '0.65rem', textIndent: '0.8em' }} className="mt-2 opacity-50 uppercase font-bold">
                        Photography
                    </p>
                </motion.div>

                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-menu" />
                </div>
            </header>

            <main className="px-4 md:px-8">
                {/* --- HERO --- */}
                <section className="py-4">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                        <Image 
                            src="https://697e96d7c4feaabd2d12359b.imgix.net/pexels-bingotheme-421879.jpg?auto=format&w=1800" 
                            alt="Hero" width="100%" 
                            imageClassName="w-full h-30rem md:h-screen object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                        />
                    </motion.div>
                </section>

                <div className="max-w-screen-xl mx-auto py-4"><Divider /></div>

                {/* --- PORTFOLIO (Home Content) --- */}
                <section id="work" className="py-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        {portfolio.map((item, index) => (
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

                <Divider className="max-w-screen-sm mx-auto" />

                {/* --- CONTACT --- */}
                <section id="contact" className="py-8 max-w-screen-sm mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-xs tracking-widest opacity-40 uppercase">Get in Touch</span>
                        <h2 className="text-6xl mt-2" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Inquire</h2>
                    </div>
                    <div className="flex flex-column gap-5">
                        <div className="p-float-label">
                            <InputText id="name" className="w-full noir-input-light" />
                            <label htmlFor="name">NAME</label>
                        </div>
                        <div className="p-float-label">
                            <InputText id="email" className="w-full noir-input-light" />
                            <label htmlFor="email">EMAIL ADDRESS</label>
                        </div>
                        <div className="p-float-label">
                            <InputTextarea id="msg" rows={4} className="w-full noir-input-light" />
                            <label htmlFor="msg">TELL ME ABOUT YOUR VISION</label>
                        </div>
                        <Button label="SEND MESSAGE" className="p-3 bg-black-alpha-90 text-white border-none hover:bg-black-alpha-70 transition-all font-bold tracking-widest text-xs" />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center border-top-1 border-gray-100">
                <p className="opacity-40 text-xs tracking-widest m-0">&copy; 2026 JANAVI SONI STUDIO</p>
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent; border: none; color: #1a1a1a; font-size: 0.7rem; letter-spacing: 0.25em; font-weight: 400; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 1px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
                .noir-input-light { background: transparent; border: none; border-bottom: 1px solid #ddd; border-radius: 0; padding: 1rem 0; font-family: 'Montserrat', sans-serif; }
                .noir-input-light:focus { border-color: #000; box-shadow: none; outline: none; }
                .p-float-label label { left: 0px !important; font-size: 0.7rem; letter-spacing: 0.1em; opacity: 0.5; }
            `}</style>
        </div>
    );
}