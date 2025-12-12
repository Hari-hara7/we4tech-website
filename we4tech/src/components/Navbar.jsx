import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/{17DDC792-7C45-4638-9868-E4E08668F87D}.png';
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaEnvelope,
  FaCode,
  FaSearch,
  FaMobileAlt,
  FaBrain,
  FaVideo,
  FaPaintBrush,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/services', label: 'Services', icon: FaCogs },
    { path: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { path: '/about', label: 'Team', icon: FaUsers },
  ];

  const services = [
    { icon: FaCode, label: 'Web Development' },
    { icon: FaSearch, label: 'SEO Optimization' },
    { icon: FaMobileAlt, label: 'PWA Development' },
    { icon: FaBrain, label: 'Machine Learning' },
    { icon: FaPaintBrush, label: 'Graphic Design' },
    { icon: FaVideo, label: 'Video Editing' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={Logo} 
                alt="We4Tech Logo" 
                className="h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  <link.icon className="text-sm" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaEnvelope className="text-sm" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <link.icon />
                    <span>{link.label}</span>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl"
                >
                  <FaEnvelope />
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Services Ticker */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="flex animate-scroll">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-2.5 whitespace-nowrap text-slate-300 hover:text-white transition-colors"
            >
              <service.icon className="text-primary-400" />
              <span className="text-sm font-medium">{service.label}</span>
              <span className="text-slate-600">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar + ticker */}
      <div className="h-[104px] lg:h-[120px]" />
    </>
  );
};

export default Navbar;
