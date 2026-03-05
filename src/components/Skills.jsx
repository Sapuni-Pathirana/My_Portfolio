import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiSpringboot,
  SiPostman, SiExpress,
} from 'react-icons/si';
import useScrollReveal from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Figma', icon: <FaFigma /> },
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-base-content/60 mt-4 max-w-lg mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* Skill Categories */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-sm border border-base-300/50 hover:shadow-lg transition-shadow"
            >
              <div className="card-body p-5">
                <h3 className="text-lg font-semibold text-primary mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-base-200/70 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
