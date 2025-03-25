
import React, { useState } from 'react';
import { Heart, Download, ChevronRight } from 'lucide-react';

// Sample YouTube thumbnails data
const YOUTUBE_THUMBNAILS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=3432',
    title: 'How I Made $50K Online',
    aspectRatio: '16:9',
    likes: 245,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=3087',
    title: 'CRYPTO SECRETS REVEALED',
    aspectRatio: '16:9',
    likes: 189,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670',
    title: 'ULTIMATE Beach Workout',
    aspectRatio: '16:9',
    likes: 178,
  },
];

// Sample Instagram covers data - updated aspect ratio from 1:1 to 9:16
const INSTAGRAM_COVERS = [
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=2670',
    title: 'My Morning Routine',
    aspectRatio: '9:16',
    likes: 312,
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551817958-20204d6ab212?q=80&w=2670',
    title: 'Tech Review 2023',
    aspectRatio: '9:16',
    likes: 423,
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2670',
    title: 'NYC Travel Guide',
    aspectRatio: '9:16',
    likes: 267,
  },
];

const Gallery = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(itemId => itemId !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  const renderThumbnail = (item: any, isInstagram = false) => (
    <div key={item.id} className="cosmic-card p-0 overflow-hidden group relative vintage-filter">
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`w-full ${isInstagram ? 'h-80 object-cover object-center' : 'h-64 object-cover'}`}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-center text-xl font-bold px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg">
          {item.title}
        </h3>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
        <button
          onClick={() => toggleLike(item.id)}
          className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <Heart
            size={20}
            fill={likedItems.includes(item.id) ? "#F472B6" : "none"}
            color={likedItems.includes(item.id) ? "#F472B6" : "white"}
          />
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-white/80 text-sm">{item.aspectRatio}</span>
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
            <Download size={20} color="white" />
          </button>
        </div>
      </div>
      
      <div className="vintage-overlay"></div>
    </div>
  );

  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cosmic to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cosmic to-transparent z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our <span className="glow-text">Gallery</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Browse through our collection of AI-generated thumbnails. Like your favorites or get inspired for your next creation.
            </p>
          </div>
          
          {/* YouTube Thumbnails Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold relative vintage-heading">
                YouTube Thumbnails
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-cosmic-pink"></span>
              </h3>
              <span className="text-white/50 text-sm px-3 py-1 border border-white/20 rounded-full">16:9</span>
            </div>
            
            <div className="thumbnail-grid">
              {YOUTUBE_THUMBNAILS.map(item => renderThumbnail(item, false))}
            </div>
          </div>
          
          {/* Instagram Covers Section - updated label */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold relative vintage-heading">
                Instagram Covers
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-cosmic-pink"></span>
              </h3>
              <span className="text-white/50 text-sm px-3 py-1 border border-white/20 rounded-full">9:16</span>
            </div>
            
            <div className="instagram-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {INSTAGRAM_COVERS.map(item => (
                <div key={item.id} className="cosmic-card p-0 overflow-hidden group relative vintage-filter aspect-[9/16] flex items-center justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-center text-xl font-bold px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <button
                      onClick={() => toggleLike(item.id)}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Heart
                        size={20}
                        fill={likedItems.includes(item.id) ? "#F472B6" : "none"}
                        color={likedItems.includes(item.id) ? "#F472B6" : "white"}
                      />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 text-sm">{item.aspectRatio}</span>
                      <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Download size={20} color="white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="vintage-overlay"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="#" className="cosmic-button-outline inline-flex">
              View All <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
