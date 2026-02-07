import React from 'react';
import { useRouter } from 'next/router';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import { motion } from 'framer-motion';

export default function JanaviSoniHome() {
    const router = useRouter();

    const portfolio = [
        { id: '01', title: 'Product', category: 'Commercial', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?auto=format&w=800' },
        { id: '02', title: 'Editorial', category: 'Fashion', src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&w=800' },
        { id: '03', title: 'Business Portraits', category: 'Professional', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800' },
        { id: '04', title: 'Maternity', category: 'Editorial Life', src: 'https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?w=800&auto=format&fit=crop' },
        { id: '05', title: 'New Born', category: 'Minimalist Life', src: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?w=800&auto=format&fit=crop' },
        { id: '06', title: 'Archive', category: 'Personal', src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?auto=format&w=800' }
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}>
            
            <main>
                {/* --- HERO SECTION --- */}
                {/* This now sits directly under the transparent nav from Layout.js */}
                <section className="relative h-screen overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.5 }}
                        className="h-full w-full"
                    >
                        <img 
                            src="/images/Newborn-Baby-HD-Background-Wallpaper-55635.jpg" 
                            alt="Hero" 
                            className="w-full h-full object-cover grayscale"
                            style={{ filter: 'contrast(1.05) brightness(0.95)' }} 
                        />
                        {/* Overlay to ensure the global nav logo is readable if image is light */}
                        <div className="absolute top-0 left-0 w-full h-15rem bg-gradient-to-b from-black-alpha-20 to-transparent"></div>
                        
                        {/* Bottom blend to the white content */}
                        <div className="absolute bottom-0 left-0 w-full h-20rem bg-gradient-to-t from-white to-transparent"></div>
                    </motion.div>
                </section>

                <div className="px-4 md:px-8 relative z-2 bg-white">
                    {/* --- PORTFOLIO --- */}
                    <section id="work" className="py-8 max-w-screen-xl mx-auto">
                        <div className="text-center mb-8">
                            <span className="text-xs tracking-widest opacity-40 uppercase">Selected Works</span>
                        </div>
                        
                        <div className="grid">
                            {portfolio.map((item, index) => (
                                <div key={item.id} className="col-12 md:col-4 p-3">
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative overflow-hidden group border-1 border-gray-100"
                                    >
                                        <Image 
                                            src={item.src} 
                                            alt={item.title} 
                                            width="100%" 
                                            preview
                                            imageClassName="w-full h-30rem object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 cursor-pointer" 
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-4 bg-white-alpha-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <p className="m-0 text-xs tracking-widest opacity-60 uppercase">{item.category}</p>
                                            <h3 className="m-0 text-2xl" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>{item.title}</h3>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* --- CALL TO ACTION --- */}
                    <section className="py-8 text-center">
                       <Divider className="max-w-screen-sm mx-auto mb-8" />
                       <h2 className="text-4xl mb-6" style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: 'italic' }}>Interested in a session?</h2>
                       <button 
                            onClick={() => router.push('/contact')}
                            className="bg-transparent border-1 border-black-alpha-90 py-3 px-8 text-xs tracking-widest uppercase font-bold hover:bg-black-alpha-90 hover:text-white transition-all duration-300 mb-8"
                        >
                            Get in Touch
                        </button>
                    </section>
                </div>
            </main>

            {/* Note: Footer is now handled by Layout.js if you chose to keep it there, 
                otherwise you can keep it here. I've left it out to avoid duplication. */}
        </div>
    );
}