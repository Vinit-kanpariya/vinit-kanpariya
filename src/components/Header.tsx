"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) { // Check if the screen width is desktop size
        const currentScrollY = window.scrollY;
        setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white bg-gray-900 pt-4 rounded-lg font-helvetica px-6 py-3 flex justify-between items-center transition-transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo */}
      <h1 className="text-2xl font-bold hover:text-cyan-400">MyPortfolio</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg mr-4">
        <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
        <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
        <Link href="#experience" className="hover:text-cyan-400 transition">Experience</Link>
        <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden bg mt-2">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <CgMenuRightAlt className="right-3" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-6 w-1/2 md:right-6 z-50 bg-white text-gray-900 shadow-md rounded-lg flex flex-col items-center space-y-4 py-4"
          >
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#projects" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="#experience" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Experience</Link>
            <Link href="#about" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#contact" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
