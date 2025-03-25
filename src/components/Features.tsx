
import React from 'react';
import { 
  Wand2, 
  LayoutGrid, 
  Download, 
  Share2, 
  Youtube, 
  Instagram, 
  Smile, 
  Lock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wand2 size={36} className="text-cosmic-purple" />,
      title: 'AI-Powered Generation',
      description: 'Our advanced AI algorithm creates stunning thumbnails based on your description and preferences.'
    },
    {
      icon: <LayoutGrid size={36} className="text-cosmic-pink" />,
      title: 'Multiple Formats',
      description: 'Create thumbnails for YouTube, Instagram, and social media stories with different aspect ratios.'
    },
    {
      icon: <Download size={36} className="text-cosmic-purple" />,
      title: 'Easy Downloads',
      description: 'Download your thumbnails in high resolution, ready to use for your content.'
    },
    {
      icon: <Share2 size={36} className="text-cosmic-pink" />,
      title: 'Community Sharing',
      description: 'Share your creations with the community and get inspired by others.'
    },
    {
      icon: <Youtube size={36} className="text-cosmic-purple" />,
      title: 'YouTube Optimized',
      description: 'Thumbnails designed to increase click-through rates on YouTube videos.'
    },
    {
      icon: <Instagram size={36} className="text-cosmic-pink" />,
      title: 'Instagram Ready',
      description: 'Perfect for Instagram posts, stories, and reels to boost engagement.'
    },
    {
      icon: <Smile size={36} className="text-cosmic-purple" />,
      title: 'User-Friendly',
      description: 'Simple and intuitive interface that makes thumbnail creation a breeze.'
    },
    {
      icon: <Lock size={36} className="text-cosmic-pink" />,
      title: 'Private Collection',
      description: 'Keep your generated thumbnails in a private collection for future use.'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-full h-full bg-glow-gradient opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="glow-text">Features</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              NextThumbnail.ai comes packed with everything you need to create stunning thumbnails that capture attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="cosmic-card hover:translate-y-[-5px] transition-transform"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
