
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmic-gray/30 pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-purple/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Next<span className="glow-text">Thumbnail</span>.ai
            </h3>
            <p className="text-white/70 mb-4">
              AI-powered thumbnail generator for content creators. Create stunning thumbnails in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Features
                </a>
              </li>
              <li>
                <a href="#generator" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Generator
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Gallery
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <ChevronRight size={16} />
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="cosmic-input rounded-r-none flex-grow"
              />
              <button className="cosmic-button rounded-l-none px-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} NextThumbnail.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
