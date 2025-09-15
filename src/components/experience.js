function Experience() {
  const experiences = [
    {
      role: "Project Engineer",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      duration: "Sep 2022 – Oct 2023",
      location: "On-site",
      responsibilities: [
        "Analyzed client requirements to design, optimize, and implement new features, improving application performance and frontend UI/UX using ASP.NET Razor controls.",
        "Implemented REST APIs for government website integrations and JSON file processing in C# .NET.",
        "Developed backend logic with SQL Server stored procedures, schema design, and database management.",
        "Debugged and resolved issues to enhance functionality and ensure data integrity."
      ]
    },
    {
      role: "Application Developer",
      company: "Panjab University",
      duration: "Nov 2020 – Sep 2022",
      location: "On-site",
      responsibilities: [
        "Developed a real-time geographical monitoring and reporting system to mitigate crop residue burning, reducing cases by 30%.",
        "Designed and implemented mobile and web activity screens using React and Java for field officers.",
        "Built features for status tracking and report generation for assigned fire locations.",
        "Collaborated with cross-functional teams to design and enhance user interfaces and system features."
      ]
    },
    {
      role: "Web Developer",
      company: "Punjab Agricultural University",
      duration: "Sep 2018 – Nov 2020",
      location: "On-site",
      responsibilities: [
        "Worked on both frontend and backend using ASP.NET, HTML, CSS, and JavaScript.",
        "Designed SQL Server models, stored procedures, triggers, and user-defined functions.",
        "Participated in all SDLC phases from requirements gathering to deployment and maintenance.",
        "Performed unit, integration, functional, and regression testing."
      ]
    },
    {
      role: "Customer Service Representative",
      company: "Broadway Public School",
      duration: "Apr 2017 – Sep 2018",
      location: "On-site",
      responsibilities: [
        "Delivered customer support services including issue resolution and client interaction.",
        "Developed strong communication and service management skills through daily interactions with stakeholders."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-100 text-center">
          Experience
        </h2>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-2 -left-1.5 border border-white dark:border-gray-900"></div>

              {/* Experience Card */}
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.duration} • {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
