import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { StepIndicator } from "./StepIndicator";

interface ContactSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function ContactSection({ language, selectedTheme, themeColors }: ContactSectionProps) {
  const isArabic = language === 'ar';

  return (
    <section id="contact" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <StepIndicator 
            step={7} 
            title={isArabic ? 'القسم السابع' : 'Section Seven'} 
            className="justify-center"
          />
          
          <Badge className="w-fit mx-auto hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-24 h-3 bg-muted rounded"></div>
          </Badge>
          
          <div className="space-y-2 max-w-3xl mx-auto">
            <div className="w-44 h-8 bg-muted rounded mx-auto"></div>
            <div className="w-32 h-8 bg-muted rounded mx-auto"></div>
            <div className="space-y-2 mt-4">
              <div className="w-full h-4 bg-muted/60 rounded"></div>
              <div className="w-4/5 h-4 bg-muted/60 rounded mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          
          {/* Contact Form */}
          <Card className="p-6 hover:shadow-xl transition-all duration-500">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="w-32 h-5 bg-muted rounded"></div>
                <div className="w-48 h-3 bg-muted/60 rounded"></div>
              </div>
              
              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-muted rounded"></div>
                    <div className="w-full h-10 bg-input-background rounded-lg border border-border"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-muted rounded"></div>
                    <div className="w-full h-10 bg-input-background rounded-lg border border-border"></div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <div className="w-20 h-3 bg-muted rounded"></div>
                  <div className="w-full h-10 bg-input-background rounded-lg border border-border"></div>
                </div>
                
                {/* Phone */}
                <div className="space-y-2">
                  <div className="w-24 h-3 bg-muted rounded"></div>
                  <div className="w-full h-10 bg-input-background rounded-lg border border-border"></div>
                </div>
                
                {/* Subject */}
                <div className="space-y-2">
                  <div className="w-20 h-3 bg-muted rounded"></div>
                  <div className="w-full h-10 bg-input-background rounded-lg border border-border"></div>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <div className="w-16 h-3 bg-muted rounded"></div>
                  <div className="w-full h-32 bg-input-background rounded-lg border border-border"></div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full h-12 hover:scale-105 transition-all duration-300 cursor-pointer bg-primary hover:bg-primary/90"
                >
                  <div className="w-20 h-4 bg-primary-foreground/80 rounded"></div>
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            
            {/* Contact Info Cards */}
            {[1, 2, 3, 4].map((info) => (
              <Card key={info} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-lg group-hover:scale-110 transition-all duration-300"></div>
                  <div className="space-y-1">
                    <div className="w-20 h-4 bg-muted rounded"></div>
                    <div className="w-32 h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="p-4 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-24 h-4 bg-muted rounded"></div>
                <div className="aspect-square bg-muted rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-muted-foreground/20 rounded-full"></div>
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-primary/30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-secondary/30 rounded-full"></div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-4 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="w-28 h-4 bg-muted rounded"></div>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((social) => (
                    <div key={social} className="w-10 h-10 bg-muted rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"></div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Response Card */}
            <Card className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="w-24 h-4 bg-muted rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="w-full h-3 bg-muted/60 rounded"></div>
                  <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
                </div>
                <div className="w-20 h-6 bg-primary/20 rounded"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="w-40 h-5 bg-muted rounded mx-auto mb-2"></div>
            <div className="w-56 h-3 bg-muted/60 rounded mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((faq) => (
              <Card key={faq} className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-48 h-4 bg-muted rounded"></div>
                    <div className="w-4 h-4 bg-muted rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-muted/60 rounded"></div>
                    <div className="w-5/6 h-3 bg-muted/60 rounded"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}