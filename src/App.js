import React, { useState } from 'react';
import Button from './Button';
import CardList from './CardList';
import './App.css';

const App = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const startRecognition = () => {
        console.log('Recognition started');
        // Add your speech recognition logic here
        setExpandedCard(1); // Open the first card item
    };

    return (
        <div className="app-frame">
            <div className="header">
                
            </div>
            <div className="content">
                <CardList expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
            </div>
            <Button onStartRecognition={startRecognition} />
        </div>
    );
};

export default App;
