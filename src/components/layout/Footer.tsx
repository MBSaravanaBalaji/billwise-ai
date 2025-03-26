
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background border-t border-border mt-auto">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-medium flex items-center mb-4">
              BillWise
              <span className="text-primary font-semibold">AI</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Analyze your utility bills, gain insights, and save money with our AI-powered bill analysis.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/upload" className="text-muted-foreground hover:text-primary transition-colors">Upload Bill</Link></li>
              <li><Link to="/analysis" className="text-muted-foreground hover:text-primary transition-colors">Analysis</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Have questions?<br />
              <a href="mailto:contact@billwiseai.com" className="text-primary hover:underline">contact@billwiseai.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} BillWiseAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
