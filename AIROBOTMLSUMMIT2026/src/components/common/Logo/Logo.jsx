
import React from 'react';
import { Bot, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ className = '', linkTo = '/', onClick }) => {
    return (
        <Link to={linkTo} className={`app-logo ${className}`} onClick={onClick}>
            <div className="logo-icon-container">
                <Bot size={32} strokeWidth={2} className="logo-icon-primary" />
                <div className="logo-icon-accent-wrapper">
                    <div className="logo-icon-accent">
                        <Brain size={14} className="brain-accent" />
                    </div>
                </div>
            </div>
            <div className="logo-text-container">
                <span className="logo-text-main">AIROBOTMLSUMMIT2026</span>
            </div>
        </Link>
    );
};

export default Logo;
