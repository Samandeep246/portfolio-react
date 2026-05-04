import React from "react";

function Projects() {
  const projects = [
    {
      name: "MedSync — Healthcare Management System",
      tech: [
        "React 18",
        "Vite",
        "ASP.NET Core",
        ".NET 8",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "BCrypt",
        "Axios",
        "React Router",
        "Azure Functions",
        "SendGrid",
      ],
      description:
        "A production-grade full-stack healthcare platform with role-based dashboards (Admin, Doctor, Patient). Implements secure authentication, appointment scheduling, and automated workflows using modern cloud services.",
      highlights: [
        "Role-based dashboards (Admin, Doctor, Patient)",
        "JWT authentication & password reset workflows",
        "Dual-path appointment booking & 12-hour cancellation guard",
        "Automated email reminders using Azure Functions + SendGrid",
        "Admin reporting (CSV/PDF export)",
        "Clean architecture (Repository, DTOs, Dependency Injection)",
      ],
      github: {
        frontend: "https://github.com/Samandeep246/MedSync-Frontend",
        backend: "https://github.com/Samandeep246/MedSync-API",
      },
      // live: "https://your-live-link.com",
    },
    {
      name: "My Portfolio Website",
      tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      description:
        "A modern, responsive developer portfolio showcasing projects, skills, and experience with smooth animations and optimized performance.",
      highlights: [
        "Fully responsive (mobile, tablet, desktop)",
        "Dark / Light mode toggle",
        "Smooth animations using Framer Motion",
        "GitHub Pages deployment with CI/CD",
      ],
      github: {
        frontend: "https://github.com/Samandeep246/portfolio-react",
      },
      live: "https://samandeep246.github.io/portfolio-react",
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
        "A government licensing platform used across multiple states to digitize regulatory workflows for wood-based industries.",
      highlights: [
        "Role-based system (Admin, Applicant, DFO, SLC)",
        "License, renewal, relocation & ownership workflows",
        "PayU payment gateway integration",
        "Document management & file movement tracking",
        "REST API integration with government portals",
      ],
    },
    {
      name: "Multi-Modal Framework for Active Fire Locations (AFL)",
      tech: [
        ".NET Framework",
        "NASA FIRMS API",
        "Google Geocoding API",
        "SQL Server",
        "HTML",
        "CSS",
        "C#",
      ],
      description:
        "A real-time satellite-driven monitoring system for detecting active fire locations and notifying authorities for quick action.",
      highlights: [
        "Integration with NASA FIRMS satellite data",
        "Automated district-wise email notifications",
        "Role-based dashboards for officials",
        "Geospatial processing using external APIs",
      ],
    },
    {
      name: "CRBIMS (Crop Residue Burning Information Management System)",
      tech: [
        ".NET Framework",
        "PostgreSQL",
        "PostGIS",
        "GeoServer",
        "OpenLayers",
        "C#",
      ],
      description:
        "A Web-GIS decision support system for monitoring crop residue burning and enabling data-driven government decisions.",
      highlights: [
        "Interactive GIS map visualizations",
        "Real-time fire data tracking",
        "Multi-level dashboards (Village to State)",
        "Analytical reporting for decision-making",
      ],
    },

  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
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

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {proj.description}
              </p>

              {/* Highlights */}
              {proj.highlights && (
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 list-disc list-inside space-y-1">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              {/* Links */}
              {(proj.github || proj.live) && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {proj.github?.frontend && (
                    <a
                      href={proj.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white bg-gray-800 dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-700 transition"
                    >
                      ⬛ Frontend
                    </a>
                  )}
                  {proj.github?.backend && (
                    <a
                      href={proj.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white bg-gray-800 dark:bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-700 transition"
                    >
                      ⬛ Backend
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-500 transition"
                    >
                      🌐 Live
                    </a>
                  )}
                </div>
              )}

              {/* Tech stack */}
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