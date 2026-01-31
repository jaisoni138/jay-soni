import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export default function JanaviSoniDark() {
    // Fast-loading optimized URLs (w=800, q=60)
    const portfolio = [
        { src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0?q=60&w=800&auto=format', title: 'Pink City', size: 'col-12 md:col-8' },
        { src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800&auto=format', title: 'Varanasi', size: 'col-12 md:col-4' },
        { src: 'https://images.unsplash.com/photo-1598333105121-69632886f42c?q=60&w=800&auto=format', title: 'Kolkata', size: 'col-12 md:col-4' },
        { src: 'https://images.unsplash.com/photo-1590393952601-bfc276082987?q=60&w=800&auto=format', title: 'Amritsar', size: 'col-12 md:col-8' }
    ];

    const scrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen">
            <Head>
                <title>JANAVI SONI | Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&family=Inter:wght@300;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- TOP BRANDING NAV --- */}
            <nav className="fixed top-0 w-full z-5 flex justify-content-between align-items-center p-4 md:p-6 bg-black-alpha-80 backdrop-blur-md border-bottom-1 border-white-alpha-10">
                <div className="text-2xl font-bold tracking-tighter font-serif uppercase">
                    JANAVI <span className="font-light italic text-primary">SONI</span>
                </div>
                <Button label="Contact" className="p-button-text p-button-sm text-white opacity-70 hover:opacity-100" />
            </nav>

            {/* --- IMPACT START PAGE --- */}
            <section className="h-screen flex flex-column align-items-center justify-content-center text-center px-4">
                <div className="animate-fadein">
                    <h2 className="text-xs uppercase tracking-widest text-primary mb-3 font-bold">Visual Storyteller</h2>
                    <h1 className="text-7xl md:text-9xl font-serif italic m-0 line-height-1">Janavi Soni.</h1>
                    <p className="mt-4 text-600 font-light max-w-20rem mx-auto">Capturing the raw essence of Indian streets through a cinematic lens.</p>
                </div>

                <div className="absolute bottom-5 cursor-pointer opacity-40 hover:opacity-100 transition-all text-center" onClick={scrollToPortfolio}>
                    <span className="text-xs uppercase tracking-widest block mb-2 font-bold">View Portfolio</span>
                    <i className="pi pi-mouse text-2xl"></i>
                    <i className="pi pi-chevron-down block text-xs mt-1 animate-bounce"></i>
                </div>
            </section>

            {/* --- PERFORMANCE PORTFOLIO --- */}
            <section id="portfolio" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid">
                    {portfolio.map((img, i) => (
                        <div key={i} className={`${img.size} p-2 md:p-4`}>
                            <div className="img-container border-round-sm">
                                <Image 
                                    src={img.src} 
                                    alt={img.title} 
                                    width="100%" 
                                    preview 
                                    loading="lazy" // Critical for high performance
                                    imageClassName="w-full h-25rem md:h-30rem object-cover block"
                                />
                            </div>
                            <div className="mt-3 flex justify-content-between align-items-center border-bottom-1 border-white-alpha-10 pb-2">
                                <span className="font-serif italic text-xl">{img.title}</span>
                                <span className="text-xs opacity-40 font-bold uppercase tracking-widest">Street // 2026</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-8 text-center border-top-1 border-white-alpha-10">
                <p className="text-xs tracking-widest opacity-30 font-bold uppercase">Janavi Soni &copy; 2026</p>
            </footer>

            <style jsx>{`
                .animate-fadein {
                    animation: fadeIn 1.5s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(5px); }
                }
            `}</style>
        </div>
    );
}