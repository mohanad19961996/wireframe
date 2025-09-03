import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface HeroSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function HeroSection({ language, selectedTheme, themeColors }: HeroSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="hero" className="pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Badge */}
        <div className="text-center mb-8">
          <Badge className="mb-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-24 h-3 bg-muted rounded"></div>
          </Badge>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Main Headlines */}
              <div className="space-y-2">
                <div className="w-80 h-8 bg-muted rounded"></div>
                <div className="w-72 h-8 bg-muted rounded"></div>
              </div>
              
              {/* Description */}
              <div className="space-y-2 max-w-lg">
                <div className="w-full h-4 bg-muted/60 rounded"></div>
                <div className="w-5/6 h-4 bg-muted/60 rounded"></div>
                <div className="w-4/5 h-4 bg-muted/60 rounded"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isArabic ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className="h-12 px-8 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer bg-primary hover:bg-primary/90"
              >
                <div className="w-20 h-4 bg-primary-foreground/80 rounded"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-6 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-4 bg-muted rounded"></div>
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="text-center space-y-1">
                  <div className="w-12 h-6 bg-muted rounded mx-auto"></div>
                  <div className="w-16 h-3 bg-muted/60 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Main Visual Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-2xl transition-all duration-700 cursor-pointer group">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="w-20 h-4 bg-muted rounded"></div>
                    <div className="w-16 h-3 bg-muted/60 rounded"></div>
                  </div>
                  <div className="w-8 h-8 bg-muted rounded-lg"></div>
                </div>

                {/* Main Visual Area */}
                <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                  <div className="absolute inset-4">
                    <div className="grid grid-cols-3 gap-2 h-full">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="bg-muted-foreground/10 rounded animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-16 h-6 bg-muted rounded"></div>
                    <div className="w-14 h-6 bg-muted/60 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-muted rounded"></div>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg mt-1"></div>
                <div className="flex-1 space-y-2">
                  <div className="w-24 h-4 bg-muted rounded"></div>
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-muted/60 rounded"></div>
                    <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}