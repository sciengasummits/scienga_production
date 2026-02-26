import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import mediaImage from '../../assets/images/Media.jpg';
import './Layout.css';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <div className="global-media-badge">
                <img src={mediaImage} alt="Media Partner" />
            </div>
        </div>
    );
};

export default Layout;
