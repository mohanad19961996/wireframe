import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';

export default function ServicesWireframe() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;

  // Infinite carousel data - duplicated for seamless loop
  const carouselItems = [
    { id: 1, color: 'primary', size: 'large' },
    { id: 2, color: 'accent', size: 'medium' },
    { id: 3, color: 'secondary', size: 'small' },
    { id: 4, color: 'primary', size: 'medium' },
    { id: 5, color: 'accent', size: 'large' },
    { id: 6, color: 'secondary', size: 'small' },
  ];

  // Triple the items for infinite scroll
  const infiniteItems = [...carouselItems, ...carouselItems, ...carouselItems];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoPlay) return;

    const scrollWidth = scrollContainer.scrollWidth / 3; // Since we tripled the content
    let scrollPosition = scrollWidth; // Start from middle set
    scrollContainer.scrollLeft = scrollPosition;

    const autoScroll = () => {
      scrollPosition += 1;
      
      // Reset to middle when reaching the end
      if (scrollPosition >= scrollWidth * 2) {
        scrollPosition = scrollWidth;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const interval = setInterval(autoScroll, 50); // Smooth scroll every 50ms

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Infinite Scroll Carousel */}
      <FadeInUp delay={200}>
        <div className="space-y-6">
          <div className="w-40 h-5 bg-foreground/60 rounded"></div>
          
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6 pb-4"
            style={{ 
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {infiniteItems.map((item, index) => (
              <div 
                key={`${item.id}-${Math.floor(index / carouselItems.length)}`}
                className={`flex-shrink-0 bg-gradient-to-br rounded-xl border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 hover:rotate-1 ${
                  item.color === 'primary' 
                    ? 'from-primary/15 to-primary/5 border-primary/20 shadow-primary/5' 
                    : item.color === 'accent'
                    ? 'from-accent/15 to-accent/5 border-accent/20 shadow-accent/5'
                    : 'from-secondary/15 to-secondary/5 border-secondary/20 shadow-secondary/5'
                } ${
                  item.size === 'large' ? 'w-80 h-48' :
                  item.size === 'medium' ? 'w-72 h-44' : 'w-64 h-40'
                }`}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`rounded-xl flex items-center justify-center ${
                      item.color === 'primary' 
                        ? 'w-12 h-12 bg-primary/20' 
                        : item.color === 'accent'
                        ? 'w-14 h-14 bg-accent/20'
                        : 'w-10 h-10 bg-secondary/20'
                    }`}>
                      <div className={`rounded-lg ${
                        item.color === 'primary' 
                          ? 'w-6 h-6 bg-primary/40' 
                          : item.color === 'accent'
                          ? 'w-7 h-7 bg-accent/40'
                          : 'w-5 h-5 bg-secondary/40'
                      }`}></div>
                    </div>
                    <div className="w-6 h-6 bg-muted/40 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 flex-grow">
                    <div className={`rounded ${
                      item.size === 'large' ? 'w-48 h-5 bg-foreground/70' :
                      item.size === 'medium' ? 'w-40 h-4 bg-foreground/60' : 'w-32 h-4 bg-foreground/50'
                    }`}></div>
                    <div className="space-y-2">
                      <div className={`rounded ${
                        item.size === 'large' ? 'w-full h-3 bg-muted-foreground/50' :
                        item.size === 'medium' ? 'w-5/6 h-3 bg-muted-foreground/40' : 'w-4/5 h-3 bg-muted-foreground/30'
                      }`}></div>
                      <div className={`rounded ${
                        item.size === 'large' ? 'w-5/6 h-3 bg-muted-foreground/40' :
                        item.size === 'medium' ? 'w-4/5 h-3 bg-muted-foreground/30' : 'w-3/4 h-3 bg-muted-foreground/25'
                      }`}></div>
                      {item.size === 'large' && (
                        <div className="w-3/4 h-3 bg-muted-foreground/30 rounded"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`rounded-full ${
                          item.color === 'primary' 
                            ? 'w-2 h-2 bg-primary/60' 
                            : item.color === 'accent'
                            ? 'w-2 h-2 bg-accent/60'
                            : 'w-2 h-2 bg-secondary/60'
                        }`}></div>
                        <div className="w-16 h-2 bg-muted-foreground/40 rounded"></div>
                      </div>
                      <div className={`rounded ${
                        item.color === 'primary' 
                          ? 'w-20 h-6 bg-primary/60' 
                          : item.color === 'accent'
                          ? 'w-24 h-6 bg-accent/60'
                          : 'w-18 h-6 bg-secondary/60'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for Infinite Feel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          
          {/* Auto-play Indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-primary animate-pulse' : 'bg-muted'}`}></div>
            <div className="w-16 h-3 bg-background/80 backdrop-blur-sm rounded-full"></div>
          </div>
        </div>
      </div>
      </FadeInUp>

      {/* Infinite Horizontal Scroll - Feature Showcase */}
      <FadeInLeft delay={400}>
        <div className="space-y-6">
          <div className="w-48 h-5 bg-foreground/60 rounded"></div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll gap-4">
            {/* First set of items */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm rounded-lg p-4 border border-border/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${
                    index % 3 === 0 ? 'bg-primary/20' :
                    index % 3 === 1 ? 'bg-accent/20' : 'bg-secondary/20'
                  }`}></div>
                  <div className="space-y-1">
                    <div className="w-24 h-3 bg-foreground/60 rounded"></div>
                    <div className="w-16 h-2 bg-muted-foreground/40 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-muted-foreground/30 rounded"></div>
                  <div className="w-5/6 h-2 bg-muted-foreground/25 rounded"></div>
                  <div className="w-4/5 h-2 bg-muted-foreground/20 rounded"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0 w-64 h-32 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm rounded-lg p-4 border border-border/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${
                    index % 3 === 0 ? 'bg-primary/20' :
                    index % 3 === 1 ? 'bg-accent/20' : 'bg-secondary/20'
                  }`}></div>
                  <div className="space-y-1">
                    <div className="w-24 h-3 bg-foreground/60 rounded"></div>
                    <div className="w-16 h-2 bg-muted-foreground/40 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-muted-foreground/30 rounded"></div>
                  <div className="w-5/6 h-2 bg-muted-foreground/25 rounded"></div>
                  <div className="w-4/5 h-2 bg-muted-foreground/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeInLeft>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Basic Package */}
        <ScaleIn delay={600}>
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-muted relative cursor-pointer card-hover transition-all duration-300 group">
          <div className="text-center mb-6">
            <div className="w-24 h-4 bg-foreground/60 rounded mx-auto mb-2"></div>
            <div className="w-16 h-6 bg-foreground/80 rounded mx-auto mb-2"></div>
            <div className="w-32 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
          </div>
          
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary/60 rounded-full flex-shrink-0"></div>
                <div className="w-24 h-3 bg-muted-foreground/50 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="w-full h-9 bg-transparent border border-primary/30 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-md hover:-translate-y-1 group-hover:scale-105"></div>
        </div>
        </ScaleIn>
        
        {/* Popular Package */}
        <ScaleIn delay={800}>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20 relative transform scale-105 cursor-pointer card-hover transition-all duration-300 group hover:scale-110">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-5 bg-primary/80 rounded-full"></div>
          </div>
          
          <div className="text-center mb-6 pt-3">
            <div className="w-28 h-4 bg-foreground/60 rounded mx-auto mb-2"></div>
            <div className="w-16 h-6 bg-foreground/80 rounded mx-auto mb-2"></div>
            <div className="w-36 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
          </div>
          
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary/60 rounded-full flex-shrink-0"></div>
                <div className="w-32 h-3 bg-muted-foreground/50 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="w-full h-9 bg-primary/80 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 group-hover:scale-105"></div>
        </div>
        </ScaleIn>
        
        {/* Premium Package */}
        <ScaleIn delay={1000}>
          <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl p-6 border border-accent/30 relative cursor-pointer card-hover transition-all duration-300 group">
          <div className="text-center mb-6">
            <div className="w-24 h-4 bg-foreground/60 rounded mx-auto mb-2"></div>
            <div className="w-16 h-6 bg-foreground/80 rounded mx-auto mb-2"></div>
            <div className="w-28 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
          </div>
          
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent/60 rounded-full flex-shrink-0"></div>
                <div className="w-28 h-3 bg-muted-foreground/50 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="w-full h-9 bg-transparent border border-accent/40 rounded-lg cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:shadow-md hover:-translate-y-1 group-hover:scale-105"></div>
        </div>
        </ScaleIn>
      </div>
      
      {/* Pagination Example */}
      <div className="space-y-6">
        <div className="w-32 h-4 bg-foreground/60 rounded"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-muted/30 cursor-pointer card-hover transition-all duration-300 hover:bg-background/80 hover:border-primary/20">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
                <div className="w-full h-3 bg-foreground/40 rounded"></div>
                <div className="w-4/5 h-3 bg-muted-foreground/40 rounded"></div>
                <div className="space-y-1">
                  <div className="w-full h-2 bg-muted-foreground/30 rounded"></div>
                  <div className="w-3/4 h-2 bg-muted-foreground/30 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                  className="cursor-pointer transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}