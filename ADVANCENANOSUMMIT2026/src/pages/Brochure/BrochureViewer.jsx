import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, CheckCircle, Globe, Mail, Phone, MapPin, Award, Users, BookOpen, Star } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './BrochureViewer.css';

// Importing the generated cover (simulated as the path we know)
const brochureCover = "/src/assets/images/nanotech.jpg"; // Using existing image as placeholder for cover

const BrochureViewer = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Conference Overview",
            icon: <Star size={24} className="section-icon-main" />,
            content: "The Annual International Conference on Advanced Materials & Nanotechnology 2026 is a premier global platform dedicated to advancing the understanding of cutting-edge materials science. This year's summit in Amsterdam brings together world-renowned researchers to explore innovations that are shaping our future."
        },
        {
            title: "Why Attend ANNS 2026?",
            icon: <Award size={24} className="section-icon-main" />,
            items: [
                "Learn from 50+ Global Keynote Speakers",
                "Present your latest research to a specialized audience",
                "Engage in high-impact workshops and panel discussions",
                "Explore cutting-edge nanotech products in our exhibition hall",
                "Connect with leading industry partners and academic pioneers",
                "Abstracts published in prestigious conference journals"
            ]
        },
        {
            title: "Scientific Sessions",
            icon: <BookOpen size={24} className="section-icon-main" />,
            items: [
                "Nanomaterials Synthesis & Characterization",
                "Advanced Energy Storage & Battery Materials",
                "Carbon Nanostructures & Graphene Research",
                "Nanoelectronics, Nanosensors & Memristors",
                "Biomaterials & Regenerative Tissue Engineering",
                "Quantum Nanotechnology & Molecular Electronics",
                "Green Nanotechnology & Environmental Safety",
                "3D Printing & Advanced Nanomanufacturing"
            ]
        },
        {
            title: "Who Should Join?",
            icon: <Users size={24} className="section-icon-main" />,
            content: "This summit is designed for material scientists, nanotechnologists, chemists, physicists, engineers, industry researchers, policy makers, and students interested in the latest breakthroughs in advanced materials."
        }
    ];

    return (
        <div className="brochure-viewer">
            <div className="brochure-viewer__toolbar">
                <button className="back-btn" onClick={() => navigate('/brochure')}>
                    <ArrowLeft size={20} /> Back to Page
                </button>
                <div className="brochure-viewer__title">
                    Official Brochure: Advanced Materials & Nanotechnology 2026
                </div>
                <Button onClick={() => window.print()} size="small" variant="primary" className="print-btn-viewer">
                    <Download size={16} /> Save as PDF
                </Button>
            </div>

            <div className="digital-brochure-content container">
                <div className="brochure-page-mockup">
                    <div className="brochure-cover" style={{ backgroundImage: `url(${brochureCover})` }}>
                        <div className="cover-overlay">
                            <div className="brochure-logo">ANNS 2026</div>
                            <h1>ANNUAL INTERNATIONAL <br /> CONFERENCE ON <br /> <span>ADVANCED MATERIALS & <br /> NANOTECHNOLOGY</span></h1>
                            <div className="brochure-meta-main">
                                <div className="meta-info-item">
                                    <MapPin size={22} color="#4facfe" />
                                    <span>Amsterdam, Netherlands</span>
                                </div>
                                <div className="meta-info-item">
                                    <Globe size={22} color="#4facfe" />
                                    <span>Nov 16-18, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="brochure-body-v2">
                        {sections.map((section, idx) => (
                            <div className="brochure-section-v2" key={idx}>
                                <div className="section-header-v2">
                                    {section.icon}
                                    <h2>{section.title}</h2>
                                </div>
                                {section.content && <p className="section-p">{section.content}</p>}
                                {section.items && (
                                    <ul className="brochure-list-v2">
                                        {section.items.map((item, i) => (
                                            <li key={i}>
                                                <CheckCircle size={18} className="check-icon-v2" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="brochure-footer-v2">
                        <div className="footer-top-v2">
                            <div className="contact-info-v2">
                                <h3>Contact Secretariat</h3>
                                <div className="ci-item"><Mail size={16} /> contact@advancematerialssummit.com</div>
                                <div className="ci-item"><Phone size={16} /> +91 7842090097</div>
                            </div>
                            <div className="venue-info-v2">
                                <h3>Venue Location</h3>
                                <p>Amsterdam Conference Center</p>
                                <p>Amsterdam, Netherlands</p>
                            </div>
                        </div>
                        <div className="footer-bottom-v2">
                            <p>&copy; 2026 Scienga Summits. All rights reserved. | www.advancematerialssummit.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="viewer-cta container text-center">
                <div className="cta-box-viewer">
                    <h3>Ready to Join the Frontier of Science?</h3>
                    <p>Registration is currently open for speakers and delegates.</p>
                    <Link to="/register" className="btn-register-v2">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrochureViewer;
