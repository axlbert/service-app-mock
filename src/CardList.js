import React from 'react';
import './CardList.css';

const CardList = ({ expandedCard, setExpandedCard }) => {
    const items = [
        { id: 1, text: 'WG900', image: 'wg900.png' },
        { id: 2, text: 'SCBELT', image: 'scbelt.png' },
        { id: 3, text: 'GBF', image: 'gbf.png' },
    ];

    const handleCardClick = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <div className="card-list">
            <h2 className="headline">My Machines</h2>
            {items.map(item => (
                <div key={item.id} className={`card ${expandedCard === item.id ? 'expanded' : ''}`} onClick={() => handleCardClick(item.id)}>
                    <img src={`./${item.image}`} alt={item.text} className="card-image" />
                    <div>{item.text}</div>
                    {expandedCard === item.id && (
                        <div className="expanded-content">
                            <button><i className="fas fa-tools"></i> Passende Ersatzteile bestellen</button>
                            <button><i className="fas fa-phone"></i> Service rufen</button>
                            <button><i className="fas fa-video"></i> Community Tutorials</button>
                            <button><i className="fas fa-info-circle"></i> Weitere Infos</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CardList;
