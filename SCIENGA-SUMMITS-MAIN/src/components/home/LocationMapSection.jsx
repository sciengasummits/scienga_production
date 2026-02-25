import React, { useState, useEffect } from 'react'
import meetingLiutex from '../../assets/images/meetings/liutexvortex.jpg'
import meeting1 from '../../assets/images/meetings/1.jpg'
import meeting12 from '../../assets/images/meetings/12.jpg'
import meeting13 from '../../assets/images/meetings/13.jpg'
import meeting14 from '../../assets/images/meetings/14.jpg'
import locationAdvance from '../../assets/images/location/advance.jpg'
import locationAstro from '../../assets/images/location/astro.jpg'
import locationFood from '../../assets/images/location/food.jpg'
import locationLiutex from '../../assets/images/location/liutex.jpg'
import locationOptic from '../../assets/images/location/optic.jpg'
import locationPoly from '../../assets/images/location/poly.jpg'
import locationCivil from '../../assets/images/location/civil.jpg'
import locationPower from '../../assets/images/location/power.jpg'
import locationClean from '../../assets/images/location/clean.jpg'
import locationAirobot from '../../assets/images/location/airobot.jpg'

const venues = [
    { title: "POLYMATSUMMIT2026", location: "Amsterdam, Netherlands", img: meeting1 },
    { title: "ADVANCENANOSUMMIT2026", location: "Amsterdam, Netherlands", img: locationAdvance },
    { title: "OPTICPHOTONSUMMIT2026", location: "Amsterdam, Netherlands", img: locationOptic },
    { title: "CROPSCIENGSUMMIT2026", location: "Marina Bay, Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80" },
    { title: "CIVILENVSUMMIT2026", location: "Marina Bay, Singapore", img: locationCivil },
    { title: "FOODAGRISUMMIT2026", location: "Marina Bay, Singapore", img: locationFood },
    { title: "RENEWABLECLISUMMIT2026", location: "Munich, Germany", img: "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1600&q=80" },
    { title: "POWERENGSUMMIT2026", location: "Munich, Germany", img: locationPower },
    { title: "CLEANENGTECHSUMMIT2026", location: "Munich, Germany", img: locationClean },
    { title: "ASTROSPACESUMMIT2026", location: "Tokyo, Japan", img: locationAstro },
    { title: "LIUTEX2026", location: "Outram, Singapore", img: locationLiutex },
    { title: "AIROBOTMLSUMMIT2026", location: "Seoul, South Korea", img: locationAirobot },
    { title: "FLUIDTURBOSUMMIT2026", location: "Tokyo, Japan", img: meeting14 }
];

export default function LocationMapSection() {
    const [current, setCurrent] = useState(0);

    // Auto right scrolling every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev === venues.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === venues.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? venues.length - 1 : current - 1);

    return (
        <section id="location" style={{ padding: '6rem 0', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Conference <span style={{ color: 'var(--primary)' }}>Venues</span>
                    </h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Explore the vibrant cities hosting our premier international summits.
                    </p>
                </div>

                <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>

                    {/* Sliding Track */}
                    <div style={{
                        display: 'flex',
                        width: `${venues.length * 100}%`,
                        height: '100%',
                        transform: `translateX(-${current * (100 / venues.length)}%)`,
                        transition: 'transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}>
                        {venues.map((venue, index) => (
                            <div key={index} style={{ width: `${100 / venues.length}%`, height: '100%', position: 'relative' }}>
                                <img
                                    src={venue.img}
                                    alt={venue.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                {/* Overlay for text */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
                                    padding: '5rem 2rem 2.5rem 2rem',
                                    color: 'white',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>
                                        {venue.title}
                                    </h3>
                                    <p style={{ fontSize: '1.15rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <svg width="20" height="20" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        {venue.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left Arrow */}
                    <button onClick={prevSlide} style={{
                        position: 'absolute', top: '50%', left: '1.5rem', transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%',
                        width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)', transition: 'all 0.3s'
                    }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                    </button>

                    {/* Right Arrow */}
                    <button onClick={nextSlide} style={{
                        position: 'absolute', top: '50%', right: '1.5rem', transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0,0,0,0.4)', color: 'white', border: 'none', borderRadius: '50%',
                        width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)', transition: 'all 0.3s'
                    }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
                    </button>

                    {/* Dots / Indicators */}
                    <div style={{
                        position: 'absolute', bottom: '1.5rem', left: '0', right: '0',
                        display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10
                    }}>
                        {venues.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                style={{
                                    width: idx === current ? '32px' : '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: idx === current ? 'var(--primary)' : 'rgba(255,255,255,0.6)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = idx === current ? 'var(--primary)' : 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = idx === current ? 'var(--primary)' : 'rgba(255,255,255,0.6)'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
