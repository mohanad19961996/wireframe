import { useState } from "react";

export default function ContactWireframe() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Step Index Progress */}
      <div className="space-y-6">
        <div className="w-40 h-5 bg-foreground/60 rounded"></div>
        
        <div className="relative">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber <= currentStep;
              const isCompleted = stepNumber < currentStep;
              
              return (
                <div key={stepNumber} className="flex items-center">
                  {/* Step Circle */}
                  <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-md ${
                    isCompleted 
                      ? 'bg-primary border-primary hover:shadow-primary/25' 
                      : isActive 
                      ? 'bg-primary/20 border-primary hover:bg-primary/30 hover:shadow-primary/20' 
                      : 'bg-background border-muted hover:border-primary/50'
                  }`}>
                    {isCompleted ? (
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                    )}
                    
                    {/* Step Number */}
                    <div className={`absolute -top-8 text-center ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                      <div className={`w-6 h-3 rounded mx-auto ${isActive ? 'bg-primary/60' : 'bg-muted-foreground/40'}`}></div>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < totalSteps - 1 && (
                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      stepNumber < currentStep ? 'bg-primary' : 'bg-muted'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Step Content */}
          <div className="bg-gradient-to-br from-background/60 to-muted/20 rounded-xl p-6 border border-muted/30 min-h-[300px]">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="w-48 h-5 bg-foreground/70 rounded"></div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-20 h-3 bg-foreground/50 rounded"></div>
                    <div className="w-full h-8 bg-background/60 rounded border border-muted/40"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-3 bg-foreground/50 rounded"></div>
                    <div className="w-full h-8 bg-background/60 rounded border border-muted/40"></div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="w-56 h-5 bg-foreground/70 rounded"></div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-background/40 rounded-lg border border-muted/20">
                      <div className="w-4 h-4 bg-primary/40 rounded"></div>
                      <div className="w-32 h-3 bg-foreground/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="w-44 h-5 bg-foreground/70 rounded"></div>
                <div className="space-y-3">
                  <div className="w-24 h-3 bg-foreground/50 rounded"></div>
                  <div className="w-full h-20 bg-background/60 rounded border border-muted/40"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-foreground/50 rounded"></div>
                    <div className="w-full h-8 bg-background/60 rounded border border-muted/40"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-20 h-3 bg-foreground/50 rounded"></div>
                    <div className="w-full h-8 bg-background/60 rounded border border-muted/40"></div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/60 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-40 h-5 bg-foreground/70 rounded mx-auto"></div>
                  <div className="w-56 h-3 bg-muted-foreground/50 rounded mx-auto"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-3 bg-muted-foreground/40 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted-foreground/40 rounded mx-auto"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`w-20 h-10 rounded-lg border transition-all ${
                currentStep === 1 
                  ? 'bg-muted/30 border-muted cursor-not-allowed opacity-50' 
                  : 'bg-background border-primary/30 hover:bg-primary/5'
              }`}
            >
              <div className="w-12 h-3 bg-current/50 rounded mx-auto"></div>
            </button>
            
            <button 
              onClick={nextStep}
              disabled={currentStep === totalSteps}
              className={`w-20 h-10 rounded-lg transition-all ${
                currentStep === totalSteps 
                  ? 'bg-primary/50 cursor-not-allowed opacity-50' 
                  : 'bg-primary/80 hover:bg-primary'
              }`}
            >
              <div className="w-12 h-3 bg-primary-foreground/70 rounded mx-auto"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Traditional Contact Form */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Special offer */}
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
          
          {/* Process steps with step indicators */}
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
        
        {/* Contact form */}
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
  );
}