import React from 'react';
import { Sprout, Leaf } from 'lucide-react';
import Link from 'next/link';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link href={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-icon-container">
                <Sprout size={28} strokeWidth={2.5} className="logo-icon-primary" />
                <div className="logo-icon-accent-wrapper">
                    <div className="logo-icon-accent">
                        <Leaf size={14} className="logo-icon-secondary" strokeWidth={3} />
                    </div>
                </div>
            </div>
            <div className="logo-text-container">
                <span className="logo-text-main">FOODAGRISUMMIT</span>
            </div>
        </Link>
    );
};

export default Logo;
