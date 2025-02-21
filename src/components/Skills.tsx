"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript","Rest API","GitHub"];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null); // Create a ref for the scroll container

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0; // Reset to the start
        } else {
          scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' }); // Scroll by 100 pixels
        }
      }
    }, 1000); // Every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="pb-16 px-6 bg-gray-900">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-8">Skills & Tech Stack</h2>
      <div ref={scrollRef} className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition no-underline"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
