import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Progressive Web Apps',
    'Machine Learning',
    'Video Editing',
    'SEO Optimization',
    'UI/UX Design',
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61566605035360', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/we4tech_', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/we4_tech', label: 'Twitter' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">We4<span className="text-primary-400">Tech</span></span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We provide top-notch web development with PWA and SEO, graphic design, video editing services. Helping businesses grow with modern digital solutions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/50 text-slate-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@we4techagency.com" className="text-slate-400 hover:text-primary-400 transition-colors">
                  info@we4techagency.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-slate-400">
                  <a href="tel:+917989513675" className="hover:text-primary-400 transition-colors block">+91 7989513675</a>
                  <a href="tel:+919392984634" className="hover:text-primary-400 transition-colors block">+91 9392984634</a>
                </div>
              </li>
            </ul>

            {/* Partner Info */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-sm text-slate-500">
                Partnered with{' '}
                <a href="https://is-cod.in/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                  IS-COD.IN domain service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              &copy; {currentYear} We4Tech Agency. All Rights Reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> by We4Tech Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
