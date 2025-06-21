import React, { useState, useEffect } from 'react';

function Modal({ isOpen, onClose, title, description, tech }) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300); // Match this with CSS animation duration
    };

    const getTechIcon = (techName) => {
        const icons = {
            'HTML': 'fab fa-html5',
            'CSS': 'fab fa-css3-alt',
            'JavaScript': 'fab fa-js',
            'React': 'fab fa-react',
            // Add more mappings as needed
        };
        return icons[techName] || 'fas fa-code'; // Default to a generic code icon
    };

    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isClosing ? 'modal-closing' : ''}`} onClick={handleClose}>
            <div className={`modal-content ${isClosing ? 'modal-content-closing' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={handleClose}>×</button>
                </div>
                <div className="modal-body">
                    <p>{description}</p>
                    {tech && tech.length > 0 && (
                        <div className="modal-tech">
                            <h3>Technologies Used:</h3>
                            <div className="tech-icons">
                                {tech.map((item, index) => (
                                    <div key={index} className="tech-icon">
                                        <i className={getTechIcon(item)}></i>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal; 