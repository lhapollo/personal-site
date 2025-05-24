import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
    const observerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        // Observe all elements with about-content class
        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observerRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="about-page">
            <div className="about-content-wrapper">
                <div style={{ textAlign: 'center', width: '400px' }}>
                    <h1 className="typed" ref={el => observerRefs.current[0] = el}>About Me</h1>
                </div>
                <img 
                    src="/imgs/lexipfp.jpg" 
                    className="about-image about-content" 
                    alt="Lexi's profile"
                    ref={el => observerRefs.current[1] = el}
                />
                <div className="blurb-text">
                    <p className="about-content" ref={el => observerRefs.current[2] = el}>
                        Hi, I'm Lexi. I'm a CS student at the University of Waterloo.
                    </p>
                    <p className="about-content" ref={el => observerRefs.current[3] = el}>
                        I'm interested in learning more about tech, and am always trying to improve my skills!
                    </p>
                    <p className="about-content" ref={el => observerRefs.current[4] = el}>
                        In my spare time, I like working out, listening to music, playing sports like tennis or basketball, and gaming.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About; 