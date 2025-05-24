import React from 'react';
import SocialLinks from '../components/SocialLinks';
import './Home.css';

function Home() {
    return (
        <div className="main-container">
            <div className="blurb">
                <h1 className="typed">Hi. I'm Lexi.</h1>
            </div>
            <SocialLinks />
        </div>
    );
}

export default Home; 