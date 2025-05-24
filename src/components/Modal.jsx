import React, { useState, useEffect } from 'react';

function Modal({ isOpen, onClose, title, description }) {
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
                </div>
            </div>
        </div>
    );
}

export default Modal; 