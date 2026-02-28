import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MediaBadge from './MediaBadge/MediaBadge';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <MediaBadge />
        </div>
    );
};

export default Layout;
