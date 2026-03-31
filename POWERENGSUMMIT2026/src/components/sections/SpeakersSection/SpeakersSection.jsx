import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import './SpeakersSection.css';
import * as siteApi from '../../../api/siteApi';

const STATIC_FALLBACK = [];

const SpeakersSection = ({ showViewAll }) => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState(location.state?.category || 'Committee');
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [speakers, setSpeakers] = useState(STATIC_FALLBACK);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchSpeakers();
                const list = Array.isArray(res) ? res : (res?.speakers || res?.data || []);
                if (list.length) setSpeakers(list);
            } catch { /* use static fallback */ }
        };
        load();
    }, []);

    const getDisplayCategory = (category) => {
        if (category === 'Student') return 'Student Speaker';
        return category;
    };

    const filteredSpeakers = speakers.filter(speaker => {
        if (activeCategory === 'Committee') return speaker.category === 'Committee';
        if (activeCategory === 'Speakers') return true;
        if (activeCategory === 'Posters') return speaker.category === 'Poster Presenter';
        if (activeCategory === 'Students') return speaker.category === 'Student Speaker';
        if (activeCategory === 'Delegates') return speaker.category === 'Delegate';
        return true;
    }).slice(0, showViewAll ? 8 : speakers.length);

    const openModal = (speaker) => {
        setSelectedSpeaker(speaker);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedSpeaker(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="speakers section-padding" id="speakers">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-subtitle">Meet The Experts</h4>
                    <h2 className="section-title">Global Participants</h2>
                </div>

                <div className="speakers__filters">
                    {['Committee', 'Speakers', 'Posters', 'Students', 'Delegates'].map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="speakers__grid">
                    {filteredSpeakers.length === 0 ? (
                        <p style={{ textAlign: 'center', width: '100%', color: 'var(--color-text-muted)', padding: '3rem 0' }}>
                            Speakers will be announced soon. Stay tuned!
                        </p>
                    ) : filteredSpeakers.map((speaker) => (
                        <div className="speaker-card" key={speaker._id || speaker.id}>
                            <div className="speaker-img-wrapper">
                                <img src={speaker.image || speaker.photo} alt={speaker.name} className="speaker-img" />
                                <div className="speaker-overlay"></div>
                            </div>
                            <div className="speaker-info">
                                {speaker.category && <span className="speaker-category">{getDisplayCategory(speaker.category)}</span>}
                                <h3 className="speaker-name">{speaker.name}</h3>
                                <p className="speaker-title">{speaker.title || speaker.designation}</p>
                                <p className="speaker-affiliation">{speaker.affiliation || speaker.organization}</p>
                                <button className="btn-biograph" onClick={() => openModal(speaker)}>
                                    <User size={16} /> Biography
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className="text-center mt-5">
                        <Link
                            to="/speakers"
                            state={{ category: activeCategory }}
                            className="btn-biograph"
                            style={{ textDecoration: 'none', display: 'inline-flex', marginTop: '2rem' }}
                        >
                            Show More
                        </Link>
                    </div>
                )}
            </div>

            {selectedSpeaker && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            {selectedSpeaker.category && <p className="modal-category">{getDisplayCategory(selectedSpeaker.category)}</p>}
                            <h3 className="modal-title">{selectedSpeaker.name}</h3>
                            <span className="modal-type">{selectedSpeaker.title || selectedSpeaker.designation}</span>
                            <p className="modal-affiliation-highlight">{selectedSpeaker.affiliation || selectedSpeaker.organization}</p>
                            <p className="modal-desc">
                                {selectedSpeaker.bio || selectedSpeaker.biography ||
                                    'A distinguished expert contributing significantly to the field of Power Energy and Electrical Engineering. With extensive experience in research and industry applications, they have made significant contributions to advancing sustainable energy technologies and electrical systems.'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SpeakersSection;
