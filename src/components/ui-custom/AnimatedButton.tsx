
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  animation?: 'pulse' | 'scale' | 'none';
}

const AnimatedButton = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  animation = 'scale',
  ...props
}: AnimatedButtonProps) => {
  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'hover:animate-pulse-slow';
      case 'scale':
        return 'transition-transform duration-300 hover:scale-105';
      default:
        return '';
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'relative overflow-hidden transition-all duration-300 ease-in-out',
        getAnimationClass(),
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </Button>
  );
};

export default AnimatedButton;
