"use client";

export const projects = [
  { id: 1, title: "Weather App", description: "Built using Next.js, Tailwind, and OpenWeather API.", link: "https://weatherio-mocha.vercel.app",github:"https://github.com/vinit-kanpariya/weatherio" },
  { id: 2, title: "Portfolio Website", description: "Personal portfolio with Framer Motion animations.", link: "https://vinit-kanpariya.vercel.app",github:"https://github.com/vinit-kanpariya/vinit-kanpariya" },
  { id: 3, title: "Tic-Tac-Toe", description: "Built using Next.js and Tailwind CSS.", link: "https://vinit-tic-tac-toe.netlify.app/",github:"https://github.com/vinit-kanpariya/tic-tac-toe" },
  { id: 4, title: "Thekalyugart", description: "Built using Next.js and Tailwind CSS.", link: "https://thekalyugart.com/",github:"#github" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 pt-16 sm:px-8 lg:px-16 bg-gray-900">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-12">
        Projects
      </h2>

      {/* Grid Layout with Proper Spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl focus:shadow-2xl focus:outline-none"
            key={index}
          >
            <h3 className="text-xl text-center font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-center mb-4">{project.description}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
              >
                Visit Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
