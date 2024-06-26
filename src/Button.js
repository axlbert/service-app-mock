import React, { useState } from 'react';
import './Button.css';

const Button = ({ onStartRecognition }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseDown = () => {
        setIsActive(true);
    };

    const handleMouseUp = () => {
        setIsActive(false);
        onStartRecognition();
    };

    return (
        <button
            className={`mic-button ${isActive ? 'active' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <i className="fas fa-microphone"></i>
        </button>
    );
};

export default Button;
