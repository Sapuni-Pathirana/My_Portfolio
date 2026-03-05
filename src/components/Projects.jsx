import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce web application with user authentication, product management, shopping cart, and payment integration. Built with a modern tech stack for scalability and performance.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
    image: null,
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, role-based access control, and an intuitive dashboard for tracking project progress.',
    tags: ['React', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com',
    live: '#',
    image: null,
  },
  {
    title: 'Student Portal',
    description:
      'A student information system for managing course registrations, grade tracking, and academic scheduling. Features a responsive admin dashboard with role-based permissions.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React', 'Bootstrap'],
    github: 'https://github.com',
    live: '#',
    image: null,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A real-time weather dashboard that fetches data from external APIs and displays forecasts, charts, and location-based weather info with a clean, interactive UI.',
    tags: ['React', 'API Integration', 'Chart.js', 'CSS Modules'],
    github: 'https://github.com',
    live: '#',
    image: null,
  },
];

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
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-sm border border-base-300/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Project Image Placeholder */}
              <figure className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-base-300/50">
                <div className="text-center">
                  <div className="text-4xl mb-2 opacity-40 group-hover:opacity-70 transition-opacity">
                    {i === 0 ? '🛒' : i === 1 ? '📋' : i === 2 ? '🎓' : '🌤️'}
                  </div>
                  <p className="text-xs text-base-content/40 font-mono">screenshot.png</p>
                </div>
              </figure>

              <div className="card-body p-5">
                <h3 className="card-title text-lg">{project.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="badge badge-sm badge-outline badge-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="card-actions justify-end mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm gap-1.5"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm gap-1.5"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
