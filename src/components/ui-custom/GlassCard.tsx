
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animation?: 'fade-in' | 'scale-in' | 'slide-up' | 'none';
}

const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  animation = 'none',
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
      default:
        return '';
    }
  };

  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 shadow-lg transition-all duration-300',
        hoverEffect && 'hover:shadow-xl hover:scale-[1.01]',
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
