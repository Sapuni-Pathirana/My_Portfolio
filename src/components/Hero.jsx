import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';

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
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-outline btn-primary btn-lg text-base font-semibold hover:scale-105 transition-all gap-2"
              >
                <HiOutlineMail size={18} />
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <span className="text-sm text-base-content/40 font-medium">Find me on</span>
              <div className="w-8 h-px bg-base-content/20" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:sapuni.pathirana@example.com"
                className="text-base-content/50 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail size={22} />
              </a>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in-up opacity-0 animation-delay-400">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Replace with: <img src="/your-photo.png" alt="Sapuni Pathirana" className="w-full h-full object-cover" /> */}
                <div className="text-center">
                  <div className="text-7xl lg:text-8xl mb-4">👩‍💻</div>
                  <p className="text-sm text-base-content/30 font-mono">your-photo.png</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
