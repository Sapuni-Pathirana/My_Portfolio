import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const timeline = [
  {
    icon: <FaGraduationCap size={20} />,
    title: 'BSc (Hons) in Information Technology',
    institution: 'University of Moratuwa — Faculty of IT',
    period: '2022 — Present',
    description:
      'Specializing in software engineering, web technologies, data structures, algorithms, database systems, and software project management. Engaged in academic projects and collaborative team-based development.',
  },
  {
    icon: <FaSchool size={20} />,
    title: 'G.C.E. Advanced Level — Physical Science',
    institution: 'Your School Name',
    period: '2019 — 2021',
    description:
      'Completed A/L examination in the Physical Science stream with strong results, laying the foundation for pursuing higher education in technology and engineering.',
  },
  {
    icon: <FaSchool size={20} />,
    title: 'G.C.E. Ordinary Level',
    institution: 'Your School Name',
    period: '2018',
    description:
      'Achieved excellent results in O/L examinations, demonstrating strong academic performance across all subjects.',
  },
];

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-10 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center z-10 shadow-md">
                {item.icon}
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="card bg-base-100 shadow-sm border border-base-300/50 hover:shadow-lg transition-shadow">
                  <div className="card-body p-5">
                    <span className="badge badge-primary badge-sm font-mono mb-1">
                      {item.period}
                    </span>
                    <h3 className="font-semibold text-base">{item.title}</h3>
                    <p className="text-sm text-primary/80 font-medium">{item.institution}</p>
                    <p className="text-sm text-base-content/60 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
