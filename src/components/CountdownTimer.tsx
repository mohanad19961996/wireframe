import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  language: 'ar' | 'en';
  title?: string;
  className?: string;
}

export function CountdownTimer({ targetDate, language, title, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const isArabic = language === 'ar';

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const defaultTitle = isArabic ? 'العرض لفترة محدودة' : 'Limited Time Offer';

  return (
    <Card className={`p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="text-center space-y-3">
        
        {/* Header */}
        {title && (
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{title || defaultTitle}</span>
          </div>
        )}

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
          {[
            { value: timeLeft.days, label: isArabic ? 'يوم' : 'Days' },
            { value: timeLeft.hours, label: isArabic ? 'ساعة' : 'Hours' },
            { value: timeLeft.minutes, label: isArabic ? 'دقيقة' : 'Min' },
            { value: timeLeft.seconds, label: isArabic ? 'ثانية' : 'Sec' }
          ].map((unit, index) => (
            <div key={index} className="bg-background rounded-lg p-2 shadow-sm border border-border/50 hover:scale-105 transition-all duration-200 group">
              <div className="text-center space-y-1">
                {/* Number Display */}
                <div className="text-lg font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                {/* Label */}
                <div className="text-xs text-muted-foreground font-medium">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Card>
  );
}