import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSocketdotio, SiVite, SiReact, SiTailwindcss, SiBootstrap, SiBulma, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiFirebase, SiTensorflow, SiPython, SiPytorch, SiScikitlearn, SiKeras } from 'react-icons/si';
import HARI from '../assets/hari.jpeg';
import Anand from '../assets/anand.jpeg';
import Aaran from '../assets/aran.jpg';
import vedanth from '../assets/vedant.jpg';
import Teja from '../assets/pushaparaj.jpg';
import Manohar from '../assets/Screenshot 2024-10-11 215812.png';
import Devdat from '../assets/Devdat.png';

const teamMembers = [
  { name: 'Hariharanath', role: 'Full Stack Developer', description: 'Passionate about creating dynamic web applications and learning new technologies.', github: 'https://github.com/Hari-hara7', linkedin: 'https://www.linkedin.com/in/hari-hara-nath-a13583282/', portfolio: 'https://hariharanath.is-cod.in/', photo: HARI },
  { name: 'Anand', role: 'Full Stack Developer', description: 'Experienced in server-side logic and database management.', github: 'https://github.com/anandbobba', linkedin: 'https://www.linkedin.com/in/anandbobba/', photo: Anand },
  { name: 'Teja', role: 'ML Integrator', description: 'Specializes in integrating machine learning models into applications.', github: 'https://github.com/Gunateja653', linkedin: 'https://www.linkedin.com/in/guna-teja-sarvan-patnaik-0942a2275/', photo: Teja },
  { name: 'Aaran', role: 'Frontend Developer', description: 'Passionate about building seamless web experiences.', github: 'https://github.com/Araan-Sheikh', linkedin: 'https://www.linkedin.com/in/araan-sheikh-523715327', photo: Aaran },
  { name: 'Vedant', role: 'Graphic Designer', description: 'Creative mind behind visual designs and branding.', github: 'https://github.com/Vedant10Mahalle', linkedin: 'https://www.linkedin.com/in/vedant-mahalle-b217b4290/', photo: vedanth },
  { name: 'Devdat', role: 'Graphic Designer', description: 'Creative mind behind visual designs and branding.', github: 'https://github.com/devdat2021', linkedin: 'https://www.linkedin.com/in/devdat-p-b59415327/', photo: Devdat },
  { name: 'Manohar', role: 'Video Editor', description: 'Skilled in crafting engaging video content.', instagram: 'https://www.instagram.com/manoharnaik09/', photo: Manohar },
];

const techStack = [
  { name: 'Socket.IO', icon: SiSocketdotio, color: 'text-slate-800' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
  { name: 'Bulma', icon: SiBulma, color: 'text-teal-500' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-400' },
  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
  { name: 'Keras', icon: SiKeras, color: 'text-red-600' },
];

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Meet the Team Behind
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                We4Tech
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We are a passionate team dedicated to providing top-notch web development, PWA, SEO, UI/UX design, and much more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A talented group of professionals passionate about creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-primary-100 group-hover:border-primary-300 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 mb-5 line-clamp-2">{member.description}</p>

                <div className="flex justify-center gap-3">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
                      <FaGithub className="text-base" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                      <FaLinkedin className="text-base" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-pink-500 hover:text-white transition-all">
                      <FaInstagram className="text-base" />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary-600 hover:text-white transition-all">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Tech Stack</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We use cutting-edge technologies to build powerful solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-primary-500 hover:bg-slate-800 transition-all"
              >
                <tech.icon className={`text-3xl mb-2 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs text-slate-400 text-center font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">What drives us to deliver exceptional results.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'We embrace new technologies and creative solutions to solve complex problems.' },
              { title: 'Quality', description: 'We deliver high-quality work that exceeds expectations and stands the test of time.' },
              { title: 'Collaboration', description: 'We work closely with clients and team members to achieve shared goals.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
