import React, { useState, useEffect } from 'react';
import { Calendar, CalendarCheck, MapPin, Mic, Users, Building2, Globe, Newspaper } from 'lucide-react';
import './StatsSection.css';
import * as siteApi from '../../../api/siteApi';

const ICON_MAP = { Calendar, CalendarCheck, MapPin, Mic, Users, Building2, Globe, Newspaper };

const DEFAULT_STATS = [
    { icon: 'Calendar', number: '15+', label: 'Years Experience' },
    { icon: 'CalendarCheck', number: '100+', label: 'Annual Events' },
    { icon: 'MapPin', number: '200+', label: 'Onsite Approach' },
    { icon: 'Mic', number: '2000+', label: 'Speakers' },
    { icon: 'Users', number: '5000+', label: 'Attendees' },
    { icon: 'Building2', number: '20+', label: 'Exhibitors' },
    { icon: 'Globe', number: '150+', label: 'Countries' },
    { icon: 'Newspaper', number: '2000+', label: 'Publications' },
];
const ICON_LIST = ['Calendar', 'CalendarCheck', 'MapPin', 'Mic', 'Users', 'Building2', 'Globe', 'Newspaper'];

const StatsSection = () => {
    const [title, setTitle] = useState('SCIENGA SUMMITS CONFERENCES APPROACH');
    const [stats, setStats] = useState(DEFAULT_STATS);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await siteApi.fetchContent('stats');
                if (res && !res.error) {
                    if (res.title) setTitle(res.title);
                    if (res.items?.length) {
                        setStats(res.items.map((item, i) => ({
                            ...item,
                            icon: item.icon || ICON_LIST[i % ICON_LIST.length],
                        })));
                    }
                }
            } catch { /* use defaults */ }
        };
        load();
        const poll = setInterval(load, 60000);
        const onVisible = () => { if (!document.hidden) load(); };
        document.addEventListener('visibilitychange', onVisible);
        return () => { clearInterval(poll); document.removeEventListener('visibilitychange', onVisible); };
    }, []);

    return (
        <section className="stats-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title" style={{ marginBottom: '3rem', color: 'var(--color-text-header)' }}>{title}</h2>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, i) => {
                        const IconComp = ICON_MAP[stat.icon] || Calendar;
                        return (
                            <div key={i} className="stats-card">
                                <div className="stats-icon"><IconComp size={32} /></div>
                                <div className="stats-number">{stat.number}</div>
                                <div className="stats-label">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
