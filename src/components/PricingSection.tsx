import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { StepIndicator } from "./StepIndicator";

interface PricingSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function PricingSection({ language, selectedTheme, themeColors }: PricingSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="pricing" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <StepIndicator 
            step={5} 
            title={isArabic ? 'القسم الخامس' : 'Section Five'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-24 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="w-48 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-36 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-4/5 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((index) => (
            <Card 
              key={index} 
              className={`p-6 relative hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                index === 2 ? 'border-2 border-primary/50 scale-105' : 'hover:border-primary/20'
              }`}
            >
              {/* Popular Badge */}
              {index === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <div className="w-16 h-3 bg-white/80 rounded"></div>
                  </Badge>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-muted rounded-lg mx-auto"></div>
                  <div className="w-20 h-5 bg-muted rounded mx-auto"></div>
                  <div className="w-32 h-3 bg-muted/60 rounded mx-auto"></div>
                </div>

                {/* Price */}
                <div className="text-center space-y-1">
                  <div className="w-16 h-10 bg-primary/20 rounded mx-auto"></div>
                  <div className="w-12 h-3 bg-muted/60 rounded mx-auto"></div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500/20 rounded-full flex-shrink-0"></div>
                      <div className="w-32 h-3 bg-muted/60 rounded flex-1"></div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full h-12 hover:scale-105 transition-all duration-300 cursor-pointer ${
                    index === 2 ? 'bg-primary hover:bg-primary/90' : ''
                  }`}
                  variant={index === 2 ? 'default' : 'outline'}
                >
                  <div className="w-20 h-4 bg-current/20 rounded"></div>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="p-6 hover:shadow-xl transition-all duration-500">
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-32 h-5 bg-muted rounded mx-auto mb-2"></div>
              <div className="w-48 h-3 bg-muted/60 rounded mx-auto"></div>
            </div>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-muted/20 rounded-lg">
              <div className="w-20 h-4 bg-muted rounded"></div>
              {[1, 2, 3].map((col) => (
                <div key={col} className="text-center">
                  <div className="w-16 h-4 bg-muted rounded mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="grid grid-cols-4 gap-4 p-4 hover:bg-muted/10 rounded-lg transition-all duration-300">
                <div className="w-24 h-3 bg-muted/60 rounded"></div>
                {[1, 2, 3].map((col) => (
                  <div key={col} className="text-center">
                    <div className="w-4 h-4 bg-green-500/20 rounded-full mx-auto"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="w-8 h-8 bg-muted rounded-lg mx-auto"></div>
              <div className="space-y-2">
                <div className="w-40 h-5 bg-muted rounded mx-auto"></div>
                <div className="w-56 h-3 bg-muted/60 rounded mx-auto"></div>
              </div>
              <div className="flex justify-center gap-4">
                <Button className="h-10 px-6">
                  <div className="w-16 h-4 bg-primary-foreground/80 rounded"></div>
                </Button>
                <Button variant="outline" className="h-10 px-6">
                  <div className="w-12 h-4 bg-muted rounded"></div>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}