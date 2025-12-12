import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCookieBite, FaShieldAlt } from 'react-icons/fa';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShowConsent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon & Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center">
                    <FaCookieBite className="text-2xl text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                      We Value Your Privacy
                      <FaShieldAlt className="text-success-500 text-sm" />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                      By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                      <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline font-medium">
                        Privacy Policy
                      </a>{' '}
                      for more information.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={declineCookies}
                    className="px-6 py-2.5 text-slate-600 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
                  >
                    Decline
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Accept All Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
