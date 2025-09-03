import React from "react";
import { Badge } from "./ui/badge";

interface StepIndicatorProps {
  step: number;
  title: string;
  className?: string;
}

export function StepIndicator({ step, title, className = "" }: StepIndicatorProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Badge 
        variant="outline" 
        className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-primary/10 border-primary/30 hover:scale-110 transition-all duration-300"
      >
        <span className="text-primary font-medium">{step}</span>
      </Badge>
      <span className="text-sm font-medium text-muted-foreground hover:text-primary/80 transition-all duration-300">
        {title}
      </span>
    </div>
  );
}