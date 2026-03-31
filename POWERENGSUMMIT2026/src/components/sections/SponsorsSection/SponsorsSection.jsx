import React, { useState, useEffect } from 'react';
import './SponsorsSection.css';
import * as siteApi from '../../../api/siteApi';

// Static fallback media partners
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

const STATIC_PARTNERS = [
    media1, media2, media3, media4, media5, media6, media7, media8,
    media9, media10, media11, media12, media13, media14, media15, media16,
].map((logo, i) => ({ id: i + 1, name: `Media Partner ${i + 1}`, logo }));

const MarqueeRow = ({ items, direction }) => (
    <div className={`marquee-row marquee-${direction}`}>
        <div className="marquee-row__strip">
            {items.map((item) => (
                <div className="marquee-item" key={item.id}>
                    <img src={item.logo || item.image} alt={item.name} />
                </div>
            ))}
        </div>
        <div className="marquee-row__strip">
            {items.map((item) => (
                <div className="marquee-item" key={`dup-${item.id}`}>
                    <img src={item.logo || item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
);

const SponsorsSection = () => {
    const [partners, setPartners] = useState(STATIC_PARTNERS);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchSponsors();
                const list = Array.isArray(res) ? res : (res?.sponsors || res?.data || []);
                if (list.length) {
                    setPartners(list.map((s, i) => ({
                        id: s._id || i + 1,
                        name: s.name || `Partner ${i + 1}`,
                        logo: s.logo || s.image || s.photo,
                    })));
                }
            } catch { /* use static fallback */ }
        };
        load();
    }, []);

    const row1 = partners.slice(0, Math.ceil(partners.length / 2));
    const row2 = partners.slice(Math.ceil(partners.length / 2));

    return (
        <section className="sponsors" id="sponsors">
            <div className="container">
                <div className="sponsors__header">
                    <h2 className="sponsors__title">Promoting & Media Partners</h2>
                    <div className="sponsors__underline"></div>
                </div>
                <div className="marquee-wrapper">
                    <MarqueeRow items={row1} direction="scroll-left" />
                    {row2.length > 0 && <MarqueeRow items={row2} direction="scroll-right" />}
                </div>
                <div className="sponsors__footer">
                    <p>Interested in becoming a partner?{' '}
                        <a href="/contact" className="sponsors__contact-link">Contact Us</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;
