"use client";
import { ReactTyped } from "react-typed";

export default function Hero() {

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left bg-gray-900 relative overflow-hidden px-6 py-12 md:px-16 md:py-20 lg:py-24 sm:min-h-[600px] md:min-h-screen lg:min-h-screen">
        {/* Hero Content */}
        <div className="flex flex-col md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-cyan-400 leading-tight">
            Hi, I&apos;m a Frontend Engineer
          </h1>
          <p className="text-md sm:text-lg md:mb-6 md:text-xl text-gray-300">
            Passionate about creating user-friendly, responsive, and interactive
            web applications that deliver exceptional user experiences.
          </p>
          <div>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-blue-600 hover:to-cyan-500 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0 relative">
          <div className="bg-gray-800 p-4 sm:p-6 md:p-8 mb-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-sm sm:max-w-md md:max-w-lg min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex items-start">
            <pre className="text-green-400 text-sm sm:text-md md:text-lg font-mono whitespace-pre-wrap text-left">
              <ReactTyped
                strings={[
                  `// Function to greet the user\nfunction greet(name) {\n  return \`Hello, \${name}!\`;\n}\nconsole.log(greet('Vinit kanpariya'));`,

                  `// Fetch data from an API\nasync function fetchData() {\n  const res = await fetch('https://api.example.com');\n  const data = await res.json();\n  console.log(data);\n}`,

                  `// Array of skills\nconst skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript","Rest API","GitHub"];\nskills.forEach(skill => console.log(\`Skill: \${skill}\`));`,
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
