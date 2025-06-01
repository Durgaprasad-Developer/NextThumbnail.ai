
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Generator from '@/components/Generator';
import Gallery from '@/components/Gallery';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add class to body for global styling
    document.body.classList.add('bg-cosmic');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const href = (this as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.body.classList.remove('bg-cosmic');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Generator />
{/*         <Gallery />
        <Portfolio /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
