import React, { useEffect } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'

export default function FAQs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqSections = [
        {
            title: "General",
            items: [
                {
                    q: "What are Scienga Summits?",
                    a: "Scienga Summits aim is to contribute to the worldwide debate and effort on strengthening the knowledge and bridge the gap between academia and industry. The conference brings together hundreds of experts and leaders from across the world to educate, energize and inspire the next generation with the recent advances in the field and their application in varied areas."
                },
                {
                    q: "Where are the conferences held?",
                    a: "The conferences are held annually at different locations worldwide. Visit conference webpage for more information."
                },
                {
                    q: "What is the conferences dresscode?",
                    a: "The standard attire for the Scienga Summits is business casual (slacks, skirts, dress shirts, dresses, etc). As long as you are comfortable, we are happy. Please be sure to avoid attire with any inappropriate language or images."
                },
                {
                    q: "Is lunch provided at the conference?",
                    a: "The registration fee includes the refreshments and lunch at the conference."
                },
                {
                    q: "What if I have a food allergy/intolerance of some sort?",
                    a: "Please make sure to include information about your allergies and/or intolerances when you complete your online registration, so that we can be sure to notify catering about meal needs. We will not be able to honor your requests if they are not included in your registration."
                }
            ]
        },
        {
            title: "Conference Program",
            items: [
                {
                    q: "What time did the conference begin and end?",
                    a: "The Scienga Summits begins at 9.00 am and ends at 6.00 pm. Visit conference webpage for more information."
                },
                {
                    q: "When will be the abstract submission and registration opened for Scienga Summits?",
                    a: "Visit conference webpage to know about the deadlines. In general, the abstract submission will be open within a week of commencing the meeting."
                },
                {
                    q: "How and where do I upload my paper?",
                    a: "Please refer to the guidelines for the abstract submission in the conference website. You can submit the paper online in the conference website or mail us at contact@sciengasummits.org"
                },
                {
                    q: "When will be the conferences program announced?",
                    a: "The Scienga Summits agenda will be announced three months prior to the conference. Please continue to check back on the main webpage of the conference regularly for more information."
                },
                {
                    q: "For whom are these conferences?",
                    a: "The Scienga Summits are designed for the experts in the specified field of the conferences mentioned in the site; whose expertise will make the audience learn to the extremes and for the students who can make a cutting-edge career in the field."
                },
                {
                    q: "I only want to attend one day of the conference, is that possible?",
                    a: "Yes. But you need to register for one day of the conference. The registration fee for one day is $200."
                },
                {
                    q: "Where will be the conferences proceedings published?",
                    a: "The Scienga Summits proceedings will be published in the associated journals contact us for more information."
                },
                {
                    q: "What are the types of sessions?",
                    a: "Keynote Forum: consisting of 2-3 papers from renowned people in the field\nScientific sessions: consisting of 6-8 papers in each session organized around a common theme with comments provided by chair and co-chair\nPoster Sessions: consisting of papers submitted by the research scholars & students in the respective field of interest.\nSpecial Sessions: consists of workshop/symposium organized by a chair along with his team emphasizing the theme of the session\nExhibition: consists of exhibits from research organizations/associations in the field"
                },
                {
                    q: "Are there limits on number of sessions to participate?",
                    a: "Any presenter may give maximum of two oral contributed talks at each meeting. Make sure that both the papers should be in different scientific sessions. All other papers need to be presented in the poster format for which there are 3 posters per conference limit. Visit the conference website for the guidelines."
                },
                {
                    q: "How do I add a workshop to my registration? Are workshops included in conference registration?",
                    a: "There are two types of workshops or special sessions organized at the conference as per the decision of chair of the special session. Mostly there is no registration fee for the special sessions organized at conference. But, if a chair wants to charge separately, you need to register separately; those workshops are not included in conference registration and incur an additional fee. Contact the conference secretariat at contact@sciengasummits.org to know more details."
                },
                {
                    q: "Do you organize any local tours?",
                    a: "Our team makes the best effort in making the conference attendees trip a memorable one. They will be coordinating with the local authorities to provide you the best offers. Visit the conference website to know more details."
                }
            ]
        },
        {
            title: "Registration",
            items: [
                {
                    q: "How to register for the conference?",
                    a: "Registrations for the Scienga Summits are open and you may register for the meeting via Online Registration Form. All conference participants must register by a certain date, or their presentation information will not appear in the printed conference program."
                },
                {
                    q: "How much is general registration?",
                    a: "General registration fee for academic experts is $599. General registration fee for other attendees is $399"
                },
                {
                    q: "Can I get a discount for registering early?",
                    a: "Yes. If you can register before the Early bird deadline you can avail the discount of $100 at all the registration levels. However, this discount is not applicable for students as we charge them minimal registration fee."
                },
                {
                    q: "Can I pay by check or cash?",
                    a: "Our online system only accepts payment via credit card. If you require payment via a check or cash, our experienced staff member will need to register you manually. Please email us for assistance."
                },
                {
                    q: "Are there any group registration opportunities?",
                    a: "Yes. Group registration is available for people of around 6-8 members coming from same organization."
                },
                {
                    q: "Is there a special rate for state/local government employees?",
                    a: "Unfortunately, we do not offer special conference rates for state or local government employees. Standard conference rates apply."
                },
                {
                    q: "May I know the modes of payment of registration fees?",
                    a: "The following are the modes of registration payment:\nOnline: registering via Online Registration Form with your credit card/debit card\nOffline: our staff will process the payment on your behalf\nOn-site registration: pay the cash on the spot. But you need to confirm your participation prior to the conference."
                },
                {
                    q: "What does my registration fee include?",
                    a: "The registration fees for the Scienga Summits include admission to all three days of the conference, including all sessions, access to conference materials, and the cost for all provided meals and refreshments. Your registration also includes membership to the Scienga, allowing you to take advantage of full range of membership benefits. Memberships received as a complimentary feature of conference registration are valid until December 31st of the year in which the conference was held."
                },
                {
                    q: "Can I pay on-site?",
                    a: "Yes. We do allow on-site registrations and payment. You will need to complete a form at the registration area and submit payment in the amount due for your registration."
                },
                {
                    q: "How can I attend the conference without registering as I am not giving any presentation?",
                    a: "We welcome participants who are not presenting work, but registration is required. You can register on-site, or you can register in advance at the early bird registration rate."
                },
                {
                    q: "Can I register for a single day for only my session?",
                    a: "No, unfortunately single-session registration is not permitted for the Scienga Summits. To encourage sufficient audience attendance for all presentations and foster a genuine interdisciplinary intellectual community, the scientific committee insists that all attendees register for the entire conference."
                },
                {
                    q: "Can I transfer my registration to another person?",
                    a: "Yes. In case you are unable to attend the conference after your registration, you will need to contact us with the name of the original attendee and the individual replacing him/her. We may ask that you submit an updated registration form (that you will receive via email) so that we have all of the necessary details of the new attendee."
                },
                {
                    q: "Is there funding available to help with travel/registration costs?",
                    a: "We currently do not have any scholarships available, but please continue to check the conference page in case any opportunities become available."
                },
                {
                    q: "For any instance if I am not able to attend the conference, will I get the refund of my registration fees?",
                    a: "Request for refunds should be made in writing 3 months prior to the meeting. Refunds will be subjected to an administrative charge to be borne by the registrant. Bank charges that occur will also have to be borne by the registrant. Substitution will be accepted with at least 3 weeks notice prior to the conference."
                }
            ]
        },
        {
            title: "Venue & Accommodation",
            items: [
                {
                    q: "Where do Scienga Summits held?",
                    a: "The conferences are held annually at different locations worldwide. Visit conference webpage for more information."
                },
                {
                    q: "How do I get to the hotel?",
                    a: "Visit venue page of the conference for the information."
                },
                {
                    q: "Is there transport service provided?",
                    a: "We will be coordinating with the venue authorities to provide necessary arrangements. However, visit the conference website to know the updates."
                }
            ]
        },
        {
            title: "Sponsors & Exhibits",
            items: [
                {
                    q: "What are the sponsorship opportunity options available?",
                    a: "The following are current sponsorship and exhibitor opportunities available. Should you have additional ideas, please contact us for further discussion.\nPlatinum Sponsor, Diamond Sponsor, Gold Sponsor, Silver Sponsor, Bronze Sponsor, Exhibitor, Luncheons & Cocktails Sponsor, Ad Sponsor, Bag Inserts"
                },
                {
                    q: "When will the exhibit hall be open?",
                    a: "The exhibitor booth hall will be open one day prior to the conference to set up the stalls. Participants make sure to not to keep any important materials other than banners at the stall before the conference. The Scienga Summits management is not responsible for any theft of materials of the organizations."
                },
                {
                    q: "How can I reserve exhibitor space in the exhibit hall?",
                    a: "Any proposals for the exhibitor opportunity can mail us."
                },
                {
                    q: "How can my organization become a sponsor for your conference?",
                    a: "Sponsorship opportunities are limited, so act today. To become a sponsor and for more information, please contact us through mail,"
                },
                {
                    q: "Can I advertise in the conference program?",
                    a: "Yes. Any proposals for advertisement can be mailed to us."
                },
                {
                    q: "How can I receive a list of participants in advance of the conference?",
                    a: "We do not provide the details of list of participants in advance. However, the total list will be mailed within 3 days after the conference."
                }
            ]
        },
        {
            title: "At the Conference",
            items: [
                {
                    q: "Where will I get the information regarding the conferences?",
                    a: "You can contact the organizers available at the Registration Help Desk at the venue."
                },
                {
                    q: "Where can I get the support if I have any issues with my laptop or any modifications in the abstract etc.?",
                    a: "You can reach the organizers anytime if you have any issues at the Registration Help Desk."
                }
            ]
        },
        {
            title: "Travel & Visa",
            items: [
                {
                    q: "I am an overseas participant and need a letter of invitation before I can receive my visa. What is the procedure?",
                    a: "You need to submit your proposal of presentation to the meeting. The committee will select the proposal based on the quality of research. Then you will receive the letter of invitation."
                },
                {
                    q: "What if my VISA got rejected? Will there be refund of the registration fee?",
                    a: "Participants are requested to apply for VISA 3 months prior to the meeting. Request for refunds should be made in writing 3 months prior to the meeting. Refunds will be subjected to an administrative charge to be borne by the registrant. Bank charges that occur will also have to be borne by the registrant. Substitution will be accepted with at least 3 weeks' notice prior to the conference."
                }
            ]
        },
        {
            title: "Other",
            items: [
                {
                    q: "How to contact the organizers regarding the conference details?",
                    a: "Contact the concerned program manager who have mailed to you earlier for any questions."
                },
                {
                    q: "What is the cancellation policy for the conference?",
                    a: "Cancellation of the registration will be done if the participants intimate the organizers 3 months prior to the meeting."
                },
                {
                    q: "My question is not listed here. Whom do I contact?",
                    a: "Any questions can be mailed to conference secretary. Our team will do our best in providing immediate assistance. Feel free to contact us."
                }
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <PageHeader
                title="FAQ's"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'FAQ\'s', link: null }
                ]}
            />
            <div style={{ backgroundColor: '#f9fafb', paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 8vw, 4rem)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', color: '#333' }}>

                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Frequently Asked Questions</h2>
                        <p style={{ color: '#666', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>Find answers to common questions about Scienga Summits.</p>
                    </div>

                    {faqSections.map((section, sIndex) => (
                        <div key={sIndex} style={{ marginBottom: '3rem', backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <h3 style={{
                                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                color: 'var(--primary)',
                                borderBottom: '2px solid #eee',
                                paddingBottom: '0.5rem'
                            }}>
                                {section.title}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {section.items.map((item, iIndex) => (
                                    <div key={iIndex}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>
                                            {iIndex + 1}. {item.q}
                                        </h4>
                                        <p style={{ color: '#555', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', color: '#333' }}>
                            Still have questions? <Link to="/contact" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Contact Us</Link>
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
