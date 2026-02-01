import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(2); // Assuming Services is the 3rd item

    const items = [
        { label: 'WORK', template: (item) => <Link href="/" className="p-menuitem-link">{item.label}</Link> },
        { label: 'ABOUT', template: (item) => <Link href="/about" className="p-menuitem-link">{item.label}</Link> },
        { label: 'SERVICES', template: (item) => <Link href="/services" className="p-menuitem-link">{item.label}</Link> },
        { label: 'CONTACT', template: (item) => <Link href="/#contact" className="p-menuitem-link">{item.label}</Link> }
    ];

    const serviceList = [
        {
            title: 'Maternity',
            description: 'Celebrating the quiet strength and beauty of new beginnings through soft, editorial lighting.',
            src: 'https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hdGVybml0eSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            title: 'New Born',
            description: 'Pure, minimalist captures of your newest arrival, focusing on raw emotion and delicate details.',
            src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&w=800'
        },
        {
            title: 'Family',
            description: 'Unscripted moments that tell the unique story of your bond. Real, unposed, and timeless.',
            src: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&w=800'
        },
        {
            title: 'Business Portraits',
            description: 'Elevated headshots and personal branding that project confidence, character, and professionalism.',
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>SERVICES | JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- HEADER --- */}
            <header className="pt-8 pb-4 text-center">
                <h1 className="text-7xl md:text-8xl m-0" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}>
                    Janavi Soni
                </h1>
                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} className="noir-menu" />
                </div>
                <div className="max-w-screen-md mx-auto px-6"><Divider /></div>
            </header>

            <main className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
                <section className="text-center mb-8">
                    <span style={{ letterSpacing: '0.8em', fontSize: '0.65rem' }} className="opacity-40 uppercase font-light">
                        Visual Offerings
                    </span>
                    <h2 className="text-5xl mt-3" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Curated Experiences</h2>
                </section>

                <div className="grid mt-4">
                    {serviceList.map((service, index) => (
                        <div key={index} className="col-12 md:col-6 p-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="border-1 border-gray-100 p-4 hover:shadow-1 transition-all duration-300"
                            >
                                <div className="overflow-hidden mb-4">
                                    <Image 
                                        src={service.src} 
                                        alt={service.title} 
                                        width="100%" 
                                        imageClassName="w-full h-25rem object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                    />
                                </div>
                                <h3 className="text-3xl mb-2" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>{service.title}</h3>
                                <p className="line-height-3 opacity-70 mb-4 font-light italic">
                                    {service.description}
                                </p>
                                <Button 
                                    label="INQUIRE FOR AVAILABILITY" 
                                    onClick={() => router.push('/#contact')}
                                    className="p-button-text p-0 text-black-alpha-90 font-bold tracking-widest text-xs hover:ml-2 transition-all" 
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="py-8 text-center opacity-40 text-xs tracking-widest">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none; color: #1a1a1a; font-size: 0.75rem; letter-spacing: 0.2em; text-decoration: none; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 2px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
            `}</style>
        </div>
    );
}