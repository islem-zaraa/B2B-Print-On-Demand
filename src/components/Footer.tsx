import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically make an API call to subscribe the user
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="border-t border-green-500/10 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-green-500 font-bold text-xl mb-6">PrintFlow</h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses with seamless print-on-demand solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-green-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-green-500 transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/documentation" className="text-gray-400 hover:text-green-500 transition-colors">Documentation</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-green-500 transition-colors">Help Center</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-green-500 transition-colors">API Reference</Link></li>
              <li><Link to="/status" className="text-gray-400 hover:text-green-500 transition-colors">Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Get the latest news and updates
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/30 border border-green-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 backdrop-blur-xl"
              />
              <button
                type="submit"
                className={`relative bg-green-500 text-black p-2 rounded-lg hover:bg-green-400 transition-all duration-300 ${
                  isSubscribed ? 'animate-bounce' : ''
                }`}
                disabled={isSubscribed}
              >
                <div className={`transform transition-all duration-300 ${
                  isSubscribed ? 'scale-0' : 'scale-100'
                }`}>
                  <Send size={20} />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transform transition-all duration-300 ${
                  isSubscribed ? 'scale-100' : 'scale-0'
                }`}>
                  <CheckCircle size={20} />
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PrintFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}