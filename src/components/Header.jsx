import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
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

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-100/90 backdrop-blur-md shadow-lg py-3'
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
            className="cursor-pointer flex items-center"
          >
            <span className="text-xl md:text-2xl font-bold text-base-content">
              Sapuni
            </span>
            <span className="text-xl md:text-2xl font-normal text-base-content ml-1.5">
              Pathirana
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-primary font-semibold"
                className="text-base font-normal text-base-content/70 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme toggle + Mobile menu */}
          <div className="flex items-center gap-3">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <BsSun className="swap-off" size={22} />
              <BsMoon className="swap-on" size={22} />
            </label>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-base-content"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-base-200 shadow-lg">
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="bg-primary/10 text-primary font-semibold"
                  className="text-lg font-normal text-base-content/80 py-2.5 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
