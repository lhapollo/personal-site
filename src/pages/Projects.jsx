import React, { useState, useEffect } from 'react';
import Project from '../components/Project';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Add 1 second delay before showing projects
                setTimeout(() => {
                    setProjects(data);
                    setIsLoading(false);
                }, 2200);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div id="project-body">
            <div style={{ textAlign: 'center', width: '360px' }}>
                <h1 className="title typed">My Projects</h1>
            </div>
            <div className="projects-container">
                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p className="loading-text">Loading Projects...</p>
                    </div>
                ) : (
                    projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            githubLink={project.repo}
                            liveLink={project.link}
                            description={project.description}
                            tech={project.tech}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects; 