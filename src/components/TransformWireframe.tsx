import { useState } from "react";

export default function TransformWireframe() {
  const [activeStep, setActiveStep] = useState(0);
  const transformationSteps = [
    { phase: "before", color: "destructive" },
    { phase: "during", color: "accent" },
    { phase: "after", color: "primary" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Transformation Timeline with Step Index */}
      <div className="space-y-8">
        <div className="w-48 h-5 bg-foreground/60 rounded"></div>
        
        {/* Step Navigator */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-4 bg-background/60 backdrop-blur-sm rounded-full p-2 border border-muted/30">
            {transformationSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? `bg-${step.color}/20 border-2 border-${step.color}/40` 
                    : 'bg-muted/20 border border-muted/40 hover:bg-muted/30'
                }`}
              >
                <div className={`w-6 h-6 rounded-full mx-auto transition-all duration-300 ${
                  activeStep === index 
                    ? `bg-${step.color}/60` 
                    : 'bg-muted-foreground/40'
                }`}></div>
                
                {/* Step Number */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className={`w-4 h-4 rounded-full text-xs flex items-center justify-center ${
                    activeStep === index 
                      ? `bg-${step.color}/60` 
                      : 'bg-muted-foreground/40'
                  }`}>
                    <div className="w-1.5 h-1.5 bg-background rounded-full"></div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < transformationSteps.length - 1 && (
                  <div className={`absolute top-1/2 left-full w-4 h-0.5 transition-all duration-300 ${
                    activeStep > index ? 'bg-primary/60' : 'bg-muted/40'
                  }`}></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Transformation Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Changes based on active step */}
          <div className="space-y-4">
            <div className="text-center">
              <div className={`w-16 h-5 rounded mx-auto transition-all duration-300 ${
                activeStep === 0 ? 'bg-destructive/70' :
                activeStep === 1 ? 'bg-accent/70' : 'bg-primary/70'
              }`}></div>
            </div>
            
            <div className={`rounded-xl p-6 border transition-all duration-300 ${
              activeStep === 0 ? 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20' :
              activeStep === 1 ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20' :
              'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'
            }`}>
              <div className="space-y-4 text-center">
                <div className={`w-24 h-4 rounded mx-auto transition-all duration-300 ${
                  activeStep === 0 ? 'bg-destructive/60' :
                  activeStep === 1 ? 'bg-accent/60' : 'bg-primary/60'
                }`}></div>
                <div className="space-y-2">
                  <div className={`rounded mx-auto transition-all duration-300 ${
                    activeStep === 0 ? 'w-6 h-6 bg-destructive/80' :
                    activeStep === 1 ? 'w-8 h-7 bg-accent/80' : 'w-10 h-8 bg-primary/80'
                  }`}></div>
                  <div className="w-24 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
                </div>
                <div className="space-y-2">
                  <div className={`rounded mx-auto transition-all duration-300 ${
                    activeStep === 0 ? 'w-8 h-6 bg-destructive/80' :
                    activeStep === 1 ? 'w-10 h-6 bg-accent/80' : 'w-14 h-7 bg-primary/80'
                  }`}></div>
                  <div className="w-20 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="flex items-center gap-3 transition-all duration-300">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 transition-all duration-300 ${
                    activeStep === 0 ? 'bg-destructive/40' :
                    activeStep === 1 ? 'bg-accent/60' : 'bg-primary/60'
                  }`}></div>
                  <div className={`h-3 bg-muted-foreground/40 rounded transition-all duration-300 ${
                    activeStep === 0 ? 'w-28' :
                    activeStep === 1 ? 'w-32' : 'w-36'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Visual Progress */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl relative overflow-hidden">
              <div className="absolute inset-3 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                {/* Animated progress visualization */}
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className={`rounded-full transition-all duration-500 ${
                    activeStep === 0 ? 'w-16 h-16 bg-destructive/20' :
                    activeStep === 1 ? 'w-20 h-20 bg-accent/30' : 'w-24 h-24 bg-primary/30'
                  }`}>
                    <div className={`rounded-lg mx-auto mt-4 transition-all duration-500 ${
                      activeStep === 0 ? 'w-8 h-8 bg-destructive/60' :
                      activeStep === 1 ? 'w-10 h-10 bg-accent/60' : 'w-12 h-12 bg-primary/60'
                    }`}></div>
                  </div>
                </div>
                
                {/* Progress indicators */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                  {transformationSteps.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index <= activeStep ? 'bg-primary/60' : 'bg-muted/40'
                    }`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success metrics with animated counters */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-background/60 backdrop-blur-sm rounded-lg p-5 border border-primary/10 text-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className={`rounded mx-auto mb-2 transition-all duration-300 ${
                index === 1 ? 'w-14 h-7 bg-primary/80' :
                index === 2 ? 'w-12 h-6 bg-primary/80' : 'w-16 h-6 bg-primary/80'
              }`}></div>
              <div className="w-24 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
            </div>
            
            {/* Metric index */}
            <div className="absolute top-2 right-2 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}