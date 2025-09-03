import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { StepIndicator } from "./StepIndicator";

interface ProblemSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function ProblemSection({ language, selectedTheme, themeColors }: ProblemSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="problem" className="py-12 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <StepIndicator 
            step={2} 
            title={isArabic ? 'القسم الثاني' : 'Section Two'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="w-64 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-48 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-5/6 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
          
          {/* Left Side - Problem List */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-500 cursor-pointer group border border-transparent hover:border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-muted rounded-lg mt-1 group-hover:scale-110 transition-all duration-300"></div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-1">
                      <div className="w-32 h-4 bg-muted rounded"></div>
                      <div className="space-y-1">
                        <div className="w-full h-3 bg-muted/60 rounded"></div>
                        <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Problem Metrics */}
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-4 bg-muted rounded"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-10 h-4 bg-muted/60 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side - Visual Impact */}
          <div className="space-y-6">
            
            {/* Main Impact Chart */}
            <Card className="p-6 bg-gradient-to-br from-destructive/5 to-orange-500/5 border border-destructive/20 hover:shadow-xl transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-5 bg-muted rounded"></div>
                  <div className="w-8 h-8 bg-muted rounded-lg"></div>
                </div>
                
                {/* Chart Area */}
                <div className="h-40 bg-muted/30 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-around p-4">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div 
                        key={index} 
                        className="bg-destructive/20 rounded-t animate-pulse w-6" 
                        style={{ height: `${Math.random() * 80 + 20}%`, animationDelay: `${index * 300}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-1">
                    <div className="w-12 h-6 bg-destructive/20 rounded mx-auto"></div>
                    <div className="w-16 h-3 bg-muted/60 rounded mx-auto"></div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="w-12 h-6 bg-destructive/20 rounded mx-auto"></div>
                    <div className="w-16 h-3 bg-muted/60 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Supporting Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="space-y-3">
                    <div className="w-8 h-8 bg-muted rounded-lg"></div>
                    <div className="space-y-1">
                      <div className="w-16 h-4 bg-muted rounded"></div>
                      <div className="w-full h-3 bg-muted/60 rounded"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-muted rounded"></div>
                  <div className="w-48 h-3 bg-muted/60 rounded"></div>
                </div>
                <div className="w-20 h-8 bg-primary/20 rounded"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}