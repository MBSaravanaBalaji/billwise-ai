
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BillUploadForm from '@/components/upload/BillUploadForm';

const Upload = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Utility Bill</h1>
            <p className="text-muted-foreground">
              Upload your water, electricity, or gas bill to get personalized analysis and saving recommendations
            </p>
          </div>
          
          <BillUploadForm />
          
          <div className="mt-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">How We Analyze Your Bill</h2>
              <p className="text-muted-foreground mb-8">
                Our advanced AI system extracts key information from your utility bills to provide meaningful insights
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-border rounded-lg bg-white/50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Usage Patterns</h3>
                  <p className="text-muted-foreground text-sm">
                    We analyze your energy usage patterns to identify peak consumption times and potential savings.
                  </p>
                </div>
                
                <div className="p-6 border border-border rounded-lg bg-white/50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Cost Breakdown</h3>
                  <p className="text-muted-foreground text-sm">
                    Our AI breaks down your bill to identify where your money is going and highlight potential overcharges.
                  </p>
                </div>
                
                <div className="p-6 border border-border rounded-lg bg-white/50">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Comparative Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    See how your usage compares to similar homes in your area and track changes over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upload;
