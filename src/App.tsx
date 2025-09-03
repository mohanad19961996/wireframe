import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

import { ProblemSection } from "./components/ProblemSection";
import { StatisticsSection } from "./components/StatisticsSection";
import { ServicesSection } from "./components/ServicesSection";

import { PricingSection } from "./components/PricingSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { ScrollButtons } from "./components/ScrollButtons";

export default function App() {
  const [language, setLanguage] = useState<'ar' | 'en'>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('blue');

  const themeColors = {
    default: { primary: '#030213', name: language === 'ar' ? 'افتراضي' : 'Default' },
    blue: { primary: '#2563eb', name: language === 'ar' ? 'أزرق' : 'Blue' },
    emerald: { primary: '#059669', name: language === 'ar' ? 'زمردي' : 'Emerald' },
    purple: { primary: '#7c3aed', name: language === 'ar' ? 'بنفسجي' : 'Purple' },
    orange: { primary: '#ea580c', name: language === 'ar' ? 'برتقالي' : 'Orange' },
    rose: { primary: '#e11d48', name: language === 'ar' ? 'وردي' : 'Rose' }
  };

  // Apply theme changes
  React.useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    const themeColor = themeColors[selectedTheme as keyof typeof themeColors];
    root.style.setProperty('--primary', themeColor.primary);
  }, [darkMode, selectedTheme, themeColors]);

  const appProps = {
    language,
    setLanguage,
    darkMode,
    setDarkMode,
    selectedTheme,
    setSelectedTheme,
    themeColors
  };

  const isArabic = language === 'ar';

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Header {...appProps} />
      
      <main>
        <HeroSection {...appProps} />
        <ProblemSection {...appProps} />
        <StatisticsSection {...appProps} />
        <ServicesSection {...appProps} />

        <PricingSection {...appProps} />
        <PortfolioSection {...appProps} />
        <ContactSection {...appProps} />
      </main>
      
      <FooterSection {...appProps} />
      <ScrollButtons {...appProps} />
    </div>
  );
}