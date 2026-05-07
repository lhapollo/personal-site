import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import SocialLinks from "../components/SocialLinks";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Add 1 second delay before showing projects
        setTimeout(() => {
          setProjects(data);
          setIsLoading(false);
        }, 1500);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-20 text-white">
      <div
        className="
          absolute inset-0 -z-10
          h-full w-full
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
        "
      />
      <div className="text-center w-[360px] mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
          My Projects
        </h1>
      </div>
      {/* Content */}
      <div className="w-full max-w-6xl">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-6 py-20">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />

            <p className="text-lg text-gray-300 tracking-wide font-mono">
              Loading Projects...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                image={project.image}
                githubLink={project.repo}
                liveLink={project.link}
                description={project.description}
                tech={project.tech}
              />
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-6 sm:bottom-8 z-10">
        <SocialLinks />
      </div>
    </div>
  );
}

export default Projects;
