import React from 'react';
import './MediaBadge.css';
import mediaImage from '../../../assets/images/Media.jpg';

const MediaBadge = () => {
    return (
        <div className="media-badge-container">
            <img src={mediaImage} alt="Media Partner" className="media-badge" />
        </div>
    );
};

export default MediaBadge;
