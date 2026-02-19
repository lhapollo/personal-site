import React from "react";
import SocialLinks from "../components/SocialLinks";
import "./Home.css";

function Home() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">

      <div
        className="
          absolute inset-0 -z-10
          h-full w-full
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
        "
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center -translate-y-12 sm:-translate-y-16 md:-translate-y-[10vh]">
        <h1 className="typing font-bold font-mono text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[6rem]"> Hi. I'm Lexi. </h1>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 z-10">
        <SocialLinks />
      </div>
    </section>
  );
}

export default Home;
