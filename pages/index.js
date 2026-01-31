import React from 'react';
import Head from 'next/head';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export default function JanaviSoniIndia() {
    // LOW QUALITY / FAST LOAD URLs (w=400 for small size, q=60 for high compression)
    const indiaCollection = [
        { 
            src: 'https://images.unsplash.com/photo-1524492459426-14fe33230ad0?q=60&w=600&auto=format', 
            title: 'THE PINK PERSPECTIVE', 
            location: 'JAIPUR', 
            size: 'col-12 md:col-7' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=600&auto=format', 
            title: 'SACRED GHATS', 
            location: 'VARANASI', 
            size: 'col-12 md:col-5' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1598333105121-69632886f42c?q=60&w=600&auto=format', 
            title: 'SINDUR & SOUL', 
            location: 'KOLKATA', 
            size: 'col-12 md:col-4' 
        },
        { 
            src: 'https://images.unsplash.com/photo-1590393952601-bfc276082987?q=60&w=600&auto=format', 
            title: 'THE GOLDEN LIGHT', 
            location: 'AMRITSAR', 
            size: 'col-12 md:col-8' 
        }
    ];

    const scrollToGallery = () => {
        document.getElementById('series')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white text-900 min-h-screen">
            <Head>
                <title>Janavi Soni | India</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            {/* --- NAV --- */}
            <nav className="fixed top-0 left-0 w-full p-4 flex justify-content-between align-items-center z-5 bg-white-alpha-90 border-bottom-1 border-100">
                <div className="text-xl font-serif font-bold uppercase tracking-tighter">
                    JANAVI <span className="font-light italic">SONI</span>
                </div>
                <div className="hidden md:flex gap-4 text-xs font-bold uppercase tracking-widest text-700">
                    <a href="#series" className="no-underline text-inherit">Series</a>
                    <a href="#contact" className="no-underline text-inherit">Contact</a>
                </div>
            </nav>

            {/* --- HERO --- */}
            <section className="h-screen flex flex-column align-items-center justify-content-center text-center px-4 relative">
                <div className="fade-in">
                    <span className="text-xs font-bold uppercase text-primary mb-3 block">Archive 2026</span>
                    <h1 className="text-8xl md:text-9xl font-serif italic m-0">India.</h1>
                    <div className="w-2rem h-1px bg-900 mx-auto my-4"></div>
                    <p className="max-w-20rem mx-auto font-light text-600 italic">Finding art in the everyday.</p>
                </div>
                
                <div className="absolute bottom-5 cursor-pointer bounce-light" onClick={scrollToGallery}>
                    <i className="pi pi-mouse text-xl opacity-40 block mb-1"></i>
                    <i className="pi pi-chevron-down text-xs opacity-30"></i>
                </div>
            </section>

            {/* --- GRID --- */}
            <section id="series" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid align-items-center">
                    {indiaCollection.map((img, i) => (
                        <div key={i} className={`${img.size} p-3 mb-6`}>
                            <div className="relative group overflow-hidden bg-gray-100">
                                <Image 
                                    src={img.src} 
                                    alt={img.title} 
                                    width="100%" 
                                    preview 
                                    loading="lazy"
                                    imageClassName="w-full h-full object-cover block transition-all duration-300 hover:opacity-80"
                                />
                            </div>
                            <div className="mt-4 flex justify-content-between align-items-center">
                                <h3 className="font-serif italic text-2xl m-0">{img.title}</h3>
                                <span className="text-xs font-bold opacity-30">{img.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-8 px-6 text-center border-top-1 border-100">
                <h2 className="text-3xl font-serif italic mb-4 uppercase">Janavi Soni</h2>
                <div className="flex justify-content-center gap-4 mb-4">
                    <Button icon="pi pi-instagram" className="p-button-text p-button-plain" />
                    <Button icon="pi pi-envelope" className="p-button-text p-button-plain" />
                </div>
                <div className="text-xs opacity-30 font-bold uppercase tracking-widest">&copy; 2026</div>
            </footer>

            <style jsx global>{`
                body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
                .font-serif { font-family: 'Bodoni Moda', serif; }
                .border-100 { border-color: #f5f5f5 !important; }
                
                /* LIGHTWEIGHT ANIMATIONS */
                .fade-in { animation: fadeIn 1s ease-in; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                
                .bounce-light { animation: bounce 2s infinite; }
                @keyframes bounce { 
                    0%, 100% { transform: translateY(0); } 
                    50% { transform: translateY(10px); } 
                }

                .p-image-preview-indicator {
                    background: rgba(255,255,255,0.7) !important;
                    color: black !important;
                }
            `}</style>
        </div>
    );
}