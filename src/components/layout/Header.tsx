
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'glass py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-medium text-foreground">
            BillWise
            <span className="text-primary font-semibold">AI</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname}>Home</NavLink>
            <NavLink to="/upload" current={location.pathname}>Upload</NavLink>
            <NavLink to="/analysis" current={location.pathname}>Analysis</NavLink>
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, current, children }: { to: string; current: string; children: React.ReactNode }) => {
  const isActive = current === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "relative text-foreground transition-colors duration-200",
        isActive ? "font-medium" : "hover:text-primary",
        "after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300",
        isActive && "after:origin-bottom-left after:scale-x-100"
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
