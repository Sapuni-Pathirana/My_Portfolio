import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaLaptopCode, FaMapMarkedAlt, FaMicrochip } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: <FaCode size={24} />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and visually engaging user interfaces.',
  },
  {
    icon: <FaServer size={24} />,
    title: 'Backend Development',
    description: 'Designing robust APIs and scalable server-side architectures.',
  },
  {
    icon: <FaDatabase size={24} />,
    title: 'Database Design',
    description: 'Modeling and managing data with efficient storage solutions.',
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
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 md:w-80 aspect-[2/3] rounded-2xl border-2 border-primary/30 overflow-hidden">
              <img src="/images/Profile.jpeg" alt="Sapuni Pathirana" className="w-full h-full object-cover" />
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
}export const projects = [
  {
    title: 'Auditra',
    subtitle: 'Auditing & Valuation ERP',
    description: 'A full-stack ERP system for property valuation and project management featuring role-based access for 10 user types, attendance tracking, leave management, payment slip generation, and mobile field data collection with photo and GPS support.',
    tags: ['React', 'Django', 'Flutter', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/Pasidu-Mihiranga/Auditra-CodeCogs',
    icon: FaCode,
  },
  {
    title: 'Gold Victoria',
    subtitle: 'E-Commerce & Hotel Management',
    description: 'An e-commerce and hotel management platform with a dedicated client-side interface and a Java-based backend, supporting product browsing, ordering, and hotel service management.',
    tags: ['JavaScript', 'Java', 'CSS', 'HTML'],
    github: 'https://github.com/sasindu345/Gold-Victoria',
    icon: FaLaptopCode,
  },
  {
    title: 'Piyoway',
    subtitle: 'Tourist Guide (Galle MVP)',
    description: 'A PWA-ready tourist guide application for Galle with points of interest, listings, itinerary planning, and an admin dashboard. Built as a monorepo with a Next.js frontend and NestJS API backend.',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Gmora-CodeTheFuture/Piyoway',
    icon: FaMapMarkedAlt,
  },
  {
    title: 'Maze Master',
    subtitle: 'Microcontroller-Based Maze Game',
    description: 'A two-player Arduino-based competitive maze game with wirelessly controlled cars, dynamic rotating walls, RFID scoring, ultrasonic collision avoidance, and a Python-driven audio system for sound effects.',
    tags: ['Arduino', 'ESP32', 'C++', 'Python', 'ESP-NOW', 'RFID'],
    github: 'https://github.com/ThanojBuddhima/MazeMaster_codes',
    icon: FaMicrochip,
  },
];

