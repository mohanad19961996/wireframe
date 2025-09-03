import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { StepIndicator } from "./StepIndicator";

interface StatisticsSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function StatisticsSection({ language, selectedTheme, themeColors }: StatisticsSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="statistics" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <StepIndicator 
            step={3} 
            title={isArabic ? 'القسم الثالث' : 'Section Three'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-24 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="w-56 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-40 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-4/5 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-muted rounded-xl mx-auto group-hover:scale-110 transition-all duration-300"></div>
                <div className="space-y-2">
                  <div className="w-16 h-8 bg-muted rounded mx-auto"></div>
                  <div className="w-20 h-3 bg-muted/60 rounded mx-auto"></div>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary/30 rounded-full transition-all duration-1000 animate-pulse"
                    style={{ width: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          
          {/* Left Side - Chart */}
          <Card className="p-6 hover:shadow-xl transition-all duration-500">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="w-28 h-5 bg-muted rounded"></div>
                  <div className="w-20 h-3 bg-muted/60 rounded"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-6 bg-muted rounded"></div>
                  <div className="w-8 h-6 bg-muted/60 rounded"></div>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="h-64 bg-muted/20 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 p-4">
                  {/* Grid Lines */}
                  <div className="h-full w-full relative">
                    {[1, 2, 3, 4, 5].map((line) => (
                      <div key={line} className="absolute w-full border-t border-muted/40" style={{ top: `${line * 20}%` }}></div>
                    ))}
                    
                    {/* Data Visualization */}
                    <div className="absolute inset-0 flex items-end justify-around">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
                        <div key={bar} className="flex flex-col items-center gap-2">
                          <div 
                            className="bg-primary/30 rounded-t w-6 animate-pulse transition-all duration-1000"
                            style={{ height: `${Math.random() * 80 + 20}%`, animationDelay: `${bar * 200}ms` }}
                          ></div>
                          <div className="w-4 h-2 bg-muted/60 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-6">
                {[1, 2, 3].map((legend) => (
                  <div key={legend} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
                    <div className="w-12 h-3 bg-muted/60 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right Side - Key Metrics */}
          <div className="space-y-6">
            
            {/* Metric Cards */}
            {[1, 2, 3].map((index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-lg group-hover:scale-110 transition-all duration-300"></div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-4 bg-muted rounded"></div>
                      <div className="w-8 h-4 bg-primary/20 rounded"></div>
                    </div>
                    <div className="w-full h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Summary Card */}
            <Card className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-xl transition-all duration-500 cursor-pointer">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="w-20 h-4 bg-muted rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-3 bg-muted/60 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                </div>
                <div className="w-24 h-6 bg-primary/20 rounded"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}