import React, { useState, useEffect } from "react";

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
    }, 300);
  };

  const getTechIcon = (techName) => {
    const icons = {
      HTML: "fab fa-html5",
      CSS: "fab fa-css3-alt",
      JavaScript: "fab fa-js",
      React: "fab fa-react",
    };
    return icons[techName] || "fas fa-code";
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center px-4
        bg-black/60 backdrop-blur-sm
        transition-opacity duration-300
        ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl bg-neutral-900 text-white
          rounded-2xl shadow-2xl border border-white/10
          p-8 relative
          transform transition-all duration-300
          ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={handleClose}
            className="text-2xl font-light hover:text-purple-400 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">{description}</p>

          {tech && tech.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Technologies Used:
              </h3>

              <div className="flex flex-wrap gap-4">
                {tech.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2
                      bg-white/5 border border-white/10
                      rounded-xl hover:bg-white/10
                      transition-all duration-300"
                  >
                    <i className={`${getTechIcon(item)} text-lg`} />
                    <span className="text-sm">{item}</span>
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
