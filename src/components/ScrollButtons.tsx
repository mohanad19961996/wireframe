import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ScrollButtonsProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function ScrollButtons({ language, selectedTheme, themeColors }: ScrollButtonsProps) {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Show navigation buttons when scrolled down
      setShowScrollButtons(scrollTop > 300);
      
      // Check if at bottom of page
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  if (!showScrollButtons) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="group relative w-14 h-14 rounded-full shadow-2xl backdrop-blur-sm border-2 hover:scale-110 cursor-pointer transition-all duration-500 p-0"
        style={{ 
          backgroundColor: `${themeColors[selectedTheme as keyof typeof themeColors].primary}90`,
          borderColor: `${themeColors[selectedTheme as keyof typeof themeColors].primary}30`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = themeColors[selectedTheme as keyof typeof themeColors].primary;
          e.currentTarget.style.borderColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}50`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}90`;
          e.currentTarget.style.borderColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}30`;
        }}
      >
        <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300" />
        
        {/* Elegant glow effect */}
        <div 
          className="absolute -inset-3 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"
          style={{ backgroundColor: themeColors[selectedTheme as keyof typeof themeColors].primary }}
        ></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="bg-card/95 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg border border-border/50 shadow-xl whitespace-nowrap">
            <div className="h-3 bg-muted rounded w-20"></div>
            <div 
              className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent"
              style={{ borderLeftColor: 'hsl(var(--card))' }}
            ></div>
          </div>
        </div>
      </Button>

      {/* Scroll to Bottom Button */}
      {!isAtBottom && (
        <Button
          onClick={scrollToBottom}
          className="group relative w-14 h-14 rounded-full shadow-2xl backdrop-blur-sm border-2 hover:scale-110 cursor-pointer transition-all duration-500 p-0"
          style={{ 
            backgroundColor: `${themeColors[selectedTheme as keyof typeof themeColors].primary}90`,
            borderColor: `${themeColors[selectedTheme as keyof typeof themeColors].primary}30`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = themeColors[selectedTheme as keyof typeof themeColors].primary;
            e.currentTarget.style.borderColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}50`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}90`;
            e.currentTarget.style.borderColor = `${themeColors[selectedTheme as keyof typeof themeColors].primary}30`;
          }}
        >
          <ChevronDown className="w-6 h-6 text-white group-hover:scale-110 group-hover:translate-y-0.5 transition-all duration-300" />
          
          {/* Elegant glow effect */}
          <div 
            className="absolute -inset-3 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"
            style={{ backgroundColor: themeColors[selectedTheme as keyof typeof themeColors].primary }}
          ></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-card/95 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg border border-border/50 shadow-xl whitespace-nowrap">
              <div className="h-3 bg-muted rounded w-24"></div>
              <div 
                className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                style={{ borderLeftColor: 'hsl(var(--card))' }}
              ></div>
            </div>
          </div>
        </Button>
      )}

      {/* Progress Indicator */}
      <div className="w-14 h-1 bg-muted/30 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: themeColors[selectedTheme as keyof typeof themeColors].primary,
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        ></div>
      </div>

    </div>
  );
}