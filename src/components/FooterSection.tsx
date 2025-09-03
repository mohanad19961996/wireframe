import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface FooterSectionProps {
  language: 'ar' | 'en';
  selectedTheme: string;
  themeColors: any;
}

export function FooterSection({ language, selectedTheme, themeColors }: FooterSectionProps) {
  const isArabic = language === 'ar';

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg"></div>
              <div className="w-20 h-4 bg-muted rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-muted/60 rounded"></div>
              <div className="w-5/6 h-3 bg-muted/60 rounded"></div>
              <div className="w-4/5 h-3 bg-muted/60 rounded"></div>
            </div>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((social) => (
                <div key={social} className="w-8 h-8 bg-muted rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"></div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {[1, 2, 3].map((section) => (
            <div key={section} className="space-y-4">
              <div className="w-24 h-4 bg-muted rounded"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((link) => (
                  <div key={link} className="w-20 h-3 bg-muted/60 rounded hover:bg-muted rounded transition-all duration-300 cursor-pointer"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
          <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-center">
            <div className="space-y-2">
              <div className="w-32 h-5 bg-muted rounded"></div>
              <div className="w-48 h-3 bg-muted/60 rounded"></div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-input-background rounded-lg border border-border"></div>
              <Button className="h-10 px-6">
                <div className="w-12 h-4 bg-primary-foreground/80 rounded"></div>
              </Button>
            </div>
          </div>
        </Card>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <div className="w-40 h-3 bg-muted/60 rounded"></div>
          <div className="flex gap-6">
            {[1, 2, 3].map((link) => (
              <div key={link} className="w-16 h-3 bg-muted/60 rounded cursor-pointer hover:bg-muted transition-all duration-300"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}