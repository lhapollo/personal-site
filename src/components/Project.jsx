import React, { useState } from 'react';
import Modal from './Modal';

function Project({ title, image, githubLink, liveLink, description, tech }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="project-container">
            <h2 className="project-title clickable" onClick={handleClick}>{title}</h2>
            <div className="project-image-container clickable" onClick={handleClick}>
                <img src={image} alt={title} className="project-image" />
            </div>
            <div className="project-link-container">
                <ul>
                    {githubLink && (
                        <li>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    )}
                    {liveLink && (
                        <li>
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                description={description || "No description available."}
                tech={tech}
            />
        </div>
    );
}

export default Project; 