import { ReactNode, useState } from 'react';
import { Card } from './ui/card';

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  height?: string;
}

export function FlipCard({ frontContent, backContent, className = '', height = 'h-80' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flip-card-container ${height} w-full ${className}`}>
      <div 
        className={`flip-card-inner w-full h-full transition-transform duration-700 ease-out cursor-pointer ${
          isFlipped ? 'flipped' : ''
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front Side */}
        <div className="flip-card-front">
          <Card className="w-full h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            {frontContent}
          </Card>
        </div>
        
        {/* Back Side */}
        <div className="flip-card-back">
          <Card className="w-full h-full overflow-hidden shadow-xl border-2 border-primary/30 bg-gradient-to-br from-background to-primary/5">
            {backContent}
          </Card>
        </div>
      </div>
    </div>
  );
}