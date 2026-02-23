import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './VenueSection.css';
import heroImg from '../../../assets/images/Hero.png';

const venues = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1540575861501-7ad05823c93e?w=1920&q=80", // Large Conference Hall
        local: heroImg
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?w=1920&q=80", // European Canal Scene
        local: heroImg
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80", // Modern Conference Forum
        local: heroImg
    },
    {
        id: 4,
        image: heroImg, // Original Group Photo
        local: heroImg
    }
];

const VenueSection = () => {
    const [activeVenue, setActiveVenue] = useState(0);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection('next');
            setActiveVenue((prev) => (prev + 1) % venues.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToVenue = (index) => {
        if (index !== activeVenue) {
            setDirection(index > activeVenue ? 'next' : 'prev');
            setActiveVenue(index);
        }
    };

    const goToPrev = () => {
        setDirection('prev');
        setActiveVenue((prev) => (prev - 1 + venues.length) % venues.length);
    };

    const goToNext = () => {
        setDirection('next');
        setActiveVenue((prev) => (prev + 1) % venues.length);
    };

    return (
        <section className="venue" id="venue" style={{ backgroundColor: '#1e293b' }}>
            <div className="venue__slides">
                {venues.map((venue, index) => (
                    <div
                        key={venue.id}
                        className={`venue__slide ${index === activeVenue ? 'active' : ''} ${index === activeVenue ? direction : ''}`}
                    >
                        <img
                            src={venue.image}
                            alt={`Venue view showing ${venue.id}`}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = venue.local || heroImg;
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                position: 'relative',
                                zIndex: 0
                            }}
                        />
                        <div className="venue__overlay"></div>
                    </div>
                ))}
            </div>

            <div className="venue__controls-bottom">
                <button className="venue__arrow venue__arrow--left" onClick={goToPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className="venue__indicators">
                    {venues.map((_, index) => (
                        <button
                            key={index}
                            className={`venue__indicator ${index === activeVenue ? 'active' : ''}`}
                            onClick={() => goToVenue(index)}
                        />
                    ))}
                </div>

                <button className="venue__arrow venue__arrow--right" onClick={goToNext}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default VenueSection;
