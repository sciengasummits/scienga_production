
import React from 'react';
import { Atom } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link to={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-icon-container">
                <Atom size={32} strokeWidth={2} className="logo-icon-primary" />
            </div>
            <div className="logo-text-container">
                <span className="logo-text-main">CONDPHYSUMMIT2026</span>
            </div>
        </Link>
    );
};

export default Logo;
