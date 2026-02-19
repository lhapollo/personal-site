import React, { useEffect, useRef } from "react";
import SocialLinks from "../components/SocialLinks";
import "./About.css";

function About() {
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
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
      <div
        className="
          absolute inset-0 -z-10
          h-full w-full
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
        "
      />
      <div className="about-content-wrapper flex flex-col items-center justify-center gap-8 px-4 py-16 w-full h-screen">
        <div style={{ textAlign: "center", width: "400px" }}>
          <h1 className="typed" ref={(el) => (observerRefs.current[0] = el)}>
            About Me
          </h1>
        </div>
        <div
          className="coin-wrapper group relative 
             md:w-80 md:h-80 lg:w-96 lg:h-96 
             [perspective:1000px]"
          ref={(el) => (observerRefs.current[1] = el)}
        >
          <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
            {/* Front */}
            <img
              src="/imgs/lexipfp.jpg"
              alt="front"
              className="absolute w-full h-full object-cover rounded-full backface-hidden"
            />

            {/* Back */}
            <img
              src="/imgs/lexipfp2.jpg"
              alt="back"
              className="absolute w-full h-full object-cover rounded-full backface-hidden [transform:rotateY(180deg)]"
            />
          </div>
        </div>

        <div className="blurb-text text-white font-mono text-center flex flex-col gap-4">
          <p
            className="about-content delay-1 text-white font-mono text-lg sm:text-xl md:text-2xl"
            ref={(el) => (observerRefs.current[2] = el)}
          >
            Hi, I'm Lexi. I'm a CS student at the University of Waterloo.
          </p>

          <p
            className="about-content delay-2 text-white font-mono text-lg sm:text-xl md:text-2xl"
            ref={(el) => (observerRefs.current[3] = el)}
          >
            I'm interested in learning more about tech, and am always trying to
            improve my skills!
          </p>

          <p
            className="about-content delay-3 text-white font-mono text-lg sm:text-xl md:text-2xl"
            ref={(el) => (observerRefs.current[4] = el)}
          >
            In my spare time, I like working out, listening to music, playing
            sports like tennis or basketball, and gaming.
          </p>
        </div>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 z-10">
        <SocialLinks />
      </div>
    </div>
  );
}

export default About;
