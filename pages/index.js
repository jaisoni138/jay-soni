import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export default function JanaviSoniFinalFix() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);

    // Simple Template to ensure text is white and links work
    const itemTemplate = (item, options) => (
        <a className={options.className} onClick={options.onClick} style={{ cursor: 'pointer' }}>
            <span className="p-menuitem-text" style={{ color: '#ffffff', fontWeight: 'bold' }}>{item.label}</span>
        </a>
    );

    const items = [
        { label: 'WORK', command: () => router.push('#work'), template: itemTemplate },
        { label: 'ABOUT', command: () => router.push('#about'), template: itemTemplate },
        { label: 'RATES', command: () => router.push('#rates'), template: itemTemplate },
        { label: 'CONTACT', command: () => router.push('#contact'), template: itemTemplate }
    ];

    // Sync menu highlight with scroll/URL
    useEffect(() => {
        const path = router.asPath;
        if (path.includes('#about')) setActiveIndex(1);
        else if (path.includes('#rates')) setActiveIndex(2);
        else if (path.includes('#contact')) setActiveIndex(3);
        else setActiveIndex(0);
    }, [router.asPath]);

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
            <Head>
                <title>JANAVI SONI | STUDIO</title>
                <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation */}
            <nav className="sticky-nav">
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="noir-tabs" />
            </nav>

            <main style={{ paddingTop: '80px' }}>
                {/* Hero Header */}
                <header className="text-center py-8">
                    <h1 className="font-serif text-7xl md:text-8xl m-0 uppercase" style={{ color: '#fff' }}>Janavi Soni</h1>
                    <p className="opacity-50 tracking-widest uppercase mt-2" style={{ color: '#fff' }}>Visual Identity & Photography</p>
                </header>

                {/* Work Section */}
                <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                    <div className="grid">
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                            <h2 className="font-serif text-2xl mt-4" style={{ color: '#fff' }}>Portfolio Series 01</h2>
                        </div>
                        <div className="col-12 md:col-6 p-4">
                            <Image src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800" width="100%" imageClassName="grayscale border-1 border-white-alpha-10" />
                            <h2 className="font-serif text-2xl mt-4" style={{ color: '#fff' }}>Portfolio Series 02</h2>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-8 px-6 text-center max-w-screen-md mx-auto">
                    <h2 className="font-serif text-5xl italic mb-4" style={{ color: '#fff' }}>The Persona</h2>
                    <p className="text-xl opacity-80" style={{ color: '#fff', lineHeight: '1.8' }}>
                        Exploring the architecture of light and shadow within Mumbai's urban landscapes. 
                        Every frame is a curated visual story.
                    </p>
                </section>

                {/* Rates Section */}
                <section id="rates" className="py-8 px-4 md:px-8 border-y-1 border-white-alpha-10 text-center">
                    <h2 className="font-serif text-5xl mb-8" style={{ color: '#fff' }}>Investment</h2>
                    <div className="max-w-screen-sm mx-auto">
                        <div className="flex justify-content-between py-4 border-bottom-1 border-white-alpha-10">
                            <span style={{ color: '#fff' }}>Commercial Photography</span>
                            <span style={{ color: '#fff' }}>₹45,000+</span>
                        </div>
                        <div className="flex justify-content-between py-4 border-bottom-1 border-white-alpha-10">
                            <span style={{ color: '#fff' }}>Creative Direction</span>
                            <span style={{ color: '#fff' }}>₹25,000+</span>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-8 px-6 max-w-screen-sm mx-auto">
                    <h2 className="font-serif text-5xl text-center mb-8" style={{ color: '#fff' }}>Inquire</h2>
                    <div className="flex flex-column gap-6">
                        <InputText placeholder="NAME" className="noir-input" />
                        <InputTextarea placeholder="TELL ME ABOUT YOUR VISION" rows={4} className="noir-input" />
                        <Button label="SEND MESSAGE" className="p-button-outlined border-white p-3" style={{ color: '#fff', fontWeight: 'bold' }} />
                    </div>
                </section>
            </main>

            <footer className="py-8 text-center opacity-30 text-xs">
                &copy; 2026 JANAVI SONI STUDIO &bull; MUMBAI
            </footer>
        </div>
    );
}