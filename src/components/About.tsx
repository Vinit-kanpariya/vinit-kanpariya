"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-900 pb-16 px-6 sm:px-8 lg:px-16 xl:px-24">
      {/* Section Title */}
      <div className="flex justify-center">
        <h2 className="text-center text-3xl font-bold text-cyan-400">
          About Me 
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
            {/* Background SVG */}
            <div className="absolute w-full h-300 bg-[url('/blob.svg')] bg-contain bg-no-repeat bg-center" />
            {/* Profile Image */}
            <Image
              src="/Vinit.png"
              alt="Vinit"
              width={200}
              height={200}
              className="rounded-full relative z-10 w-30 h-30 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0 lg:pl-12">
          <p className="text-gray-300">
            I&apos;m a young explorer at heart, drawn to the untamed beauty of nature and the thrill of pushing my limits. Mountains are my escape, where every climb feels like a new adventure. Sports keep my energy high, fueling my competitive spirit, while coding is my creative playground—where ideas come to life with every keystroke. Whether I’m scaling peaks, chasing a ball, or crafting digital experiences, I embrace every challenge with passion and curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
