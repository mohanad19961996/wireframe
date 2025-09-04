import React from 'react';
import { useScrollAnimation, scrollAnimations, AnimationType } from './useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function AnimatedSection({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  staggerChildren = false,
  staggerDelay = 100
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });
  const animationConfig = scrollAnimations[animation];

  if (staggerChildren) {
    return (
      <div 
        ref={ref}
        className={`${animationConfig.transition} ${className} ${
          isVisible ? animationConfig.animate : animationConfig.initial
        }`}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`${animationConfig.transition} ${
              isVisible ? animationConfig.animate : animationConfig.initial
            }`}
            style={{
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className={`${animationConfig.transition} ${className} ${
        isVisible ? animationConfig.animate : animationConfig.initial
      }`}
    >
      {children}
    </div>
  );
}

// Individual animation components for more granular control
export function FadeInUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInUp" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function FadeInLeft({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInLeft" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function FadeInRight({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInRight" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function ScaleIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="scaleIn" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function BounceIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="bounceIn" delay={delay} className={className}>{children}</AnimatedSection>;
}