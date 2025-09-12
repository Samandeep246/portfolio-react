function Projects() {
  const projects = [
    {
      name: "Online Licensing Software",
      tech: "React, .NET, SQL",
      description: "A web application for managing licenses online efficiently."
    },
    {
      name: "Fire Monitoring System",
      tech: "React, GIS",
      description: "A GIS-based system for monitoring fire locations and alerts."
    }
  ];

  return (
    <section
      id="projects"
      className="p-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {proj.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Tech:</strong> {proj.tech}
            </p>
            <p className="text-gray-700 dark:text-gray-200">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
