import React from 'react';
import './SponsorsSection.css';

const sponsors = [
    {
        id: 1,
        name: 'EcoTech Solutions',
        type: 'Platinum Sponsor',
        description: 'Leading provider of renewable energy solutions',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 2,
        name: 'Global Solar Corp',
        type: 'Gold Sponsor',
        description: 'International solar tracking and panel manufacturing',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 3,
        name: 'WindPower Systems Ltd',
        type: 'Silver Sponsor',
        description: 'Wind turbine technology and maintenance',
        image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80',
        category: 'sponsor'
    },
    {
        id: 5,
        name: 'World Energy Council',
        type: 'Strategic Partner',
        description: 'Global energy leadership organization',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        category: 'partner'
    },
    {
        id: 6,
        name: 'Sustainable Education Alliance',
        type: 'Academic Partner',
        description: 'Advancing sustainability education worldwide',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
        category: 'partner'
    },
    {
        id: 7,
        name: 'Green Energy Research Net',
        type: 'Research Partner',
        description: 'Collaborative renewable research network',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
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
