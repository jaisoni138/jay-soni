import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StreetPhotographyIndia() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const indiaCollection = [
        { src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0', title: 'The Pink City', location: 'Jaipur', size: 'col-12 md:col-8' },
        { src: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f', title: 'Morning Raga', location: 'Varanasi', size: 'col-12 md:col-4' },
        { src: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3', title: 'Saffron Soul', location: 'Mathura', size: 'col-12 md:col-5' },
        { src: 'https://images.unsplash.com/photo-1548013146-72479768bbaa', title: 'Taj Reflection', location: 'Agra', size: 'col-12 md:col-7' }
    ];

    return (
        <div className="bg-white text-900 min-h-screen">
            <Head>
                <title>Janavi Soni | The India Chronicles</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;1,400&family=Inter:wght@300;600&display=swap" rel="stylesheet" />
            </Head>

            {/* --- IMMERSIVE HERO --- */}
            <section className="relative h-screen flex align-items-center justify-content-center overflow-hidden">
                <motion.div style={{ opacity }} className="z-2 text-center">
                    <span className="text-xs tracking-widest uppercase font-semibold text-500 mb-2 block">Series 01 // Street</span>
                    <h1 className="text-8xl font-serif m-0 italic">India.</h1>
                    <p className="font-light text-xl mt-4 opacity-60">A visual diary by Janavi Soni</p>
                </motion.div>
                <img 
                    src="https://images.unsplash.com/photo-1524492459426-14fe33230ad0" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale-100" 
                    alt="Background"
                />
                <div className="absolute bottom-0 left-0 p-6 flex justify-content-between w-full border-top-1 border-100">
                    <span className="text-xs font-bold tracking-tighter">EST. 2026</span>
                    <span className="text-xs font-bold tracking-tighter cursor-pointer hover:text-primary">SCROLL TO EXPLORE</span>
                </div>
            </section>

            {/* --- THE STUDER-INSPIRED GRID --- */}
            <section className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid align-items-start">
                    {indiaCollection.map((img, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`${img.size} p-4 mb-8`}
                        >
                            <div className="relative group overflow-hidden">
                                <Image 
                                    src={img.src} 
                                    alt={img.title} 
                                    width="100%" 
                                    preview 
                                    imageClassName="w-full h-full object-cover block transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-0 left-0 p-4 bg-white text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    {img.location}
                                </div>
                            </div>
                            <div className="mt-4 flex justify-content-between align-items-baseline border-bottom-1 border-100 pb-2">
                                <h3 className="font-serif text-2xl m-0">{img.title}</h3>
                                <span className="text-xs font-mono text-400">00{i+1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- STORYTELLING DIVIDER --- */}
            <section className="py-8 my-8 border-y-1 border-100 text-center">
                <div className="max-w-30rem mx-auto px-4">
                    <h2 className="font-serif italic text-4xl mb-4">"The chaos is the melody."</h2>
                    <p className="line-height-4 text-600">
                        Inspired by the wandering eye of Andrew Studer, this collection captures 
                        the unscripted theater of Indian streets—where every corner is a stage 
                        and every face a story.
                    </p>
                </div>
            </section>

            {/* --- MODERN MINIMAL FOOTER --- */}
            <footer className="py-8 px-6 flex flex-column md:flex-row justify-content-between align-items-center bg-gray-900 text-white">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-serif tracking-tighter m-0 uppercase">Janavi Soni</h2>
                    <p className="text-xs opacity-40 mt-1">Available for global commissions.</p>
                </div>
                <div className="flex gap-4">
                    <Button icon="pi pi-instagram" className="p-button-rounded p-button-text text-white hover:text-primary" />
                    <Button label="Enquire" className="p-button-outlined p-button-secondary border-round-none px-4 text-xs tracking-widest uppercase" />
                </div>
            </footer>

            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #fcfcfc;
                }
                .font-serif {
                    font-family: 'Bodoni Moda', serif;
                }
                .p-image-preview-indicator {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                    color: black !important;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                /* Custom Thin Border Style */
                .border-100 { border-color: #eee !important; }
            `}</style>
        </div>
    );
}