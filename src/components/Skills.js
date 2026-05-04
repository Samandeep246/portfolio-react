// src/components/Skills.js
import React from "react";

const skillCategories = {
  "Backend / Frameworks": [
    "C#", "ASP.NET MVC", "ASP.NET Web API", ".NET Framework", "VB.NET", "ADO .NET","REST APIs"
  ],
  "Frontend": [
    "React.js", "JavaScript", "HTML", "HTML5", "CSS", "Tailwind CSS", "Bootstrap", "Blazor"
  ],
  "Databases & GIS": [
    "SQL Server", "PostgreSQL", "PostGIS", "GeoServer", "ArcGIS", "OpenLayers", "uDig"
  ],
  "Tools & Methodologies": [
    "Git", "NPM", "ETL Workflows", "GitHub Copilot", "Claude AI", "Azure / Azure Functions"
  ]
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Skills
        </h2>

        {/* Grid of Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
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

export default Skills;