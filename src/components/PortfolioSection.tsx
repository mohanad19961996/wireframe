import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { StepIndicator } from "./StepIndicator";

interface PortfolioSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function PortfolioSection({ language, selectedTheme, themeColors }: PortfolioSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="portfolio" className="py-12 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <StepIndicator 
            step={6} 
            title={isArabic ? 'القسم السادس' : 'Section Six'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-28 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="w-52 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-36 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-4/5 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted/30 rounded-lg">
            {[1, 2, 3, 4].map((tab) => (
              <Button
                key={tab}
                variant={tab === 1 ? "default" : "ghost"}
                size="sm"
                className="h-8 px-4 cursor-pointer"
              >
                <div className="w-16 h-3 bg-current/20 rounded"></div>
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer">
              {/* Project Image */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white/90 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/90 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <div className="w-32 h-4 bg-muted rounded"></div>
                  <div className="w-full h-3 bg-muted/60 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((tag) => (
                    <div key={tag} className="w-12 h-5 bg-muted/60 rounded-full"></div>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-muted rounded"></div>
                      <div className="w-6 h-3 bg-muted/60 rounded"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-muted rounded"></div>
                      <div className="w-6 h-3 bg-muted/60 rounded"></div>
                    </div>
                  </div>
                  <div className="w-12 h-3 bg-primary/20 rounded"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <Button variant="outline" size="lg" className="h-12 px-8 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-20 h-4 bg-muted rounded"></div>
          </Button>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((testimonial) => (
            <Card key={testimonial} className="p-6 hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <div className="space-y-4">
                {/* Quote */}
                <div className="space-y-2">
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-muted/60 rounded"></div>
                    <div className="w-5/6 h-3 bg-muted/60 rounded"></div>
                    <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 bg-muted rounded-full"></div>
                  <div className="space-y-1">
                    <div className="w-24 h-4 bg-muted rounded"></div>
                    <div className="w-20 h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-yellow-400/30 rounded"></div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 text-center">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="w-8 h-8 bg-muted rounded-lg mx-auto"></div>
              <div className="space-y-2">
                <div className="w-48 h-5 bg-muted rounded mx-auto"></div>
                <div className="w-64 h-3 bg-muted/60 rounded mx-auto"></div>
              </div>
              <Button size="lg" className="h-12 px-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-24 h-4 bg-primary-foreground/80 rounded"></div>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}