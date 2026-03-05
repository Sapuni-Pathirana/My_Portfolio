import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-100/80 backdrop-blur-xl shadow-sm border-b border-base-content/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center group"
          >
            <span className="text-xl md:text-2xl font-bold text-base-content tracking-tight">
              Sapuni
            </span>
            <span className="gradient-text text-xl md:text-2xl font-bold mx-0.5">
              .
            </span>
            <span className="text-xl md:text-2xl font-light text-base-content/70 tracking-tight">
              Pathirana
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="nav-link-active"
                className="nav-link relative px-3 py-2 text-sm font-medium text-base-content/60 hover:text-base-content transition-colors cursor-pointer rounded-lg hover:bg-base-content/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-content/5 hover:bg-base-content/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-base-content/5 hover:bg-base-content/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? 'max-h-96 opacity-100 mt-4'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-base-200/80 backdrop-blur-xl rounded-2xl border border-base-content/5 p-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="bg-primary/10 text-primary font-semibold"
                className="block text-base font-medium text-base-content/70 py-2.5 px-4 hover:bg-primary/5 hover:text-primary rounded-xl transition-all cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
