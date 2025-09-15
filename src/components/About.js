import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="scroll-mt-28 pt-16 mt-10 max-w-4xl mx-auto p-10
                 relative rounded-xl shadow-md transition-colors duration-300
                 bg-white dark:bg-gray-900 border border-purple-400 dark:border-purple-500"
    >
      {/* Optional: soft glow behind edges */}
      <div className="absolute inset-0 rounded-xl pointer-events-none
                      border border-purple-400 dark:border-purple-500
                      opacity-30"></div>

      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
        As a Full Stack Developer, I craft robust and scalable web applications using .NET, React, SQL, and GIS tools. I focus on building intuitive user interfaces and delivering high-performance solutions, following Agile principles and modern development best practices.
        <span className="block mt-2 font-semibold text-green-600 dark:text-green-400">
          Currently open to new opportunities.
        </span>
      </p>
    </section>
  );
}

export default About;
