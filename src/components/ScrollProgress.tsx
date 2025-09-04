import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30 backdrop-blur-sm">
      <div 
        className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150 ease-out rounded-r-full"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: scrollProgress > 0 ? '0 0 10px var(--primary)' : 'none'
        }}
      />
      
      {/* Animated pulse effect when scrolling */}
      {scrollProgress > 0 && scrollProgress < 100 && (
        <div 
          className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/30 animate-pulse"
          style={{ left: `${Math.max(0, scrollProgress - 8)}%` }}
        />
      )}
    </div>
  );
}