import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaMobileAlt, FaPaintBrush, FaVideo, FaCheck, FaBrain, FaChartLine, FaShieldAlt, FaClock, FaStar, FaArrowRight, FaPlay } from 'react-icons/fa';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const tidioScript = document.createElement('script');
    tidioScript.src = "//code.tidio.co/qnqhv178gomielhckx7xnojtikcpyjbk.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    const gaScript = document.createElement('script');
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BPM4F8NM9M";
    gaScript.async = true;
    document.body.appendChild(gaScript);

    gaScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-BPM4F8NM9M');
    };

    return () => {
      document.body.removeChild(tidioScript);
      document.body.removeChild(gaScript);
    };
  }, []);

  const services = [
    {
      icon: FaRocket,
      title: 'Web Development',
      description: 'Build lightning-fast, responsive websites with modern frameworks and cutting-edge technologies.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimized'],
    },
    {
      icon: FaMobileAlt,
      title: 'PWA Development',
      description: 'Create progressive web apps that work offline and provide native app-like experiences.',
      features: ['Offline Support', 'Push Notifications', 'Fast Loading'],
    },
    {
      icon: FaBrain,
      title: 'Machine Learning',
      description: 'Integrate intelligent ML solutions to automate processes and enhance decision-making.',
      features: ['AI Integration', 'Data Analytics', 'Smart Automation'],
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces that delight users and drive engagement.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'Create compelling video content that tells your brand story effectively.',
      features: ['Motion Graphics', 'Editing', 'Brand Videos'],
    },
    {
      icon: FaChartLine,
      title: 'SEO & Marketing',
      description: 'Boost your online visibility with data-driven SEO and digital marketing strategies.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics'],
    },
  ];

  const reasons = [
    {
      icon: FaShieldAlt,
      title: 'Quality Assured',
      description: 'We deliver pixel-perfect solutions with rigorous testing and quality control.',
    },
    {
      icon: FaStar,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to exceed expectations.',
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule without compromising quality.',
    },
    {
      icon: FaCheck,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience across multiple domains.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-60 animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-50 to-accent-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-100 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-600">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              We Build Digital
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Transform your business with premium web solutions. We deliver innovative, 
              high-performance digital experiences that drive growth and exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
              >
                <FaPlay className="text-sm" />
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end services to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-semibold rounded-full uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results that drive your business forward.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="text-xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Get in touch today and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
