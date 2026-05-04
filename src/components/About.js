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
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
  Dot Net Developer with 5+ years of professional experience designing, developing, and maintaining robust web
  applications across government, healthcare, and academic domains. My core strengths lie in .NET development, RESTful
  API integration, database management, and React-based interfaces, with additional experience in GIS technologies that
  support data visualization and location-based services.
  <br /><br />
  I specialize in building scalable, high-performance applications that align with client requirements and user
  expectations, with hands-on experience across the complete software development lifecycle — from requirements gathering
  and design through to testing, deployment, and maintenance. My technical toolkit includes C#, ASP.NET Core, .NET MVC,
  SQL Server, PostgreSQL, React, JavaScript, HTML/CSS, and Azure, among other tools and platforms.
  <br /><br />
  Throughout my career, I have worked in collaborative, cross-functional environments alongside developers, designers,
  testers, and domain experts. I take pride in writing clean, maintainable code and contributing effectively within Agile
  teams. I am committed to continuous learning and staying current with trends in web development, cloud computing, and
  modern software practices, including leveraging AI-assisted development tools such as GitHub Copilot and Claude to
  enhance productivity and code quality.
  <br /><br />
  With a Master's in Computer Science and Engineering and a professional track record of delivering impactful solutions,
  I aim to contribute to organizations that value innovation, quality, and long-term technical growth.
  <span className="block mt-4 font-semibold text-green-600 dark:text-green-400">
    Always open to new challenges, team-oriented roles, and opportunities to enhance digital experiences through technology.
  </span>
</p>
    </section>
  );
}

export default About;
