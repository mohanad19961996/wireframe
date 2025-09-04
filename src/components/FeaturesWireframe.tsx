import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './AnimatedSection';

export default function FeaturesWireframe() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <FadeInLeft delay={200}>
          <div className="space-y-6">
            <div className="w-56 h-5 bg-primary/70 rounded"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary/60 rounded-full flex-shrink-0"></div>
                  <div className="w-48 h-3 bg-muted-foreground/50 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </FadeInLeft>
        
        <FadeInRight delay={400}>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden">
              <div className="absolute inset-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                <div className="absolute inset-4 grid grid-cols-2 gap-3">
                  <div className="bg-primary/15 rounded-md"></div>
                  <div className="bg-accent/20 rounded-md"></div>
                  <div className="bg-secondary/15 rounded-md col-span-2 h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </FadeInRight>
      </div>
      
      {/* Tabs Section */}
      <FadeInUp delay={600}>
        <div className="mb-12">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="tab1" className="h-10 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-16 h-3 bg-current/60 rounded"></div>
              </TabsTrigger>
              <TabsTrigger value="tab2" className="h-10 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-20 h-3 bg-current/60 rounded"></div>
              </TabsTrigger>
              <TabsTrigger value="tab3" className="h-10 cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="w-18 h-3 bg-current/60 rounded"></div>
              </TabsTrigger>
            </TabsList>
          
          <TabsContent value="tab1" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-full h-4 bg-foreground/30 rounded"></div>
                <div className="w-4/5 h-4 bg-foreground/30 rounded"></div>
                <div className="w-3/4 h-3 bg-muted-foreground/40 rounded"></div>
              </div>
              <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"></div>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-accent/40 rounded-lg transition-all duration-300 hover:rotate-12"></div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tab3" className="space-y-4">
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-background/60 rounded-lg border border-muted/30 cursor-pointer transition-all duration-300 hover:bg-background/80 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 group">
                  <div className="w-6 h-6 bg-primary/30 rounded-full transition-all duration-300 group-hover:bg-primary/50 group-hover:scale-110"></div>
                  <div className="flex-1 space-y-1">
                    <div className="w-32 h-3 bg-foreground/40 rounded transition-all duration-300 group-hover:bg-foreground/60"></div>
                    <div className="w-48 h-2 bg-muted-foreground/30 rounded transition-all duration-300 group-hover:bg-muted-foreground/50"></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </FadeInUp>
      
      {/* Professional Hover Flip Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((index) => (
          <ScaleIn key={index} delay={800 + (index * 200)}>
            <div className="group relative h-64 perspective-1000 cursor-pointer">
            <div className="absolute inset-0 transition-transform duration-700 transform-gpu group-hover:rotate-y-180">
              {/* Front of card */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm rounded-xl p-6 border border-border/60 shadow-lg shadow-primary/5 backface-hidden transform-gpu">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/40 rounded-lg"></div>
                  </div>
                  <div className="w-6 h-6 bg-muted/40 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full"></div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="mb-4">
                  <div className="w-40 h-5 bg-foreground/80 rounded-md mb-2"></div>
                  <div className="w-32 h-3 bg-primary/60 rounded-sm"></div>
                </div>
                
                {/* Content Lines */}
                <div className="space-y-3 mb-6">
                  <div className="w-full h-3 bg-muted-foreground/40 rounded"></div>
                  <div className="w-5/6 h-3 bg-muted-foreground/30 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted-foreground/25 rounded"></div>
                </div>
                
                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                    <div className="w-16 h-2 bg-muted-foreground/40 rounded"></div>
                  </div>
                  <div className="w-4 h-4 bg-muted/50 rounded rotate-45"></div>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-secondary/10 to-primary/5 backdrop-blur-sm rounded-xl p-6 border border-accent/30 shadow-xl shadow-accent/10 backface-hidden rotate-y-180 transform-gpu">
                {/* Back Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent/60 to-primary/40 rounded-xl"></div>
                  </div>
                  <div className="w-28 h-4 bg-accent/70 rounded mx-auto"></div>
                </div>
                
                {/* Enhanced Content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-accent/60 rounded"></div>
                    <div className="w-11/12 h-3 bg-accent/50 rounded"></div>
                    <div className="w-5/6 h-3 bg-accent/40 rounded"></div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent/10 to-transparent rounded-lg p-3">
                    <div className="space-y-2">
                      <div className="w-3/4 h-2 bg-accent/50 rounded"></div>
                      <div className="w-2/3 h-2 bg-accent/40 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-accent/20">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-3 h-3 bg-accent/60 rounded-full"></div>
                    <div className="w-24 h-8 bg-gradient-to-r from-accent/40 to-primary/30 rounded-lg"></div>
                    <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                  </div>
                </div>
                
                {/* Premium Indicator */}
                <div className="absolute top-3 left-3 w-8 h-3 bg-gradient-to-r from-accent/80 to-primary/60 rounded-full"></div>
              </div>
            </div>
          </div>
          </ScaleIn>
        ))}
      </div>
    </div>
  );
}