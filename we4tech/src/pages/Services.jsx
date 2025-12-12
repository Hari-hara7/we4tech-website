import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaBrain, FaVideo, FaSearch, FaPaintBrush, FaArrowRight, FaCheck } from 'react-icons/fa';

const servicesData = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'We create responsive, high-quality websites that provide a seamless user experience across all devices. From simple landing pages to complex web applications, we deliver excellence.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaMobileAlt,
    title: 'Progressive Web Apps',
    description: 'Our PWAs offer a native app-like experience with fast loading times and offline capabilities, making your applications accessible anytime, anywhere.',
    features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Cross-platform'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaBrain,
    title: 'Machine Learning',
    description: 'We develop machine learning solutions integrated with web applications, providing data-driven insights and intelligent functionalities.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: FaVideo,
    title: 'Video Production',
    description: 'Professional video editing services that bring your stories to life with stunning visuals and effects. We create captivating videos that engage your audience.',
    features: ['Motion Graphics', 'Brand Videos', 'Social Media Content', 'Post-production'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    description: 'Our SEO strategies help your website rank higher on search engines, attracting more visitors and increasing visibility with the latest techniques.',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Analytics & Reporting'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description: 'Create stunning visual identities and intuitive user experiences that captivate audiences and align perfectly with your brand personality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-orange-500 to-orange-600',
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Digital Solutions for
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We deliver comprehensive digital services that help businesses thrive in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-2xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <FaCheck className="text-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Take Your Project to the Next Level?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
                <FaArrowRight className="text-sm" />
              </Link>
              <a
                href="mailto:we4tech1@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;