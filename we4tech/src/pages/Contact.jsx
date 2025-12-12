import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://usebasin.com/f/6bfedd3896c1', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);
    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('There was an issue sending your message. Please try again.');
    }
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Location', details: ['Karnataka, India'], color: 'from-green-500 to-emerald-500' },
    { icon: FaEnvelope, title: 'Email', details: ['info@we4techagency.com', 'we4tech1@gmail.com'], color: 'from-blue-500 to-cyan-500' },
    { icon: FaPhoneAlt, title: 'Phone', details: ['+91 7989513675', '+91 9392984634', '+91 7989777877'], color: 'from-purple-500 to-pink-500' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://x.com/we4_tech', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61566605035360', label: 'Facebook', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: 'https://www.instagram.com/we4tech_', label: 'Instagram', color: 'hover:bg-pink-500' },
  ];

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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                  <info.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : isSubmitted ? (
                    <>
                      <FaCheck />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-4">Why Work With Us?</h3>
                <p className="text-slate-300 mb-8">We are committed to delivering exceptional results that exceed your expectations.</p>

                <ul className="space-y-4 mb-10">
                  {['24/7 Support Available', 'Quick Response Time', 'Dedicated Project Manager', 'Transparent Pricing', 'Quality Guaranteed'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-200">
                      <span className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <FaCheck className="text-xs text-primary-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 text-white ${social.color} transition-all`}
                      >
                        <social.icon className="text-lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
