
import React from 'react';
import { Users, Clock, Smile } from 'lucide-react';

const Portfolio = () => {
  // Sample portfolio data
  const portfolioItems = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=3087',
      username: 'techguru',
      likes: 234,
      date: '2 days ago',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2670',
      username: 'travelmaster',
      likes: 189,
      date: '1 week ago',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=2670',
      username: 'creativeminds',
      likes: 347,
      date: '3 days ago',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551817958-20204d6ab212?q=80&w=2670',
      username: 'digitalcreator',
      likes: 276,
      date: '5 days ago',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-cosmic-gray/30 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cosmic to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community <span className="glow-text">Portfolio</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover the creative thumbnails from our community. Get inspired and showcase your own creations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="cosmic-card p-0 overflow-hidden group">
                <div className="relative h-56">
                  <img
                    src={item.imageUrl}
                    alt={`Portfolio item by ${item.username}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-80 transition-opacity"></div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-cosmic-purple" />
                      <span className="text-sm font-medium">@{item.username}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Smile size={16} className="text-cosmic-pink" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock size={14} />
                    <span className="text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="cosmic-button inline-flex">
              Join The Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
