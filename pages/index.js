import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Image } from 'primereact/image';
// ... other imports

export default function JanaviSoniOverlay() {
    const op = useRef(null);
    const [selectedWork, setSelectedWork] = useState(null);

    const categories = [
        { 
            name: 'PRODUCT', 
            price: '₹15,000', 
            src: 'https://697e96d7c4feaabd2d12359b.imgix.net/sneakers.jpg?fit=crop&w=800&q=60',
            details: { location: 'Studio 45', gear: 'Sony A7R IV', date: 'Oct 2025' }
        },
        { 
            name: 'EDITORIAL', 
            price: '₹30,000', 
            src: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=60&w=800',
            details: { location: 'South Mumbai', gear: 'Leica Q2', date: 'Jan 2026' }
        },
        { 
            name: 'ARCHIVE', 
            price: '₹25,000', 
            src: 'https://697e96d7c4feaabd2d12359b.imgix.net/scooter.jpg?fit=crop&w=800&q=60',
            details: { location: 'Bandra', gear: 'Fujifilm X100V', date: 'Dec 2025' }
        }
    ];

    const showDetails = (e, item) => {
        setSelectedWork(item);
        op.current.toggle(e);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
            {/* --- OVERLAY PANEL --- */}
            <OverlayPanel ref={op} dismissable style={{ width: '250px' }}>
                {selectedWork && (
                    <div className="flex flex-column gap-3">
                        <div>
                            <span className="details-label">Project</span>
                            <div className="details-value">{selectedWork.name}</div>
                        </div>
                        <div className="border-bottom-1 border-white-alpha-10"></div>
                        <div>
                            <span className="details-label">Location</span>
                            <div className="details-value">{selectedWork.details.location}</div>
                        </div>
                        <div>
                            <span className="details-label">Gear</span>
                            <div className="details-value">{selectedWork.details.gear}</div>
                        </div>
                    </div>
                )}
            </OverlayPanel>

            {/* --- WORK GRID --- */}
            <section id="work" className="py-8 px-4 md:px-8 max-w-screen-xl mx-auto">
                <div className="grid">
                    {categories.map((item, i) => (
                        <div key={i} className="col-12 md:col-4 p-4">
                            <div className="relative group cursor-pointer" onClick={(e) => showDetails(e, item)}>
                                <div className="border-1 border-white-alpha-10 overflow-hidden">
                                    <Image 
                                        src={item.src} 
                                        alt={item.name} 
                                        width="100%" 
                                        imageClassName="w-full h-30rem object-cover block grayscale hover:grayscale-0 transition-all duration-1000" 
                                    />
                                </div>
                                {/* Subtle indicator icon */}
                                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="pi pi-info-circle text-white text-xl"></i>
                                </div>
                                <h3 className="font-serif text-2xl mt-4 text-center text-white">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}