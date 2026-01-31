import React, { useContext, useRef } from 'react';
import Link from 'next/link';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { classNames } from 'primereact/utils';

const PhotoLandingPage = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef();

    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden w-full">
                {/* --- NAVIGATION --- */}
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/" className="flex align-items-center">
                        <span className="text-900 font-bold text-3xl tracking-tight mr-8">LENS & LIGHT</span>
                    </Link>
                    
                    <StyleClass nodeRef={menuRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick="true">
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>

                    <div className="align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2" style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li><a href="#gallery" className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium uppercase text-sm tracking-widest">Portfolio<Ripple /></a></li>
                            <li><a href="#about" className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium uppercase text-sm tracking-widest">About<Ripple /></a></li>
                            <li><a href="#services" className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium uppercase text-sm tracking-widest">Services<Ripple /></a></li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Book a Session" className="p-button-outlined p-button-secondary font-medium tracking-wide"></Button>
                        </div>
                    </div>
                </div>

                {/* --- HERO SECTION --- */}
                <div id="hero" className="relative flex flex-column align-items-center justify-content-center text-center overflow-hidden" style={{ minHeight: '80vh', background: 'var(--surface-50)' }}>
                    <div className="z-1 px-4">
                        <h1 className="text-7xl font-bold text-900 mb-0">Capturing the <span className="text-blue-500">Unseen.</span></h1>
                        <p className="text-600 text-2xl mt-3 mb-5 font-light">Fine Art & Commercial Photography based in New York City.</p>
                        <Button label="View Gallery" icon="pi pi-arrow-right" iconPos="right" className="p-button-lg p-button-rounded px-6 py-3 bg-gray-900 border-none"></Button>
                    </div>
                    {/* Background Graphic Decoration */}
                    <div className="absolute w-full h-full opacity-10 pointer-events-none">
                         <i className="pi pi-camera absolute" style={{ fontSize: '30rem', right: '-5rem', bottom: '-5rem' }}></i>
                    </div>
                </div>

                {/* --- MASONRY-STYLE GALLERY PREVIEW --- */}
                <div id="gallery" className="py-8 px-4 lg:px-8">
                    <div className="grid">
                        <div className="col-12 md:col-6 p-3">
                            <div className="relative overflow-hidden border-round-xl shadow-4 hover:shadow-8 transition-all transition-duration-500">
                                <img src="/demo/images/photography/portraits.jpg" alt="Portraits" className="w-full block" />
                                <div className="absolute bottom-0 left-0 w-full p-5 text-white bg-gradient-to-t from-black-alpha-90 to-transparent">
                                    <h3 className="text-2xl font-bold mb-1">Portraiture</h3>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Studio & Natural Light</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="grid">
                                <div className="col-12 p-3">
                                    <div className="relative overflow-hidden border-round-xl shadow-4 h-15rem">
                                        <img src="/demo/images/photography/landscape.jpg" alt="Nature" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 flex align-items-center justify-content-center bg-black-alpha-40 opacity-0 hover:opacity-100 transition-all cursor-pointer">
                                            <span className="text-white font-bold border-1 p-3">VIEW NATURE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="relative overflow-hidden border-round-xl shadow-4 h-15rem text-white bg-bluegray-900 flex align-items-center justify-content-center px-4 text-center">
                                        <div>
                                            <h4 className="text-xl mb-2 italic">"Photography is the beauty of life, captured."</h4>
                                            <p className="text-sm text-bluegray-300">- Tara Chisolm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SERVICES SECTION --- */}
                <div id="services" className="surface-section py-8 px-4 lg:px-8">
                    <div className="text-center mb-6">
                        <h2 className="text-900 font-bold text-4xl mb-3">Professional Services</h2>
                        <p className="text-600 text-xl">Tailored packages for every milestone.</p>
                    </div>
                    <div className="grid">
                        <div className="col-12 md:col-4 p-4 text-center">
                            <i className="pi pi-heart text-blue-500 text-4xl mb-3"></i>
                            <h3 className="text-900 text-xl font-medium mb-2">Weddings</h3>
                            <p className="text-600 line-height-3">Full day coverage with high-resolution digital delivery and a physical heirloom album.</p>
                        </div>
                        <div className="col-12 md:col-4 p-4 text-center">
                            <i className="pi pi-shopping-bag text-blue-500 text-4xl mb-3"></i>
                            <h3 className="text-900 text-xl font-medium mb-2">Commercial</h3>
                            <p className="text-600 line-height-3">Product shots and branding imagery designed to elevate your business identity.</p>
                        </div>
                        <div className="col-12 md:col-4 p-4 text-center">
                            <i className="pi pi-video text-blue-500 text-4xl mb-3"></i>
                            <h3 className="text-900 text-xl font-medium mb-2">Cinematography</h3>
                            <p className="text-600 line-height-3">Highlight reels and 4K storytelling to complement your still photography.</p>
                        </div>
                    </div>
                </div>

                {/* --- FOOTER --- */}
                <div className="py-6 px-4 lg:px-8 bg-gray-900 text-gray-300">
                    <div className="flex flex-column md:flex-row justify-content-between align-items-center">
                        <span className="text-2xl font-bold text-white mb-4 md:mb-0">LENS & LIGHT</span>
                        <div className="flex gap-4">
                            <i className="pi pi-instagram cursor-pointer hover:text-white transition-colors"></i>
                            <i className="pi pi-twitter cursor-pointer hover:text-white transition-colors"></i>
                            <i className="pi pi-facebook cursor-pointer hover:text-white transition-colors"></i>
                        </div>
                    </div>
                    <div className="border-top-1 border-gray-800 mt-5 pt-5 text-center text-sm">
                        &copy; 2026 Lens & Light Studios. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoLandingPage;
