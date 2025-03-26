
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'scale' | 'glow' | 'tilt' | 'float' | 'none';
  animation?: 'fade-in' | 'scale-in' | 'slide-up' | 'rotate-in' | 'blur-in' | 'none';
  gradient?: boolean;
}

const GlassCard = ({
  children,
  className,
  hoverEffect = 'none',
  animation = 'none',
  gradient = false,
  ...props
}: GlassCardProps) => {
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'scale-in':
        return 'animate-scale-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'rotate-in':
        return 'animate-rotate-in';
      case 'blur-in':
        return 'animate-blur-in';
      default:
        return '';
    }
  };

  const getHoverEffectClass = () => {
    switch (hoverEffect) {
      case 'scale':
        return 'hover:scale-[1.02] transition-transform duration-300';
      case 'glow':
        return 'hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow duration-300';
      case 'tilt':
        return 'hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)] transition-transform duration-300';
      case 'float':
        return 'hover:translate-y-[-8px] transition-transform duration-300';
      default:
        return '';
    }
  };

  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 shadow-lg transition-all duration-300',
        gradient && 'bg-gradient-vibrant',
        getHoverEffectClass(),
        getAnimationClass(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
