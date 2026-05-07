import React, { useState } from 'react';
import './SocialLinks.css';

function SocialLinks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="social-links">
            <ul>
                <li>
                    <a href="https://github.com/lhapollo" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lexi-han-754648288" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-lines"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialLinks;