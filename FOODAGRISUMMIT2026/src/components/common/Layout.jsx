import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CpdBadge from './CpdBadge/CpdBadge';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <CpdBadge />
        </div>
    );
};

export default Layout;
