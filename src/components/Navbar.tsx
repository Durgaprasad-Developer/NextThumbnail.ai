
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cosmic/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              Next<span className="glow-text">Thumbnail</span>.ai
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#generator" className="text-white/80 hover:text-white transition-colors">
              Generator
            </a>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">
              Portfolio
            </a>
            <button className="cosmic-button text-sm">
              Get Started <ChevronRight size={16} />
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-cosmic-gray/95 backdrop-blur-md ${
          isMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'
        } overflow-hidden transition-all duration-300`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#features"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#generator"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Generator
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
