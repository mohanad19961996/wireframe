import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Globe, Menu, Moon, Sun, Palette, Check } from "lucide-react";

interface HeaderProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  themeColors: any;
}

export function Header({ 
  language, 
  setLanguage, 
  darkMode, 
  setDarkMode, 
  selectedTheme, 
  setSelectedTheme, 
  themeColors 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  
  const isArabic = language === 'ar';

  const navItems = [
    { id: 'hero', en: 'Section 1', ar: 'القسم 1' },
    { id: 'problem', en: 'Section 2', ar: 'القسم 2' },
    { id: 'statistics', en: 'Section 3', ar: 'القسم 3' },
    { id: 'services', en: 'Section 4', ar: 'القسم 4' },
    { id: 'pricing', en: 'Section 5', ar: 'القسم 5' },
    { id: 'portfolio', en: 'Section 6', ar: 'القسم 6' },
    { id: 'contact', en: 'Section 7', ar: 'القسم 7' }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const selectTheme = (theme: string) => {
    setSelectedTheme(theme);
    setThemeMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className={`flex items-center cursor-pointer group ${isArabic ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
            </div>
            <div className="space-y-1 hidden xs:block">
              <div className="w-20 h-3 bg-muted rounded"></div>
              <div className="w-16 h-2 bg-muted/60 rounded hidden sm:block"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${isArabic ? 'space-x-reverse space-x-4 lg:space-x-6' : 'space-x-4 lg:space-x-6'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 transition-all duration-300 hover:text-primary hover:scale-105 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                <div className="w-16 h-3 bg-muted rounded"></div>
                {activeSection === item.id && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300"></div>
                  </>
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            {/* Theme Color Picker - Hidden on small screens */}
            <div className="relative hidden sm:block">
              <Button 
                variant="ghost" 
                size="sm"
                className="h-8 w-8 p-0 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              >
                <Palette className="w-4 h-4" />
              </Button>
              
              {themeMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setThemeMenuOpen(false)}
                  ></div>
                  <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 min-w-56 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="space-y-3">
                      <h6 className="font-medium">
                        {isArabic ? "اختر اللون" : "Choose Color"}
                      </h6>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(themeColors).map(([key, theme]) => (
                          <button
                            key={key}
                            onClick={() => selectTheme(key)}
                            className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-5 h-5 rounded-full border-2 border-border transition-all duration-200 group-hover:scale-110" 
                                style={{ backgroundColor: theme.primary }}
                              ></div>
                              <span className="text-sm">
                                {theme.name}
                              </span>
                            </div>
                            {selectedTheme === key && (
                              <Check className="w-4 h-4 text-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Dark Mode Toggle - Hidden on smallest screens */}
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden xs:flex h-8 w-8 p-0 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm"
              className="h-8 px-2 sm:px-3 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              {language === 'ar' ? 'EN' : 'عر'}
            </Button>

            {/* CTA Button */}
            <Button 
              size="sm" 
              className="hidden lg:flex h-8 px-4 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer bg-primary hover:bg-primary/90"
            >
              <div className="w-16 h-3 bg-primary-foreground/80 rounded"></div>
            </Button>
            
            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden h-8 w-8 p-0 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <div 
              className="fixed inset-0 bg-black/20 z-40 lg:hidden" 
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            <div className="lg:hidden py-4 border-t border-border/30 transition-all duration-300 relative z-50 bg-background">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground'
                  }`}
                >
                  <div className="w-16 h-3 bg-muted rounded"></div>
                </button>
              ))}
              
              {/* Mobile Controls */}
              <div className="pt-3 border-t border-border/30 space-y-3">
                
                {/* Dark Mode Toggle - Mobile Only */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left hover:text-primary hover:bg-primary/5 rounded transition-all duration-300 cursor-pointer xs:hidden"
                >
                  <div className="w-20 h-3 bg-muted rounded"></div>
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Theme Selector - Mobile Only */}
                <div className="sm:hidden">
                  <div className="px-3 py-2 text-muted-foreground text-sm">
                    <div className="w-20 h-3 bg-muted rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 px-3">
                    {Object.entries(themeColors).map(([key, theme]) => (
                      <button
                        key={key}
                        onClick={() => selectTheme(key)}
                        className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-muted/50 transition-all duration-200 cursor-pointer group"
                      >
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-border transition-all duration-200 group-hover:scale-110" 
                          style={{ backgroundColor: theme.primary }}
                        >
                          {selectedTheme === key && (
                            <div className="w-full h-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {theme.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button size="sm" className="w-full mt-3 h-9 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-3 bg-primary-foreground/80 rounded"></div>
              </Button>
            </nav>
          </div>
          </>
        )}
      </div>
    </header>
  );
}