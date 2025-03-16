import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-black/30 rounded-full border border-green-500/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Link to="/" className="text-green-500 font-bold text-xl">PrintFlow</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-green-500 transition-colors">Features</a>
              <a href="#products" className="text-gray-300 hover:text-green-500 transition-colors">Products</a>
              <a href="#pricing" className="text-gray-300 hover:text-green-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-green-500 transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-green-500 transition-colors">FAQ</a>
              <Link to="/signin" className="text-gray-300 hover:text-green-500 transition-colors">Sign In</Link>
              <Link 
                to="/signup"
                className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-green-500/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-green-500">Features</a>
                <a href="#products" className="block px-3 py-2 text-gray-300 hover:text-green-500">Products</a>
                <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-green-500">Pricing</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-green-500">Testimonials</a>
                <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-green-500">FAQ</a>
                <Link to="/signin" className="block px-3 py-2 text-gray-300 hover:text-green-500">Sign In</Link>
                <Link to="/signup" className="block px-3 py-2 text-green-500 hover:text-green-400">Get Started</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}