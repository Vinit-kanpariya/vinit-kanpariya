"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const milestones = [
  {
    id: 1,
    year: "2025 - current",
    title: "Software Engineer Trainee - Full-Time",
    description: "Joined Solutelabs as Front-end Intern.",
  },
  {
    id: 2,
    year: "2024",
    title: "Frontend Intern - React.js",
    description:"Internship at Infolabs Technologies, where I worked on React.js projects.",
  },
  {
    id: 3,
    year: "2022",
    title: "B.E. In Computer Engineering",
    description: "Gandhinagar Institute of Technology, Gandhinagar (GTU).",
  },
  {
    id: 4,
    year: "2019",
    title: "D.E. In Information Technology",
    description: "Government Polytechnic, Ahmedabad (GTU).",
  },
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const toggleDetail = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section className="relative bg-gray-900 py-16 px-6 sm:px-8 lg:px-16 xl:px-24">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-12">
        Experience & Education
      </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-cyan-400 transition-transform transform hover:-translate-y-1 cursor-pointer"
            onClick={() => toggleDetail(milestone.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-cyan-400 text-lg font-semibold">
                {milestone.year}
              </span>
              <button className="text-gray-400 hover:text-cyan-400 transition">
                {selectedId === milestone.id ? <IoClose/> : <FaArrowRight/>}
              </button>
            </div>
  
            <h3 className="text-white text-lg font-bold">{milestone.title}</h3>
              {selectedId === milestone.id && (
                <p>
                  {milestone.description}
                </p>
              )
            }
          </div>
        ))}
      </div>
    </section>
  );  
}
