
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
              <a href="https://www.instagram.com/____neon__9/" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/durga-prasad-reddy-a151382a0/" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Durgaprasad-Developer" className="text-white/60 hover:text-cosmic-purple transition-colors">
                <Github size={20} />
              </a>
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
