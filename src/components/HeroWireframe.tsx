import { FadeInUp, FadeInLeft, ScaleIn } from './AnimatedSection';

export default function HeroWireframe() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px]">
      {/* Left side - Content wireframe */}
      <div className="space-y-6">
        {/* Badge */}
        <FadeInLeft delay={300}>
          <div className="w-32 h-6 bg-primary/10 rounded-full"></div>
        </FadeInLeft>
        
        {/* Title lines */}
        <FadeInLeft delay={500}>
          <div className="space-y-3">
            <div className="w-full h-8 bg-foreground/20 rounded-lg"></div>
            <div className="w-4/5 h-8 bg-foreground/20 rounded-lg"></div>
          </div>
        </FadeInLeft>
        
        {/* Subtitle lines */}
        <FadeInLeft delay={700}>
          <div className="space-y-2">
            <div className="w-full h-4 bg-muted-foreground/30 rounded"></div>
            <div className="w-5/6 h-4 bg-muted-foreground/30 rounded"></div>
            <div className="w-3/4 h-4 bg-muted-foreground/30 rounded"></div>
          </div>
        </FadeInLeft>
        
        {/* Buttons */}
        <FadeInUp delay={900}>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-40 h-10 bg-primary/80 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 hover:scale-105"></div>
            <div className="w-32 h-10 bg-transparent border-2 border-primary/30 rounded-lg cursor-pointer transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-md hover:-translate-y-1 hover:scale-105"></div>
          </div>
        </FadeInUp>
        
        {/* Trust indicators */}
        <FadeInUp delay={1100}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-primary/20 rounded-full border-2 border-background transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110 group-hover:shadow-md"></div>
                ))}
              </div>
              <div className="w-20 h-3 bg-muted-foreground/40 rounded transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <div className="w-4 h-4 bg-yellow-400/60 rounded-sm transition-all duration-300 group-hover:bg-yellow-400/80 group-hover:scale-110 group-hover:rotate-12"></div>
              <div className="w-8 h-3 bg-muted-foreground/40 rounded transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
            </div>
          </div>
        </FadeInUp>
      </div>
      
      {/* Right side - Visual wireframe with vertical infinite scroll */}
      <ScaleIn delay={600}>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden">
            {/* Vertical Infinite Scroll Background */}
            <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
              <div className="animate-vertical-scroll flex flex-col gap-3 py-4">
                {/* First set */}
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={`v1-${index}`} className={`mx-4 rounded-md ${
                    index % 3 === 0 ? 'h-8 bg-primary/15' :
                    index % 3 === 1 ? 'h-6 bg-accent/20' : 'h-10 bg-secondary/15'
                  }`}></div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={`v2-${index}`} className={`mx-4 rounded-md ${
                    index % 3 === 0 ? 'h-8 bg-primary/15' :
                    index % 3 === 1 ? 'h-6 bg-accent/20' : 'h-10 bg-secondary/15'
                  }`}></div>
                ))}
              </div>
              
              {/* Center focal point */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/25 to-primary/35 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <div className="w-12 h-12 bg-primary/50 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-3 right-3 w-8 h-8 bg-accent/60 rounded-md animate-float"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 bg-secondary/60 rounded-full animate-float-delayed"></div>
            
            {/* Gradient overlays for smooth infinite effect */}
            <div className="absolute top-4 left-4 right-4 h-6 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 h-6 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </ScaleIn>
    </div>
  );
}