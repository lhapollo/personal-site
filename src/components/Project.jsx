import React, { useState } from "react";
import Modal from "./Modal";

function Project({ title, image, githubLink, liveLink, description, tech }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        
        {/* Image */}
        <div
          onClick={handleClick}
          className="cursor-pointer overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          
          {/* Title */}
          <h2
            onClick={handleClick}
            className="text-xl font-semibold font-mono cursor-pointer hover:text-purple-400 transition-colors duration-300"
          >
            {title}
          </h2>

          {/* Links */}
          <div className="flex gap-6 text-xl">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description || "No description available."}
        tech={tech}
      />
    </>
  );
}

export default Project;
