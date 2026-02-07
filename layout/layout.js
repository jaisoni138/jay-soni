import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEventListener, useMountEffect, useUnmountEffect } from 'primereact/hooks';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { LayoutContext } from './context/layoutcontext';
import PrimeReact from 'primereact/api';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Layout = (props) => {
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    // Track scroll to toggle header background (Noir Aesthetic)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useMountEffect(() => {
        PrimeReact.ripple = true;
    });

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about' },
        { label: 'SERVICES', path: '/services' },
        { label: 'CONTACT', path: '/contact' }
    ];

    const containerClass = classNames('layout-wrapper', {
        'p-ripple-disabled': !layoutConfig.ripple
    });

    return (
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <title>JANAVI SONI | Visual Artist & Photographer</title>
                <meta name="description" content="Editorial and portrait photography by Janavi Soni. Capturing timeless moments with a minimalist, high-contrast aesthetic." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                
                {/* OG Tags for Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="JANAVI SONI | Photography" />
                <meta property="og:url" content="https://janavisoni.com" />
                <meta property="og:description" content="Minimalist and Editorial Photography based in North Carolina." />
                <meta property="og:image" content="/images/og-share.jpg" />
                
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <div className={containerClass} style={{ backgroundColor: '#ffffff' }}>
                
                {/* --- CUSTOM MINIMALIST NAVIGATION --- */}
                <nav className={`fixed top-0 left-0 w-full z-5 transition-all duration-500 ${scrolled ? 'bg-white py-3 shadow-1' : 'bg-transparent py-5'}`}>
                    <div className="flex align-items-center justify-content-between px-6 md:px-8">
                        
                        {/* LOGO */}
                        <div className="cursor-pointer flex align-items-center" onClick={() => router.push('/')}>
                            <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: '1.8rem', color: '#1a1a1a' }}>J.</span>
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.75rem', letterSpacing: '0.4em', marginLeft: '0.6rem', marginTop: '0.4rem', color: '#1a1a1a' }}>SONI</span>
                        </div>

                        {/* NAV LINKS */}
                        <div className="hidden md:flex gap-6">
                            {navItems.map((item) => (
                                <Link key={item.label} href={item.path} style={{ textDecoration: 'none' }}>
                                    <span className={`text-xs font-bold tracking-widest cursor-pointer transition-all duration-300 ${router.pathname === item.path ? 'opacity-100 border-bottom-1 border-black-alpha-90' : 'opacity-40 hover:opacity-100'}`} style={{ color: '#1a1a1a' }}>
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* RIGHT BALANCE (Social/CTA Placeholder) */}
                        <div className="hidden md:block">
                             <span className="text-xs opacity-40 uppercase tracking-widest font-bold">Studio 2026</span>
                        </div>
                    </div>
                </nav>

                {/* --- MAIN CONTENT AREA --- */}
                {/* Removed margins and added min-height to allow hero images to be truly full-screen */}
                <div className="layout-main-container" style={{ marginLeft: '0', padding: '0' }}>
                    <div className="layout-main">
                        {props.children}
                    </div>
                </div>

                {/* --- GLOBAL FOOTER --- */}
                <footer className="py-8 text-center bg-white border-top-1 border-gray-100">
                    <p className="opacity-40 text-xs tracking-widest m-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        &copy; 2026 JANAVI SONI STUDIO | HIGH POINT, NC
                    </p>
                </footer>

                {/* Mask for mobile interactions if you decide to add a sidebar later */}
                <div className="layout-mask"></div>
            </div>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                }
                .blocked-scroll {
                    overflow: hidden;
                }
            `}</style>
        </React.Fragment>
    );
};

export default Layout;