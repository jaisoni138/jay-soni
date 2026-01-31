import React, { useState } from 'react';
import Head from 'next/head';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniPhotography() {
    const [darkMode, setDarkMode] = useState(false);
    
    const [images] = useState([
        { itemImageSrc: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02', title: 'Eternal Peaks', category: 'Landscape', desc: 'Capturing the scale of nature.' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167', title: 'The Soul of the City', category: 'Portrait', desc: 'Unposed, raw, and real.' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Green Whispers', category: 'Landscape', desc: 'The forest has many secrets.' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', title: 'Identity', category: 'Portrait', desc: 'More than just a face.' }
    ]);

    const galleriaItemTemplate = (item) => (
        <div className="relative w-full h-screen overflow-hidden">
            <img src={item.itemImageSrc} alt={item.title} className="w-full h-full object-cover grayscale-hover transition-all duration-1000" />
            <div className="absolute inset-0 flex flex-column justify-content-center align-items-center text-center p-6 bg-black-alpha-40 text-white">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm tracking-widest uppercase mb-3">Fine Art Photography</motion.span>
                <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl font-serif m-0">
                    {item.title}
                </motion.h2>
                <motion.div initial={{ width: 0 }} animate={{ width: '100px' }} className="h-2px bg-white my-4"></motion.div>
                <p className="text-lg font-light max-w-20rem">{item.desc}</p>
            </div>
        </div>
    );

    return (
        <div className={darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}>
            <Head>
                <title>Janavi Soni | Signature Photography</title>
            </Head>

            {/* --- SIGNATURE NAV --- */}
            <nav className={`p-4 flex align-items-center justify-content-between sticky top-0 z-5 backdrop-blur-md ${darkMode ? 'bg-black-alpha-70' : 'bg-white-alpha-70'}`}>
                <div className="ml-4">
                    <h1 className="text-2xl font-serif tracking-tighter m-0">JANAVI <span className="font-light italic text-primary">SONI</span></h1>
                </div>
                
                <div className="flex gap-4 align-items-center mr-4 uppercase text-xs tracking-widest font-bold">
                    <a href="#gallery" className="no-underline text-inherit hover:text-primary transition-colors">Portfolio</a>
                    <a href="#contact" className="no-underline text-inherit hover:text-primary transition-colors">Contact</a>
                    <Button 
                        icon={darkMode ? "pi pi-sun" : "pi pi-moon"} 
                        onClick={() => setDarkMode(!darkMode)} 
                        className="p-button-rounded p-button-text p-button-sm" 
                    />
                </div>
            </nav>

            {/* --- CINEMATIC HERO --- */}
            <section className="h-screen overflow-hidden">
                <Galleria value={images} circular autoPlay transitionInterval={5000} showThumbnails={false} showIndicators={false} item={galleriaItemTemplate} />
            </section>

            {/* --- ARTIST STATEMENT --- */}
            <section className="py-8 px-4 text-center max-w-30rem mx-auto my-8">
                <i className="pi pi-stop text-primary mb-4"></i>
                <h3 className="text-3xl font-serif italic mb-4">"I don't just take pictures; I collect the feelings that usually go unnoticed."</h3>
                <p className="text-600 line-height-4">Based in Mumbai, traveling globally to capture authentic, cinematic moments for humans and brands who value depth over perfection.</p>
            </section>

            {/* --- THE PORTFOLIO --- */}
            <section id="gallery" className="py-8 px-4 md:px-8">
                <TabView className="portfolio-tabs custom-tabview">
                    <TabPanel header="THE COLLECTIONS">
                        <div className="grid mt-4">
                            {images.map((img, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ y: -10 }}
                                    className="col-12 md:col-6 lg:col-4 p-4"
                                >
                                    <div className="relative overflow-hidden group border-round-none shadow-1">
                                        <Image 
                                            src={img.itemImageSrc} 
                                            alt={img.title} 
                                            width="100%" 
                                            preview 
                                            imageClassName="block w-full grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                        />
                                        <div className="p-3 text-center">
                                            <span className="text-xs tracking-widest text-primary uppercase">{img.category}</span>
                                            <h4 className="mt-2 mb-0 font-serif text-xl">{img.title}</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabPanel>
                </TabView>
            </section>

            {/* --- MINIMAL CONTACT --- */}
            <section id="contact" className={`py-8 px-4 md:px-8 flex flex-column align-items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <h2 className="text-5xl font-serif mb-6">Let's Connect</h2>
                <div className="w-full max-w-30rem">
                    <div className="p-fluid">
                        <div className="field mb-5">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-50">Your Name</label>
                            <InputText className="minimal-input" />
                        </div>
                        <div className="field mb-5">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email Address</label>
                            <InputText className="minimal-input" />
                        </div>
                        <div className="field mb-6">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-50">Tell me your story</label>
                            <InputTextarea rows={3} className="minimal-input" />
                        </div>
                        <Button label="SEND INQUIRY" className="p-button-lg p-button-primary border-round-none tracking-widest font-bold py-3" />
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center border-top-1 surface-border">
                <p className="text-xs tracking-widest opacity-40 uppercase">
                    &copy; 2026 JANAVI SONI PHOTOGRAPHY. ALL RIGHTS RESERVED.
                </p>
            </footer>

            <style jsx global>{`
                .grayscale-20 { filter: grayscale(20%); }
                .minimal-input {
                    border: none !important;
                    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
                    background: transparent !important;
                    border-radius: 0 !important;
                    padding: 1rem 0 !important;
                    font-size: 1.1rem !important;
                }
                .minimal-input:focus {
                    border-bottom-color: var(--primary-color) !important;
                    box-shadow: none !important;
                }
                .custom-tabview .p-tabview-nav {
                    border: none !important;
                    justify-content: center;
                    background: transparent !important;
                }
                .custom-tabview .p-tabview-nav-link {
                    background: transparent !important;
                    border: none !important;
                    font-family: serif;
                    letter-spacing: 0.2em;
                    font-size: 0.9rem;
                    color: inherit !important;
                    opacity: 0.5;
                }
                .custom-tabview .p-highlight .p-tabview-nav-link {
                    opacity: 1;
                    border-bottom: 2px solid var(--primary-color) !important;
                }
            `}</style>
        </div>
    );
}