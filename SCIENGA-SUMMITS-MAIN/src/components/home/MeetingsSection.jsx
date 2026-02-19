import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import meetingLiutex from '../../assets/images/meetings/liutexvortex.jpg'
import meeting12 from '../../assets/images/meetings/12.jpg'
import meeting13 from '../../assets/images/meetings/13.jpg'

const meetingsData = {
    2026: [
        {
            id: 1,
            title: "POLYMATSUMMIT2026",
            description: "Global Summit on Polymers and Composite Materials",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
            link: "https://polymatsummit2026.sciengasummits.com/"
        },
        {
            id: 2,
            title: "ADVANCENANOSUMMIT2026",
            description: "Global Summit on Advanced Materials and Nanotechnology",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
            link: "https://advancenanosummit2026.sciengasummits.com/"
        },
        {
            id: 3,
            title: "OPTICPHOTONSUMMIT2026",
            description: "Global Summit on Optics, Photonics and Laser Technology",
            location: "AMSTERDAM, NETHERLANDS",
            date: "NOVEMBER 16-18, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
            link: "https://opticphotonsummit2026.sciengasummits.com/"
        },
        {
            id: 4,
            title: "CROPSCIENGSUMMIT2026",
            description: "Global Summit on Crop Science and Engineering",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80",
            link: "https://cropsciengsummit2026.sciengasummits.com/"
        },
        {
            id: 5,
            title: "CIVILENVSUMMIT2026",
            description: "Global Summit on Civil Structural and Environmental Science",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
            link: "https://civilenvsummit2026.sciengasummits.com/"
        },
        {
            id: 6,
            title: "FOODAGRISUMMIT2026",
            description: "Global Summit on Food Science Technology and Agriclulture",
            location: "MARINA BAY, SINGAPORE",
            date: "DECEMBER 07-09, 2026",
            year: "2026",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
            link: "https://foodagrisummit2026.sciengasummits.com/"
        }
    ],
    2027: [
        {
            id: 7,
            title: "RENECLIMSUMMIT2026",
            description: "Global Summit on Renewable Energy and Climate Change",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
            link: "https://renewableclisummit2026.sciengasummits.com/"
        },
        {
            id: 8,
            title: "POWERENGSUMMIT2026",
            description: "Global Summit on Power Energy and Electrical Engineering",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
            link: "https://powerengsummit2026.sciengasummits.com/"
        },
        {
            id: 9,
            title: "CLEANENGTECHSUMMIT2026",
            description: "Global Summit on Clean Energy and Sustainable Technologies",
            location: "MUNICH, GERMANY",
            date: "MARCH 23-25, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
            link: "https://cleanengtechsummit2026.sciengasummits.com/"
        },
        {
            id: 10,
            title: "ASTROSPACESUMMIT2026",
            description: "Global Summit on Astronomy, Astrophysics and Space Science",
            location: "TOKYO, JAPAN",
            date: "APRIL 12-14, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            link: "https://astrospacesummit2026.sciengasummits.com/"
        },
        {
            id: 11,
            title: "LIUTEX2026",
            description: "Global Summit on Liutex and Vortex Identification",
            location: "CANADA",
            date: "APRIL 12-14, 2027",
            year: "2027",
            image: meetingLiutex,
            link: "https://liutex2026.sciengasummits.com/"
        },
        {
            id: 13,
            title: "AIROBOTMLSUMMIT2026",
            description: "Global Summit on AI, Robotics, and Machine Learning",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            year: "2027",
            image: meeting12,
            link: "https://airobotmlsummit2026.sciengasummits.com/"
        },
        {
            id: 14,
            title: "CONDENSEDPHYSSUMMIT2026",
            description: "Global Summit on Condensed Matter & Applied Physics",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
            link: "https://condensedphyssummit2026.sciengasummits.com/"
        },
        {
            id: 15,
            title: "CYBERQUANTUMSUMMIT2026",
            description: "Global Summit on Cybersecurity and Quantum Computing",
            location: "SEOUL, SOUTH KOREA",
            date: "MAY 10-12, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
            link: "https://cyberquantumsummit2026.sciengasummits.com/"
        },
        {
            id: 16,
            title: "HEALTHMEDSUMMIT2026/GLOHEALTHSUMMIT2026",
            description: "Global Summit on Public Health and Preventive Medicine",
            location: "LONDON, UK",
            date: "JUNE 07-09, 2027",
            year: "2027",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            link: "https://healthmedsummit2026.sciengasummits.com/"
        }
    ],
    2028: [
        {
            id: 12,
            title: "FLUIDTURBOSUMMIT2026",
            description: "Global Summit on Fluid Mechanics and Turbomachinery",
            location: "TOKYO, JAPAN",
            date: "APRIL 12-14, 2028",
            year: "2028",
            image: meeting13,
            link: "https://fluidturbosummit2026.sciengasummits.com/"
        }
    ]
}

export default function MeetingsSection() {
    const primaryColor = 'var(--primary)'
    const allMeetings = Object.values(meetingsData).flat();

    return (
        <section id="meetings" style={{ padding: '6rem 0', backgroundColor: '#f8fafc' }}>
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}>
                        Upcoming <span style={{ color: primaryColor }}>Conferences</span>
                    </h2>
                    <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Join leading experts and researchers at our premier international conferences.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="meetings-grid">
                    {allMeetings.map((meeting) => (
                        <div key={meeting.id}
                            className="meeting-card"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            {/* Card Image */}
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={meeting.image}
                                    alt={meeting.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {meeting.date}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                {/* Location */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem', color: primaryColor, fontSize: '0.85rem', fontWeight: '600' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {meeting.location}
                                </div>

                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.3'
                                }}>
                                    {meeting.title}
                                </h3>

                                <p style={{
                                    color: '#64748b',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem',
                                    flexGrow: 1
                                }}>
                                    {meeting.description.length > 80 ? meeting.description.substring(0, 80) + '...' : meeting.description}
                                </p>

                                {(() => {
                                    const Tag = meeting.link ? 'a' : Link;
                                    const linkProps = meeting.link
                                        ? { href: meeting.link, target: "_blank", rel: "noopener noreferrer" }
                                        : { to: "#" };

                                    return (
                                        <Tag {...linkProps} style={{
                                            alignSelf: 'start',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            backgroundColor: primaryColor,
                                            color: 'white',
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                            textDecoration: 'none',
                                            padding: '12px 24px',
                                            borderRadius: '50px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                                                e.currentTarget.style.filter = 'brightness(110%)';
                                                e.currentTarget.querySelector('span').style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                                e.currentTarget.style.filter = 'brightness(100%)';
                                                e.currentTarget.querySelector('span').style.transform = 'translateX(0)';
                                            }}
                                        >
                                            Know More <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}>→</span>
                                        </Tag>
                                    );
                                })()}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
