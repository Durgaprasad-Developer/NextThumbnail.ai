import React, { useState } from 'react';
import { Wand2, Download, Heart, Loader2 } from 'lucide-react';
import { toast } from "sonner";

const aspectRatios = [
  { value: '16:9', label: 'YouTube (16:9)' },
  { value: '9:16', label: 'Instagram (9:16)' },
];

const Generator = () => {
  const [prompt, setPrompt] = useState('');
  const [textOverlay, setTextOverlay] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleGenerate = () => {
    if (!prompt) {
      toast.error("Please enter a prompt for your thumbnail");
      return;
    }
    
    setIsGenerating(true);
    setGeneratedImage(null);
    
    // Simulate AI generation with a timeout
    setTimeout(() => {
      // For demo, we'll use a placeholder image
      setGeneratedImage('https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2574');
      setIsGenerating(false);
      toast.success("Your thumbnail has been generated!");
    }, 2000);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    toast(isLiked ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <section id="generator" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cosmic-pink/20 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Your <span className="glow-text">Perfect</span> Thumbnail
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Describe your ideal thumbnail, add text overlay, and choose your preferred aspect ratio. Our AI will do the rest.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Input Form */}
            <div className="cosmic-card flex flex-col h-full">
              <h3 className="text-xl font-medium mb-6">Thumbnail Settings</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium text-white/80 mb-2">
                    Describe your thumbnail
                  </label>
                  <textarea
                    id="prompt"
                    className="cosmic-input w-full h-32 resize-none"
                    placeholder="A professional YouTuber against a blue gradient background with dramatic lighting..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                
                {/* <div>
                  <label htmlFor="text-overlay" className="block text-sm font-medium text-white/80 mb-2">
                    Text overlay (optional)
                  </label>
                  <input
                    type="text"
                    id="text-overlay"
                    className="cosmic-input w-full"
                    placeholder="HOW I MADE $10K IN ONE MONTH"
                    value={textOverlay}
                    onChange={(e) => setTextOverlay(e.target.value)}
                  />
                </div> */}
                
                <div>
                  <label htmlFor="aspect-ratio" className="block text-sm font-medium text-white/80 mb-2">
                    Aspect ratio
                  </label>
                  <select
                    id="aspect-ratio"
                    className="cosmic-input w-full"
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                  >
                    {aspectRatios.map((ratio) => (
                      <option key={ratio.value} value={ratio.value}>
                        {ratio.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="cosmic-button mt-6 w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 size={20} />
                    Generate Thumbnail
                  </>
                )}
              </button>
            </div>
            
            {/* Preview */}
            <div className={`cosmic-card flex flex-col items-center justify-center ${generatedImage ? 'p-0 overflow-hidden' : ''}`}>
              {generatedImage ? (
                <div className="w-full h-full relative group">
                  <img
                    src={generatedImage}
                    alt="Generated thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {textOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg">
                        {textOverlay}
                      </h3>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <button
                      onClick={toggleLike}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Heart
                        size={20}
                        fill={isLiked ? "#F472B6" : "none"}
                        color={isLiked ? "#F472B6" : "white"}
                      />
                    </button>
                    
                    <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Download size={20} color="white" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-cosmic-gray/50 flex items-center justify-center">
                    <Wand2 size={40} className="text-cosmic-purple/70" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No thumbnail yet</h3>
                  <p className="text-white/60">
                    Fill in the form and click "Generate Thumbnail" to see the magic happen
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generator;
