
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnalysisDashboard from '@/components/analysis/AnalysisDashboard';

const Analysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <AnalysisDashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analysis;
