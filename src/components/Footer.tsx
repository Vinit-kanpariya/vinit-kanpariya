import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://github.com/vinit-kanpariya" target="_blank" className="text-white text-2xl hover:text-cyan-400">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/vinit-kanpariya" target="_blank" className="text-white text-2xl hover:text-cyan-400">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/vinit_kanpariya" target="_blank" className="text-white text-2xl hover:text-cyan-400">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/vinit_kanpariya" target="_blank" className="text-white text-2xl hover:text-cyan-400">
          <FaInstagram/>
          </a>
      </div>
      <p className="text-gray-400">&copy; {new Date().getFullYear()} Vinit Kanpariya. All rights reserved.</p>
    </footer>
  );
}
