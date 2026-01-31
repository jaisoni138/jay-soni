import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export default function JanaviSoniModern() {
    const photoTypes = [
        { name: 'Street', price: '₹15,000', icon: 'pi-camera', desc: 'Raw, unscripted moments.' },
        { name: 'Editorial', price: '₹25,000', icon: 'pi-palette', desc: 'High-fashion & concepts.' },
        { name: 'Architecture', price: '₹20,000', icon: 'pi-building', desc: 'Space, lines, and light.' }
    ];

    const portfolio = [
        { src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0?q=60&w=600', type: 'Street' },
        { src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=600', type: 'Editorial' },
        { src: 'https://images.unsplash.com/photo-1598333105121-69632886f42c?q=60&w=600', type: 'Architecture' }
    ];

    return (
        <div className="pb-8">
            <Head>
                <title>JANAVI SONI | Visuals</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- HERO: IDENTITY --- */}
            <section className="h-screen flex flex-column align-items-center justify-content-center border-bottom-1 border-white-alpha-10">
                <h1 className="text-8xl md:text-9xl font-serif italic m-0 tracking-tighter fadein">Janavi Soni</h1>
                <p className="text-xs uppercase tracking-widest mt-4 opacity-50">Mumbai &bull; Global Commissions</p>
                <div className="mt-6 flex gap-3">
                    <Button label="View Portfolio" className="p-button-outlined p-button-secondary" onClick={() => document.getElementById('work').scrollIntoView({behavior:'smooth'})} />
                    <Button label="Rates" className="p-button-primary bg-white text-black border-none" onClick={() => document.getElementById('rates').scrollIntoView({behavior:'smooth'})} />
                </div>
            </section>

            {/* --- WORK: PORTFOLIO --- */}
            <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="flex align-items-center justify-content-between mb-6">
                    <h2 className="text-4xl font-serif italic">Selected Works</h2>
                </div>
                <div className="grid">
                    {portfolio.map((img, i) => (
                        <div key={i} className="col-12 md:col-4 p-2">
                            <div className="relative group overflow-hidden bg-white-alpha-5">
                                <Image src={img.src} alt="Janavi Soni Photography" width="100%" preview loading="lazy" 
                                       imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute top-0 left-0 p-3">
                                    <Tag value={img.type} className="bg-black-alpha-60 text-xs font-light" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SERVICES: TYPES & PRICING --- */}
            <section id="rates" className="py-8 px-4 md:px-8 bg-black-alpha-20">
                <div className="max-w-screen-xl mx-auto text-center mb-8">
                    <h2 className="text-4xl font-serif italic">Investment</h2>
                    <p className="text-500">Tailored photography services for your vision.</p>
                </div>
                
                <div className="grid max-w-screen-lg mx-auto">
                    {photoTypes.map((type, i) => (
                        <div key={i} className="col-12 md:col-4 p-3">
                            <div className="glass-card p-5 h-full flex flex-column align-items-center text-center">
                                <i className={`pi ${type.icon} text-3xl mb-4 text-primary`}></i>
                                <h3 className="text-2xl uppercase tracking-widest font-bold mb-2">{type.name}</h3>
                                <p className="text-500 text-sm mb-4 line-height-3">{type.desc}</p>
                                <div className="mt-auto pt-4 border-top-1 border-white-alpha-10 w-full">
                                    <span className="text-xs opacity-50 block mb-1">Starting from</span>
                                    <span className="text-2xl font-bold">{type.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SIMPLE FOOTER --- */}
            <footer className="py-8 text-center mt-8">
                <div className="flex justify-content-center gap-4 mb-4">
                    <i className="pi pi-instagram cursor-pointer hover:text-primary"></i>
                    <i className="pi pi-envelope cursor-pointer hover:text-primary"></i>
                </div>
                <p className="text-xs opacity-30 font-bold uppercase tracking-widest italic">Janavi Soni Photography &copy; 2026</p>
            </footer>
        </div>
    );
}