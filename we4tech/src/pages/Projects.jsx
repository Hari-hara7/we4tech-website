import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode, FaImage, FaVideo, FaPalette } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import academicPalImage from '../assets/academicpal.png';
import globallane from '../assets/globallane.jpg';
import designGrid from '../assets/designgrid.jpg';
import skillCrafters from '../assets/skill crafters.jpg';
import academicpal20 from '../assets/academic2.0.jpg';
import portfolio1 from '../assets/Screenshot 2024-10-18 203028.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import graphic3 from '../assets/graphic3.png';
import graphic4 from '../assets/graphic4.png';
import acm from '../assets/acm.jpg';
import portfolio5 from '../assets/Portfolio5.png';
import portfolio6 from '../assets/Screenshot 2024-10-18 200552.png';
import portfolio7 from '../assets/Screenshot 2024-10-18 200650.png';
import portfolio8 from '../assets/Screenshot 2024-10-18 200814.png';
import portfolio9 from '../assets/Screenshot 2024-10-18 200855.png';
import portfolio10 from '../assets/Screenshot 2024-10-18 201015.png';
import portfolio11 from '../assets/Screenshot 2024-10-18 201117.png';
import portfolio12 from '../assets/Screenshot 2024-10-18 201247.png';
import portfolio13 from '../assets/Screenshot 2024-10-18 204055.png';
import portfolio14 from '../assets/Screenshot 2024-10-18 204513.png';
import portfolio15 from '../assets/Screenshot 2024-10-18 232953.png';
import portfolio16 from '../assets/Screenshot 2024-10-18 233056.png';
import portfolio27 from '../assets/Screenshot 2024-10-30 181728.png';
import portfolio28 from '../assets/Screenshot 2024-10-30 183847.png';
import portfolio29 from '../assets/Screenshot 2024-10-30 184254.png';
import portfolio30 from '../assets/Screenshot 2024-10-30 184523.png';
import portfolio31 from '../assets/Screenshot 2024-10-30 184756.png';
import portfolio32 from '../assets/banner.png';

const projects = [
  { title: "Global Lane", description: "A platform for import/export of agricultural products, supporting sustainable trade.", image: globallane, websiteLink: "https://www.global-lane.com/", githubLink: "https://github.com/global-lane" },
  { title: "Design Grid", description: "A design platform with customizable templates for web designers.", image: designGrid, websiteLink: "https://designgrid-two.vercel.app/", githubLink: "https://github.com/designgrid" },
  { title: "Skill Crafters", description: "Educational platform with curated roadmaps for aspiring developers.", image: skillCrafters, websiteLink: "https://skill-crafters.vercel.app/", githubLink: "https://github.com/skillcrafters" },
  { title: "Academic Pal", description: "Provides comprehensive notes for B.Tech students across semesters.", image: academicPalImage, websiteLink: "https://academicpal7.onrender.com/", githubLink: "https://github.com/academicpal" },
  { title: "Academic Pal 2.0", description: "Enhanced version of Academic Pal with personalized study plans and quizzes.", image: academicpal20, websiteLink: "https://academic-pal-v9t9.onrender.com/", githubLink: "https://github.com/academicpal2" },
  { title: "ACM Club Website", description: "The ACM Club website serves as a hub for students passionate about computer science.", image: acm, websiteLink: "https://acm-website2.vercel.app/", githubLink: "https://github.com/academicpal2" },
];

const portfolios = [
  { title: "Professional Portfolio", description: "Interactive portfolio for professionals.", image: portfolio32, websiteLink: "https://hariharanath.is-cod.in/", githubLink: "#" },
  { title: "Personal Portfolio", description: "Interactive portfolio for students.", image: portfolio1, websiteLink: "https://hari-portfolio-one.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 1", description: "Custom portfolio designed for SRM CSE students.", image: portfolio5, websiteLink: "https://harsha.is-cod.in", githubLink: "#" },
  { title: "SRM CSE Portfolio 2", description: "Interactive and modern portfolio.", image: portfolio16, websiteLink: "https://amar-nadh.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 3", description: "Engaging and modern portfolio.", image: portfolio6, websiteLink: "https://y-bharath.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 4", description: "Responsive portfolio showcasing projects.", image: portfolio8, websiteLink: "https://chandrahaas.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 5", description: "Stylish portfolio with clean design.", image: portfolio9, websiteLink: "https://abhinavreddyportfolio.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 6", description: "Portfolio featuring academic work.", image: portfolio10, websiteLink: "https://mahendra-portfolio-five.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 7", description: "Professional portfolio template.", image: portfolio11, websiteLink: "https://saianuragh.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 8", description: "Interactive and modern portfolio.", image: portfolio12, websiteLink: "https://l-dinesh.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 9", description: "Interactive student portfolio.", image: portfolio13, websiteLink: "https://achyuth-zeta.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 10", description: "Modern student portfolio.", image: portfolio14, websiteLink: "https://r-kiran.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 11", description: "Interactive portfolio.", image: portfolio15, websiteLink: "https://devi-sri-prasad.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 12", description: "Sleek portfolio template.", image: portfolio7, websiteLink: "https://s-guru-charan.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 13", description: "Interactive portfolio.", image: portfolio27, websiteLink: "https://achuthan.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 14", description: "Sleek portfolio template.", image: portfolio28, websiteLink: "https://srinath.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 15", description: "Interactive portfolio.", image: portfolio29, websiteLink: "https://srinath.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 16", description: "Sleek portfolio template.", image: portfolio30, websiteLink: "https://dheepesh.vercel.app/", githubLink: "#" },
  { title: "SRM CSE Portfolio 17", description: "Interactive portfolio.", image: portfolio31, websiteLink: "https://manojh-s.vercel.app/", githubLink: "#" },
  { title: "Student Portfolio", description: "Interactive student portfolio.", image: portfolio3, websiteLink: "https://685949a9-ab03-46b7-9f97-c7b78717e54d-00-9hp8qud45xhm.worf.replit.dev/", githubLink: "#" },
  { title: "Freelancer Portfolio", description: "Interactive freelancer portfolio.", image: portfolio4, websiteLink: "https://73320e7a-14af-4175-9514-b0f8601f8cf8-00-1uhib662k0v0a.spock.replit.dev/", githubLink: "#" },
];

const videoEditingProjects = [
  { title: "Cinematic Travel Vlog", description: "Beautifully edited cinematic video capturing scenic landscapes.", videoLink: video1 },
  { title: "Music Video with Motion Graphics", description: "Creative music video with dynamic motion graphics.", videoLink: video2 },
  { title: "Corporate Video Editing", description: "Professional corporate video for brand promotion.", videoLink: video3 },
  { title: "Event Highlight Reel", description: "Highlights of a large-scale event with transitions.", videoLink: video4 },
  { title: "Wedding Cinematic Edit", description: "Cinematic edit of a wedding ceremony.", videoLink: video5 },
  { title: "Documentary Short Film", description: "Short documentary focused on storytelling.", videoLink: video6 },
];

const graphicDesignProjects = [
  { title: "Poster Design", description: "Creative poster design for an event.", image: graphic1 },
  { title: "Social Media Graphics", description: "Designs for social media campaigns.", image: graphic2 },
  { title: "Poster Design 2", description: "Creative poster design for events.", image: graphic3 },
  { title: "Social Media Graphics 2", description: "Designs for social media.", image: graphic4 },
];

const categories = [
  { id: 'websites', label: 'Web Projects', icon: FaCode },
  { id: 'portfolios', label: 'Portfolios', icon: FaImage },
  { id: 'videos', label: 'Video Editing', icon: FaVideo },
  { id: 'graphics', label: 'Graphic Design', icon: FaPalette },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('websites');

  const getActiveProjects = () => {
    switch (activeCategory) {
      case 'websites': return projects;
      case 'portfolios': return portfolios;
      case 'videos': return videoEditingProjects;
      case 'graphics': return graphicDesignProjects;
      default: return projects;
    }
  };

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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Projects That
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Speak Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Explore our diverse portfolio of web applications, portfolios, videos, and graphic designs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-slate-200 sticky top-16 bg-white/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <category.icon className="text-sm sm:text-base" />
                <span className="text-sm sm:text-base">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {getActiveProjects().map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image/Video Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    {project.videoLink ? (
                      <video controls className="w-full h-full object-cover">
                        <source src={project.videoLink} type="video/mp4" />
                      </video>
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Links */}
                    {(project.websiteLink || project.githubLink) && (
                      <div className="flex items-center gap-3">
                        {project.websiteLink && project.websiteLink !== '#' && (
                          <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>Visit</span>
                          </a>
                        )}
                        {project.githubLink && project.githubLink !== '#' && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
                          >
                            <FaGithub />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'Projects Completed' },
              { value: '20+', label: 'Happy Clients' },
              { value: '20+', label: 'Portfolios Built' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
