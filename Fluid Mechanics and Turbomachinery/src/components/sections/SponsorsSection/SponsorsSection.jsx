import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'FlowDynamics Solutions',
        type: 'Platinum Sponsor',
        description: 'Advanced computational fluid dynamics solutions',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'TurboMachinery Global',
        type: 'Gold Sponsor',
        description: 'High-performance turbine manufacturing',
        image: 'https://images.unsplash.com/photo-1580436541340-29805cb09635?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'AeroPropulsion Systems',
        type: 'Silver Sponsor',
        description: 'Aerospace propulsion and testing services',
        image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'Intl. Fluid Power Society',
        type: 'Strategic Partner',
        description: 'Global fluid power standards organization',
        image: 'https://images.unsplash.com/photo-1544259868-b7ebc9735a29?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'Engineering Education Alliance',
        type: 'Academic Partner',
        description: 'Advancing mechanical engineering education worldwide',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'Turbulence Research Network',
        type: 'Research Partner',
        description: 'Collaborative flow visualization research network',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80',
        category: 'partner'
    },
];

const SponsorsSection = () => {
    const sponsorsList = sponsors.filter(s => s.category === 'sponsor');
    const partnersList = sponsors.filter(s => s.category === 'partner');

    return (
        <section className="sponsors section-padding" id="sponsors">
            <div className="container">

                {/* Sponsors */}
                <div className="sponsors__category">
                    <h3 className="sponsors__category-title">Collaborators</h3>
                    <div className="sponsors__grid">
                        {sponsorsList.map((sponsor) => (
                            <div className="sponsor-card" key={sponsor.id}>
                                <div className="sponsor-card__image">
                                    <img src={sponsor.image} alt={sponsor.name} />
                                </div>
                                <div className="sponsor-card__content">
                                    <span className="sponsor-card__type">{sponsor.type}</span>
                                    <h4 className="sponsor-card__name">{sponsor.name}</h4>
                                    <p className="sponsor-card__desc">{sponsor.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners */}
                <div className="sponsors__category">
                    <h3 className="sponsors__category-title">Partners</h3>
                    <div className="sponsors__grid">
                        {partnersList.map((partner) => (
                            <div className="sponsor-card" key={partner.id}>
                                <div className="sponsor-card__image">
                                    <img src={partner.image} alt={partner.name} />
                                </div>
                                <div className="sponsor-card__content">
                                    <span className="sponsor-card__type">{partner.type}</span>
                                    <h4 className="sponsor-card__name">{partner.name}</h4>
                                    <p className="sponsor-card__desc">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
