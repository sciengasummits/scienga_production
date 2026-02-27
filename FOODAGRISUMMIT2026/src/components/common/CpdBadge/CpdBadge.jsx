import React from 'react';
import './CpdBadge.css';
import mediaImage from '../../../assets/images/Media.jpg';

const CpdBadge = () => {
    return (
        <div className="cpd-badge-global">
            <img src={mediaImage} alt="Media Partner" />
        </div>
    );
};

export default CpdBadge;
