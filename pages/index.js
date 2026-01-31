import React, { useState } from 'react';
import Head from 'next/head';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export default function PhotographySite() {
    // 1. Mock Data
    const [images] = useState([
        { itemImageSrc: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02', title: 'Mountain Range', category: 'Landscape' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167', title: 'Urban Portrait', category: 'Portrait' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Forest Path', category: 'Landscape' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', title: 'Studio Headshot', category: 'Portrait' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b', title: 'Cloudy Peaks', category: 'Landscape' },
        { itemImageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'Valley River', category: 'Landscape' }
    ]);

    // 2. Templates
    const galleriaItemTemplate = (item) => (
        <img src={item.itemImageSrc} alt={item.title} style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block' }} />
    );

    return (
        <div className="surface-50 min-h-screen font-sans">
            <Head>
                <title>LENS & LIGHT | Professional Photography</title>
            </Head>

            {/* --- NAVIGATION --- */}
            <nav className="surface-card p-4 shadow-2 flex align-items-center justify-content-between sticky top-0 z-5">
                <span className="text-2xl font-bold uppercase tracking-widest ml-4">Lens & Light</span>
                <div className="hidden md:flex gap-5 mr-4">
                    <Button label="Gallery" className="p-button-text p-button-plain uppercase text-sm" />
                    <Button label="About" className="p-button-text p-button-plain uppercase text-sm" />
                    <Button label="Contact" className="p-button-secondary uppercase text-sm" />
                </div>
            </nav>

            {/* --- HERO GALLERIA --- */}
            <section className="p-0 overflow-hidden">
                <Galleria 
                    value={images.slice(0, 3)} 
                    numVisible={5} 
                    circular 
                    autoPlay 
                    transitionInterval={4000}
                    showThumbnails={false} 
                    showIndicators 
                    item={galleriaItemTemplate} 
                />
            </section>

            {/* --- PORTFOLIO SECTION --- */}
            <section className="py-8 px-4 md:px-8">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-light text-900 uppercase tracking-tight">The Portfolio</h2>
                    <p className="text-600">Moments frozen in time, across various genres.</p>
                </div>

                <TabView className="max-w-screen">
                    <TabPanel header="All Works">
                        <div className="grid mt-2">
                            {images.map((img, i) => (
                                <div key={i} className="col-12 md:col-6 lg:col-4 p-2">
                                    <div className="relative overflow-hidden border-round-lg shadow-2 group">
                                        <Image src={img.itemImageSrc} alt={img.title} width="100%" preview />
                                        <div className="p-3 surface-card">
                                            <span className="text-xs text-primary font-bold uppercase">{img.category}</span>
                                            <h4 className="m-0 mt-1 text-900">{img.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel header="Landscape">
                        <div className="grid mt-2">
                            {images.filter(img => img.category === 'Landscape').map((img, i) => (
                                <div key={i} className="col-12 md:col-4 p-2">
                                    <Image src={img.itemImageSrc} alt={img.title} width="100%" preview />
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </TabView>
            </section>

            {/* --- CONTACT SECTION --- */}
            <section className="surface-900 text-white py-8 px-4 md:px-8">
                <div className="grid">
                    <div className="col-12 md:col-6 p-4">
                        <h2 className="text-4xl font-bold mb-4">Let's Capture <br/> Your Story</h2>
                        <p className="text-gray-400 line-height-3 mb-5">
                            Available for travel worldwide. Specializing in high-end 
                            commercial shoots and intimate destination weddings.
                        </p>
                        <div className="flex gap-3">
                            <i className="pi pi-instagram text-2xl"></i>
                            <i className="pi pi-twitter text-2xl"></i>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 p-4 surface-card border-round-xl text-900">
                        <div className="p-fluid">
                            <div className="field mb-4">
                                <label htmlFor="name" className="font-bold">Name</label>
                                <InputText id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="field mb-4">
                                <label htmlFor="email" className="font-bold">Email</label>
                                <InputText id="email" type="text" placeholder="Email Address" />
                            </div>
                            <div className="field mb-4">
                                <label htmlFor="msg" className="font-bold">Message</label>
                                <InputTextarea id="msg" rows={4} placeholder="Tell me about your project..." />
                            </div>
                            <Button label="Send Inquiry" className="p-button-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-4 text-center surface-100 text-500 text-sm">
                &copy; 2026 LENS & LIGHT STUDIOS. BUILT WITH PRIMEREACT.
            </footer>
        </div>
    );
}
