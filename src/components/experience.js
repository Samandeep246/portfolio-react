function Experience() {
  const experiences = [
    {
      role: "Dotnet Developer",
      company: "Les Systèmes Adda Tech Inc.",
      duration: "Jan 2026 – Present",
      location: "Remote",
      responsibilities: [
        "Develop and maintain RESTful APIs using ASP.NET Core and C# for a multi-tenant healthcare platform (ClinicMaster), supporting workflows across reporting, service management, and clinic operations.",
        "Implement backend features following clean architecture principles with structured controller, service, and repository layers.",
        "Collaborate in an Agile environment using Git and Azure DevOps, participating in code reviews and sprint-based development cycles.",
        "Working within a system architecture that incorporates Azure Functions and event-driven design patterns."
      ]
    },
    {
      role: "Project Engineer",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      duration: "Sep 2022 – Oct 2023",
      location: "On-site",
      responsibilities: [
        "Gathered and analyzed client requirements to design, implement, and optimize application features using ASP.NET and C#, improving backend performance and frontend UI/UX.",
        "Developed and integrated REST APIs using C# .NET to enable seamless data exchange with multiple government websites.",
        "Applied Entity Framework (Database-First) to generate data models from existing SQL Server databases, streamlining CRUD operations and data relationships.",
        "Developed and maintained SQL Server stored procedures and schemas to support complex business logic and efficient data processing."
      ]
    },
    {
      role: "Application Developer",
      company: "Panjab University",
      duration: "Nov 2020 – Sep 2022",
      location: "On-site",
      responsibilities: [
        "Contributed to developing a real-time geographical monitoring and report generation system for active fire locations to support mitigation of crop residue burning.",
        "Designed and implemented web interfaces using ASP.NET and C# for field officers to monitor active fire locations and verify assigned areas.",
        "Built functionality for officials to track location statuses and generate reports for completed assignments.",
        "Worked cross-functionally to develop and enhance features, improving UI and overall user experience using HTML, CSS, and JavaScript."
      ]
    },
    {
      role: "Web GIS Developer",
      company: "Punjab Agricultural University",
      duration: "Sep 2018 – Nov 2020",
      location: "On-site",
      responsibilities: [
        "Utilized ADO.NET and SQL Server to write and maintain complex T-SQL scripts including stored procedures, triggers, and user-defined functions to support business logic and data manipulation.",
        "Worked on both front-end and back-end systems using ASP.NET, HTML, CSS, and JavaScript to deliver functional and responsive web pages.",
        "Participated across the full SDLC including requirements gathering, design, development, testing, deployment, and maintenance.",
        "Collaborated with the team on unit, integration, functional, and regression testing to ensure application quality and reliability."
      ]
    },
    {
      role: "Elementary School Teacher",
      company: "Broadway Public School",
      duration: "Apr 2017 – Sep 2018",
      location: "On-site",
      responsibilities: [
        "Delivered engaging and structured lessons to elementary-level students, fostering a positive and inclusive learning environment.",
        "Developed strong communication, planning, and interpersonal skills through daily collaboration with students, parents, and staff."
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