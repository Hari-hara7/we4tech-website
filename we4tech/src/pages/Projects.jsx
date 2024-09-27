import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';
import academicPalImage from '../assets/Academicpal.png';
import globallane from '../assets/Globallane.png';
import Designgrid from '../assets/designgrid.png';
import skillcrafters from '../assets/skillcrafters.png';
import academicpal20 from '../assets/academicpal2.0.png';



const projects = [
  {
    title: "Academic Pal",
    description: "Provides comprehensive and organized notes for B.Tech students, covering various subjects across different semesters. Academic Pal offers an intuitive interface, allowing students to quickly find the materials they need, including detailed syllabi, past question papers, and extensive question banks. This platform helps students prepare for exams with ease and ensures access to quality educational resources.",
    image: academicPalImage,
    websiteLink: "https://academicpal7.onrender.com/",
    githubLink: "https://github.com/academicpal",
  },
  {
    title: "Global Lane",
    description: "A global platform that specializes in the import and export of agricultural products, connecting farmers and suppliers from various regions. Global Lane offers transparent pricing, efficient logistics, and real-time tracking for shipments. The platform is aimed at bridging the gap between local agricultural producers and international markets, helping to drive sustainable trade practices and improve the livelihoods of farmers.",
    image: globallane,
    websiteLink: "https://www.global-lane.com/",
    githubLink: "https://github.com/global-lane",
  },
  {
    title: "Design Grid",
    description: "A design platform that offers a wide variety of customizable templates for web developers and designers. Design Grid focuses on providing a streamlined user experience, allowing professionals to quickly access and download high-quality templates for web and mobile interfaces, including UI kits, icon sets, and wireframes. This platform is essential for designers looking to save time and enhance creativity while maintaining modern design standards.",
    image: Designgrid,
    websiteLink: "https://designgrid-two.vercel.app/",
    githubLink: "https://github.com/designgrid",
  },
  {
    title: "Skill Crafters",
    description: "Skill Crafters is an educational platform that provides carefully curated roadmaps and learning paths for aspiring developers. Covering frontend, backend, full-stack, and DevOps technologies, Skill Crafters enables learners to build solid skills through hands-on projects and step-by-step guides. Whether you’re starting from scratch or advancing your knowledge, Skill Crafters is your go-to resource for mastering coding and software development.",
    image: skillcrafters,
    websiteLink: "https://skill-crafters.vercel.app/",
    githubLink: "https://github.com/skillcrafters",
  },
  {
    title: "Academic Pal 2.0",
    description: "The next-generation Academic Pal platform with new features designed to enhance student learning. Academic Pal 2.0 includes personalized study plans, advanced search functionality, and a collaborative notes section where students can share their study materials. This version integrates interactive quizzes and AI-based recommendations to help students identify their strengths and focus on areas that need improvement.",
    image: academicpal20,
    websiteLink: "https://academic-pal-v9t9.onrender.com/",
    githubLink: "https://github.com/academicpal2",
  }
];

const portfolios = [
  {
    title: "Student Portfolio",
    description: "Interactive portfolio for students.",
    image: "/images/portfolio1.jpg",
    websiteLink: "https://portfolio-hari-two.vercel.app/",
    githubLink: "#"
  },
  {
    title: "Freelancer Portfolio",
    description: "Interactive portfolio for freelancers.",
    image: "/images/portfolio2.jpg",
    websiteLink: "#",
    githubLink: "#"
  }
];

const videoEditingProjects = [
  {
    title: "Video Editing Project 1",
    description: "Cinematic video editing for travel vlogs.",
    image: "/images/video1.jpg",
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Video Editing Project 2",
    description: "Music video editing with motion graphics.",
    image: "/images/video2.jpg",
    websiteLink: "#",
    githubLink: "#"
  }
];

const graphicDesignProjects = [
  {
    title: "Poster Design 1",
    description: "Creative poster design for an event.",
    image: "/images/graphic1.jpg",
    websiteLink: "#",
    githubLink: "#"
  },
  {
    title: "Social Media Graphics",
    description: "Designs for social media campaigns.",
    image: "/images/graphic2.jpg",
    websiteLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      {/* Web Projects */}
      <h1 className="section-title">Our Web Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Visit Site
                </a>
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Portfolios */}
      <h1 className="section-title">Portfolios We Build</h1>
      <div className="projects-grid">
        {portfolios.map((portfolio, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={portfolio.image} alt={portfolio.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{portfolio.title}</h2>
              <p className="project-description">{portfolio.description}</p>
              <div className="project-links">
                <a href={portfolio.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Portfolio
                </a>
                <a href={portfolio.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Editing Projects */}
      <h1 className="section-title">Video Editing Projects</h1>
      <div className="projects-grid">
        {videoEditingProjects.map((videoProject, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={videoProject.image} alt={videoProject.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{videoProject.title}</h2>
              <p className="project-description">{videoProject.description}</p>
              <div className="project-links">
                <a href={videoProject.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Project
                </a>
                <a href={videoProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Graphic Design Projects */}
      <h1 className="section-title">Graphic Design Projects</h1>
      <div className="projects-grid">
        {graphicDesignProjects.map((graphicProject, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={graphicProject.image} alt={graphicProject.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{graphicProject.title}</h2>
              <p className="project-description">{graphicProject.description}</p>
              <div className="project-links">
                <a href={graphicProject.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View Project
                </a>
                <a href={graphicProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
