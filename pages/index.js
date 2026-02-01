import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { motion } from 'framer-motion';

export default function JanaviSoniFixed() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    const itemTemplate = (item, options) => (
        <a className={options.className} onClick={options.onClick} style={{ cursor: 'pointer', padding: '1rem' }}>
            <span className="p-menuitem-text" style={{ color: '#fff' }}>{item.label}</span>
        </a>
    );

    const items = [
        { label: 'WORK', template: itemTemplate, command: () => router.push('#work') },
        { label: 'ABOUT', template: itemTemplate, command: () => router.push('#about') },
        { label: 'RATES', template: itemTemplate, command: () => router.push('#rates') },
        { label: 'CONTACT', template: itemTemplate, command: () => router.push('#contact') }
    ];

    useEffect(() => {
        const hash = window.location.hash;
        const indexMap = { '#work': 0, '#about': 1, '#rates': 2, '#contact': 3 };
        setActiveIndex(indexMap[hash] || 0);
    }, [router.asPath]);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
            <Head>
                <title>JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            </Head>

            <nav className="sticky-nav flex justify-content-center">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-tabs" />
            </nav>

            <main className="pt-8">
                <header className="py-8 text-center mt-8">
                    <h1 style={{ color: '#fff' }} className="text-7xl md:text-8xl font-serif m-0 uppercase tracking-tighter">Janavi Soni</h1>
                    <p style={{ color: '#fff' }} className="text-xs tracking-widest uppercase opacity-60">Photography & Creative Direction</p>
                </header>

                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                            <h3 style={{ color: '#fff' }} className="font-serif text-2xl mt-3">SERIES 01</h3>
                        </div>
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                            <h3 style={{ color: '#fff' }} className="font-serif text-2xl mt-3">SERIES 02</h3>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 style={{ color: '#fff' }} className="text-5xl font-serif italic text-center mb-8">Inquire</h2>
                    <div className="flex flex-column gap-5">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputTextarea placeholder="MESSAGE" rows={3} className="noir-input" />
                        <Button label="SEND MESSAGE" className="p-button-outlined border-white p-3 font-bold text-xs" style={{ color: '#fff' }} />
                    </div>
                </section>
            </main>
        </div>
    );
}