
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Add cosmic background class to body
    document.body.classList.add('bg-cosmic');
    
    return () => {
      document.body.classList.remove('bg-cosmic');
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated stars */}
      <div className="particles-container absolute inset-0 -z-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cosmic-purple/20 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cosmic-pink/20 rounded-full filter blur-[100px] -z-10"></div>
      
      <div className="cosmic-card text-center max-w-md w-full animate-fadeIn">
        <h1 className="text-8xl font-bold mb-6 glow-text">404</h1>
        <p className="text-2xl text-white mb-8">Oops! Page not found</p>
        <p className="text-white/70 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="cosmic-button inline-flex"
        >
          <ArrowLeft className="mr-2" size={20} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
