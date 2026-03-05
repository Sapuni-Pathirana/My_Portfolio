import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-300/50 border-t border-base-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg gradient-text">&lt;Sapuni /&gt;</p>
            <p className="text-xs text-base-content/50 mt-1">
              IT Undergraduate | University of Moratuwa
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-sm hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle btn-sm hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:sapuni.pathirana@example.com"
              className="btn btn-ghost btn-circle btn-sm hover:text-primary"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-base-content/50 text-center md:text-right">
            &copy; {year} Sapuni Pathirana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
