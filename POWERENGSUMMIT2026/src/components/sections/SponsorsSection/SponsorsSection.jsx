import React from 'react';
import './SponsorsSection.css';

// Import all 16 media partner images
import media1 from '../../../assets/images/media/486-Mediapartner-Photo.png';
import media2 from '../../../assets/images/media/487-Mediapartner-Photo.png';
import media3 from '../../../assets/images/media/488-Mediapartner-Photo.jpg';
import media4 from '../../../assets/images/media/489-Mediapartner-Photo.webp';
import media5 from '../../../assets/images/media/498-Mediapartner-Photo.png';
import media6 from '../../../assets/images/media/506-Mediapartner-Photo.png';
import media7 from '../../../assets/images/media/507-Mediapartner-Photo.png';
import media8 from '../../../assets/images/media/513-Mediapartner-Photo.png';
import media9 from '../../../assets/images/media/525-Mediapartner-Photo.png';
import media10 from '../../../assets/images/media/529-Mediapartner-Photo.png';
import media11 from '../../../assets/images/media/530-Mediapartner-Photo.png';
import media12 from '../../../assets/images/media/531-Mediapartner-Photo.png';
import media13 from '../../../assets/images/media/532-Mediapartner-Photo.png';
import media14 from '../../../assets/images/media/536-Mediapartner-Photo.png';
import media15 from '../../../assets/images/media/538-Mediapartner-Photo.png';
import media16 from '../../../assets/images/media/540-Mediapartner-Photo.png';

const mediaPartners = [
    { id: 1, name: 'Media Partner 1', logo: media1 },
    { id: 2, name: 'Media Partner 2', logo: media2 },
    { id: 3, name: 'Media Partner 3', logo: media3 },
    { id: 4, name: 'Media Partner 4', logo: media4 },
    { id: 5, name: 'Media Partner 5', logo: media5 },
    { id: 6, name: 'Media Partner 6', logo: media6 },
    { id: 7, name: 'Media Partner 7', logo: media7 },
    { id: 8, name: 'Media Partner 8', logo: media8 },
    { id: 9, name: 'Media Partner 9', logo: media9 },
    { id: 10, name: 'Media Partner 10', logo: media10 },
    { id: 11, name: 'Media Partner 11', logo: media11 },
    { id: 12, name: 'Media Partner 12', logo: media12 },
    { id: 13, name: 'Media Partner 13', logo: media13 },
    { id: 14, name: 'Media Partner 14', logo: media14 },
    { id: 15, name: 'Media Partner 15', logo: media15 },
    { id: 16, name: 'Media Partner 16', logo: media16 },
];

const row1Items = mediaPartners.slice(0, 8);
const row2Items = mediaPartners.slice(8, 16);

const MarqueeRow = ({ items, direction }) => {
    return (
        <div className={`marquee-row marquee-${direction}`}>
            <div className="marquee-row__strip">
                {items.map((item) => (
                    <div className="marquee-item" key={item.id}>
                        <img src={item.logo} alt={item.name} />
                    </div>
                ))}
            </div>
            <div className="marquee-row__strip">
                {items.map((item) => (
                    <div className="marquee-item" key={`dup-${item.id}`}>
                        <img src={item.logo} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const SponsorsSection = () => {
    return (
        <section className="sponsors" id="sponsors">
            <div className="container">
                <div className="sponsors__header">
                    <h2 className="sponsors__title">Promoting & Media Partners</h2>
                    <div className="sponsors__underline"></div>
                </div>

                <div className="marquee-wrapper">
                    <MarqueeRow items={row1Items} direction="scroll-left" />
                    <MarqueeRow items={row2Items} direction="scroll-right" />
                </div>

                <div className="sponsors__footer">
                    <p>
                        Interested in becoming a partner?{' '}
                        <a href="#contact" className="sponsors__contact-link">Contact Us</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
