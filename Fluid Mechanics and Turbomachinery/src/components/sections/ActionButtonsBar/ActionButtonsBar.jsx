import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ActionButtonsBar.css';

const ActionButtonsBar = () => {
    const navigate = useNavigate();

    return (
        <div className="action-buttons-bar">
            <div className="container action-buttons-container">
                <button
                    className="action-bar-btn"
                    onClick={() => navigate('/brochure')}
                >
                    DOWNLOAD BROCHURE
                </button>
                <button
                    className="action-bar-btn"
                    onClick={() => navigate('/register')}
                >
                    REGISTER NOW
                </button>
                <button
                    className="action-bar-btn"
                    onClick={() => navigate('/abstract-submission')}
                >
                    SUBMIT ABSTRACT
                </button>
            </div>
        </div>
    );
};

export default ActionButtonsBar;
