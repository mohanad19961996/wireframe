import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { StepIndicator } from "./StepIndicator";
import { FlipCard } from "./FlipCard";

interface ServicesSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function ServicesSection({ language, selectedTheme, themeColors }: ServicesSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="services" className="py-12 bg-muted/20 overflow-visible">
      <div className="max-w-6xl mx-auto px-8 overflow-visible">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-6">
          <StepIndicator 
            step={4} 
            title={isArabic ? 'القسم الرابع' : 'Section Four'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-28 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-1 max-w-3xl mx-auto">
            <div className="w-64 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-48 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-5/6 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Services Grid - Flip Cards */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flip-card-wrapper">
              <FlipCard
                height="h-80"
                frontContent={
                  <div className="relative h-full flex flex-col">
                    {/* Service Image Placeholder */}
                    <div className="relative h-40 overflow-hidden rounded-t-lg bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      {/* Icon Placeholder */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg bg-white/90 backdrop-blur-sm">
                          <div className="w-5 h-5 bg-muted rounded"></div>
                        </div>
                      </div>
                      {/* Popular Badge */}
                      {index === 2 && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                          <Badge className="px-3 py-1 text-xs shadow-lg text-white bg-primary">
                            <div className="w-16 h-3 bg-white/80 rounded"></div>
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    {/* Front Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-center mb-3">
                        <div className="w-24 h-4 bg-muted rounded mx-auto mb-2"></div>
                        <div className="w-32 h-3 bg-muted/60 rounded mx-auto"></div>
                      </div>

                      <div className="flex items-center justify-center mb-3">
                        <div className="w-16 h-6 bg-primary/20 rounded"></div>
                      </div>

                      <div className="flex items-center justify-center text-xs text-muted-foreground">
                        <div className="w-20 h-3 bg-muted/60 rounded"></div>
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div className="relative h-full flex flex-col p-4">
                    {/* Back Header */}
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-muted mx-auto mb-3"></div>
                      <div className="w-20 h-4 bg-muted rounded mx-auto mb-1"></div>
                      <div className="w-12 h-5 bg-primary/20 rounded mx-auto"></div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 space-y-2 mb-4">
                      <div className="w-24 h-3 bg-muted rounded mb-3"></div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-green-500/20 rounded-full flex-shrink-0 mt-0.5"></div>
                            <div className="w-32 h-3 bg-muted/60 rounded flex-1"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <div className="w-full h-9 bg-primary/20 rounded-lg"></div>
                      <div className="w-full h-8 bg-muted rounded-lg"></div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-6">
          <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-500 cursor-pointer group">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-center">
              
              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-lg"></div>
                  <div className="w-32 h-4 bg-muted rounded"></div>
                </div>
                
                <div className="space-y-1">
                  <div className="w-full h-3 bg-muted/60 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                </div>

                <div className="flex gap-2 pt-2">
                  <div className="w-24 h-8 bg-primary/20 rounded-lg"></div>
                  <div className="w-20 h-8 bg-muted rounded-lg"></div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div 
                        key={idx}
                        className="w-6 h-6 bg-primary/20 rounded-md"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}