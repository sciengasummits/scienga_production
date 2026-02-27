import './PreviousConferenceSection.css';

// Import images that work
import conf2 from '../../../assets/images/conference/WhatsApp Image 2025-10-20 at 4.25.01 PM (1).jpeg';
import conf3 from '../../../assets/images/conference/WhatsApp Image 2025-10-20 at 4.25.01 PM.jpeg';
import conf4 from '../../../assets/images/conference/WhatsApp Image 2025-10-20 at 4.25.02 PM.jpeg';
import conf5 from '../../../assets/images/conference/WhatsApp Image 2025-10-20 at 4.32.41 PM (1).jpeg';
import conf10 from '../../../assets/images/conference/WhatsApp Image 2025-10-21 at 11.21.39 AM.jpeg';

// Only use actual conference images (removed dark audience images)
const conferenceImages = [
    { id: 2, src: conf2, alt: 'Previous Conference 2' },
    { id: 3, src: conf3, alt: 'Previous Conference 3' },
    { id: 4, src: conf4, alt: 'Previous Conference 4' },
    { id: 5, src: conf5, alt: 'Previous Conference 5' },
    { id: 10, src: conf10, alt: 'Previous Conference 10' }
];

const MarqueeRow = ({ items, direction }) => (
    <div className={`conference-marquee-row ${direction}`}>
        {[...items, ...items, ...items].map((image, index) => (
            <div key={`${image.id}-${index}`} className="conference-marquee-item">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="conference-image"
                />
            </div>
        ))}
    </div>
);

const PreviousConferenceSection = () => {
    const row1 = conferenceImages.slice(0, 3);
    const row2 = conferenceImages.slice(2, 5);

    return (
        <section className="previous-conference-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Previous Conference Images</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="conference-marquee-wrapper">
                    <MarqueeRow items={row1} direction="scroll-left" />
                    <MarqueeRow items={row2} direction="scroll-right" />
                </div>
            </div>
        </section>
    );
};

export default PreviousConferenceSection;
