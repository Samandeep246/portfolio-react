function Projects() {
  const projects = [
    {
      name: "My Portfolio Website",
      tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", ".NET"],
      description:
        "Developed a personal portfolio website to showcase my skills, projects, and experience. Includes dark/light mode toggle, responsive design, and interactive components.",
    },
    {
      name: "Wood-based Industries Licensing Software",
      tech: [
        "ASP.NET MVC",
        "ASP.NET Web API",
        "C#",
        "SQL Server",
        "jQuery",
        "HTML5",
        "CSS",
        "JavaScript",
      ],
      description:
        "Developed an online licensing system for digitizing the process of obtaining licenses for establishing, relocating, or transferring ownership of wood-based industries in Haryana, Uttar Pradesh, and Punjab. Included modules for Admin, Applicant, DFO, and SLC.",
    },
    {
      name: "Multi-Modal Framework for Active Fire Locations (AFL)",
      tech: [".NET Framework", "Google Earth Engine", "SQL Server", "HTML", "CSS", "C#"],
      description:
        "Designed a real-time geographical monitoring and reporting system for active fire locations to help government officials mitigate crop residue burning. Provided interfaces for officials at multiple administrative levels.",
    },
    {
      name: "CRBIMS (Crop Residue Burning Information Management System)",
      tech: [
        ".NET Framework",
        "PostgreSQL",
        "PostGIS",
        "GeoServer",
        "ArcGIS",
        "OpenLayers",
        "uDig",
        "C#",
      ],
      description:
        "Created a dashboard to track residue fire cases in Punjab, render fire event data on maps, and generate analytical reports for decision-making at multiple levels.",
    },
    {
      name: "Data Information System",
      tech: [
        "VB.NET",
        "ASP.NET",
        "ASP.NET AJAX",
        "SQL Server",
        "C#",
        "HTML5",
        "CSS",
        "JavaScript",
      ],
      description:
        "Built an internal system to organize departmental data and resources, including employee information and inter-departmental exchanges, improving organizational efficiency.",
    },
    {
      name: "Online Service Assistance (Laptop Repair)",
      tech: ["ASP.NET", "jQuery", "SQL Server", "C#", "HTML", "CSS", "JavaScript"],
      description:
        "Developed a project for tracking repair and maintenance of laptops with modules for Admin, User, Service Engineer, and Accounts. Created as part of a 6-month college training program.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-100 text-center">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {proj.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>

              {/* Tech stack as badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-blue-200 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
