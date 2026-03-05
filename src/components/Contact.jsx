import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const contactInfo = [
  {
    icon: <FaEnvelope size={20} />,
    label: 'Email',
    value: 'sapuni.pathirana@example.com',
    href: 'mailto:sapuni.pathirana@example.com',
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: 'Location',
    value: 'Moratuwa, Sri Lanka',
    href: null,
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sapuni',
    href: 'https://linkedin.com',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/sapuni',
    href: 'https://github.com',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-base-200/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-base-content/60 mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-content/50 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full h-32 focus:textarea-primary resize-none"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>

            {status === 'sent' && (
              <div className="alert alert-success text-sm">
                <span>Message sent successfully! I will get back to you soon.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
