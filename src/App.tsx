import React from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WireframeSection from "./components/WireframeSection";
import { LanguageProvider } from "./components/LanguageContext";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './components/AnimatedSection';

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="pt-16">
        {/* HERO SECTION */}
        <WireframeSection id="hero" variant="gradient" animation="scaleIn" animationDelay={200}>
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[400px]">
            {/* Left side - Content wireframe */}
            <div className="space-y-6">
              <FadeInLeft delay={300}>
                <div className="w-32 h-6 bg-primary/10 rounded-full"></div>
              </FadeInLeft>
              
              <FadeInLeft delay={500}>
                <div className="space-y-3">
                  <div className="w-full h-8 bg-foreground/20 rounded-lg"></div>
                  <div className="w-4/5 h-8 bg-foreground/20 rounded-lg"></div>
                </div>
              </FadeInLeft>
              
              <FadeInLeft delay={700}>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-muted-foreground/30 rounded"></div>
                  <div className="w-5/6 h-4 bg-muted-foreground/30 rounded"></div>
                  <div className="w-3/4 h-4 bg-muted-foreground/30 rounded"></div>
                </div>
              </FadeInLeft>
              
              <FadeInUp delay={900}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-40 h-10 bg-primary/80 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 hover:scale-105"></div>
                  <div className="w-32 h-10 bg-transparent border-2 border-primary/30 rounded-lg cursor-pointer transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-md hover:-translate-y-1 hover:scale-105"></div>
                </div>
              </FadeInUp>
            </div>
            
            {/* Right side - Visual wireframe */}
            <ScaleIn delay={600}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
                    <div className="animate-vertical-scroll flex flex-col gap-3 py-4">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className={`mx-4 rounded-md ${
                          index % 3 === 0 ? 'h-8 bg-primary/15' :
                          index % 3 === 1 ? 'h-6 bg-accent/20' : 'h-10 bg-secondary/15'
                        }`}></div>
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/25 to-primary/35 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                        <div className="w-12 h-12 bg-primary/50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 bg-accent/60 rounded-md animate-float"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 bg-secondary/60 rounded-full animate-float-delayed"></div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </WireframeSection>

        {/* PROBLEM SECTION */}
        <WireframeSection id="problem" backgroundColor="bg-background" animation="fadeInLeft" animationDelay={100}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-destructive/10 hover:-translate-y-2 hover:scale-105 group">
                  <div className="w-10 h-10 bg-destructive/20 rounded-lg mx-auto mb-4 transition-all duration-300 group-hover:bg-destructive/30 group-hover:scale-110 group-hover:rotate-12"></div>
                  <div className="w-24 h-4 bg-destructive/60 rounded mx-auto mb-3 transition-all duration-300 group-hover:bg-destructive/80"></div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-muted-foreground/40 rounded transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
                    <div className="w-4/5 h-3 bg-muted-foreground/40 rounded mx-auto transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WireframeSection>

        {/* FEATURES SECTION */}
        <WireframeSection id="features" variant="accent" animation="fadeInUp" animationDelay={150}>
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
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <ScaleIn key={index} delay={600 + (index * 200)}>
                  <div className="group relative h-64 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm rounded-xl p-6 border border-border/60 shadow-lg shadow-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                          <div className="w-6 h-6 bg-primary/40 rounded-lg"></div>
                        </div>
                        <div className="w-6 h-6 bg-muted/40 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="w-40 h-5 bg-foreground/80 rounded-md mb-2"></div>
                        <div className="w-32 h-3 bg-primary/60 rounded-sm"></div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="w-full h-3 bg-muted-foreground/40 rounded"></div>
                        <div className="w-5/6 h-3 bg-muted-foreground/30 rounded"></div>
                        <div className="w-4/5 h-3 bg-muted-foreground/25 rounded"></div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                          <div className="w-16 h-2 bg-muted-foreground/40 rounded"></div>
                        </div>
                        <div className="w-4 h-4 bg-muted/50 rounded rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </WireframeSection>

        {/* SERVICES SECTION */}
        <WireframeSection id="services" backgroundColor="bg-background" animation="fadeInRight" animationDelay={100}>
          <div className="max-w-6xl mx-auto space-y-12">
            <FadeInUp delay={200}>
              <div className="space-y-6">
                <div className="w-40 h-5 bg-foreground/60 rounded"></div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm rounded-lg p-4 border border-border/40 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
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
            </FadeInUp>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { type: 'basic', color: 'muted' },
                { type: 'popular', color: 'primary' },
                { type: 'premium', color: 'accent' }
              ].map((plan, index) => (
                <ScaleIn key={plan.type} delay={600 + (index * 200)}>
                  <div className={`bg-gradient-to-br rounded-xl p-6 border relative cursor-pointer transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${
                    plan.type === 'basic' ? 'from-muted/50 to-muted/30 border-muted' :
                    plan.type === 'popular' ? 'from-primary/10 to-primary/5 border-2 border-primary/20 scale-105' :
                    'from-accent/20 to-accent/10 border-accent/30'
                  }`}>
                    {plan.type === 'popular' && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-20 h-5 bg-primary/80 rounded-full"></div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6 pt-3">
                      <div className="w-24 h-4 bg-foreground/60 rounded mx-auto mb-2"></div>
                      <div className="w-16 h-6 bg-foreground/80 rounded mx-auto mb-2"></div>
                      <div className="w-32 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {Array.from({ length: plan.type === 'basic' ? 5 : 6 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            plan.type === 'basic' ? 'bg-primary/60' :
                            plan.type === 'popular' ? 'bg-primary/60' : 'bg-accent/60'
                          }`}></div>
                          <div className="w-24 h-3 bg-muted-foreground/50 rounded"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`w-full h-9 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 group-hover:scale-105 ${
                      plan.type === 'popular' ? 'bg-primary/80 hover:bg-primary hover:shadow-primary/25' :
                      plan.type === 'basic' ? 'bg-transparent border border-primary/30 hover:bg-primary/10 hover:border-primary' : 
                      'bg-transparent border border-accent/40 hover:bg-accent/10 hover:border-accent'
                    }`}></div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </WireframeSection>

        {/* TRANSFORM SECTION */}
        <WireframeSection id="transform" variant="gradient" animation="bounceIn" animationDelay={200}>
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="w-48 h-5 bg-foreground/60 rounded"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="flex items-center gap-3 transition-all duration-300">
                      <div className="w-3 h-3 bg-primary/60 rounded-full flex-shrink-0 transition-all duration-300"></div>
                      <div className="w-36 h-3 bg-muted-foreground/40 rounded transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary/30 rounded-full">
                        <div className="w-12 h-12 bg-primary/60 rounded-lg mx-auto mt-6"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                      {[1, 2, 3].map((index) => (
                        <div key={index} className="w-2 h-2 bg-primary/60 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-5 border border-primary/10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-6 bg-primary/80 rounded mx-auto mb-2"></div>
                    <div className="w-24 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
                  </div>
                  
                  <div className="absolute top-2 right-2 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </WireframeSection>

        {/* CONTACT SECTION */}
        <WireframeSection id="contact" backgroundColor="bg-background" animation="slideInBottom" animationDelay={150}>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-5 border border-primary/20">
                  <div className="text-center space-y-3">
                    <div className="w-36 h-4 bg-primary/70 rounded mx-auto"></div>
                    <div className="w-20 h-6 bg-primary/80 rounded mx-auto"></div>
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-muted-foreground/40 rounded"></div>
                      <div className="w-4/5 h-3 bg-muted-foreground/40 rounded mx-auto"></div>
                    </div>
                    <div className="w-24 h-8 bg-primary/80 rounded mx-auto"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="w-32 h-4 bg-foreground/60 rounded"></div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="relative w-6 h-6 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                          <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="w-28 h-3 bg-primary/60 rounded"></div>
                          <div className="w-36 h-3 bg-muted-foreground/40 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg p-5 border border-muted/30">
                <div className="w-48 h-4 bg-foreground/60 rounded mb-5"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="space-y-2">
                      <div className="w-20 h-3 bg-foreground/50 rounded"></div>
                      <div className="w-full h-8 bg-background/60 rounded border border-muted/40"></div>
                    </div>
                  ))}
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-foreground/50 rounded"></div>
                    <div className="w-full h-16 bg-background/60 rounded border border-muted/40"></div>
                  </div>
                  <div className="w-full h-10 bg-primary/80 rounded mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </WireframeSection>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
