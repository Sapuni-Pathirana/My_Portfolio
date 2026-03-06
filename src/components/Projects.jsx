import { FaGithub } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from './About';

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-base-200/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-base-content/60 mt-4 max-w-lg mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-950 opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="w-14 h-14 text-white drop-shadow-lg" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white/90 text-purple-800 font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub size={18} />
                    View Project
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
