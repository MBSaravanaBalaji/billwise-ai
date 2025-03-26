
import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'pulse' | 'scale' | 'glow' | 'shake' | 'none';
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
      case 'glow':
        return 'transition-all duration-300 hover:animate-pulse-glow';
      case 'shake':
        return 'hover:animate-[wiggle_0.3s_ease-in-out_infinite]';
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
      {props.asChild ? (
        children
      ) : (
        <>
          <span className="relative z-10">{children}</span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 via-secondary/60 to-accent/80 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </>
      )}
    </Button>
  );
};

export default AnimatedButton;
