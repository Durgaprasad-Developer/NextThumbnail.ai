
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create stars
    const createStars = () => {
      const container = particlesRef.current;
      if (!container) return;
      
      // Clear existing stars
      container.innerHTML = '';
      
      // Create varying sizes of stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() > 0.95 ? 'star-large' : Math.random() > 0.7 ? 'star-medium' : 'star-small';
        star.className = size;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }
      
      // Create glow circles
      for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'glow-circle';
        circle.style.width = `${300 + Math.random() * 400}px`;
        circle.style.height = circle.style.width;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.opacity = `${0.2 + Math.random() * 0.4}`;
        container.appendChild(circle);
      }
    };
    
    createStars();
    
    // Recreate stars on window resize for responsiveness
    window.addEventListener('resize', createStars);
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32">
      <div className="particles-container" ref={particlesRef}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="animate-fadeIn text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Create Stunning <span className="glow-text">AI-Generated</span> Thumbnails in Seconds
            </h1>
            
            <p className="animate-fadeIn opacity-0 animation-delay-100 text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto md:mx-0">
              Transform your content with eye-catching thumbnails that drive engagement.
              Our AI-powered generator creates perfect thumbnails for YouTube, Instagram, and more.
            </p>
            
            <div className="animate-fadeIn opacity-0 animation-delay-200 flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">
              <a href="#generator" className="cosmic-button text-base group">
                Start Creating 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#gallery" className="cosmic-button-outline text-base">
                View Gallery
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fadeIn opacity-0 animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-xl opacity-70 blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden vintage-filter border-2 border-white/10 shadow-glow">
                <img 
                  src="/lovable-uploads/4323735d-b67c-42d7-b15e-867655b27183.png" 
                  alt="AI-Generated Thumbnail Example" 
                  className="w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-500" 
                />
                <div className="vintage-overlay"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-xs px-3 py-1 bg-cosmic-gray/80 backdrop-blur-sm rounded-full text-white/80 border border-white/10">
                Sample AI thumbnail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
