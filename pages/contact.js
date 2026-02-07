import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TabMenu } from 'primereact/tabmenu';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';
import { motion } from 'framer-motion';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const router = useRouter();
    const form = useRef();
    const [activeIndex, setActiveIndex] = useState(3);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' or 'error'

    const items = [
        { label: 'HOME', template: (item) => <Link href="/" className="p-menuitem-link">{item.label}</Link> },
        { label: 'ABOUT', template: (item) => <Link href="/about" className="p-menuitem-link">{item.label}</Link> },
        { label: 'SERVICES', template: (item) => <Link href="/services" className="p-menuitem-link">{item.label}</Link> },
        { label: 'CONTACT', template: (item) => <Link href="/contact" className="p-menuitem-link">{item.label}</Link> }
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'service_qramexq';
        const TEMPLATE_ID = 'template_l42rutl';
        const PUBLIC_KEY = 'YcfxWU6gVWUs9BcH7';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                form.current.reset();
            }, (error) => {
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setStatus(null), 5000); // Clear message after 5s
            });
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#1a1a1a', fontFamily: "'Montserrat', sans-serif" }}>
            <Head>
                <title>CONTACT | JANAVI SONI</title>
                <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400;1,700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>

            <header className="pt-8 pb-4 text-center sticky top-0 z-5 bg-white-alpha-90 backdrop-blur-md">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-7xl md:text-8xl m-0 cursor-pointer" 
                        style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic', fontWeight: 400 }}
                        onClick={() => router.push('/')}>
                        Janavi Soni
                    </h1>
                    <p style={{ letterSpacing: '0.8em', fontSize: '0.65rem', textIndent: '0.8em' }} className="mt-2 opacity-50 uppercase font-bold text-center">
                        Photography
                    </p>
                </motion.div>
                <div className="mt-6 flex justify-content-center">
                    <TabMenu model={items} activeIndex={activeIndex} className="noir-menu" />
                </div>
                <div className="max-w-screen-md mx-auto px-6"><Divider /></div>
            </header>

            <main className="max-w-screen-sm mx-auto px-6 py-8 md:py-12">
                <section className="text-center mb-8">
                    <span style={{ letterSpacing: '0.8em', fontSize: '0.65rem' }} className="opacity-40 uppercase font-light">Connectivity</span>
                    <h2 className="text-6xl mt-3" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Let's Create.</h2>
                </section>

                {status === 'success' && <Message severity="success" text="Message sent beautifully. I'll be in touch soon." className="w-full mb-4" />}
                {status === 'error' && <Message severity="error" text="Something went wrong. Please try again or email directly." className="w-full mb-4" />}

                <form ref={form} onSubmit={sendEmail}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-column gap-6 mt-8"
                    >
                        <div className="p-float-label">
                            <InputText id="user_name" name="user_name" required className="w-full noir-input-light" />
                            <label htmlFor="user_name">FULL NAME</label>
                        </div>

                        <div className="p-float-label">
                            <InputText id="user_email" name="user_email" type="email" required className="w-full noir-input-light" />
                            <label htmlFor="user_email">EMAIL ADDRESS</label>
                        </div>

                        <div className="p-float-label">
                            <InputText id="subject" name="subject" className="w-full noir-input-light" />
                            <label htmlFor="subject">INTEREST (E.G. MATERNITY, BUSINESS)</label>
                        </div>

                        <div className="p-float-label">
                            <InputTextarea id="message" name="message" required rows={5} className="w-full noir-input-light" autoResize />
                            <label htmlFor="message">TELL ME ABOUT YOUR VISION</label>
                        </div>

                        <Button 
                            type="submit"
                            label={loading ? "SENDING..." : "SEND INQUIRY"} 
                            loading={loading}
                            className="p-4 bg-black-alpha-90 text-white border-none hover:bg-black-alpha-70 transition-all font-bold tracking-widest text-xs mt-4" 
                        />
                    </motion.div>
                </form>

                <div className="mt-8 pt-8 border-top-1 border-gray-100 grid text-center">
                    <div className="col-12 md:col-6">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">Location</h4>
                        <p className="m-0 font-light text-sm">High Point, North Carolina</p>
                    </div>
                    <div className="col-12 md:col-6 mt-4 md:mt-0">
                        <h4 className="text-xs uppercase tracking-widest opacity-40 mb-2">Direct</h4>
                        <p className="m-0 font-light text-sm underline">studio@janavisoni.com</p>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center opacity-40 text-xs tracking-widest">
                &copy; 2026 JANAVI SONI STUDIO
            </footer>

            <style jsx global>{`
                .noir-menu.p-tabmenu .p-tabmenu-nav { background: transparent; border: none; justify-content: center; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link { background: transparent !important; border: none; color: #1a1a1a; font-size: 0.7rem; letter-spacing: 0.25em; text-decoration: none; }
                .noir-menu.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link { border-bottom: 1px solid #1a1a1a; font-weight: 600; }
                .p-tabmenu-ink-bar { display: none !important; }
                .noir-input-light { background: transparent; border: none; border-bottom: 1px solid #ddd; border-radius: 0; padding: 1.2rem 0; font-family: 'Montserrat', sans-serif; font-weight: 300; }
                .noir-input-light:focus { border-color: #1a1a1a; box-shadow: none; outline: none; }
                .p-float-label label { left: 0px !important; font-size: 0.65rem; letter-spacing: 0.2em; opacity: 0.5; font-weight: 600; }
                .p-message.p-message-success { background: #f8fcf8; border: none; color: #2e7d32; font-size: 0.8rem; border-radius: 0; }
            `}</style>
        </div>
    );
}