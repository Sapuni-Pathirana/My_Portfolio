import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowRight, HiDownload, HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-base-200 relative overflow-hidden"
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — Text Content */}
          <div className="space-y-4 md:space-y-5">
            {/* Greeting */}
            <p className="text-primary text-lg md:text-xl font-medium animate-fade-in-up opacity-0">
              Hi, I'm Sapuni Pathirana
            </p>

            {/* Title + University */}
            <div className="animate-fade-in-up opacity-0 animation-delay-200">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Information Technology Undergraduate
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-content/80 mt-2">
                University of Moratuwa
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-base-content/60 leading-relaxed max-w-lg animate-fade-in-up opacity-0 animation-delay-400">
              Passionate and driven undergraduate specializing in full-stack
              web development. I thrive on building scalable applications,
              tackling complex problems, and continuously expanding my
              technical expertise to deliver impactful digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up opacity-0 animation-delay-600">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-primary btn-lg text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all gap-2"
              >
                View My Projects
                <HiArrowRight size={18} />
              </Link>
              <a
                href="/Sapuni Pathirana CV.pdf"
                download="Sapuni Pathirana CV.pdf"
                className="btn btn-outline btn-primary btn-lg text-base font-semibold hover:scale-105 transition-all gap-2"
              >
                <HiDownload size={18} />
                Download My CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <span className="text-sm text-base-content/40 font-medium">Find me on</span>
              <div className="w-8 h-px bg-base-content/20" />
              <a
                href="https://github.com/Sapuni-Pathirana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sapuni-madhushika-pathirana-5798a2302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:sapunimadhushikapathirana@gmail.com"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail size={22} />
              </a>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in-up opacity-0 animation-delay-400">
            <div className="relative w-72 sm:w-80 md:w-[22rem] lg:w-[26rem]">
              <img
                src="/images/Profile.jpeg"
                alt="Sapuni Pathirana"
                className="w-full object-cover drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
