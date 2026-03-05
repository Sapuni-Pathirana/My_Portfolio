import { FaCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: <FaCode size={24} />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible UIs with React and modern CSS frameworks.',
  },
  {
    icon: <FaServer size={24} />,
    title: 'Backend Development',
    description: 'Designing RESTful APIs and server-side logic with Node.js and Spring Boot.',
  },
  {
    icon: <FaDatabase size={24} />,
    title: 'Database Design',
    description: 'Modeling and managing data with SQL and NoSQL databases.',
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: 'Responsive Design',
    description: 'Creating seamless experiences across all devices and screen sizes.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-base-200/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div
          className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-6xl mb-3">👩‍💻</div>
                  <p className="text-sm text-base-content/50 font-mono">your-photo.jpg</p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-base-content/70 leading-relaxed mb-4">
              I am a dedicated IT undergraduate at the{' '}
              <span className="font-semibold text-base-content">
                University of Moratuwa, Faculty of Information Technology
              </span>
              . My passion lies in designing and developing full-stack web applications
              that are clean, user-friendly, and architecturally sound.
            </p>
            <p className="text-base-content/70 leading-relaxed mb-6">
              I thrive on solving complex problems and continuously expanding my skill set
              across frontend and backend technologies. I am eager to contribute to
              innovative projects and collaborate with teams that value quality engineering
              and creative thinking.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-base-100 hover:shadow-md transition-shadow border border-base-300/50"
                >
                  <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-xs text-base-content/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
